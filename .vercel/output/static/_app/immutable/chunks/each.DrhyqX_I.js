import{t as q,b as z}from"./index.COTcGcuD.js";import{x as B}from"./scheduler.QbWIzjUv.js";function F(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function G(e,f){e.d(1),f.delete(e.key)}function C(e,f){z(e,1,1,()=>{f.delete(e.key)})}function H(e,f){e.f(),C(e,f)}function I(e,f,v,S,k,g,o,A,p,b,u,j){let i=e.length,c=g.length,d=i;const w={};for(;d--;)w[e[d].key]=d;const h=[],a=new Map,y=new Map,_=[];for(d=c;d--;){const n=j(k,g,d),s=v(n);let t=o.get(s);t?S&&_.push(()=>t.p(n,f)):(t=b(s,n),t.c()),a.set(s,h[d]=t),s in w&&y.set(s,Math.abs(d-w[s]))}const x=new Set,M=new Set;function m(n){q(n,1),n.m(A,u),o.set(n.key,n),u=n.first,c--}for(;i&&c;){const n=h[c-1],s=e[i-1],t=n.key,l=s.key;n===s?(u=n.first,i--,c--):a.has(l)?!o.has(t)||x.has(t)?m(n):M.has(l)?i--:y.get(t)>y.get(l)?(M.add(t),m(n)):(x.add(l),i--):(p(s,o),i--)}for(;i--;){const n=e[i];a.has(n.key)||p(n,o)}for(;c;)m(h[c-1]);return B(_),h}export{G as d,F as e,H as f,I as u};