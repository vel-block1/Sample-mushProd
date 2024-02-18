import{s as gr,a as y,l as hn,g as _,i as L,f as h,k as mr,o as gn,a1 as br,e as d,t as ie,c as f,p as X,b as m,d as ce,q as p,h as i,u as Ke,w as vr,x as wr,n as ze,j as Je}from"../chunks/scheduler.QbWIzjUv.js";import{S as yr,i as _r,c as Tt,a as St,m as Dt,b as le,e as At,t as ee,d as Ct,g as xt}from"../chunks/index.COTcGcuD.js";import{e as mn}from"../chunks/each.DrhyqX_I.js";import{f as Ir,l as bn,j as kr,P as $n}from"../chunks/index.DTi6dYAV.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.BEtOAtSO.js";import{M as Er}from"../chunks/Modal.BaEBjw_v.js";import{f as Tr}from"../chunks/staticData.D_1_iovX.js";import{u as vn,d as Sr}from"../chunks/DateAndTime.CvR02A0R.js";import{u as Dr}from"../chunks/pageTab.DRy_WP3P.js";import{v as Ye,_ as Xe,C as Qe,w as Mt,E as Rn,F as Ar,x as Nt,y as Bn,z as Cr,A as xr,B as Mr,D as Nr,G as Pr}from"../chunks/firebase.CXGZVSlo.js";const Or=(e,t)=>t.some(n=>e instanceof n);let wn,yn;function $r(){return wn||(wn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rr(){return yn||(yn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jn=new WeakMap,yt=new WeakMap,Ln=new WeakMap,ct=new WeakMap,Pt=new WeakMap;function Br(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(pe(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&jn.set(n,e)}).catch(()=>{}),Pt.set(t,e),t}function jr(e){if(yt.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});yt.set(e,t)}let _t={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return yt.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ln.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Lr(e){_t=e(_t)}function Vr(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(lt(this),t,...n);return Ln.set(r,t.sort?t.sort():[t]),pe(r)}:Rr().includes(e)?function(...t){return e.apply(lt(this),t),pe(jn.get(this))}:function(...t){return pe(e.apply(lt(this),t))}}function Fr(e){return typeof e=="function"?Vr(e):(e instanceof IDBTransaction&&jr(e),Or(e,$r())?new Proxy(e,_t):e)}function pe(e){if(e instanceof IDBRequest)return Br(e);if(ct.has(e))return ct.get(e);const t=Fr(e);return t!==e&&(ct.set(e,t),Pt.set(t,e)),t}const lt=e=>Pt.get(e);function Kr(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),l=pe(a);return r&&a.addEventListener("upgradeneeded",u=>{r(pe(a.result),u.oldVersion,u.newVersion,pe(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),l.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",()=>s())}).catch(()=>{}),l}const Hr=["get","getKey","getAll","getAllKeys","count"],qr=["put","add","delete","clear"],ut=new Map;function _n(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ut.get(t))return ut.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=qr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hr.includes(n)))return;const o=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let g=u.store;return r&&(g=g.index(l.shift())),(await Promise.all([g[n](...l),s&&u.done]))[0]};return ut.set(t,o),o}Lr(e=>({...e,get:(t,n,r)=>_n(t,n)||e.get(t,n,r),has:(t,n)=>!!_n(t,n)||e.has(t,n)}));const Vn="@firebase/installations",Ot="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=1e4,Kn=`w:${Ot}`,Hn="FIS_v2",Wr="https://firebaseinstallations.googleapis.com/v1",Ur=60*60*1e3,Gr="installations",Jr="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ee=new Rn(Gr,Jr,zr);function qn(e){return e instanceof Ar&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn({projectId:e}){return`${Wr}/projects/${e}/installations`}function Un(e){return{token:e.token,requestStatus:2,expiresIn:Xr(e.expiresIn),creationTime:Date.now()}}async function Gn(e,t){const r=(await t.json()).error;return Ee.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Jn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Yr(e,{refreshToken:t}){const n=Jn(e);return n.append("Authorization",Qr(t)),n}async function zn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Xr(e){return Number(e.replace("s","000"))}function Qr(e){return`${Hn} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Wn(e),s=Jn(e),o=t.getImmediate({optional:!0});if(o){const g=await o.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const a={fid:n,authVersion:Hn,appId:e.appId,sdkVersion:Kn},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await zn(()=>fetch(r,l));if(u.ok){const g=await u.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:Un(g.authToken)}}else throw await Gn("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=/^[cdef][\w-]{21}$/,It="";function ns(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=rs(e);return ts.test(n)?n:It}catch{return It}}function rs(e){return es(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new Map;function Qn(e,t){const n=et(e);Zn(n,t),ss(n,t)}function Zn(e,t){const n=Xn.get(e);if(n)for(const r of n)r(t)}function ss(e,t){const n=os();n&&n.postMessage({key:e,fid:t}),as()}let ke=null;function os(){return!ke&&"BroadcastChannel"in self&&(ke=new BroadcastChannel("[Firebase] FID Change"),ke.onmessage=e=>{Zn(e.data.key,e.data.fid)}),ke}function as(){Xn.size===0&&ke&&(ke.close(),ke=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="firebase-installations-database",cs=1,Te="firebase-installations-store";let dt=null;function $t(){return dt||(dt=Kr(is,cs,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Te)}}})),dt}async function Ze(e,t){const n=et(e),s=(await $t()).transaction(Te,"readwrite"),o=s.objectStore(Te),a=await o.get(n);return await o.put(t,n),await s.done,(!a||a.fid!==t.fid)&&Qn(e,t.fid),t}async function er(e){const t=et(e),r=(await $t()).transaction(Te,"readwrite");await r.objectStore(Te).delete(t),await r.done}async function tt(e,t){const n=et(e),s=(await $t()).transaction(Te,"readwrite"),o=s.objectStore(Te),a=await o.get(n),l=t(a);return l===void 0?await o.delete(n):await o.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&Qn(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e){let t;const n=await tt(e.appConfig,r=>{const s=ls(r),o=us(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===It?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ls(e){const t=e||{fid:ns(),registrationStatus:0};return tr(t)}function us(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ee.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ds(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:fs(e)}:{installationEntry:t}}async function ds(e,t){try{const n=await Zr(e,t);return Ze(e.appConfig,n)}catch(n){throw qn(n)&&n.customData.serverCode===409?await er(e.appConfig):await Ze(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function fs(e){let t=await In(e.appConfig);for(;t.registrationStatus===1;)await Yn(100),t=await In(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Rt(e);return r||n}return t}function In(e){return tt(e,t=>{if(!t)throw Ee.create("installation-not-found");return tr(t)})}function tr(e){return ps(e)?{fid:e.fid,registrationStatus:0}:e}function ps(e){return e.registrationStatus===1&&e.registrationTime+Fn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs({appConfig:e,heartbeatServiceProvider:t},n){const r=gs(e,n),s=Yr(e,n),o=t.getImmediate({optional:!0});if(o){const g=await o.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const a={installation:{sdkVersion:Kn,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await zn(()=>fetch(r,l));if(u.ok){const g=await u.json();return Un(g)}else throw await Gn("Generate Auth Token",u)}function gs(e,{fid:t}){return`${Wn(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(e,t=!1){let n;const r=await tt(e.appConfig,o=>{if(!nr(o))throw Ee.create("not-registered");const a=o.authToken;if(!t&&vs(a))return o;if(a.requestStatus===1)return n=ms(e,t),o;{if(!navigator.onLine)throw Ee.create("app-offline");const l=ys(o);return n=bs(e,l),l}});return n?await n:r.authToken}async function ms(e,t){let n=await kn(e.appConfig);for(;n.authToken.requestStatus===1;)await Yn(100),n=await kn(e.appConfig);const r=n.authToken;return r.requestStatus===0?Bt(e,t):r}function kn(e){return tt(e,t=>{if(!nr(t))throw Ee.create("not-registered");const n=t.authToken;return _s(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function bs(e,t){try{const n=await hs(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ze(e.appConfig,r),n}catch(n){if(qn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await er(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ze(e.appConfig,r)}throw n}}function nr(e){return e!==void 0&&e.registrationStatus===2}function vs(e){return e.requestStatus===2&&!ws(e)}function ws(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ur}function ys(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function _s(e){return e.requestStatus===1&&e.requestTime+Fn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(e){const t=e,{installationEntry:n,registrationPromise:r}=await Rt(t);return r?r.catch(console.error):Bt(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(e,t=!1){const n=e;return await Es(n),(await Bt(n,t)).token}async function Es(e){const{registrationPromise:t}=await Rt(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(e){if(!e||!e.options)throw ft("App Configuration");if(!e.name)throw ft("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ft(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ft(e){return Ee.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="installations",Ss="installations-internal",Ds=e=>{const t=e.getProvider("app").getImmediate(),n=Ts(t),r=Mt(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},As=e=>{const t=e.getProvider("app").getImmediate(),n=Mt(t,rr).getImmediate();return{getId:()=>Is(n),getToken:s=>ks(n,s)}};function Cs(){Xe(new Qe(rr,Ds,"PUBLIC")),Xe(new Qe(Ss,As,"PRIVATE"))}Cs();Ye(Vn,Ot);Ye(Vn,Ot,"esm2017");const xs=(e,t)=>t.some(n=>e instanceof n);let En,Tn;function Ms(){return En||(En=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ns(){return Tn||(Tn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sr=new WeakMap,kt=new WeakMap,or=new WeakMap,pt=new WeakMap,jt=new WeakMap;function Ps(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(ue(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&sr.set(n,e)}).catch(()=>{}),jt.set(t,e),t}function Os(e){if(kt.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});kt.set(e,t)}let Et={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return kt.get(e);if(t==="objectStoreNames")return e.objectStoreNames||or.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ue(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function $s(e){Et=e(Et)}function Rs(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ht(this),t,...n);return or.set(r,t.sort?t.sort():[t]),ue(r)}:Ns().includes(e)?function(...t){return e.apply(ht(this),t),ue(sr.get(this))}:function(...t){return ue(e.apply(ht(this),t))}}function Bs(e){return typeof e=="function"?Rs(e):(e instanceof IDBTransaction&&Os(e),xs(e,Ms())?new Proxy(e,Et):e)}function ue(e){if(e instanceof IDBRequest)return Ps(e);if(pt.has(e))return pt.get(e);const t=Bs(e);return t!==e&&(pt.set(e,t),jt.set(t,e)),t}const ht=e=>jt.get(e);function ar(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),l=ue(a);return r&&a.addEventListener("upgradeneeded",u=>{r(ue(a.result),u.oldVersion,u.newVersion,ue(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),l.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",()=>s())}).catch(()=>{}),l}function gt(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),ue(n).then(()=>{})}const js=["get","getKey","getAll","getAllKeys","count"],Ls=["put","add","delete","clear"],mt=new Map;function Sn(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(mt.get(t))return mt.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Ls.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||js.includes(n)))return;const o=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let g=u.store;return r&&(g=g.index(l.shift())),(await Promise.all([g[n](...l),s&&u.done]))[0]};return mt.set(t,o),o}$s(e=>({...e,get:(t,n,r)=>Sn(t,n)||e.get(t,n,r),has:(t,n)=>!!Sn(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="/firebase-messaging-sw.js",Fs="/firebase-cloud-messaging-push-scope",ir="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ks="https://fcmregistrations.googleapis.com/v1",cr="google.c.a.c_id",Hs="google.c.a.c_l",qs="google.c.a.ts",Ws="google.c.a.e";var Dn;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Dn||(Dn={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var We;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(We||(We={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Us(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="fcm_token_details_db",Gs=5,An="fcm_token_object_Store";async function Js(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(bt))return null;let t=null;return(await ar(bt,Gs,{upgrade:async(r,s,o,a)=>{var l;if(s<2||!r.objectStoreNames.contains(An))return;const u=a.objectStore(An),g=await u.index("fcmSenderId").get(e);if(await u.clear(),!!g){if(s===2){const c=g;if(!c.auth||!c.p256dh||!c.endpoint)return;t={token:c.fcmToken,createTime:(l=c.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:ae(c.vapidKey)}}}else if(s===3){const c=g;t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:ae(c.auth),p256dh:ae(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:ae(c.vapidKey)}}}else if(s===4){const c=g;t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:ae(c.auth),p256dh:ae(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:ae(c.vapidKey)}}}}}})).close(),await gt(bt),await gt("fcm_vapid_details_db"),await gt("undefined"),zs(t)?t:null}function zs(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="firebase-messaging-database",Xs=1,Se="firebase-messaging-store";let vt=null;function Lt(){return vt||(vt=ar(Ys,Xs,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Se)}}})),vt}async function lr(e){const t=Ft(e),r=await(await Lt()).transaction(Se).objectStore(Se).get(t);if(r)return r;{const s=await Js(e.appConfig.senderId);if(s)return await Vt(e,s),s}}async function Vt(e,t){const n=Ft(e),s=(await Lt()).transaction(Se,"readwrite");return await s.objectStore(Se).put(t,n),await s.done,t}async function Qs(e){const t=Ft(e),r=(await Lt()).transaction(Se,"readwrite");await r.objectStore(Se).delete(t),await r.done}function Ft({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},N=new Rn("messaging","Messaging",Zs);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(e,t){const n=await Ht(e),r=dr(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Kt(e.appConfig),s)).json()}catch(a){throw N.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw N.create("token-subscribe-failed",{errorInfo:a})}if(!o.token)throw N.create("token-subscribe-no-token");return o.token}async function to(e,t){const n=await Ht(e),r=dr(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Kt(e.appConfig)}/${t.token}`,s)).json()}catch(a){throw N.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw N.create("token-update-failed",{errorInfo:a})}if(!o.token)throw N.create("token-update-no-token");return o.token}async function ur(e,t){const r={method:"DELETE",headers:await Ht(e)};try{const o=await(await fetch(`${Kt(e.appConfig)}/${t}`,r)).json();if(o.error){const a=o.error.message;throw N.create("token-unsubscribe-failed",{errorInfo:a})}}catch(s){throw N.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Kt({projectId:e}){return`${Ks}/projects/${e}/registrations`}async function Ht({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function dr({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==ir&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=7*24*60*60*1e3;async function ro(e){const t=await ao(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ae(t.getKey("auth")),p256dh:ae(t.getKey("p256dh"))},r=await lr(e.firebaseDependencies);if(r){if(io(r.subscriptionOptions,n))return Date.now()>=r.createTime+no?oo(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ur(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Cn(e.firebaseDependencies,n)}else return Cn(e.firebaseDependencies,n)}async function so(e){const t=await lr(e.firebaseDependencies);t&&(await ur(e.firebaseDependencies,t.token),await Qs(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function oo(e,t){try{const n=await to(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Vt(e.firebaseDependencies,r),n}catch(n){throw await so(e),n}}async function Cn(e,t){const r={token:await eo(e,t),createTime:Date.now(),subscriptionOptions:t};return await Vt(e,r),r.token}async function ao(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Us(t)})}function io(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&s&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return co(t,e),lo(t,e),uo(t,e),t}function co(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const o=t.notification.icon;o&&(e.notification.icon=o)}function lo(e,t){t.data&&(e.data=t.data)}function uo(e,t){var n,r,s,o,a;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const l=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=t.notification)===null||o===void 0?void 0:o.click_action;l&&(e.fcmOptions.link=l);const u=(a=t.fcmOptions)===null||a===void 0?void 0:a.analytics_label;u&&(e.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e){return typeof e=="object"&&!!e&&cr in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");fr("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function fr(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(e){if(!e||!e.options)throw wt("App Configuration Object");if(!e.name)throw wt("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw wt(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function wt(e){return N.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=po(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(e){try{e.swRegistration=await navigator.serviceWorker.register(Vs,{scope:Fs}),e.swRegistration.update().catch(()=>{})}catch(t){throw N.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(e,t){if(!t&&!e.swRegistration&&await go(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw N.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=ir)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(e,t){if(!navigator)throw N.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw N.create("permission-blocked");return await bo(e,t==null?void 0:t.vapidKey),await mo(e,t==null?void 0:t.serviceWorkerRegistration),ro(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(e,t,n){const r=wo(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[cr],message_name:n[Hs],message_time:n[qs],message_device_time:Math.floor(Date.now()/1e3)})}function wo(e){switch(e){case We.NOTIFICATION_CLICKED:return"notification_open";case We.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===We.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(xn(n)):e.onMessageHandler.next(xn(n)));const r=n.data;fo(r)&&r[Ws]==="1"&&await vo(e,n.messageType,r)}const Mn="@firebase/messaging",Nn="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=e=>{const t=new ho(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>yo(t,n)),t},Io=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>pr(t,r)}};function ko(){Xe(new Qe("messaging",_o,"PUBLIC")),Xe(new Qe("messaging-internal",Io,"PRIVATE")),Ye(Mn,Nn),Ye(Mn,Nn,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(){try{await Cr()}catch{return!1}return typeof window<"u"&&xr()&&Mr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(e,t){if(!navigator)throw N.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(e=Bn()){return Eo().then(t=>{if(!t)throw N.create("unsupported-browser")},t=>{throw N.create("indexed-db-unsupported")}),Mt(Nt(e),"messaging").getImmediate()}async function Do(e,t){return e=Nt(e),pr(e,t)}function Ao(e,t){return e=Nt(e),To(e,t)}ko();function Pn(e,t,n){const r=e.slice();return r[12]=t[n],r}function Co(e){let t,n='<h1 class="h1 mb-10">Welcome to MushProd</h1>',r,s,o,a,l,u,g,c,I,P,he,O,H,C,T,Q,De="dashboard",x,S,G,D,J,V,z,ge,me,q,W,be="folder_open",B,j,te,$,F,ve="Temperature & Humidity",we,U,Ae,R,Z,v="thermostat",E,K,ne,M,re,de,fe,se,oe,Ce,ye,qt="notifications_active",nt,xe,Me,Y,Ne,rt,st,Ue,ot,Pe,_e,Wt="description",Ge,at,Ut,Ie=mn(e[0]),k=[];for(let w=0;w<Ie.length;w+=1)k[w]=On(Pn(e,Ie,w));const hr=w=>le(k[w],1,1,()=>{k[w]=null});return{c(){t=d("div"),t.innerHTML=n,r=y(),s=d("div"),o=d("div"),a=d("div"),l=d("div");for(let w=0;w<k.length;w+=1)k[w].c();u=y(),g=d("div"),c=d("div"),I=d("a"),P=d("h2"),he=ie("Dashboard"),O=y(),H=d("hr"),C=y(),T=d("div"),Q=d("span"),Q.textContent=De,x=y(),S=d("div"),G=d("div"),D=d("a"),J=d("h2"),V=ie("Batch Records"),z=y(),ge=d("hr"),me=y(),q=d("div"),W=d("span"),W.textContent=be,B=y(),j=d("div"),te=d("div"),$=d("a"),F=d("h2"),F.textContent=ve,we=y(),U=d("hr"),Ae=y(),R=d("div"),Z=d("span"),Z.textContent=v,E=y(),K=d("div"),ne=d("div"),M=d("a"),re=d("h2"),de=ie("Notification"),fe=y(),se=d("hr"),oe=y(),Ce=d("div"),ye=d("span"),ye.textContent=qt,nt=y(),xe=d("div"),Me=d("div"),Y=d("a"),Ne=d("h2"),rt=ie("Report"),st=y(),Ue=d("hr"),ot=y(),Pe=d("div"),_e=d("span"),_e.textContent=Wt,this.h()},l(w){t=f(w,"DIV",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-1qkl04d"&&(t.innerHTML=n),r=_(w),s=f(w,"DIV",{class:!0});var A=m(s);o=f(A,"DIV",{class:!0});var b=m(o);a=f(b,"DIV",{class:!0});var Fe=m(a);l=f(Fe,"DIV",{class:!0});var Gt=m(l);for(let it=0;it<k.length;it+=1)k[it].l(Gt);Gt.forEach(h),Fe.forEach(h),u=_(b),g=f(b,"DIV",{class:!0});var Jt=m(g);c=f(Jt,"DIV",{class:!0});var zt=m(c);I=f(zt,"A",{href:!0});var Oe=m(I);P=f(Oe,"H2",{class:!0});var Yt=m(P);he=ce(Yt,"Dashboard"),Yt.forEach(h),O=_(Oe),H=f(Oe,"HR",{class:!0}),C=_(Oe),T=f(Oe,"DIV",{class:!0});var Xt=m(T);Q=f(Xt,"SPAN",{class:!0,"data-svelte-h":!0}),X(Q)!=="svelte-50l85p"&&(Q.textContent=De),Xt.forEach(h),Oe.forEach(h),zt.forEach(h),Jt.forEach(h),x=_(b),S=f(b,"DIV",{class:!0});var Qt=m(S);G=f(Qt,"DIV",{class:!0});var Zt=m(G);D=f(Zt,"A",{href:!0});var $e=m(D);J=f($e,"H2",{class:!0});var en=m(J);V=ce(en,"Batch Records"),en.forEach(h),z=_($e),ge=f($e,"HR",{class:!0}),me=_($e),q=f($e,"DIV",{class:!0});var tn=m(q);W=f(tn,"SPAN",{class:!0,"data-svelte-h":!0}),X(W)!=="svelte-196tlom"&&(W.textContent=be),tn.forEach(h),$e.forEach(h),Zt.forEach(h),Qt.forEach(h),B=_(b),j=f(b,"DIV",{class:!0});var nn=m(j);te=f(nn,"DIV",{class:!0});var rn=m(te);$=f(rn,"A",{href:!0});var Re=m($);F=f(Re,"H2",{class:!0,"data-svelte-h":!0}),X(F)!=="svelte-1jbkaxn"&&(F.textContent=ve),we=_(Re),U=f(Re,"HR",{class:!0}),Ae=_(Re),R=f(Re,"DIV",{class:!0});var sn=m(R);Z=f(sn,"SPAN",{class:!0,"data-svelte-h":!0}),X(Z)!=="svelte-1gvu7aq"&&(Z.textContent=v),sn.forEach(h),Re.forEach(h),rn.forEach(h),nn.forEach(h),E=_(b),K=f(b,"DIV",{class:!0});var on=m(K);ne=f(on,"DIV",{class:!0});var an=m(ne);M=f(an,"A",{href:!0});var Be=m(M);re=f(Be,"H2",{class:!0});var cn=m(re);de=ce(cn,"Notification"),cn.forEach(h),fe=_(Be),se=f(Be,"HR",{class:!0}),oe=_(Be),Ce=f(Be,"DIV",{class:!0});var ln=m(Ce);ye=f(ln,"SPAN",{class:!0,"data-svelte-h":!0}),X(ye)!=="svelte-4asn28"&&(ye.textContent=qt),ln.forEach(h),Be.forEach(h),an.forEach(h),on.forEach(h),nt=_(b),xe=f(b,"DIV",{class:!0});var un=m(xe);Me=f(un,"DIV",{class:!0});var dn=m(Me);Y=f(dn,"A",{href:!0});var je=m(Y);Ne=f(je,"H2",{class:!0});var fn=m(Ne);rt=ce(fn,"Report"),fn.forEach(h),st=_(je),Ue=f(je,"HR",{class:!0}),ot=_(je),Pe=f(je,"DIV",{class:!0});var pn=m(Pe);_e=f(pn,"SPAN",{class:!0,"data-svelte-h":!0}),X(_e)!=="svelte-naphhr"&&(_e.textContent=Wt),pn.forEach(h),je.forEach(h),dn.forEach(h),un.forEach(h),b.forEach(h),A.forEach(h),this.h()},h(){p(t,"class","ml-4"),p(l,"class",Ve),p(a,"class",`${Le} sm:col-span-1 md:col-span-4 lg:col-span-3`),p(P,"class",qe),p(H,"class","opacity-50 mb-2"),p(Q,"class","material-symbols-outlined text-7xl md:text-4xl lg:text-8xl"),p(T,"class",He),p(I,"href","/dashboard"),p(c,"class",Ve),p(g,"class",`${Le} sm:col-span-1 md:col-span-2 lg:col-span-1`),p(J,"class",qe),p(ge,"class","opacity-50 mb-2"),p(W,"class","material-symbols-outlined text-7xl md:text-4xl lg:text-8xl"),p(q,"class",He),p(D,"href","/records/batch"),p(G,"class",Ve),p(S,"class",`${Le} sm:col-span-1 md:col-span-2 lg:col-span-1`),p(F,"class","text-sm md:text-lg lg:text-1xl mb-1"),p(U,"class","opacity-50 mb-2"),p(Z,"class","material-symbols-outlined text-7xl md:text-4xl lg:text-8xl"),p(R,"class",He),p($,"href","/records/temp&humid"),p(te,"class",Ve),p(j,"class",`${Le} sm:col-span-1 md:col-span-2 lg:col-span-1`),p(re,"class",qe),p(se,"class","opacity-50 mb-2"),p(ye,"class","material-symbols-outlined text-7xl md:text-4xl lg:text-8xl"),p(Ce,"class",He),p(M,"href","/notification"),p(ne,"class",Ve),p(K,"class",`${Le} sm:col-span-1 md:col-span-2 lg:col-span-1`),p(Ne,"class",qe),p(Ue,"class","opacity-50 mb-2"),p(_e,"class","material-symbols-outlined text-7xl md:text-4xl lg:text-8xl"),p(Pe,"class",He),p(Y,"href","/report"),p(Me,"class",Ve),p(xe,"class",`${Le} sm:col-span-1 md:col-span-2 lg:col-span-1`),p(o,"class","w-full text-token grid sm:grid-cols-1 md:grid-cols-4 gap-4 p-4"),p(s,"class","flex items-center justify-center")},m(w,A){L(w,t,A),L(w,r,A),L(w,s,A),i(s,o),i(o,a),i(a,l);for(let b=0;b<k.length;b+=1)k[b]&&k[b].m(l,null);i(o,u),i(o,g),i(g,c),i(c,I),i(I,P),i(P,he),i(I,O),i(I,H),i(I,C),i(I,T),i(T,Q),i(o,x),i(o,S),i(S,G),i(G,D),i(D,J),i(J,V),i(D,z),i(D,ge),i(D,me),i(D,q),i(q,W),i(o,B),i(o,j),i(j,te),i(te,$),i($,F),i($,we),i($,U),i($,Ae),i($,R),i(R,Z),i(o,E),i(o,K),i(K,ne),i(ne,M),i(M,re),i(re,de),i(M,fe),i(M,se),i(M,oe),i(M,Ce),i(Ce,ye),i(o,nt),i(o,xe),i(xe,Me),i(Me,Y),i(Y,Ne),i(Ne,rt),i(Y,st),i(Y,Ue),i(Y,ot),i(Y,Pe),i(Pe,_e),Ge=!0,at||(Ut=[Ke(I,"click",e[5]),Ke(D,"click",e[6]),Ke($,"click",e[7]),Ke(M,"click",e[8]),Ke(Y,"click",e[9])],at=!0)},p(w,A){if(A&3){Ie=mn(w[0]);let b;for(b=0;b<Ie.length;b+=1){const Fe=Pn(w,Ie,b);k[b]?(k[b].p(Fe,A),ee(k[b],1)):(k[b]=On(Fe),k[b].c(),ee(k[b],1),k[b].m(l,null))}for(xt(),b=Ie.length;b<k.length;b+=1)hr(b);At()}},i(w){if(!Ge){for(let A=0;A<Ie.length;A+=1)ee(k[A]);Ge=!0}},o(w){k=k.filter(Boolean);for(let A=0;A<k.length;A+=1)le(k[A]);Ge=!1},d(w){w&&(h(t),h(r),h(s)),vr(k,w),at=!1,wr(Ut)}}}function xo(e){let t,n,r;return n=new $n({props:{value:void 0}}),{c(){t=d("div"),Tt(n.$$.fragment),this.h()},l(s){t=f(s,"DIV",{class:!0});var o=m(t);St(n.$$.fragment,o),o.forEach(h),this.h()},h(){p(t,"class","flex justify-center items-center h-screen")},m(s,o){L(s,t,o),Dt(n,t,null),r=!0},p:ze,i(s){r||(ee(n.$$.fragment,s),r=!0)},o(s){le(n.$$.fragment,s),r=!1},d(s){s&&h(t),Ct(n)}}}function Mo(e){let t,n;return t=new $n({props:{width:"w-5",value:void 0}}),{c(){Tt(t.$$.fragment)},l(r){St(t.$$.fragment,r)},m(r,s){Dt(t,r,s),n=!0},p:ze,i(r){n||(ee(t.$$.fragment,r),n=!0)},o(r){le(t.$$.fragment,r),n=!1},d(r){Ct(t,r)}}}function No(e){let t;return{c(){t=ie(e[1])},l(n){t=ce(n,e[1])},m(n,r){L(n,t,r)},p(n,r){r&2&&Je(t,n[1])},i:ze,o:ze,d(n){n&&h(t)}}}function On(e){let t,n,r=e[12].farm_name+"",s,o,a,l,u,g,c,I="calendar_month",P,he=Sr()+"",O,H,C,T,Q="schedule",De,x,S,G,D,J,V,z,ge="person",me,q=e[12].farmer_name+"",W,be,B,j,te="pin_drop",$,F=e[12].farm_address+"",ve,we,U;const Ae=[No,Mo],R=[];function Z(v,E){return v[1]?0:1}return x=Z(e),S=R[x]=Ae[x](e),{c(){t=d("div"),n=d("h2"),s=ie(r),o=y(),a=d("div"),l=d("div"),u=d("div"),g=d("div"),c=d("span"),c.textContent=I,P=y(),O=ie(he),H=y(),C=d("div"),T=d("span"),T.textContent=Q,De=y(),S.c(),G=y(),D=d("hr"),J=y(),V=d("p"),z=d("span"),z.textContent=ge,me=y(),W=ie(q),be=y(),B=d("p"),j=d("span"),j.textContent=te,$=y(),ve=ie(F),we=y(),this.h()},l(v){t=f(v,"DIV",{class:!0});var E=m(t);n=f(E,"H2",{class:!0});var K=m(n);s=ce(K,r),K.forEach(h),o=_(E),a=f(E,"DIV",{class:!0});var ne=m(a);l=f(ne,"DIV",{class:!0});var M=m(l);u=f(M,"DIV",{class:!0});var re=m(u);g=f(re,"DIV",{class:!0});var de=m(g);c=f(de,"SPAN",{class:!0,"data-svelte-h":!0}),X(c)!=="svelte-6zyxns"&&(c.textContent=I),P=_(de),O=ce(de,he),de.forEach(h),re.forEach(h),H=_(M),C=f(M,"DIV",{class:!0});var fe=m(C);T=f(fe,"SPAN",{class:!0,"data-svelte-h":!0}),X(T)!=="svelte-12xtlc2"&&(T.textContent=Q),De=_(fe),S.l(fe),fe.forEach(h),M.forEach(h),ne.forEach(h),E.forEach(h),G=_(v),D=f(v,"HR",{class:!0}),J=_(v),V=f(v,"P",{class:!0});var se=m(V);z=f(se,"SPAN",{class:!0,"data-svelte-h":!0}),X(z)!=="svelte-q3esry"&&(z.textContent=ge),me=_(se),W=ce(se,q),se.forEach(h),be=_(v),B=f(v,"P",{class:!0});var oe=m(B);j=f(oe,"SPAN",{class:!0,"data-svelte-h":!0}),X(j)!=="svelte-49ym6"&&(j.textContent=te),$=_(oe),ve=ce(oe,F),we=_(oe),oe.forEach(h),this.h()},h(){p(n,"class",qe),p(c,"class","material-symbols-outlined mr-2"),p(g,"class","flex items-center justify-center"),p(u,"class",""),p(T,"class","material-symbols-outlined mr-2"),p(C,"class","flex items-center justify-end"),p(l,"class","flex flex-col mt-2"),p(a,"class","flex items-center justify-center mr-2 ml-auto"),p(t,"class","flex items-center"),p(D,"class","opacity-50 mb-2"),p(z,"class","material-symbols-outlined mr-2"),p(V,"class","flex items-center"),p(j,"class","material-symbols-outlined mr-2"),p(B,"class","flex items-center")},m(v,E){L(v,t,E),i(t,n),i(n,s),i(t,o),i(t,a),i(a,l),i(l,u),i(u,g),i(g,c),i(g,P),i(g,O),i(l,H),i(l,C),i(C,T),i(C,De),R[x].m(C,null),L(v,G,E),L(v,D,E),L(v,J,E),L(v,V,E),i(V,z),i(V,me),i(V,W),L(v,be,E),L(v,B,E),i(B,j),i(B,$),i(B,ve),i(B,we),U=!0},p(v,E){(!U||E&1)&&r!==(r=v[12].farm_name+"")&&Je(s,r);let K=x;x=Z(v),x===K?R[x].p(v,E):(xt(),le(R[K],1,1,()=>{R[K]=null}),At(),S=R[x],S?S.p(v,E):(S=R[x]=Ae[x](v),S.c()),ee(S,1),S.m(C,null)),(!U||E&1)&&q!==(q=v[12].farmer_name+"")&&Je(W,q),(!U||E&1)&&F!==(F=v[12].farm_address+"")&&Je(ve,F)},i(v){U||(ee(S),U=!0)},o(v){le(S),U=!1},d(v){v&&(h(t),h(G),h(D),h(J),h(V),h(be),h(B)),R[x].d()}}}function Po(e){let t,n,r,s,o,a;t=new Er({props:{transitionIn:Ir,transitionInParams:{duration:200}}});const l=[xo,Co],u=[];function g(c,I){return c[2]?0:1}return r=g(e),s=u[r]=l[r](e),{c(){Tt(t.$$.fragment),n=y(),s.c(),o=hn()},l(c){St(t.$$.fragment,c),n=_(c),s.l(c),o=hn()},m(c,I){Dt(t,c,I),L(c,n,I),u[r].m(c,I),L(c,o,I),a=!0},p(c,[I]){let P=r;r=g(c),r===P?u[r].p(c,I):(xt(),le(u[P],1,1,()=>{u[P]=null}),At(),s=u[r],s?s.p(c,I):(s=u[r]=l[r](c),s.c()),ee(s,1),s.m(o.parentNode,o))},i(c){a||(ee(t.$$.fragment,c),ee(s),a=!0)},o(c){le(t.$$.fragment,c),le(s),a=!1},d(c){c&&(h(n),h(o)),Ct(t,c),u[r].d(c)}}}const Le="card card-hover overflow-hidden ",Ve="p-4 space-y-4",qe="text-1xl md:text-2xl lg:text-2xl",He="flex justify-center items-center text-7xl md:text-4xl lg:text-8xl";function Oo(e,t,n){let r;mr(e,bn,O=>n(2,r=O));const s=async()=>{const O={apiKey:"AIzaSyB6oe9cID6r5VG6dPcYGylqD0eTFXwULNQ",authDomain:"betapeak-1b551.firebaseapp.com",databaseURL:"https://betapeak-1b551-default-rtdb.asia-southeast1.firebasedatabase.app/",projectId:"betapeak-1b551",storageBucket:"betapeak-1b551.appspot.com",messagingSenderId:"442665321534",appId:"1:442665321534:web:10bc3c8a7112a8c4fc7d6f",measurementId:"G-X9CJXFEGY5"};let H;Nr().length?H=Bn():H=Pr(O);const C=So(H);Notification.requestPermission().then(T=>{T==="granted"||console.log("Unable to get permission to notify.")}),Ao(C,T=>{console.log("Message received. ",T)}),Do(C,{vapidKey:"BKCGjREYWFg3CLjeSHSwOSR2cy8JsGvtwmsmq3EPAsJU32IKumg1uLilX_01WtKKGEJhq3L-tHoMeCoItVJgHWs"}).then(T=>{T||console.log("No registration token available. Request permission to generate one.")}).catch(T=>{console.log("An error occurred while retrieving token. ",T)})};let o=[];gn(async()=>{n(0,o=await Tr()),s()});function a(O){kr.set(O)}br(bn,r=!1,r);let l;gn(()=>{vn(),setInterval(()=>{n(1,l=vn())},1e3)});function u(O){a("Records"),Dr(O)}return[o,l,r,a,u,()=>a("Dashboard"),()=>u(1),()=>u(4),()=>a("Notification"),()=>a("Report")]}class Wo extends yr{constructor(t){super(),_r(this,t,Oo,Po,gr,{})}}export{Wo as component};
