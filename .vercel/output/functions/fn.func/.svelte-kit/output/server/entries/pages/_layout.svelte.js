import { g as getContext, s as setContext, c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { getDatabase, ref } from "firebase/database";
import "../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/auth";
import { l as loading } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index.js";
import { i as initializeModalStore } from "../../chunks/stores2.js";
import { i as initializeToastStore } from "../../chunks/stores3.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
import "../../chunks/calculateAverage.js";
import { A as Authenticate } from "../../chunks/Authenticate.js";
import { format } from "date-fns";
const storePopup = writable(void 0);
const DRAWER_STORE_KEY = "drawerStore";
function getDrawerStore() {
  const drawerStore = getContext(DRAWER_STORE_KEY);
  if (!drawerStore)
    throw new Error("drawerStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");
  return drawerStore;
}
function initializeDrawerStore() {
  const drawerStore = drawerService();
  return setContext(DRAWER_STORE_KEY, drawerStore);
}
function drawerService() {
  const { subscribe: subscribe2, set, update } = writable({});
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Open the drawer. */
    open: (newSettings) => update(() => {
      return { open: true, ...newSettings };
    }),
    /** Close the drawer. */
    close: () => update((d) => {
      d.open = false;
      return d;
    })
  };
}
function initializeStores() {
  initializeModalStore();
  initializeToastStore();
  initializeDrawerStore();
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_loading;
  $$unsubscribe_loading = subscribe(loading, (value) => value);
  storePopup.set({
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow
  });
  initializeStores();
  getDrawerStore();
  const currentDate = /* @__PURE__ */ new Date();
  format(currentDate, "yyyy-MM-dd");
  const rdb = getDatabase();
  ref(rdb, `/BETAPEAK/2023-11-18`);
  $$unsubscribe_loading();
  return `${`${validate_component(Authenticate, "Authenticate").$$render($$result, {}, {}, {})}`}`;
});
export {
  Layout as default
};
