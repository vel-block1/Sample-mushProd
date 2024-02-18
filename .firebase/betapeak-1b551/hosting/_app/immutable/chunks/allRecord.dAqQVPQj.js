import{d as p,a as u,c as l,q as f,i,l as R,o as b,T as _,b as q}from"./firebase.CXGZVSlo.js";import{a as D}from"./index.DTi6dYAV.js";async function S(){const o=p(u,"user","123456"),s=l(o,"batch"),a=f(s),c=await i(a);let t=0;return c.forEach(e=>{const n=e.data();n.batch_total_bags&&(t+=n.batch_total_bags)}),t}async function E(){const o=p(u,"user","123456"),s=l(o,"batch"),a=f(s),c=await i(a);let t=0;return c.forEach(e=>{const n=e.data();n.batch_total_removed&&(t+=n.batch_total_removed)}),t}async function T(){const o=p(u,"user","123456"),s=l(o,"batch"),a=f(s),c=await i(a);let t=0;const e=[];return c.forEach(async n=>{const r=l(n.ref,"batch_harvest"),h=i(r);e.push(h.then(y=>{y.forEach(g=>{const m=g.data();m&&m.grams&&(t+=m.grams)})}))}),await Promise.all(e),t}async function C(){const o=l(u,"user","123456","bags record"),s=f(o,b("date","desc"),R(1));try{const a=await i(s);if(a.empty)return null;const t=a.docs[0].data();if(t.date&&t.date instanceof _){const e=t.date.toDate();return D(e,"MMMM dd, yyyy")}else return console.log("Invalid date format or missing date field"),null}catch(a){return console.error("Error fetching data:",a),null}}async function H(){const o=l(u,"user","123456","harvest record"),s=f(o,b("date_harvested","desc"),R(1));try{const a=await i(s);if(a.empty)return null;const t=a.docs[0].data();if(t.date_harvested&&t.date_harvested instanceof _){const e=t.date_harvested.toDate();return D(e,"MMMM dd, yyyy")}else return console.log("Invalid date format or missing date field"),null}catch(a){return console.error("Error fetching data:",a),null}}async function P(o,s,a){const c="https://mushprod-api-d34b935be1f6.herokuapp.com/predict",t={bags:o,temp:s,hum:a};return new Promise(async(e,n)=>{fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(r=>{if(!r.ok)throw new Error("HTTP error! Status:"+r.status);return r.json()}).then(r=>{e(r.predicted_weight)}).catch(r=>console.log("Error in fetching data:",r))})}async function j(){return new Promise((o,s)=>{const a=p(u,"user","123456"),c=l(a,"temp and humid"),t=f(c,b("date","desc"));q(t,e=>{let n=0,r=0,h=0,y;e.forEach(v=>{const d=v.data();d.date&&d.date.toDate&&(d.date=D(d.date.toDate(),"MMMM dd, yyyy")),d.id=v.id,y=d.date,n+=d["ave temp"]||0,r+=d["ave humidity"]||0,h++});const g=n/h,m=r/h;o({date:y,aveTemp:g,aveHumidity:m})},e=>{s(e)})})}export{C as L,T as a,S as b,P as c,E as d,H as e,j as g};