import { c as create_ssr_component, a as subscribe, k as set_store_value, v as validate_component, b as add_attribute, l as each, e as escape } from "../../../chunks/ssr.js";
import { l as loading } from "../../../chunks/stores.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { f as fade, M as Modal } from "../../../chunks/Modal.js";
import { P as ProgressRadial } from "../../../chunks/ProgressRadial.js";
import "firebase/firestore";
import "../../../chunks/firebase.js";
import { d as dateFormat } from "../../../chunks/DateAndTime.js";
import "firebase/messaging";
import "firebase/app";
const cardStyle = "card card-hover overflow-hidden ";
const cardInsideStyle = "p-4 space-y-4";
const h2Style = "text-1xl md:text-2xl lg:text-2xl";
const valueStyle = "flex justify-center items-center text-7xl md:text-4xl lg:text-8xl";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loading, $$unsubscribe_loading;
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  let farmData = [];
  set_store_value(loading, $loading = false, $loading);
  $$unsubscribe_loading();
  return `${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      transitionIn: fade,
      transitionInParams: { duration: 200 }
    },
    {},
    {}
  )} ${$loading ? ` <div class="flex justify-center items-center h-screen">${validate_component(ProgressRadial, "ProgressRadial").$$render($$result, { value: void 0 }, {}, {})}</div>` : `<div class="ml-4" data-svelte-h="svelte-1qkl04d"><h1 class="h1 mb-10">Welcome to MushProd</h1></div> <div class="flex items-center justify-center"><div class="w-full text-token grid sm:grid-cols-1 md:grid-cols-4 gap-4 p-4"><div${add_attribute("class", `${cardStyle} sm:col-span-1 md:col-span-4 lg:col-span-3`, 0)}><div${add_attribute("class", cardInsideStyle, 0)}>${each(farmData, (farm) => {
    return `<div class="flex items-center"><h2${add_attribute("class", h2Style, 0)}>${escape(farm.farm_name)}</h2> <div class="flex items-center justify-center mr-2 ml-auto"><div class="flex flex-col mt-2"><div class=""><div class="flex items-center justify-center"> <span class="material-symbols-outlined mr-2" data-svelte-h="svelte-6zyxns">calendar_month</span> ${escape(dateFormat())} </div></div> <div class="flex items-center justify-end"> <span class="material-symbols-outlined mr-2" data-svelte-h="svelte-12xtlc2">schedule</span> ${`${validate_component(ProgressRadial, "ProgressRadial").$$render($$result, { width: "w-5", value: void 0 }, {}, {})}`} </div></div> </div></div> <hr class="opacity-50 mb-2"> <p class="flex items-center"> <span class="material-symbols-outlined mr-2" data-svelte-h="svelte-q3esry">person</span> ${escape(farm.farmer_name)}</p> <p class="flex items-center"> <span class="material-symbols-outlined mr-2" data-svelte-h="svelte-49ym6">pin_drop</span> ${escape(farm.farm_address)} </p>`;
  })}</div></div> <div${add_attribute("class", `${cardStyle} sm:col-span-1 md:col-span-2 lg:col-span-1`, 0)}><div${add_attribute("class", cardInsideStyle, 0)}><a href="/dashboard"><h2${add_attribute("class", h2Style, 0)}>Dashboard</h2> <hr class="opacity-50 mb-2"> <div${add_attribute("class", valueStyle, 0)}> <span class="material-symbols-outlined text-7xl md:text-4xl lg:text-8xl" data-svelte-h="svelte-50l85p">dashboard</span></div></a></div></div> <div${add_attribute("class", `${cardStyle} sm:col-span-1 md:col-span-2 lg:col-span-1`, 0)}><div${add_attribute("class", cardInsideStyle, 0)}><a href="/records/batch"><h2${add_attribute("class", h2Style, 0)}>Batch Records</h2> <hr class="opacity-50 mb-2"> <div${add_attribute("class", valueStyle, 0)}> <span class="material-symbols-outlined text-7xl md:text-4xl lg:text-8xl" data-svelte-h="svelte-196tlom">folder_open</span></div></a></div></div> <div${add_attribute("class", `${cardStyle} sm:col-span-1 md:col-span-2 lg:col-span-1`, 0)}><div${add_attribute("class", cardInsideStyle, 0)}><a href="/records/temp&humid"><h2 class="text-sm md:text-lg lg:text-1xl mb-1" data-svelte-h="svelte-1jbkaxn">Temperature &amp; Humidity</h2> <hr class="opacity-50 mb-2"> <div${add_attribute("class", valueStyle, 0)}> <span class="material-symbols-outlined text-7xl md:text-4xl lg:text-8xl" data-svelte-h="svelte-1gvu7aq">thermostat</span></div></a></div></div> <div${add_attribute("class", `${cardStyle} sm:col-span-1 md:col-span-2 lg:col-span-1`, 0)}><div${add_attribute("class", cardInsideStyle, 0)}><a href="/notification"><h2${add_attribute("class", h2Style, 0)}>Notification</h2> <hr class="opacity-50 mb-2"> <div${add_attribute("class", valueStyle, 0)}> <span class="material-symbols-outlined text-7xl md:text-4xl lg:text-8xl" data-svelte-h="svelte-4asn28">notifications_active</span></div></a></div></div> <div${add_attribute("class", `${cardStyle} sm:col-span-1 md:col-span-2 lg:col-span-1`, 0)}><div${add_attribute("class", cardInsideStyle, 0)}><a href="/report"><h2${add_attribute("class", h2Style, 0)}>Report</h2> <hr class="opacity-50 mb-2"> <div${add_attribute("class", valueStyle, 0)}> <span class="material-symbols-outlined text-7xl md:text-4xl lg:text-8xl" data-svelte-h="svelte-naphhr">description</span></div></a></div></div></div></div>`}`;
});
export {
  Page as default
};
