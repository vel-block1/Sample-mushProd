import { d as db } from "./firebase.js";
import { format } from "date-fns";
import { getDatabase, ref, query, onValue } from "firebase/database";
import { Timestamp, collection, addDoc } from "firebase/firestore";
const currentDate = /* @__PURE__ */ new Date();
format(currentDate, "yyyy-MM-dd");
const calculateAverage = (arr) => {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
};
function getHourlyAverages() {
  return new Promise((resolve, reject) => {
    const rdb = getDatabase();
    const dateRef = ref(rdb, `/BETAPEAK/2023-11-20`);
    const queryRef = query(dateRef);
    const hourlyAverages = {};
    onValue(queryRef, (snapshot) => {
      if (snapshot.exists()) {
        const rawData = Object.values(snapshot.val() || []);
        rawData.forEach((item) => {
          const hour = item.Time.split(":")[0];
          if (!hourlyAverages[hour]) {
            hourlyAverages[hour] = [];
          }
          hourlyAverages[hour].push({ Humd: item.Humd, Temp: item.Temp });
        });
        const averagesArray = Object.keys(hourlyAverages).map((hour) => {
          const humidities = hourlyAverages[hour].map((item) => item.Humd);
          const temperatures = hourlyAverages[hour].map((item) => item.Temp);
          return {
            Hour: hour,
            AverageHumidity: calculateAverage(humidities),
            AverageTemperature: calculateAverage(temperatures)
          };
        });
        resolve(averagesArray);
      } else {
        reject(new Error("Data does not exist"));
      }
    });
  });
}
async function getDailyAverage() {
  try {
    const hourlyAverages = await getHourlyAverages();
    const humidities = hourlyAverages.map((hourly) => hourly.AverageHumidity);
    const temperatures = hourlyAverages.map((hourly) => hourly.AverageTemperature);
    const dailyAverageHumidity = calculateAverage(humidities);
    const dailyAverageTemperature = calculateAverage(temperatures);
    const formattedDailyAverageHumidity = parseFloat(dailyAverageHumidity.toFixed(2));
    const formattedDailyAverageTemperature = parseFloat(dailyAverageTemperature.toFixed(2));
    const timestamp = new Timestamp(currentDate.getTime() / 1e3, 0);
    const userDocRef = collection(db, "user", "123456", "temp and humid");
    await addDoc(userDocRef, {
      "ave temp": formattedDailyAverageTemperature,
      "ave humidity": formattedDailyAverageHumidity,
      "date": timestamp
    });
    return {
      AverageHumidity: formattedDailyAverageHumidity,
      AverageTemperature: formattedDailyAverageTemperature,
      Date: timestamp
    };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
  return new Promise((resolve, reject) => {
  });
}
export {
  getDailyAverage as a,
  getHourlyAverages as g
};
