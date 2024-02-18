import { w as writable } from "./index.js";
const loading = writable(true);
const setLoading = (value) => {
  loading.set(value);
};
const report = writable({
  // date: '',
});
const batch = writable({
  id: "",
  batch_code: "",
  batch_planted: "",
  batch_remarks: "",
  batch_total_bags: 0,
  batch_total_removed: 0
});
export {
  batch as b,
  loading as l,
  report as r,
  setLoading as s
};
