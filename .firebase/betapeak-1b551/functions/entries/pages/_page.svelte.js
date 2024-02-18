import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { A as Authenticate } from "../../chunks/Authenticate.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Authenticate, "Authenticate").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
