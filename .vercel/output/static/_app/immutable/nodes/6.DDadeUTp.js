import{s as Mt,l as lt,i as z,n as ot,f as c,k as xt,e as f,a as C,t as F,c as d,b,p as et,g as N,d as P,q as v,h as a,u as rt,z as Gt,j as x,x as Ut,o as Kt,O as Yt,m as Qt,v as Jt,y as Wt}from"../chunks/scheduler.QbWIzjUv.js";import{S as Rt,i as Ht,c as mt,a as ht,m as _t,b as st,e as Xt,t as at,d as pt,g as Zt,f as te}from"../chunks/index.COTcGcuD.js";import{e as Ft,u as ee,d as se}from"../chunks/each.DrhyqX_I.js";import{g as Ot,n as vt,f as ae,P as le,a as oe}from"../chunks/index.DTi6dYAV.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.BEtOAtSO.js";import{P as re}from"../chunks/Paginator.Cr8dbEHU.js";import{M as ne}from"../chunks/Modal.BaEBjw_v.js";import{T as ie}from"../chunks/Toast.CyJWZj9n.js";import{g as ce}from"../chunks/stores.GkbJHTyM.js";import{d as Dt,a as zt,p as fe,c as de,q as ue,o as me,b as he}from"../chunks/firebase.CXGZVSlo.js";import{a as Pt}from"../chunks/toast.D8XhVVf2.js";function $t(o){let e,t,s,l=`<i class="fa-solid fa-trash mr-2"></i>

				Please Confirm to Remove`,u,D,p,m,g="<h1>Are you sure you want to remove the fruiting bags?</h1>",i,h,n,E="Yes",_,T,O=o[0].buttonTextCancel+"",L,I,H,B,$;return{c(){e=f("div"),t=f("header"),s=f("div"),s.innerHTML=l,u=C(),D=f("hr"),p=C(),m=f("div"),m.innerHTML=g,i=C(),h=f("footer"),n=f("button"),n.textContent=E,_=C(),T=f("button"),L=F(O),this.h()},l(w){e=d(w,"DIV",{class:!0});var y=b(e);t=d(y,"HEADER",{class:!0});var r=b(t);s=d(r,"DIV",{class:!0,"data-svelte-h":!0}),et(s)!=="svelte-avmj2w"&&(s.innerHTML=l),r.forEach(c),u=N(y),D=d(y,"HR",{class:!0}),p=N(y),m=d(y,"DIV",{"data-svelte-h":!0}),et(m)!=="svelte-gzi7jf"&&(m.innerHTML=g),i=N(y),h=d(y,"FOOTER",{class:!0});var M=b(h);n=d(M,"BUTTON",{class:!0,"data-svelte-h":!0}),et(n)!=="svelte-rreyl5"&&(n.textContent=E),_=N(M),T=d(M,"BUTTON",{class:!0});var k=b(T);L=P(k,O),k.forEach(c),M.forEach(c),y.forEach(c),this.h()},h(){v(s,"class","flex items-center"),v(t,"class",ve),v(D,"class","opacity-50"),v(n,"class","btn variant-filled-error"),v(T,"class",I="btn "+o[0].buttonNeutral),v(h,"class",H="modal-footer "+o[0].regionFooter),v(e,"class","modal-example-form "+pe)},m(w,y){z(w,e,y),a(e,t),a(t,s),a(e,u),a(e,D),a(e,p),a(e,m),a(e,i),a(e,h),a(h,n),a(h,_),a(h,T),a(T,L),B||($=[rt(n,"click",o[3]),rt(T,"click",function(){Gt(o[0].onClose)&&o[0].onClose.apply(this,arguments)})],B=!0)},p(w,y){o=w,y&1&&O!==(O=o[0].buttonTextCancel+"")&&x(L,O),y&1&&I!==(I="btn "+o[0].buttonNeutral)&&v(T,"class",I),y&1&&H!==(H="modal-footer "+o[0].regionFooter)&&v(h,"class",H)},d(w){w&&c(e),B=!1,Ut($)}}}function _e(o){let e,t=o[1][0]&&$t(o);return{c(){t&&t.c(),e=lt()},l(s){t&&t.l(s),e=lt()},m(s,l){t&&t.m(s,l),z(s,e,l)},p(s,[l]){s[1][0]?t?t.p(s,l):(t=$t(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:ot,o:ot,d(s){s&&c(e),t&&t.d(s)}}}const pe="card p-4 w-modal shadow-xl space-y-4 ",ve="text-2xl font-bold";function be(o,e,t){let s,{parent:l}=e;const u=Ot();xt(o,u,n=>t(1,s=n));const D=ce();let{id:p}=e,m;function g(){Pt(D,"Notification Removed Successfully")}function i(){Pt(D,"Failed to Remove Notification")}vt.subscribe(n=>{m=n,t(4,p=m.id)});async function h(){const n=Dt(zt,"user","123456"),E=Dt(n,"notifications",p);try{await fe(E),g(),u.close()}catch{i()}}return o.$$set=n=>{"parent"in n&&t(0,l=n.parent),"id"in n&&t(4,p=n.id)},[l,s,u,h,p]}class ge extends Rt{constructor(e){super(),Ht(this,e,be,_e,Mt,{parent:0,id:4})}}function qt(o){let e,t,s,l=`<i class="fa-solid fa-circle-exclamation mr-2"></i>
				Notification`,u,D,p,m,g,i,h,n,E,_,T,O,L,I,H,B,$,w,y,r,M,k,j,G,U,V,q,R,Q,X,Z,K,J,tt,W,Y,bt,nt,it,gt,Ct;return{c(){e=f("div"),t=f("header"),s=f("div"),s.innerHTML=l,u=C(),D=f("article"),p=C(),m=f("hr"),g=C(),i=f("div"),h=f("h1"),n=f("strong"),E=f("i"),_=C(),T=F(o[3]),O=C(),L=f("h1"),I=f("strong"),H=f("i"),B=C(),$=F(o[1]),w=C(),y=f("div"),r=f("h1"),M=F("Optimal Temperature exceed : "),k=f("strong"),j=F(o[4]),G=F("°C"),U=C(),V=f("h1"),q=F("Optimal Humidity exceed : "),R=f("strong"),Q=F(o[5]),X=F("%"),Z=C(),K=f("blockquote"),J=F(o[2]),tt=C(),W=f("footer"),Y=f("button"),bt=F("OK"),this.h()},l(A){e=d(A,"DIV",{class:!0});var S=b(e);t=d(S,"HEADER",{class:!0});var Nt=b(t);s=d(Nt,"DIV",{class:!0,"data-svelte-h":!0}),et(s)!=="svelte-jf1cog"&&(s.innerHTML=l),Nt.forEach(c),u=N(S),D=d(S,"ARTICLE",{}),b(D).forEach(c),p=N(S),m=d(S,"HR",{class:!0}),g=N(S),i=d(S,"DIV",{class:!0});var ct=b(i);h=d(ct,"H1",{class:!0});var St=b(h);n=d(St,"STRONG",{});var ft=b(n);E=d(ft,"I",{class:!0}),b(E).forEach(c),_=N(ft),T=P(ft,o[3]),ft.forEach(c),St.forEach(c),O=N(ct),L=d(ct,"H1",{class:!0});var It=b(L);I=d(It,"STRONG",{});var dt=b(I);H=d(dt,"I",{class:!0}),b(H).forEach(c),B=N(dt),$=P(dt,o[1]),dt.forEach(c),It.forEach(c),ct.forEach(c),w=N(S),y=d(S,"DIV",{class:!0});var ut=b(y);r=d(ut,"H1",{class:!0});var Tt=b(r);M=P(Tt,"Optimal Temperature exceed : "),k=d(Tt,"STRONG",{class:!0});var yt=b(k);j=P(yt,o[4]),G=P(yt,"°C"),yt.forEach(c),Tt.forEach(c),U=N(ut),V=d(ut,"H1",{class:!0});var Et=b(V);q=P(Et,"Optimal Humidity exceed : "),R=d(Et,"STRONG",{class:!0});var kt=b(R);Q=P(kt,o[5]),X=P(kt,"%"),kt.forEach(c),Et.forEach(c),ut.forEach(c),Z=N(S),K=d(S,"BLOCKQUOTE",{class:!0});var Lt=b(K);J=P(Lt,o[2]),Lt.forEach(c),tt=N(S),W=d(S,"FOOTER",{class:!0});var Bt=b(W);Y=d(Bt,"BUTTON",{class:!0});var wt=b(Y);bt=P(wt,"OK"),wt.forEach(c),Bt.forEach(c),S.forEach(c),this.h()},h(){v(s,"class","flex items-center justify-center"),v(t,"class",Ee),v(m,"class","opacity-50"),v(E,"class","fa-solid fa-bell mr-1"),v(h,"class","text-lg"),v(H,"class","fa-solid fa-calendar-days mr-1"),v(L,"class","text-lg"),v(i,"class","flex justify-between items-center"),v(k,"class","text-1xl md:text-1xl lg:text-2xl"),v(r,"class","text-base"),v(R,"class","text-1xl md:text-1xl lg:text-2xl"),v(V,"class","text-base"),v(y,"class","flex justify-between items-center"),v(K,"class","blockquote"),v(Y,"class",nt="btn "+o[0].buttonPositive),v(W,"class",it="modal-footer "+o[0].regionFooter),v(e,"class","modal-example-form "+ye)},m(A,S){z(A,e,S),a(e,t),a(t,s),a(e,u),a(e,D),a(e,p),a(e,m),a(e,g),a(e,i),a(i,h),a(h,n),a(n,E),a(n,_),a(n,T),a(i,O),a(i,L),a(L,I),a(I,H),a(I,B),a(I,$),a(e,w),a(e,y),a(y,r),a(r,M),a(r,k),a(k,j),a(k,G),a(y,U),a(y,V),a(V,q),a(V,R),a(R,Q),a(R,X),a(e,Z),a(e,K),a(K,J),a(e,tt),a(e,W),a(W,Y),a(Y,bt),gt||(Ct=rt(Y,"click",o[8]),gt=!0)},p(A,S){S&8&&x(T,A[3]),S&2&&x($,A[1]),S&16&&x(j,A[4]),S&32&&x(Q,A[5]),S&4&&x(J,A[2]),S&1&&nt!==(nt="btn "+A[0].buttonPositive)&&v(Y,"class",nt),S&1&&it!==(it="modal-footer "+A[0].regionFooter)&&v(W,"class",it)},d(A){A&&c(e),gt=!1,Ct()}}}function Te(o){let e,t=o[6][0]&&qt(o);return{c(){t&&t.c(),e=lt()},l(s){t&&t.l(s),e=lt()},m(s,l){t&&t.m(s,l),z(s,e,l)},p(s,[l]){s[6][0]?t?t.p(s,l):(t=qt(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:ot,o:ot,d(s){s&&c(e),t&&t.d(s)}}}const ye="card p-4 w-modal shadow-xl space-y-4",Ee="text-2xl font-bold";function ke(o,e,t){let s,{parent:l}=e;const u=Ot();xt(o,u,E=>t(6,s=E));function D(){u.close()}let p,m,g,i,h,n;return vt.subscribe(E=>{n=E,n.id,t(1,p=n.date),t(3,g=n.alertTitle),t(2,m=n.alertMessage),t(4,i=n.temperature),t(5,h=n.humidity)}),o.$$set=E=>{"parent"in E&&t(0,l=E.parent)},[l,p,m,g,i,h,s,u,D]}class De extends Rt{constructor(e){super(),Ht(this,e,ke,Te,Mt,{parent:0})}}function At(o,e,t){const s=o.slice();return s[12]=e[t],s}function Me(o){let e,t,s,l,u,D=`<tr><th><div class="flex items-center"><span class="material-symbols-outlined mr-2">calendar_month</span>
							Date</div></th> <th><div class="flex items-center"><span class="material-symbols-outlined mr-2">notifications_active</span>
							Alert Title</div> </th><th><div class="flex items-center"><span class="material-symbols-outlined mr-2">device_thermostat</span>
							Temperature</div> </th><th><div class="flex items-center"><span class="material-symbols-outlined mr-2">humidity_mid</span>
							Humidity</div></th> <th><div class="flex items-center"><span class="material-symbols-outlined mr-2">notifications_active</span>
							Alert Message</div></th> <th></th></tr>`,p,m,g=[],i=new Map,h,n,E,_,T,O,L,I,H;e=new ie({});let B=Ft(o[2]);const $=r=>r[12].id;for(let r=0;r<B.length;r+=1){let M=At(o,B,r),k=$(M);i.set(k,g[r]=Vt(k,M))}function w(r){o[8](r)}let y={showFirstLastButtons:!1,showPreviousNextButtons:!0};return o[0]!==void 0&&(y.settings=o[0]),T=new re({props:y}),Qt.push(()=>te(T,"settings",w)),{c(){mt(e.$$.fragment),t=C(),s=f("div"),l=f("table"),u=f("thead"),u.innerHTML=D,p=C(),m=f("tbody");for(let r=0;r<g.length;r+=1)g[r].c();h=C(),n=f("tfoot"),E=f("tr"),_=f("th"),mt(T.$$.fragment),L=C(),I=f("br"),this.h()},l(r){ht(e.$$.fragment,r),t=N(r),s=d(r,"DIV",{class:!0});var M=b(s);l=d(M,"TABLE",{class:!0});var k=b(l);u=d(k,"THEAD",{"data-svelte-h":!0}),et(u)!=="svelte-1fpwlhx"&&(u.innerHTML=D),p=N(k),m=d(k,"TBODY",{});var j=b(m);for(let q=0;q<g.length;q+=1)g[q].l(j);j.forEach(c),h=N(k),n=d(k,"TFOOT",{});var G=b(n);E=d(G,"TR",{});var U=b(E);_=d(U,"TH",{colspan:!0});var V=b(_);ht(T.$$.fragment,V),V.forEach(c),L=N(U),I=d(U,"BR",{}),U.forEach(c),G.forEach(c),k.forEach(c),M.forEach(c),this.h()},h(){v(_,"colspan","3"),v(l,"class","table table-hover"),v(s,"class","m-5")},m(r,M){_t(e,r,M),z(r,t,M),z(r,s,M),a(s,l),a(l,u),a(l,p),a(l,m);for(let k=0;k<g.length;k+=1)g[k]&&g[k].m(m,null);a(l,h),a(l,n),a(n,E),a(E,_),_t(T,_,null),a(E,L),a(E,I),H=!0},p(r,M){M&28&&(B=Ft(r[2]),g=ee(g,M,$,1,r,B,i,m,se,Vt,null,At));const k={};!O&&M&1&&(O=!0,k.settings=r[0],Jt(()=>O=!1)),T.$set(k)},i(r){H||(at(e.$$.fragment,r),at(T.$$.fragment,r),H=!0)},o(r){st(e.$$.fragment,r),st(T.$$.fragment,r),H=!1},d(r){r&&(c(t),c(s)),pt(e,r);for(let M=0;M<g.length;M+=1)g[M].d();pt(T)}}}function Re(o){let e,t,s;return t=new le({props:{value:void 0}}),{c(){e=f("div"),mt(t.$$.fragment),this.h()},l(l){e=d(l,"DIV",{class:!0});var u=b(e);ht(t.$$.fragment,u),u.forEach(c),this.h()},h(){v(e,"class","flex justify-center items-center h-fit")},m(l,u){z(l,e,u),_t(t,e,null),s=!0},p:ot,i(l){s||(at(t.$$.fragment,l),s=!0)},o(l){st(t.$$.fragment,l),s=!1},d(l){l&&c(e),pt(t)}}}function Vt(o,e){let t,s,l=e[12].date+"",u,D,p,m=e[12].alertTitle+"",g,i,h,n=e[12].temperature+"",E,_,T,O=e[12].humidity+"",L,I,H,B=jt(e[12].alertMessage)+"",$,w,y,r,M='<i class="fa-solid fa-trash"></i> <span>Remove</span>',k,j,G;function U(){return e[6](e[12])}function V(){return e[7](e[12])}return{key:o,first:null,c(){t=f("tr"),s=f("td"),u=F(l),D=C(),p=f("td"),g=F(m),i=C(),h=f("td"),E=F(n),_=C(),T=f("td"),L=F(O),I=C(),H=f("td"),$=F(B),w=C(),y=f("td"),r=f("button"),r.innerHTML=M,k=C(),this.h()},l(q){t=d(q,"TR",{class:!0});var R=b(t);s=d(R,"TD",{});var Q=b(s);u=P(Q,l),Q.forEach(c),D=N(R),p=d(R,"TD",{});var X=b(p);g=P(X,m),X.forEach(c),i=N(R),h=d(R,"TD",{});var Z=b(h);E=P(Z,n),Z.forEach(c),_=N(R),T=d(R,"TD",{});var K=b(T);L=P(K,O),K.forEach(c),I=N(R),H=d(R,"TD",{});var J=b(H);$=P(J,B),J.forEach(c),w=N(R),y=d(R,"TD",{class:!0});var tt=b(y);r=d(tt,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),et(r)!=="svelte-itiafl"&&(r.innerHTML=M),tt.forEach(c),k=N(R),R.forEach(c),this.h()},h(){v(r,"type","button"),v(r,"class","btn btn-sm variant-filled-error"),v(y,"class",""),v(t,"class",""),this.first=t},m(q,R){z(q,t,R),a(t,s),a(s,u),a(t,D),a(t,p),a(p,g),a(t,i),a(t,h),a(h,E),a(t,_),a(t,T),a(T,L),a(t,I),a(t,H),a(H,$),a(t,w),a(t,y),a(y,r),a(t,k),j||(G=[rt(r,"click",Wt(U)),rt(t,"click",V)],j=!0)},p(q,R){e=q,R&4&&l!==(l=e[12].date+"")&&x(u,l),R&4&&m!==(m=e[12].alertTitle+"")&&x(g,m),R&4&&n!==(n=e[12].temperature+"")&&x(E,n),R&4&&O!==(O=e[12].humidity+"")&&x(L,O),R&4&&B!==(B=jt(e[12].alertMessage)+"")&&x($,B)},d(q){q&&c(t),j=!1,Ut(G)}}}function He(o){let e,t,s,l,u,D;e=new ne({props:{transitionIn:ae,transitionInParams:{duration:200}}});const p=[Re,Me],m=[];function g(i,h){return i[1]?0:1}return s=g(o),l=m[s]=p[s](o),{c(){mt(e.$$.fragment),t=C(),l.c(),u=lt()},l(i){ht(e.$$.fragment,i),t=N(i),l.l(i),u=lt()},m(i,h){_t(e,i,h),z(i,t,h),m[s].m(i,h),z(i,u,h),D=!0},p(i,[h]){let n=s;s=g(i),s===n?m[s].p(i,h):(Zt(),st(m[n],1,1,()=>{m[n]=null}),Xt(),l=m[s],l?l.p(i,h):(l=m[s]=p[s](i),l.c()),at(l,1),l.m(u.parentNode,u))},i(i){D||(at(e.$$.fragment,i),at(l),D=!0)},o(i){st(e.$$.fragment,i),st(l),D=!1},d(i){i&&(c(t),c(u)),pt(e,i),m[s].d(i)}}}function jt(o,e=22){return o.length>e?`${o.slice(0,e)}...`:o}function Oe(o,e,t){let s,l=[],u=!0,D;Kt(async()=>{const _=Dt(zt,"user","123456"),T=de(_,"notifications"),O=ue(T,me("date","desc"));D=he(O,L=>{t(5,l=[]),L.forEach(I=>{const H=I.data();H.date&&typeof H.date.toDate=="function"&&(H.date=oe(H.date.toDate(),"MMMM dd, yyyy")),H.id=I.id,l.push(H),t(1,u=!1)})})}),Yt(()=>{D&&D()});let p={page:0,limit:5,size:l.length,amounts:[1,2,5,10]};const m=Ot();function g(_){const T={ref:De};vt.set({id:_.id,date:_.date,alertTitle:_.alertTitle,temperature:_.temperature,humidity:_.humidity,alertMessage:_.alertMessage});const O={type:"component",component:T,title:"",body:""};m.trigger(O)}function i(_){const T={ref:ge};vt.set({id:_.id,date:_.date,alertTitle:_.alertTitle,temperature:_.temperature,humidity:_.humidity,alertMessage:_.alertMessage});const O={type:"component",component:T,title:"",body:""};m.trigger(O)}const h=_=>{i(_)},n=_=>g(_);function E(_){p=_,t(0,p),t(5,l)}return o.$$.update=()=>{o.$$.dirty&32&&t(0,p.size=l.length,p),o.$$.dirty&33&&t(2,s=l.slice(p.page*p.limit,p.page*p.limit+p.limit))},[p,u,s,g,i,l,h,n,E]}class Ae extends Rt{constructor(e){super(),Ht(this,e,Oe,He,Mt,{})}}export{Ae as component};
