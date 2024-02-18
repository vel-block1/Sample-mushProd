import { c as create_ssr_component, e as escape, n as null_to_empty, b as add_attribute } from "./ssr.js";
import "firebase/auth";
import "./firebase.js";
const css = {
  code: ".authContainer.svelte-6t8xw5.svelte-6t8xw5{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;padding:24px;height:100vh}form.svelte-6t8xw5.svelte-6t8xw5{display:flex;flex-direction:column;gap:14px}form.svelte-6t8xw5.svelte-6t8xw5,.option.svelte-6t8xw5.svelte-6t8xw5{width:400px;max-width:100%;margin:0 auto}.spin.svelte-6t8xw5.svelte-6t8xw5{animation:svelte-6t8xw5-spin 2s infinite}@keyframes svelte-6t8xw5-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}form.svelte-6t8xw5 label.svelte-6t8xw5{position:relative;border:1px solid navy;border-radius:5px}form.svelte-6t8xw5 input.svelte-6t8xw5{width:100%;border:none;background:transparent;color:white;padding:8px 14px}form.svelte-6t8xw5 input.svelte-6t8xw5:focus{border:none;outline:none}form.svelte-6t8xw5 label.svelte-6t8xw5:focus-within{border-color:blue}.above.svelte-6t8xw5.svelte-6t8xw5,.center.svelte-6t8xw5.svelte-6t8xw5{position:absolute;transform:translateY(-50%);pointer-events:none;color:white;border-radius:4px;padding:0 6px;font-size:0.8rem}.above.svelte-6t8xw5.svelte-6t8xw5{top:0;left:24px;background:navy;border:1px solid blue;font-size:0.7rem}.center.svelte-6t8xw5.svelte-6t8xw5{top:50%;left:6px;border:1px solid transparent;opacity:0}.error.svelte-6t8xw5.svelte-6t8xw5{color:coral;font-size:0.9rem;text-align:center}.option.svelte-6t8xw5.svelte-6t8xw5{padding:14px 0;overflow:hidden;font-size:0.9rem;display:flex;flex-direction:column;gap:4px}.option.svelte-6t8xw5 div.svelte-6t8xw5{display:flex;align-items:center;justify-content:center;gap:8px}.option div.svelte-6t8xw5 p.svelte-6t8xw5:last-of-type{color:cyan;cursor:pointer}",
  map: null
};
const cHeader = "text-2xl font-bold";
const Authenticate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  $$result.css.add(css);
  return `<div class="authContainer svelte-6t8xw5"><form action="" class="svelte-6t8xw5"><header class="${escape(null_to_empty(cHeader), true) + " svelte-6t8xw5"}"><div class="flex items-center justify-center svelte-6t8xw5" data-svelte-h="svelte-1a96yra">Log in to Mush Prod</div></header> ${``} <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]"><div class="input-group-shim" data-svelte-h="svelte-egrtet"><i class="fa-solid fa-calendar"></i></div> <input type="email" placeholder="Email" class="svelte-6t8xw5"${add_attribute("value", email, 0)}></div> <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]"><div class="input-group-shim" data-svelte-h="svelte-egrtet"><i class="fa-solid fa-calendar"></i></div> <input type="password" placeholder="Password" class="svelte-6t8xw5"${add_attribute("value", password, 0)}></div> ${``} <button type="button" class="btn btn-md variant-filled-primary mr-2">${`<i class="fa-solid fa-right-to-bracket mr-2"></i> Login`}</button></form>          </div>`;
});
export {
  Authenticate as A
};
