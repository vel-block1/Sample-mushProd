import { g as getHourlyAverages, a as getDailyAverage } from "../../../../chunks/calculateAverage.js";
import { doc, collection, query, getDocs, orderBy, onSnapshot } from "firebase/firestore";
import { d as db } from "../../../../chunks/firebase.js";
import { format } from "date-fns";
async function allRemovedBags() {
  const userDocRef = doc(db, "user", "123456");
  const batchCollectionRef = collection(userDocRef, "batch");
  const q = query(batchCollectionRef);
  const querySnapshot = await getDocs(q);
  let totalRemoved = 0;
  querySnapshot.forEach((doc2) => {
    const data = doc2.data();
    if (data.batch_total_removed) {
      totalRemoved += data.batch_total_removed;
    }
  });
  return totalRemoved;
}
async function allHarvestedGrams() {
  const userDocRef = doc(db, "user", "123456");
  const batchCollectionRef = collection(userDocRef, "batch");
  const q = query(batchCollectionRef);
  const querySnapshot = await getDocs(q);
  let totalGrams = 0;
  const promises = [];
  querySnapshot.forEach(async (batchDoc) => {
    const batchHarvestCollectionRef = collection(batchDoc.ref, "batch_harvest");
    const harvestDocsSnapshotPromise = getDocs(batchHarvestCollectionRef);
    promises.push(
      harvestDocsSnapshotPromise.then((harvestDocsSnapshot) => {
        harvestDocsSnapshot.forEach((harvestDoc) => {
          const harvestData = harvestDoc.data();
          if (harvestData && harvestData.grams) {
            totalGrams += harvestData.grams;
          }
        });
      })
    );
  });
  await Promise.all(promises);
  return totalGrams;
}
async function getAllAveTempHumd() {
  return new Promise((resolve, reject) => {
    const userDocRef = doc(db, "user", "123456");
    const bagsRecordCollectionRef = collection(userDocRef, "temp and humid");
    const q = query(bagsRecordCollectionRef, orderBy("date", "desc"));
    onSnapshot(q, (querySnapshot) => {
      let totalTemp = 0;
      let totalHumidity = 0;
      let totalDocuments = 0;
      let date;
      querySnapshot.forEach((doc2) => {
        const data = doc2.data();
        if (data.date && data.date.toDate) {
          data.date = format(data.date.toDate(), "MMMM dd, yyyy");
        }
        data.id = doc2.id;
        date = data.date;
        totalTemp += data[`ave temp`] || 0;
        totalHumidity += data[`ave humidity`] || 0;
        totalDocuments++;
      });
      const aveTemp = totalTemp / totalDocuments;
      const aveHumidity = totalHumidity / totalDocuments;
      resolve({
        date,
        aveTemp,
        aveHumidity
      });
    }, (error) => {
      reject(error);
    });
  });
}
const load = async () => {
  try {
    const hourly = await getHourlyAverages();
  } catch (error) {
  }
  return {
    allDailyAve: getDailyAverage(),
    allTempHumd: getAllAveTempHumd(),
    allHarvest: allHarvestedGrams(),
    allRemove: allRemovedBags()
  };
};
export {
  load
};
