import { format } from "date-fns";
function dateFormat() {
  const date = /* @__PURE__ */ new Date();
  const formattedDate = format(date, "MMMM dd, yyyy");
  return formattedDate;
}
export {
  dateFormat as d
};
