import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { g as getModalStore } from "../../../../chunks/stores2.js";
import { g as getToastStore } from "../../../../chunks/stores3.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { f as fade, M as Modal } from "../../../../chunks/Modal.js";
import { P as ProgressRadial } from "../../../../chunks/ProgressRadial.js";
import "firebase/firestore";
import "../../../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getToastStore();
  getModalStore();
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        transitionIn: fade,
        transitionInParams: { duration: 200 }
      },
      {},
      {}
    )} ${` <div class="flex justify-center items-center h-fit">${validate_component(ProgressRadial, "ProgressRadial").$$render($$result, { value: void 0 }, {}, {})}</div>`}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
