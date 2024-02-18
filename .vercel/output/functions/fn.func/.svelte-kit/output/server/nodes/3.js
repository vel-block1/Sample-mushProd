

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.ZIMfYjTW.js","_app/immutable/chunks/scheduler.QbWIzjUv.js","_app/immutable/chunks/index.COTcGcuD.js","_app/immutable/chunks/Authenticate.jI3lTBLB.js","_app/immutable/chunks/firebase.CXGZVSlo.js"];
export const stylesheets = ["_app/immutable/assets/Authenticate.BXhH3GA6.css"];
export const fonts = [];
