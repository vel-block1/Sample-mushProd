import { c as create_ssr_component, v as validate_component, l as each, e as escape } from "../../../chunks/ssr.js";
import { g as getModalStore } from "../../../chunks/stores2.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { f as fade, M as Modal } from "../../../chunks/Modal.js";
import { r as report } from "../../../chunks/stores.js";
import { d as dateFormat } from "../../../chunks/DateAndTime.js";
import "firebase/firestore";
import "../../../chunks/firebase.js";
import { H as HarvestData, E as EveryTempHumid } from "../../../chunks/everyTempHumid.js";
const css = {
  code: ".spans.svelte-13rjv4b.svelte-13rjv4b{line-height:1.2}.report-heading.svelte-13rjv4b.svelte-13rjv4b{font-size:16px;color:black;display:flex;align-items:center;font-weight:bold}.section-heading.svelte-13rjv4b.svelte-13rjv4b{font-size:14px;font-weight:bold;color:black}.section-content.svelte-13rjv4b.svelte-13rjv4b{font-size:12px;line-height:1.3;color:black;margin-left:40px}.table.svelte-13rjv4b.svelte-13rjv4b{font-size:12px;color:black;width:auto;margin:0 auto;border-collapse:collapse}.table.svelte-13rjv4b.svelte-13rjv4b,.table.svelte-13rjv4b th.svelte-13rjv4b,.table.svelte-13rjv4b td.svelte-13rjv4b{border-collapse:collapse;border:1.2px solid #000000;padding:8px;text-align:left;background-color:rgb(255, 255, 255);border-radius:0 !important}.info.svelte-13rjv4b.svelte-13rjv4b{color:black;display:flex;justify-content:space-between}.info-column.svelte-13rjv4b.svelte-13rjv4b{flex:1;margin-right:20px}.info-item.svelte-13rjv4b.svelte-13rjv4b{margin-bottom:10px}.info-label.svelte-13rjv4b.svelte-13rjv4b{font-size:12px;font-weight:bold;display:block;margin-bottom:5px}.info-value.svelte-13rjv4b.svelte-13rjv4b{display:block}.mushroom-data-container.svelte-13rjv4b.svelte-13rjv4b{display:flex;justify-content:space-between}.mushroom-data-table.svelte-13rjv4b.svelte-13rjv4b{flex:1;margin-right:20px}.additional-info.svelte-13rjv4b.svelte-13rjv4b{color:black;flex:1}.harvested_grams.svelte-13rjv4b.svelte-13rjv4b{display:flex;flex-direction:column}.summary-description.svelte-13rjv4b.svelte-13rjv4b{font-size:14px;text-align:justify;padding:10px;border-radius:8px;margin-bottom:20px}.flex-container.svelte-13rjv4b.svelte-13rjv4b{display:flex;flex-direction:row;justify-content:space-between}.chart-container1.svelte-13rjv4b.svelte-13rjv4b{width:75%;margin-right:10px}.table1.svelte-13rjv4b.svelte-13rjv4b{font-size:12px;width:45%;color:black;width:auto;margin:0 auto;border-collapse:collapse}.table1.svelte-13rjv4b.svelte-13rjv4b,.table1.svelte-13rjv4b th.svelte-13rjv4b,.table1.svelte-13rjv4b td.svelte-13rjv4b{border-collapse:collapse;border:1.2px solid #000000;padding:8px;text-align:left;background-color:white;border-radius:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let farmData = [];
  let planted;
  let harvest;
  let removed;
  let tempHumidAve = [];
  let harvestData = [];
  let analysisData = [];
  let yield_pred2;
  let aveTempAll;
  let aveHumdAll;
  let firstDateAve;
  let lastDateAve;
  document.getElementById("element");
  getModalStore();
  report.subscribe((data) => {
  });
  $$result.css.add(css);
  return `${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      transitionIn: fade,
      transitionInParams: { duration: 200 }
    },
    {},
    {}
  )} ${`<div class="flex justify-between items-center m-4"><div class="ml-auto"><button class="btn btn-sm variant-filled-primary" data-svelte-h="svelte-10byion"><i class="fa-solid fa-print mr-2"></i>Generate Report</button></div></div> <div class="flex justify-center items-center mr-20 ml-20 mt-5" style="background-color: white;"><div id="element" class="mr-10 ml-10"><h1 class="report-heading flex justify-center items-center text-4xl svelte-13rjv4b" data-svelte-h="svelte-13gjz9g">MushProd: NodeMCU-Based and Yield Prediction System for Oyster Mushroom</h1> <h2 class="section-heading mb-5 svelte-13rjv4b" data-svelte-h="svelte-r3c9uc">I. System Report</h2> <div class="info svelte-13rjv4b">${each(farmData, (farm) => {
    return `<div class="info-column svelte-13rjv4b"><div class="info-item svelte-13rjv4b"><span class="info-label svelte-13rjv4b" data-svelte-h="svelte-fnmqzd">Date of Report:</span> <span class="info-value svelte-13rjv4b">${escape(dateFormat())}</span></div> <div class="info-item svelte-13rjv4b"><span class="info-label svelte-13rjv4b" data-svelte-h="svelte-14vsvvo">Farmer Name:</span> <span class="info-value svelte-13rjv4b">${escape(farm.farmer_name)}</span> </div></div> <div class="info-column svelte-13rjv4b"><div class="info-item svelte-13rjv4b"><span class="info-label svelte-13rjv4b" data-svelte-h="svelte-1yzdpnt">Farm Location:</span> <span class="info-value svelte-13rjv4b">${escape(farm.farm_address)}</span></div> <div class="info-item svelte-13rjv4b"><span class="info-label svelte-13rjv4b" data-svelte-h="svelte-18wwe9h">Device Code:</span> <span class="info-value svelte-13rjv4b">${escape(farm.device_code)}</span></div> </div>`;
  })}</div> <div class="planted_bags mt-5"><h2 class="section-heading mb-2 svelte-13rjv4b" data-svelte-h="svelte-ti5i1k">II. Growing Bag Analysis</h2> <p class="section-content mb-2 svelte-13rjv4b" data-svelte-h="svelte-1dsdhh8">This table provides an analysis of various mushroom production batches, including data
					such as growth duration, total bags planted, grams produced, and the current status of
					each batch.</p> ${each(analysisData, (row) => {
    return `<table class="table mb-10 svelte-13rjv4b"><tr class="vertical-header" data-svelte-h="svelte-5rousn"><th class="text-xs svelte-13rjv4b">Batch Code</th> <th class="text-xs svelte-13rjv4b">Growth Duration</th> <th class="text-xs svelte-13rjv4b">Total Bags Planted</th> <th class="text-xs svelte-13rjv4b">Average Temperature</th> <th class="text-xs svelte-13rjv4b">Average Humidity</th> <th class="text-xs svelte-13rjv4b">Grams</th> <th class="text-xs svelte-13rjv4b">Status</th></tr> <tr><td class="svelte-13rjv4b">${escape(row.batchCode)}</td> <td class="svelte-13rjv4b">${escape(row.growthDuration)}</td> <td class="svelte-13rjv4b">${escape(row.totalBags)}</td> <td class="svelte-13rjv4b">${escape(row.averageTemperature.toFixed(2))}</td> <td class="svelte-13rjv4b">${escape(row.averageHumidity.toFixed(2))}</td> <td class="svelte-13rjv4b">${escape(row.totalGrams)}</td> <td class="svelte-13rjv4b">${escape(row.analysis.stat)}</td></tr> <tr class="spans svelte-13rjv4b"><td colspan="7" class="svelte-13rjv4b">${escape(row.analysis.message)} <p><strong data-svelte-h="svelte-1nv2yvw">Suggestion:</strong> Consider
									${escape(row.analysis.temperatureSuggestion)} and ${escape(row.analysis.humiditySuggestion)} for better
									mushroom growth.
								</p></td> </tr></table> <br>`;
  })}</div> <div class="harvested_grams mt-5 svelte-13rjv4b"><h2 class="section-heading mb-2 svelte-13rjv4b" data-svelte-h="svelte-1denolh">III. Harvest Data</h2> <p class="section-content mb-2 svelte-13rjv4b" data-svelte-h="svelte-ski6pw">This table provides a overview of the harvest data for batches. It includes the data such
					as the Batch Code, the Number of Harvests, and the Total Grams Harvested for each
					respective batch.</p> <div class="flex-container svelte-13rjv4b"><div class="chart-container1 svelte-13rjv4b">${validate_component(HarvestData, "HarvestedData").$$render($$result, {}, {}, {})}</div> <table class="table1 svelte-13rjv4b"><tr data-svelte-h="svelte-b5rhgk"><th class="svelte-13rjv4b">Batch Code</th> <th class="svelte-13rjv4b">Number of Harvest</th> <th class="svelte-13rjv4b">Total Grams Harvested</th></tr> ${each(harvestData, (row) => {
    return `<tr><td class="svelte-13rjv4b">${escape(row.batchCode)}</td> <td class="svelte-13rjv4b">${escape(row.totalHarvests)}</td> <td class="svelte-13rjv4b">${escape(row.totalGrams)}</td> </tr>`;
  })}</table></div></div> <div class="mushroom-data-container mt-5 svelte-13rjv4b"><div class="mushroom-data-table svelte-13rjv4b"><h2 class="section-heading mb-2 svelte-13rjv4b" data-svelte-h="svelte-8udbng">IV. Mushroom Data</h2> <table class="table svelte-13rjv4b"><tr data-svelte-h="svelte-z2h4n8"><th class="svelte-13rjv4b">Type</th> <th class="svelte-13rjv4b">Total Bags</th> <th class="svelte-13rjv4b">Total Harvested</th> <th class="svelte-13rjv4b">Total Bags Removed</th></tr>  <tr class=""><td class="svelte-13rjv4b" data-svelte-h="svelte-717gc8">Oyster Mushroom</td> <td class="svelte-13rjv4b">${escape(planted)}</td> <td class="svelte-13rjv4b">${escape(harvest)}</td> <td class="svelte-13rjv4b">${escape(removed)}</td></tr> </table></div> <div class="additional-info mt-6 svelte-13rjv4b"><div class="summary-description svelte-13rjv4b"><p data-svelte-h="svelte-z1umot"><strong>Type:</strong> Oyster Mushroom</p> <p><strong data-svelte-h="svelte-1p4wyrt">Total Bags:</strong> ${escape(planted)} bags have been planted.</p> <p><strong data-svelte-h="svelte-sq1tsw">Total Harvested:</strong> A total of ${escape(harvest)} grams harvested.</p> <p><strong data-svelte-h="svelte-iy4gmp">Total Bags Removed:</strong> ${escape(removed)} bags have been removed.</p></div></div></div> <div class="temp_humid mt-5"><h2 class="section-heading mb-2 svelte-13rjv4b" data-svelte-h="svelte-1jnrzyg">V. Temperature and Humidity Condition</h2> <p class="section-content mb-2 svelte-13rjv4b" data-svelte-h="svelte-rjm2e0">This table presents a chronological record of temperature and humidity levels during
					specific dates in the mushroom cultivation environment. The average temperature, measured
					in degrees celsius, and average humidity, expressed as a percentage, are key metrics
					captured for monitoring and assessing the growing conditions</p> <div class="mb-2 flex items-center justify-center">${validate_component(EveryTempHumid, "EveryTempHumid").$$render($$result, {}, {}, {})}</div> <div class="table-container"><table class="table svelte-13rjv4b"><tr data-svelte-h="svelte-1ryg4eb"><th class="svelte-13rjv4b">Date</th> <th class="svelte-13rjv4b">Average Temperature</th> <th class="svelte-13rjv4b">Average Humidity</th></tr> ${each(tempHumidAve, (row) => {
    return `<tr class=""><td class="svelte-13rjv4b">${escape(row.date)}</td> <td class="svelte-13rjv4b">${escape(row["ave temp"])}°C</td> <td class="svelte-13rjv4b">${escape(row["ave humidity"])}%</td> </tr>`;
  })}</table></div></div> <div class="yield mt-5 mb-10"><h2 class="section-heading mb-2 svelte-13rjv4b" data-svelte-h="svelte-r1dx8m">VI. Yield Prediction</h2> <p class="section-content mb-2 svelte-13rjv4b" data-svelte-h="svelte-1m4rrem">This table provides predictions for mushroom yield based on the gathered data and
					conditions.</p> <div class="table-container1 mb-2"><table class="table1 svelte-13rjv4b"><tr data-svelte-h="svelte-oqxah9"><th class="svelte-13rjv4b">Starting Date</th> <th class="svelte-13rjv4b">Last Date</th> <th class="svelte-13rjv4b">Number of Planted Bags</th> <th class="svelte-13rjv4b">Average Temperature</th> <th class="svelte-13rjv4b">Average Humidity</th> <th class="svelte-13rjv4b">Predicted Yield</th></tr> <tr class=""><td class="svelte-13rjv4b">${escape(firstDateAve)}</td> <td class="svelte-13rjv4b">${escape(lastDateAve)}</td> <td class="svelte-13rjv4b">${escape(planted)}</td> <td class="svelte-13rjv4b">${escape(aveTempAll)}°C</td> <td class="svelte-13rjv4b">${escape(aveHumdAll)} %</td> <td class="svelte-13rjv4b">${escape(yield_pred2)}</td></tr></table></div> <p class="section-content mb-5 svelte-13rjv4b">During the observed period from ${escape(firstDateAve)} to ${escape(lastDateAve)}, we planted ${escape(planted)} Oyster
					Mushroom bags in our cultivation environment. The average temperature throughout this period
					was ${escape(aveTempAll)}°C, and the average humidity was ${escape(aveHumdAll)}%. Considering these
					environmental conditions, our predictive model anticipates a mushroom yield of
					approximately ${escape(yield_pred2)} grams.</p></div></div></div>`}`;
});
export {
  Page as default
};
