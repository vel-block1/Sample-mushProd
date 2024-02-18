import { o as onDestroy, c as create_ssr_component, h as spread, j as escape_object, b as add_attribute, v as validate_component } from "./ssr.js";
import { Chart as Chart$1, LineController, BarController, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from "chart.js";
import { g as getHourlyAverages } from "./calculateAverage.js";
import { doc } from "firebase/firestore";
import { d as db } from "./firebase.js";
const eventPrefix = /^on/;
const events = [];
Object.keys(globalThis).forEach((key) => {
  if (eventPrefix.test(key)) {
    events.push(key.replace(eventPrefix, ""));
  }
});
function useForwardEvents(getRef) {
  const destructors = [];
  onDestroy(() => {
    while (destructors.length) {
      destructors.pop()();
    }
  });
}
function clean(props2) {
  let { data: data2, type: type2, options: options2, plugins: plugins2, children, $$scope, $$slots, ...rest } = props2;
  return rest;
}
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { data = { datasets: [] } } = $$props;
  let { options = {} } = $$props;
  let { plugins = [] } = $$props;
  let { updateMode = void 0 } = $$props;
  let { chart = null } = $$props;
  let canvasRef;
  let props = clean($$props);
  onDestroy(() => {
    if (chart)
      chart.destroy();
    chart = null;
  });
  useForwardEvents();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0)
    $$bindings.plugins(plugins);
  if ($$props.updateMode === void 0 && $$bindings.updateMode && updateMode !== void 0)
    $$bindings.updateMode(updateMode);
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  return `<canvas${spread([escape_object(props)], {})}${add_attribute("this", canvasRef, 0)}></canvas>`;
});
const Line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart$1.register(LineController);
  let { chart = null } = $$props;
  let props;
  let baseChartRef;
  useForwardEvents();
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    props = $$props;
    $$rendered = `${validate_component(Chart, "Chart").$$render(
      $$result,
      Object.assign({}, { type: "line" }, props, { this: baseChartRef }, { chart }),
      {
        this: ($$value) => {
          baseChartRef = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Bar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart$1.register(BarController);
  let { chart = null } = $$props;
  let props;
  let baseChartRef;
  useForwardEvents();
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    props = $$props;
    $$rendered = `${validate_component(Chart, "Chart").$$render(
      $$result,
      Object.assign({}, { type: "bar" }, props, { this: baseChartRef }, { chart }),
      {
        this: ($$value) => {
          baseChartRef = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
doc(db, "user", "123456");
let tempData = [];
let humdData = [];
let hrData = [];
let temperatureData;
let humidityData;
let hourData;
async function fetchData() {
  const averagesArray = await getHourlyAverages();
  averagesArray.sort((a2, b) => {
    const hourA = parseInt(a2.Hour);
    const hourB = parseInt(b.Hour);
    return hourA - hourB;
  });
  temperatureData = averagesArray.map((entry) => Math.floor(entry.AverageTemperature));
  humidityData = averagesArray.map((entry) => Math.floor(entry.AverageHumidity));
  hourData = averagesArray.map((entry) => entry.Hour);
  tempData = temperatureData;
  humdData = humidityData;
  hrData = hourData;
}
let a = [];
fetchData().then(() => {
  a = tempData;
  console.log(tempData);
});
console.log(a);
const dailyTempHumd = {
  labels: hrData,
  datasets: [
    {
      label: "Temperature",
      // fill: true,
      lineTension: 0.3,
      backgroundColor: "rgba(225, 204,230, .3)",
      borderColor: "rgba(11, 104, 158, 0.8)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(30, 147, 234, 0.8)",
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(0, 0, 0)",
      pointHoverBorderColor: "rgba(220, 220, 220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: tempData
    },
    {
      label: "Humidity",
      // fill: true,
      lineTension: 0.3,
      backgroundColor: "rgba(225, 204,230, .3) ",
      borderColor: "rgb(35, 26, 136)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(35, 26, 136)",
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(0, 0, 0)",
      pointHoverBorderColor: "rgba(220, 220, 220, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: humdData
    }
  ]
};
let harvCodeData = [];
let harvGramsData = [];
const harvestData = {
  labels: harvCodeData,
  datasets: [
    {
      label: "Grams",
      data: harvGramsData,
      backgroundColor: [
        "rgba(255, 134,159,0.4)",
        "rgba(98,  182, 239,0.4)",
        "rgba(255, 218, 128,0.4)",
        "rgba(113, 205, 205,0.4)",
        "rgba(170, 128, 252,0.4)",
        "rgba(255, 177, 101,0.4)"
      ],
      borderWidth: 2,
      borderColor: [
        "rgba(255, 134, 159, 1)",
        "rgba(98,  182, 239, 1)",
        "rgba(255, 218, 128, 1)",
        "rgba(113, 205, 205, 1)",
        "rgba(170, 128, 252, 1)",
        "rgba(255, 177, 101, 1)"
      ]
    }
  ],
  options: {
    plugins: {
      legend: {
        display: false
        // Set to false to hide the legend
      }
    }
  }
};
let dayDate = [];
let dayTemp = [];
let dayHumd = [];
const everyTempHumid = {
  labels: dayDate,
  datasets: [
    {
      label: "Temperature",
      // fill: true,
      lineTension: 0.3,
      backgroundColor: "rgba(225, 204,230, .3)",
      borderColor: "rgba(11, 104, 158, 0.8)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(30, 147, 234, 0.8)",
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(0, 0, 0)",
      pointHoverBorderColor: "rgba(220, 220, 220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: dayTemp
    },
    {
      label: "Humidity",
      // fill: true,
      lineTension: 0.3,
      backgroundColor: "rgba(225, 204,230, .3) ",
      borderColor: "rgb(35, 26, 136)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(35, 26, 136)",
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(0, 0, 0)",
      pointHoverBorderColor: "rgba(220, 220, 220, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: dayHumd
    }
  ]
};
const HarvestData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart$1.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  let data = harvestData;
  return `${validate_component(Bar, "Bar").$$render(
    $$result,
    {
      data,
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    },
    {},
    {}
  )}`;
});
const EveryTempHumid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = everyTempHumid;
  Chart$1.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
  return `${validate_component(Line, "Line").$$render(
    $$result,
    {
      data,
      options: {
        responsive: true,
        // plugins: {
        // 	title: {
        // 		display: true,
        // 		text: 'Daily Average',
        // 		position: 'top'
        // 	}
        // },
        scales: { y: { beginAtZero: true } }
      }
    },
    {},
    {}
  )}`;
});
export {
  EveryTempHumid as E,
  HarvestData as H,
  Line as L,
  dailyTempHumd as d
};
