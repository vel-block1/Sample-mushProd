import { c as create_ssr_component, v as validate_component, a as subscribe, o as onDestroy, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import "firebase/firestore";
import "../../../chunks/firebase.js";
import { format } from "date-fns";
import { Chart, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from "chart.js";
import { L as Line, d as dailyTempHumd, E as EveryTempHumid, H as HarvestData } from "../../../chunks/everyTempHumid.js";
import { g as getModalStore } from "../../../chunks/stores2.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { f as fade, M as Modal } from "../../../chunks/Modal.js";
import { P as ProgressRadial } from "../../../chunks/ProgressRadial.js";
import { l as loading, s as setLoading } from "../../../chunks/stores.js";
import { getDatabase, ref, query, limitToLast, onValue } from "firebase/database";
const DailyTempHumd = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = dailyTempHumd;
  Chart.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
  return `${validate_component(Line, "Line").$$render(
    $$result,
    {
      data,
      options: {
        responsive: true,
        // plugins: {
        // 	title: {
        // 		display: true,
        // 		text: 'Hourly Average Temperature and Humidity',
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
const cardStyle = "card card-hover overflow-hidden ";
const cardInsideStyle = " p-4 space-y-4 ";
const cardInsideStyle2 = " p-4 space-y-6 ";
const h2Style = "text-md md:text-lg lg:text-1xl";
const h3Style = "text-l md:text-1xl lg:text-1xl";
const valueStyle = "flex justify-center items-center text-7xl md:text-4xl lg:text-6xl ";
const smallValueStyle = "flex justify-center items-center text-5xl";
const smallerValueStyle = "flex justify-center items-center text-2xl";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loading, $$unsubscribe_loading;
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  let humd;
  let temp;
  let time;
  const currentDate = /* @__PURE__ */ new Date();
  format(currentDate, "yyyy-MM-dd");
  const rdb = getDatabase();
  const dateRef = ref(rdb, `/BETAPEAK/2023-11-18`);
  const queryRef = query(dateRef, limitToLast(1));
  const unsubscribe = onValue(queryRef, (snapshot) => {
    try {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const lastEntryKey = Object.keys(data)[0];
        const lastEntry = data[lastEntryKey];
        humd = lastEntry.Humd;
        temp = lastEntry.Temp;
        time = lastEntry.Time;
        setLoading(false);
      } else {
        console.log("it does not exist");
      }
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  getModalStore();
  $$unsubscribe_loading();
  return `${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      transitionIn: fade,
      transitionInParams: { duration: 200 }
    },
    {},
    {}
  )} ${$loading ? `<div class="flex justify-center items-center h-screen">${validate_component(ProgressRadial, "ProgressRadial").$$render($$result, { value: void 0 }, {}, {})}</div>` : `<div class="w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4 pr-4 pl-4 pb-2"> <div${add_attribute("class", `md:col-span-1 sm:col-span-1 lg:col-span-1 ${cardStyle}`, 0)}><div${add_attribute("class", cardInsideStyle2, 0)}><div class="flex items-start mt-2"><div class="flex items-center"><span class="material-symbols-outlined text-4xl" data-svelte-h="svelte-8i5pez">device_thermostat</span> <h2${add_attribute("class", h2Style, 0)}>Temperature</h2></div></div> <hr class="opacity-50"> <div${add_attribute("class", valueStyle, 0)}>${temp ? `<h1>${escape(temp)}°C</h1>` : `<div class="flex justify-center items-center">${validate_component(ProgressRadial, "ProgressRadial").$$render($$result, { width: "w-20", value: void 0 }, {}, {})}</div>`}</div></div></div>  <div${add_attribute("class", `md:col-span-1 sm:col-span-1 lg:col-span-1 ${cardStyle}`, 0)}><div${add_attribute("class", cardInsideStyle2, 0)}><div class="flex items-start mt-2"><div class="flex items-center"><span class="material-symbols-outlined text-4xl" data-svelte-h="svelte-d5r2m9">humidity_mid</span> <h2${add_attribute("class", h2Style, 0)}>Humidity</h2></div></div> <hr class="opacity-50"> <div${add_attribute("class", valueStyle, 0)}>${humd ? `<h1>${escape(humd)}%</h1>` : `<div class="flex justify-center items-center">${validate_component(ProgressRadial, "ProgressRadial").$$render($$result, { width: "w-20", value: void 0 }, {}, {})}</div>`}</div></div></div></div> <div class="w-full text-token grid grid-cols-1 md:grid-cols-4 gap-4 pr-4 pl-4 pb-2"><div${add_attribute("class", `md:col-span-2 sm:col-span-1`, 0)}><div${add_attribute("class", `p-4  ${cardStyle}`, 0)}><div class="flex items-start mt-2"><div class="flex items-center"><span class="material-symbols-outlined text-4xl" data-svelte-h="svelte-1ryjsfr">hourglass_top</span> <h2${add_attribute("class", h2Style, 0)}>Hourly Average Temperature &amp; Humidity</h2></div></div> <hr class="opacity-50 mb-4 mt-4"> <div${add_attribute("class", `p-4 bg-surface-100  `, 0)}>${validate_component(DailyTempHumd, "Chart").$$render($$result, {}, {}, {})}</div></div></div> <div${add_attribute("class", `md:col-span-2 sm:col-span-1 `, 0)}><div${add_attribute("class", `p-4  ${cardStyle}`, 0)}><div class="flex items-start mt-2"><div class="flex items-center"><span class="material-symbols-outlined mr-2 text-4xl" data-svelte-h="svelte-1enjli0">calendar_month</span> <h2${add_attribute("class", h2Style, 0)}>Daily Average Temperature &amp; Humidity</h2></div></div> <hr class="opacity-50 mb-4 mt-4"> <div${add_attribute("class", `p-4 bg-surface-100  `, 0)}>${validate_component(EveryTempHumid, "EveryTempHumid").$$render($$result, {}, {}, {})}</div></div></div> <div${add_attribute("class", `md:col-span-2 sm:col-span-1`, 0)}><div${add_attribute("class", `p-4  ${cardStyle}`, 0)}><div class="flex items-start mt-2"><div class="flex items-center"><span class="material-symbols-outlined text-2xl mr-2" data-svelte-h="svelte-upqcyx">scale</span> <h2${add_attribute("class", h2Style, 0)}>Total Grams</h2></div></div> <hr class="opacity-50 mb-4 mt-4"> <div${add_attribute("class", `p-4 bg-surface-100  `, 0)}>${validate_component(HarvestData, "HarvestData").$$render($$result, {}, {}, {})}</div></div></div> <div${add_attribute("class", `md:col-span-2 sm:col-span-1`, 0)}><div class="w-full text-token grid grid-cols-1 md:grid-cols-2 gap-4 pr-4 pl-4 pb-2"><div${add_attribute("class", cardStyle, 0)}><div${add_attribute("class", cardInsideStyle, 0)}><div class="flex items-start"><div class="flex items-center"><span class="material-symbols-outlined mr-2" data-svelte-h="svelte-114ragl">psychiatry</span> <h2${add_attribute("class", h3Style, 0)}>Yield Prediction</h2></div></div> <hr class="opacity-50"> <div class=""><div${add_attribute("class", smallerValueStyle, 0)}><strong>${`<div class="flex justify-center items-center">${validate_component(ProgressRadial, "ProgressRadial").$$render($$result, { width: "w-10", value: void 0 }, {}, {})}</div>`}</strong></div></div></div></div>  <div${add_attribute("class", cardStyle, 0)}><div${add_attribute("class", cardInsideStyle, 0)}><div class="flex items-start"><div class="flex items-center"><span class="material-symbols-outlined mr-2" data-svelte-h="svelte-1jcapzu">shopping_bag</span> <h2${add_attribute("class", h3Style, 0)}>Total Bags</h2></div></div> <hr class="opacity-50"> <div${add_attribute("class", smallValueStyle, 0)}><h1${add_attribute("class", smallerValueStyle, 0)}><strong>${`<div class="flex justify-center items-center">${validate_component(ProgressRadial, "ProgressRadial").$$render($$result, { width: "w-10", value: void 0 }, {}, {})}</div>`}</strong></h1></div></div></div> <div${add_attribute("class", cardStyle, 0)}><div${add_attribute("class", cardInsideStyle, 0)}><div class="flex items-start"><div class="flex items-center"><span class="material-symbols-outlined mr-2" data-svelte-h="svelte-n1p9cx">layers</span> <h2${add_attribute("class", h3Style, 0)}>Total Harvest</h2></div></div> <hr class="opacity-50"> <div${add_attribute("class", smallValueStyle, 0)}><h1${add_attribute("class", smallerValueStyle, 0)}><strong>${`<div class="flex justify-center items-center">${validate_component(ProgressRadial, "ProgressRadial").$$render($$result, { width: "w-10", value: void 0 }, {}, {})}</div>`}</strong></h1></div></div></div> <div${add_attribute("class", cardStyle, 0)}><div${add_attribute("class", cardInsideStyle, 0)}><div class="flex items-start"><div class="flex items-center"><span class="material-symbols-outlined mr-2" data-svelte-h="svelte-y89ts">calendar_month</span> <h2${add_attribute("class", h3Style, 0)}>Last Date Planted</h2></div></div> <hr class="opacity-50"> <div${add_attribute("class", smallValueStyle, 0)}><h1 class="flex justify-center items-center text-lg"><strong>${`<div class="flex justify-center items-center">${validate_component(ProgressRadial, "ProgressRadial").$$render($$result, { width: "w-10", value: void 0 }, {}, {})}</div>`}</strong></h1></div></div></div></div></div></div>`}`;
});
export {
  Page as default
};
