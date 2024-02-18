import{s as ml,a as h,l as nl,g as u,i as bt,f as n,o as _l,e,t as m,c as s,b as d,p as k,d as _,q as r,_ as bl,h as t,u as pl,j as H,w as Ke,n as gl}from"../chunks/scheduler.QbWIzjUv.js";import{S as jl,i as Tl,c as Qe,a as We,m as Xe,b as Ce,e as Cl,t as Ee,d as Ze,g as El}from"../chunks/index.COTcGcuD.js";import{e as Ft}from"../chunks/each.DrhyqX_I.js";import{f as Dl,g as Hl,r as yl,P as wl,a as Il}from"../chunks/index.DTi6dYAV.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.BEtOAtSO.js";import{M as Al}from"../chunks/Modal.BaEBjw_v.js";import{d as Ml}from"../chunks/DateAndTime.CvR02A0R.js";import{f as Pl}from"../chunks/staticData.D_1_iovX.js";import{d as Rl,b as Vl,a as kl,L as Bl,e as Ll,g as Sl,c as Nl}from"../chunks/allRecord.dAqQVPQj.js";import{d as xl,a as Gl,c as Fl,q as $l,o as Ol,b as ql}from"../chunks/firebase.CXGZVSlo.js";import{g as zl,h as Yl,i as Ul,j as Jl,H as Kl,E as Ql}from"../chunks/everyTempHumid.m0Bw7wMQ.js";function Wl(l){html2pdf(l,{margin:10,filename:"report.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2,logging:!0,dpi:192,letterRendering:!0},jsPDFL:{unit:"mm",format:"a4",orientation:"portrait"}})}function ol(l,o,v){const c=l.slice();return c[23]=o[v],c}function il(l,o,v){const c=l.slice();return c[23]=o[v],c}function vl(l,o,v){const c=l.slice();return c[23]=o[v],c}function dl(l,o,v){const c=l.slice();return c[30]=o[v],c}function Xl(l){let o,v,c,j='<i class="fa-solid fa-print mr-2"></i>Generate Report',b,T,p,C,R="MushProd: NodeMCU-Based and Yield Prediction System for Oyster Mushroom",f,g,M="I. System Report",x,E,y,D,w,P="II. Growing Bag Analysis",B,L,gt=`This table provides an analysis of various mushroom production batches, including data\r
					such as growth duration, total bags planted, grams produced, and the current status of\r
					each batch.`,nt,K,V,U,q="III. Harvest Data",Q,z,At=`This table provides a overview of the harvest data for batches. It includes the data such\r
					as the Batch Code, the Number of Harvests, and the Total Grams Harvested for each\r
					respective batch.`,ut,$,Z,ot,ft,I,S,jt='<th class="svelte-13rjv4b">Batch Code</th> <th class="svelte-13rjv4b">Number of Harvest</th> <th class="svelte-13rjv4b">Total Grams Harvested</th>',It,J,W,tt,it,yt="IV. Mushroom Data",pt,ct,Tt,$t='<th class="svelte-13rjv4b">Type</th> <th class="svelte-13rjv4b">Total Bags</th> <th class="svelte-13rjv4b">Total Harvested</th> <th class="svelte-13rjv4b">Total Bags Removed</th>',Ot,et,Ct,G="Oyster Mushroom",N,O,qt,te,Mt,zt,ee,Pt,Yt,se,wt,Y,le,Ls="<strong>Type:</strong> Oyster Mushroom",ts,Vt,ae,Ss="Total Bags:",es,we,ss,ls,kt,re,Ns="Total Harvested:",as,Ie,rs,ns,Bt,ne,xs="Total Bags Removed:",os,Ae,is,vs,Et,Ut,Gs="V. Temperature and Humidity Condition",ds,Jt,Fs=`This table presents a chronological record of temperature and humidity levels during\r
					specific dates in the mushroom cultivation environment. The average temperature, measured\r
					in degrees celsius, and average humidity, expressed as a percentage, are key metrics\r
					captured for monitoring and assessing the growing conditions`,cs,oe,Kt,hs,ie,Rt,ve,$s='<th class="svelte-13rjv4b">Date</th> <th class="svelte-13rjv4b">Average Temperature</th> <th class="svelte-13rjv4b">Average Humidity</th>',us,fs,Dt,Qt,Os="VI. Yield Prediction",ms,Wt,qs=`This table provides predictions for mushroom yield based on the gathered data and\r
					conditions.`,_s,de,Lt,ce,zs='<th class="svelte-13rjv4b">Starting Date</th> <th class="svelte-13rjv4b">Last Date</th> <th class="svelte-13rjv4b">Number of Planted Bags</th> <th class="svelte-13rjv4b">Average Temperature</th> <th class="svelte-13rjv4b">Average Humidity</th> <th class="svelte-13rjv4b">Predicted Yield</th>',bs,vt,he,Me,ps,ue,Pe,gs,fe,Re,js,Xt,Ve,Ts,Cs,Zt,ke,Es,Ds,me,Be,Hs,X,ys,Le,ws,Se,Is,Ne,As,xe,Ms,Ge,Ps,Fe,Rs,F,Vs,Ys,_e=Ft(l[1]),st=[];for(let a=0;a<_e.length;a+=1)st[a]=cl(dl(l,_e,a));let be=Ft(l[7]),lt=[];for(let a=0;a<be.length;a+=1)lt[a]=hl(vl(l,be,a));ot=new Kl({});let pe=Ft(l[6]),at=[];for(let a=0;a<pe.length;a+=1)at[a]=ul(il(l,pe,a));Kt=new Ql({});let ge=Ft(l[5]),rt=[];for(let a=0;a<ge.length;a+=1)rt[a]=fl(ol(l,ge,a));return{c(){o=e("div"),v=e("div"),c=e("button"),c.innerHTML=j,b=h(),T=e("div"),p=e("div"),C=e("h1"),C.textContent=R,f=h(),g=e("h2"),g.textContent=M,x=h(),E=e("div");for(let a=0;a<st.length;a+=1)st[a].c();y=h(),D=e("div"),w=e("h2"),w.textContent=P,B=h(),L=e("p"),L.textContent=gt,nt=h();for(let a=0;a<lt.length;a+=1)lt[a].c();K=h(),V=e("div"),U=e("h2"),U.textContent=q,Q=h(),z=e("p"),z.textContent=At,ut=h(),$=e("div"),Z=e("div"),Qe(ot.$$.fragment),ft=h(),I=e("table"),S=e("tr"),S.innerHTML=jt,It=h();for(let a=0;a<at.length;a+=1)at[a].c();J=h(),W=e("div"),tt=e("div"),it=e("h2"),it.textContent=yt,pt=h(),ct=e("table"),Tt=e("tr"),Tt.innerHTML=$t,Ot=h(),et=e("tr"),Ct=e("td"),Ct.textContent=G,N=h(),O=e("td"),qt=m(l[2]),te=h(),Mt=e("td"),zt=m(l[3]),ee=h(),Pt=e("td"),Yt=m(l[4]),se=h(),wt=e("div"),Y=e("div"),le=e("p"),le.innerHTML=Ls,ts=h(),Vt=e("p"),ae=e("strong"),ae.textContent=Ss,es=h(),we=m(l[2]),ss=m(" bags have been planted."),ls=h(),kt=e("p"),re=e("strong"),re.textContent=Ns,as=m(" A total of "),Ie=m(l[3]),rs=m(" grams harvested."),ns=h(),Bt=e("p"),ne=e("strong"),ne.textContent=xs,os=h(),Ae=m(l[4]),is=m(" bags have been removed."),vs=h(),Et=e("div"),Ut=e("h2"),Ut.textContent=Gs,ds=h(),Jt=e("p"),Jt.textContent=Fs,cs=h(),oe=e("div"),Qe(Kt.$$.fragment),hs=h(),ie=e("div"),Rt=e("table"),ve=e("tr"),ve.innerHTML=$s,us=h();for(let a=0;a<rt.length;a+=1)rt[a].c();fs=h(),Dt=e("div"),Qt=e("h2"),Qt.textContent=Os,ms=h(),Wt=e("p"),Wt.textContent=qs,_s=h(),de=e("div"),Lt=e("table"),ce=e("tr"),ce.innerHTML=zs,bs=h(),vt=e("tr"),he=e("td"),Me=m(l[11]),ps=h(),ue=e("td"),Pe=m(l[12]),gs=h(),fe=e("td"),Re=m(l[2]),js=h(),Xt=e("td"),Ve=m(l[9]),Ts=m("°C"),Cs=h(),Zt=e("td"),ke=m(l[10]),Es=m(" %"),Ds=h(),me=e("td"),Be=m(l[8]),Hs=h(),X=e("p"),ys=m("During the observed period from "),Le=m(l[11]),ws=m(" to "),Se=m(l[12]),Is=m(", we planted "),Ne=m(l[2]),As=m(` Oyster\r
					Mushroom bags in our cultivation environment. The average temperature throughout this period\r
					was `),xe=m(l[9]),Ms=m("°C, and the average humidity was "),Ge=m(l[10]),Ps=m(`%. Considering these\r
					environmental conditions, our predictive model anticipates a mushroom yield of\r
					approximately `),Fe=m(l[8]),Rs=m(" grams."),this.h()},l(a){o=s(a,"DIV",{class:!0});var A=d(o);v=s(A,"DIV",{class:!0});var i=d(v);c=s(i,"BUTTON",{class:!0,"data-svelte-h":!0}),k(c)!=="svelte-10byion"&&(c.innerHTML=j),i.forEach(n),A.forEach(n),b=u(a),T=s(a,"DIV",{class:!0,style:!0});var mt=d(T);p=s(mt,"DIV",{id:!0,class:!0});var dt=d(p);C=s(dt,"H1",{class:!0,"data-svelte-h":!0}),k(C)!=="svelte-13gjz9g"&&(C.textContent=R),f=u(dt),g=s(dt,"H2",{class:!0,"data-svelte-h":!0}),k(g)!=="svelte-r3c9uc"&&(g.textContent=M),x=u(dt),E=s(dt,"DIV",{class:!0});var Us=d(E);for(let ht=0;ht<st.length;ht+=1)st[ht].l(Us);Us.forEach(n),y=u(dt),D=s(dt,"DIV",{class:!0});var je=d(D);w=s(je,"H2",{class:!0,"data-svelte-h":!0}),k(w)!=="svelte-ti5i1k"&&(w.textContent=P),B=u(je),L=s(je,"P",{class:!0,"data-svelte-h":!0}),k(L)!=="svelte-1dsdhh8"&&(L.textContent=gt),nt=u(je);for(let ht=0;ht<lt.length;ht+=1)lt[ht].l(je);je.forEach(n),K=u(dt),V=s(dt,"DIV",{class:!0});var Te=d(V);U=s(Te,"H2",{class:!0,"data-svelte-h":!0}),k(U)!=="svelte-1denolh"&&(U.textContent=q),Q=u(Te),z=s(Te,"P",{class:!0,"data-svelte-h":!0}),k(z)!=="svelte-ski6pw"&&(z.textContent=At),ut=u(Te),$=s(Te,"DIV",{class:!0});var $e=d($);Z=s($e,"DIV",{class:!0});var Js=d(Z);We(ot.$$.fragment,Js),Js.forEach(n),ft=u($e),I=s($e,"TABLE",{class:!0});var Oe=d(I);S=s(Oe,"TR",{"data-svelte-h":!0}),k(S)!=="svelte-b5rhgk"&&(S.innerHTML=jt),It=u(Oe);for(let ht=0;ht<at.length;ht+=1)at[ht].l(Oe);Oe.forEach(n),$e.forEach(n),Te.forEach(n),J=u(dt),W=s(dt,"DIV",{class:!0});var qe=d(W);tt=s(qe,"DIV",{class:!0});var ze=d(tt);it=s(ze,"H2",{class:!0,"data-svelte-h":!0}),k(it)!=="svelte-8udbng"&&(it.textContent=yt),pt=u(ze),ct=s(ze,"TABLE",{class:!0});var Ye=d(ct);Tt=s(Ye,"TR",{"data-svelte-h":!0}),k(Tt)!=="svelte-z2h4n8"&&(Tt.innerHTML=$t),Ot=u(Ye),et=s(Ye,"TR",{class:!0});var St=d(et);Ct=s(St,"TD",{class:!0,"data-svelte-h":!0}),k(Ct)!=="svelte-717gc8"&&(Ct.textContent=G),N=u(St),O=s(St,"TD",{class:!0});var Ks=d(O);qt=_(Ks,l[2]),Ks.forEach(n),te=u(St),Mt=s(St,"TD",{class:!0});var Qs=d(Mt);zt=_(Qs,l[3]),Qs.forEach(n),ee=u(St),Pt=s(St,"TD",{class:!0});var Ws=d(Pt);Yt=_(Ws,l[4]),Ws.forEach(n),St.forEach(n),Ye.forEach(n),ze.forEach(n),se=u(qe),wt=s(qe,"DIV",{class:!0});var Xs=d(wt);Y=s(Xs,"DIV",{class:!0});var Nt=d(Y);le=s(Nt,"P",{"data-svelte-h":!0}),k(le)!=="svelte-z1umot"&&(le.innerHTML=Ls),ts=u(Nt),Vt=s(Nt,"P",{});var De=d(Vt);ae=s(De,"STRONG",{"data-svelte-h":!0}),k(ae)!=="svelte-1p4wyrt"&&(ae.textContent=Ss),es=u(De),we=_(De,l[2]),ss=_(De," bags have been planted."),De.forEach(n),ls=u(Nt),kt=s(Nt,"P",{});var He=d(kt);re=s(He,"STRONG",{"data-svelte-h":!0}),k(re)!=="svelte-sq1tsw"&&(re.textContent=Ns),as=_(He," A total of "),Ie=_(He,l[3]),rs=_(He," grams harvested."),He.forEach(n),ns=u(Nt),Bt=s(Nt,"P",{});var ye=d(Bt);ne=s(ye,"STRONG",{"data-svelte-h":!0}),k(ne)!=="svelte-iy4gmp"&&(ne.textContent=xs),os=u(ye),Ae=_(ye,l[4]),is=_(ye," bags have been removed."),ye.forEach(n),Nt.forEach(n),Xs.forEach(n),qe.forEach(n),vs=u(dt),Et=s(dt,"DIV",{class:!0});var xt=d(Et);Ut=s(xt,"H2",{class:!0,"data-svelte-h":!0}),k(Ut)!=="svelte-1jnrzyg"&&(Ut.textContent=Gs),ds=u(xt),Jt=s(xt,"P",{class:!0,"data-svelte-h":!0}),k(Jt)!=="svelte-rjm2e0"&&(Jt.textContent=Fs),cs=u(xt),oe=s(xt,"DIV",{class:!0});var Zs=d(oe);We(Kt.$$.fragment,Zs),Zs.forEach(n),hs=u(xt),ie=s(xt,"DIV",{class:!0});var tl=d(ie);Rt=s(tl,"TABLE",{class:!0});var Ue=d(Rt);ve=s(Ue,"TR",{"data-svelte-h":!0}),k(ve)!=="svelte-1ryg4eb"&&(ve.innerHTML=$s),us=u(Ue);for(let ht=0;ht<rt.length;ht+=1)rt[ht].l(Ue);Ue.forEach(n),tl.forEach(n),xt.forEach(n),fs=u(dt),Dt=s(dt,"DIV",{class:!0});var Gt=d(Dt);Qt=s(Gt,"H2",{class:!0,"data-svelte-h":!0}),k(Qt)!=="svelte-r1dx8m"&&(Qt.textContent=Os),ms=u(Gt),Wt=s(Gt,"P",{class:!0,"data-svelte-h":!0}),k(Wt)!=="svelte-1m4rrem"&&(Wt.textContent=qs),_s=u(Gt),de=s(Gt,"DIV",{class:!0});var el=d(de);Lt=s(el,"TABLE",{class:!0});var Je=d(Lt);ce=s(Je,"TR",{"data-svelte-h":!0}),k(ce)!=="svelte-oqxah9"&&(ce.innerHTML=zs),bs=u(Je),vt=s(Je,"TR",{class:!0});var Ht=d(vt);he=s(Ht,"TD",{class:!0});var sl=d(he);Me=_(sl,l[11]),sl.forEach(n),ps=u(Ht),ue=s(Ht,"TD",{class:!0});var ll=d(ue);Pe=_(ll,l[12]),ll.forEach(n),gs=u(Ht),fe=s(Ht,"TD",{class:!0});var al=d(fe);Re=_(al,l[2]),al.forEach(n),js=u(Ht),Xt=s(Ht,"TD",{class:!0});var ks=d(Xt);Ve=_(ks,l[9]),Ts=_(ks,"°C"),ks.forEach(n),Cs=u(Ht),Zt=s(Ht,"TD",{class:!0});var Bs=d(Zt);ke=_(Bs,l[10]),Es=_(Bs," %"),Bs.forEach(n),Ds=u(Ht),me=s(Ht,"TD",{class:!0});var rl=d(me);Be=_(rl,l[8]),rl.forEach(n),Ht.forEach(n),Je.forEach(n),el.forEach(n),Hs=u(Gt),X=s(Gt,"P",{class:!0});var _t=d(X);ys=_(_t,"During the observed period from "),Le=_(_t,l[11]),ws=_(_t," to "),Se=_(_t,l[12]),Is=_(_t,", we planted "),Ne=_(_t,l[2]),As=_(_t,` Oyster\r
					Mushroom bags in our cultivation environment. The average temperature throughout this period\r
					was `),xe=_(_t,l[9]),Ms=_(_t,"°C, and the average humidity was "),Ge=_(_t,l[10]),Ps=_(_t,`%. Considering these\r
					environmental conditions, our predictive model anticipates a mushroom yield of\r
					approximately `),Fe=_(_t,l[8]),Rs=_(_t," grams."),_t.forEach(n),Gt.forEach(n),dt.forEach(n),mt.forEach(n),this.h()},h(){r(c,"class","btn btn-sm variant-filled-primary"),r(v,"class","ml-auto"),r(o,"class","flex justify-between items-center m-4"),r(C,"class","report-heading flex justify-center items-center text-4xl svelte-13rjv4b"),r(g,"class","section-heading mb-5 svelte-13rjv4b"),r(E,"class","info svelte-13rjv4b"),r(w,"class","section-heading mb-2 svelte-13rjv4b"),r(L,"class","section-content mb-2 svelte-13rjv4b"),r(D,"class","planted_bags mt-5"),r(U,"class","section-heading mb-2 svelte-13rjv4b"),r(z,"class","section-content mb-2 svelte-13rjv4b"),r(Z,"class","chart-container1 svelte-13rjv4b"),r(I,"class","table1 svelte-13rjv4b"),r($,"class","flex-container svelte-13rjv4b"),r(V,"class","harvested_grams mt-5 svelte-13rjv4b"),r(it,"class","section-heading mb-2 svelte-13rjv4b"),r(Ct,"class","svelte-13rjv4b"),r(O,"class","svelte-13rjv4b"),r(Mt,"class","svelte-13rjv4b"),r(Pt,"class","svelte-13rjv4b"),r(et,"class",""),r(ct,"class","table svelte-13rjv4b"),r(tt,"class","mushroom-data-table svelte-13rjv4b"),r(Y,"class","summary-description svelte-13rjv4b"),r(wt,"class","additional-info mt-6 svelte-13rjv4b"),r(W,"class","mushroom-data-container mt-5 svelte-13rjv4b"),r(Ut,"class","section-heading mb-2 svelte-13rjv4b"),r(Jt,"class","section-content mb-2 svelte-13rjv4b"),r(oe,"class","mb-2 flex items-center justify-center"),r(Rt,"class","table svelte-13rjv4b"),r(ie,"class","table-container"),r(Et,"class","temp_humid mt-5"),r(Qt,"class","section-heading mb-2 svelte-13rjv4b"),r(Wt,"class","section-content mb-2 svelte-13rjv4b"),r(he,"class","svelte-13rjv4b"),r(ue,"class","svelte-13rjv4b"),r(fe,"class","svelte-13rjv4b"),r(Xt,"class","svelte-13rjv4b"),r(Zt,"class","svelte-13rjv4b"),r(me,"class","svelte-13rjv4b"),r(vt,"class",""),r(Lt,"class","table1 svelte-13rjv4b"),r(de,"class","table-container1 mb-2"),r(X,"class","section-content mb-5 svelte-13rjv4b"),r(Dt,"class","yield mt-5 mb-10"),r(p,"id","element"),r(p,"class","mr-10 ml-10"),r(T,"class","flex justify-center items-center mr-20 ml-20 mt-5"),bl(T,"background-color","white")},m(a,A){bt(a,o,A),t(o,v),t(v,c),bt(a,b,A),bt(a,T,A),t(T,p),t(p,C),t(p,f),t(p,g),t(p,x),t(p,E);for(let i=0;i<st.length;i+=1)st[i]&&st[i].m(E,null);t(p,y),t(p,D),t(D,w),t(D,B),t(D,L),t(D,nt);for(let i=0;i<lt.length;i+=1)lt[i]&&lt[i].m(D,null);t(p,K),t(p,V),t(V,U),t(V,Q),t(V,z),t(V,ut),t(V,$),t($,Z),Xe(ot,Z,null),t($,ft),t($,I),t(I,S),t(I,It);for(let i=0;i<at.length;i+=1)at[i]&&at[i].m(I,null);t(p,J),t(p,W),t(W,tt),t(tt,it),t(tt,pt),t(tt,ct),t(ct,Tt),t(ct,Ot),t(ct,et),t(et,Ct),t(et,N),t(et,O),t(O,qt),t(et,te),t(et,Mt),t(Mt,zt),t(et,ee),t(et,Pt),t(Pt,Yt),t(W,se),t(W,wt),t(wt,Y),t(Y,le),t(Y,ts),t(Y,Vt),t(Vt,ae),t(Vt,es),t(Vt,we),t(Vt,ss),t(Y,ls),t(Y,kt),t(kt,re),t(kt,as),t(kt,Ie),t(kt,rs),t(Y,ns),t(Y,Bt),t(Bt,ne),t(Bt,os),t(Bt,Ae),t(Bt,is),t(p,vs),t(p,Et),t(Et,Ut),t(Et,ds),t(Et,Jt),t(Et,cs),t(Et,oe),Xe(Kt,oe,null),t(Et,hs),t(Et,ie),t(ie,Rt),t(Rt,ve),t(Rt,us);for(let i=0;i<rt.length;i+=1)rt[i]&&rt[i].m(Rt,null);t(p,fs),t(p,Dt),t(Dt,Qt),t(Dt,ms),t(Dt,Wt),t(Dt,_s),t(Dt,de),t(de,Lt),t(Lt,ce),t(Lt,bs),t(Lt,vt),t(vt,he),t(he,Me),t(vt,ps),t(vt,ue),t(ue,Pe),t(vt,gs),t(vt,fe),t(fe,Re),t(vt,js),t(vt,Xt),t(Xt,Ve),t(Xt,Ts),t(vt,Cs),t(vt,Zt),t(Zt,ke),t(Zt,Es),t(vt,Ds),t(vt,me),t(me,Be),t(Dt,Hs),t(Dt,X),t(X,ys),t(X,Le),t(X,ws),t(X,Se),t(X,Is),t(X,Ne),t(X,As),t(X,xe),t(X,Ms),t(X,Ge),t(X,Ps),t(X,Fe),t(X,Rs),F=!0,Vs||(Ys=pl(c,"click",l[14]),Vs=!0)},p(a,A){if(A[0]&2){_e=Ft(a[1]);let i;for(i=0;i<_e.length;i+=1){const mt=dl(a,_e,i);st[i]?st[i].p(mt,A):(st[i]=cl(mt),st[i].c(),st[i].m(E,null))}for(;i<st.length;i+=1)st[i].d(1);st.length=_e.length}if(A[0]&128){be=Ft(a[7]);let i;for(i=0;i<be.length;i+=1){const mt=vl(a,be,i);lt[i]?lt[i].p(mt,A):(lt[i]=hl(mt),lt[i].c(),lt[i].m(D,null))}for(;i<lt.length;i+=1)lt[i].d(1);lt.length=be.length}if(A[0]&64){pe=Ft(a[6]);let i;for(i=0;i<pe.length;i+=1){const mt=il(a,pe,i);at[i]?at[i].p(mt,A):(at[i]=ul(mt),at[i].c(),at[i].m(I,null))}for(;i<at.length;i+=1)at[i].d(1);at.length=pe.length}if((!F||A[0]&4)&&H(qt,a[2]),(!F||A[0]&8)&&H(zt,a[3]),(!F||A[0]&16)&&H(Yt,a[4]),(!F||A[0]&4)&&H(we,a[2]),(!F||A[0]&8)&&H(Ie,a[3]),(!F||A[0]&16)&&H(Ae,a[4]),A[0]&32){ge=Ft(a[5]);let i;for(i=0;i<ge.length;i+=1){const mt=ol(a,ge,i);rt[i]?rt[i].p(mt,A):(rt[i]=fl(mt),rt[i].c(),rt[i].m(Rt,null))}for(;i<rt.length;i+=1)rt[i].d(1);rt.length=ge.length}(!F||A[0]&2048)&&H(Me,a[11]),(!F||A[0]&4096)&&H(Pe,a[12]),(!F||A[0]&4)&&H(Re,a[2]),(!F||A[0]&512)&&H(Ve,a[9]),(!F||A[0]&1024)&&H(ke,a[10]),(!F||A[0]&256)&&H(Be,a[8]),(!F||A[0]&2048)&&H(Le,a[11]),(!F||A[0]&4096)&&H(Se,a[12]),(!F||A[0]&4)&&H(Ne,a[2]),(!F||A[0]&512)&&H(xe,a[9]),(!F||A[0]&1024)&&H(Ge,a[10]),(!F||A[0]&256)&&H(Fe,a[8])},i(a){F||(Ee(ot.$$.fragment,a),Ee(Kt.$$.fragment,a),F=!0)},o(a){Ce(ot.$$.fragment,a),Ce(Kt.$$.fragment,a),F=!1},d(a){a&&(n(o),n(b),n(T)),Ke(st,a),Ke(lt,a),Ze(ot),Ke(at,a),Ze(Kt),Ke(rt,a),Vs=!1,Ys()}}}function Zl(l){let o,v,c;return v=new wl({props:{value:void 0}}),{c(){o=e("div"),Qe(v.$$.fragment),this.h()},l(j){o=s(j,"DIV",{class:!0});var b=d(o);We(v.$$.fragment,b),b.forEach(n),this.h()},h(){r(o,"class","flex justify-center items-center h-fit mt-5")},m(j,b){bt(j,o,b),Xe(v,o,null),c=!0},p:gl,i(j){c||(Ee(v.$$.fragment,j),c=!0)},o(j){Ce(v.$$.fragment,j),c=!1},d(j){j&&n(o),Ze(v)}}}function cl(l){let o,v,c,j="Date of Report:",b,T,p=Ml()+"",C,R,f,g,M="Farmer Name:",x,E,y=l[30].farmer_name+"",D,w,P,B,L,gt="Farm Location:",nt,K,V=l[30].farm_address+"",U,q,Q,z,At="Device Code:",ut,$,Z=l[30].device_code+"",ot,ft;return{c(){o=e("div"),v=e("div"),c=e("span"),c.textContent=j,b=h(),T=e("span"),C=m(p),R=h(),f=e("div"),g=e("span"),g.textContent=M,x=h(),E=e("span"),D=m(y),w=h(),P=e("div"),B=e("div"),L=e("span"),L.textContent=gt,nt=h(),K=e("span"),U=m(V),q=h(),Q=e("div"),z=e("span"),z.textContent=At,ut=h(),$=e("span"),ot=m(Z),ft=h(),this.h()},l(I){o=s(I,"DIV",{class:!0});var S=d(o);v=s(S,"DIV",{class:!0});var jt=d(v);c=s(jt,"SPAN",{class:!0,"data-svelte-h":!0}),k(c)!=="svelte-fnmqzd"&&(c.textContent=j),b=u(jt),T=s(jt,"SPAN",{class:!0});var It=d(T);C=_(It,p),It.forEach(n),jt.forEach(n),R=u(S),f=s(S,"DIV",{class:!0});var J=d(f);g=s(J,"SPAN",{class:!0,"data-svelte-h":!0}),k(g)!=="svelte-14vsvvo"&&(g.textContent=M),x=u(J),E=s(J,"SPAN",{class:!0});var W=d(E);D=_(W,y),W.forEach(n),J.forEach(n),S.forEach(n),w=u(I),P=s(I,"DIV",{class:!0});var tt=d(P);B=s(tt,"DIV",{class:!0});var it=d(B);L=s(it,"SPAN",{class:!0,"data-svelte-h":!0}),k(L)!=="svelte-1yzdpnt"&&(L.textContent=gt),nt=u(it),K=s(it,"SPAN",{class:!0});var yt=d(K);U=_(yt,V),yt.forEach(n),it.forEach(n),q=u(tt),Q=s(tt,"DIV",{class:!0});var pt=d(Q);z=s(pt,"SPAN",{class:!0,"data-svelte-h":!0}),k(z)!=="svelte-18wwe9h"&&(z.textContent=At),ut=u(pt),$=s(pt,"SPAN",{class:!0});var ct=d($);ot=_(ct,Z),ct.forEach(n),pt.forEach(n),ft=u(tt),tt.forEach(n),this.h()},h(){r(c,"class","info-label svelte-13rjv4b"),r(T,"class","info-value svelte-13rjv4b"),r(v,"class","info-item svelte-13rjv4b"),r(g,"class","info-label svelte-13rjv4b"),r(E,"class","info-value svelte-13rjv4b"),r(f,"class","info-item svelte-13rjv4b"),r(o,"class","info-column svelte-13rjv4b"),r(L,"class","info-label svelte-13rjv4b"),r(K,"class","info-value svelte-13rjv4b"),r(B,"class","info-item svelte-13rjv4b"),r(z,"class","info-label svelte-13rjv4b"),r($,"class","info-value svelte-13rjv4b"),r(Q,"class","info-item svelte-13rjv4b"),r(P,"class","info-column svelte-13rjv4b")},m(I,S){bt(I,o,S),t(o,v),t(v,c),t(v,b),t(v,T),t(T,C),t(o,R),t(o,f),t(f,g),t(f,x),t(f,E),t(E,D),bt(I,w,S),bt(I,P,S),t(P,B),t(B,L),t(B,nt),t(B,K),t(K,U),t(P,q),t(P,Q),t(Q,z),t(Q,ut),t(Q,$),t($,ot),t(P,ft)},p(I,S){S[0]&2&&y!==(y=I[30].farmer_name+"")&&H(D,y),S[0]&2&&V!==(V=I[30].farm_address+"")&&H(U,V),S[0]&2&&Z!==(Z=I[30].device_code+"")&&H(ot,Z)},d(I){I&&(n(o),n(w),n(P))}}}function hl(l){let o,v,c='<th class="text-xs svelte-13rjv4b">Batch Code</th> <th class="text-xs svelte-13rjv4b">Growth Duration</th> <th class="text-xs svelte-13rjv4b">Total Bags Planted</th> <th class="text-xs svelte-13rjv4b">Average Temperature</th> <th class="text-xs svelte-13rjv4b">Average Humidity</th> <th class="text-xs svelte-13rjv4b">Grams</th> <th class="text-xs svelte-13rjv4b">Status</th>',j,b,T,p=l[23].batchCode+"",C,R,f,g=l[23].growthDuration+"",M,x,E,y=l[23].totalBags+"",D,w,P,B=l[23].averageTemperature.toFixed(2)+"",L,gt,nt,K=l[23].averageHumidity.toFixed(2)+"",V,U,q,Q=l[23].totalGrams+"",z,At,ut,$=l[23].analysis.stat+"",Z,ot,ft,I,S=l[23].analysis.message+"",jt,It,J,W,tt="Suggestion:",it,yt=l[23].analysis.temperatureSuggestion+"",pt,ct,Tt=l[23].analysis.humiditySuggestion+"",$t,Ot,et,Ct;return{c(){o=e("table"),v=e("tr"),v.innerHTML=c,j=h(),b=e("tr"),T=e("td"),C=m(p),R=h(),f=e("td"),M=m(g),x=h(),E=e("td"),D=m(y),w=h(),P=e("td"),L=m(B),gt=h(),nt=e("td"),V=m(K),U=h(),q=e("td"),z=m(Q),At=h(),ut=e("td"),Z=m($),ot=h(),ft=e("tr"),I=e("td"),jt=m(S),It=h(),J=e("p"),W=e("strong"),W.textContent=tt,it=m(` Consider\r
									`),pt=m(yt),ct=m(" and "),$t=m(Tt),Ot=m(` for better\r
									mushroom growth.`),et=h(),Ct=e("br"),this.h()},l(G){o=s(G,"TABLE",{class:!0});var N=d(o);v=s(N,"TR",{class:!0,"data-svelte-h":!0}),k(v)!=="svelte-5rousn"&&(v.innerHTML=c),j=u(N),b=s(N,"TR",{});var O=d(b);T=s(O,"TD",{class:!0});var qt=d(T);C=_(qt,p),qt.forEach(n),R=u(O),f=s(O,"TD",{class:!0});var te=d(f);M=_(te,g),te.forEach(n),x=u(O),E=s(O,"TD",{class:!0});var Mt=d(E);D=_(Mt,y),Mt.forEach(n),w=u(O),P=s(O,"TD",{class:!0});var zt=d(P);L=_(zt,B),zt.forEach(n),gt=u(O),nt=s(O,"TD",{class:!0});var ee=d(nt);V=_(ee,K),ee.forEach(n),U=u(O),q=s(O,"TD",{class:!0});var Pt=d(q);z=_(Pt,Q),Pt.forEach(n),At=u(O),ut=s(O,"TD",{class:!0});var Yt=d(ut);Z=_(Yt,$),Yt.forEach(n),O.forEach(n),ot=u(N),ft=s(N,"TR",{class:!0});var se=d(ft);I=s(se,"TD",{colspan:!0,class:!0});var wt=d(I);jt=_(wt,S),It=u(wt),J=s(wt,"P",{});var Y=d(J);W=s(Y,"STRONG",{"data-svelte-h":!0}),k(W)!=="svelte-1nv2yvw"&&(W.textContent=tt),it=_(Y,` Consider\r
									`),pt=_(Y,yt),ct=_(Y," and "),$t=_(Y,Tt),Ot=_(Y,` for better\r
									mushroom growth.`),Y.forEach(n),wt.forEach(n),se.forEach(n),N.forEach(n),et=u(G),Ct=s(G,"BR",{}),this.h()},h(){r(v,"class","vertical-header"),r(T,"class","svelte-13rjv4b"),r(f,"class","svelte-13rjv4b"),r(E,"class","svelte-13rjv4b"),r(P,"class","svelte-13rjv4b"),r(nt,"class","svelte-13rjv4b"),r(q,"class","svelte-13rjv4b"),r(ut,"class","svelte-13rjv4b"),r(I,"colspan","7"),r(I,"class","svelte-13rjv4b"),r(ft,"class","spans svelte-13rjv4b"),r(o,"class","table mb-10 svelte-13rjv4b")},m(G,N){bt(G,o,N),t(o,v),t(o,j),t(o,b),t(b,T),t(T,C),t(b,R),t(b,f),t(f,M),t(b,x),t(b,E),t(E,D),t(b,w),t(b,P),t(P,L),t(b,gt),t(b,nt),t(nt,V),t(b,U),t(b,q),t(q,z),t(b,At),t(b,ut),t(ut,Z),t(o,ot),t(o,ft),t(ft,I),t(I,jt),t(I,It),t(I,J),t(J,W),t(J,it),t(J,pt),t(J,ct),t(J,$t),t(J,Ot),bt(G,et,N),bt(G,Ct,N)},p(G,N){N[0]&128&&p!==(p=G[23].batchCode+"")&&H(C,p),N[0]&128&&g!==(g=G[23].growthDuration+"")&&H(M,g),N[0]&128&&y!==(y=G[23].totalBags+"")&&H(D,y),N[0]&128&&B!==(B=G[23].averageTemperature.toFixed(2)+"")&&H(L,B),N[0]&128&&K!==(K=G[23].averageHumidity.toFixed(2)+"")&&H(V,K),N[0]&128&&Q!==(Q=G[23].totalGrams+"")&&H(z,Q),N[0]&128&&$!==($=G[23].analysis.stat+"")&&H(Z,$),N[0]&128&&S!==(S=G[23].analysis.message+"")&&H(jt,S),N[0]&128&&yt!==(yt=G[23].analysis.temperatureSuggestion+"")&&H(pt,yt),N[0]&128&&Tt!==(Tt=G[23].analysis.humiditySuggestion+"")&&H($t,Tt)},d(G){G&&(n(o),n(et),n(Ct))}}}function ul(l){let o,v,c=l[23].batchCode+"",j,b,T,p=l[23].totalHarvests+"",C,R,f,g=l[23].totalGrams+"",M,x;return{c(){o=e("tr"),v=e("td"),j=m(c),b=h(),T=e("td"),C=m(p),R=h(),f=e("td"),M=m(g),x=h(),this.h()},l(E){o=s(E,"TR",{});var y=d(o);v=s(y,"TD",{class:!0});var D=d(v);j=_(D,c),D.forEach(n),b=u(y),T=s(y,"TD",{class:!0});var w=d(T);C=_(w,p),w.forEach(n),R=u(y),f=s(y,"TD",{class:!0});var P=d(f);M=_(P,g),P.forEach(n),x=u(y),y.forEach(n),this.h()},h(){r(v,"class","svelte-13rjv4b"),r(T,"class","svelte-13rjv4b"),r(f,"class","svelte-13rjv4b")},m(E,y){bt(E,o,y),t(o,v),t(v,j),t(o,b),t(o,T),t(T,C),t(o,R),t(o,f),t(f,M),t(o,x)},p(E,y){y[0]&64&&c!==(c=E[23].batchCode+"")&&H(j,c),y[0]&64&&p!==(p=E[23].totalHarvests+"")&&H(C,p),y[0]&64&&g!==(g=E[23].totalGrams+"")&&H(M,g)},d(E){E&&n(o)}}}function fl(l){let o,v,c=l[23].date+"",j,b,T,p=l[23]["ave temp"]+"",C,R,f,g,M=l[23]["ave humidity"]+"",x,E,y;return{c(){o=e("tr"),v=e("td"),j=m(c),b=h(),T=e("td"),C=m(p),R=m("°C"),f=h(),g=e("td"),x=m(M),E=m("%"),y=h(),this.h()},l(D){o=s(D,"TR",{class:!0});var w=d(o);v=s(w,"TD",{class:!0});var P=d(v);j=_(P,c),P.forEach(n),b=u(w),T=s(w,"TD",{class:!0});var B=d(T);C=_(B,p),R=_(B,"°C"),B.forEach(n),f=u(w),g=s(w,"TD",{class:!0});var L=d(g);x=_(L,M),E=_(L,"%"),L.forEach(n),y=u(w),w.forEach(n),this.h()},h(){r(v,"class","svelte-13rjv4b"),r(T,"class","svelte-13rjv4b"),r(g,"class","svelte-13rjv4b"),r(o,"class","")},m(D,w){bt(D,o,w),t(o,v),t(v,j),t(o,b),t(o,T),t(T,C),t(T,R),t(o,f),t(o,g),t(g,x),t(g,E),t(o,y)},p(D,w){w[0]&32&&c!==(c=D[23].date+"")&&H(j,c),w[0]&32&&p!==(p=D[23]["ave temp"]+"")&&H(C,p),w[0]&32&&M!==(M=D[23]["ave humidity"]+"")&&H(x,M)},d(D){D&&n(o)}}}function ta(l){let o,v,c,j,b,T;o=new Al({props:{transitionIn:Dl,transitionInParams:{duration:200}}});const p=[Zl,Xl],C=[];function R(f,g){return f[0]?0:1}return c=R(l),j=C[c]=p[c](l),{c(){Qe(o.$$.fragment),v=h(),j.c(),b=nl()},l(f){We(o.$$.fragment,f),v=u(f),j.l(f),b=nl()},m(f,g){Xe(o,f,g),bt(f,v,g),C[c].m(f,g),bt(f,b,g),T=!0},p(f,g){let M=c;c=R(f),c===M?C[c].p(f,g):(El(),Ce(C[M],1,1,()=>{C[M]=null}),Cl(),j=C[c],j?j.p(f,g):(j=C[c]=p[c](f),j.c()),Ee(j,1),j.m(b.parentNode,b))},i(f){T||(Ee(o.$$.fragment,f),Ee(j),T=!0)},o(f){Ce(o.$$.fragment,f),Ce(j),T=!1},d(f){f&&(n(v),n(b)),Ze(o,f),C[c].d(f)}}}function ea(l,o,v){let c=!1,j=[],b,T,p,C=[],R=[],f=[],g=[],M,x,E,y,D,w,P,B;return _l(async()=>{v(1,j=await Pl()),v(4,p=await Rl()),v(2,b=await Vl()),v(3,T=await kl()),await Bl(),await Ll(),v(5,R=await zl()),v(6,f=await Yl()),v(7,g=await Ul()),M=await Sl(),v(9,y=M.aveTemp.toFixed(2)),v(10,D=M.aveHumidity.toFixed(2)),v(11,w=R[0].date),v(12,P=R[R.length-1].date),Nl(b,M.aveTemp,M.aveHumidity).then(V=>{x=V,v(8,E=x.toFixed(2))}).catch(V=>{console.error("Error in fetching data:",V)}),await Jl();const gt=xl(Gl,"user","123456"),nt=Fl(gt,"temp and humid"),K=$l(nt,Ol("date","desc"));ql(K,V=>{C=[],V.forEach(U=>{const q=U.data();q.date&&q.date.toDate&&(q.date=Il(q.date.toDate(),"MMMM dd, yyyy")),q.id=U.id,C.push(q)})}),v(0,c=!1)}),B=document.getElementById("element"),Hl(),yl.subscribe(gt=>{}),[c,j,b,T,p,R,f,g,E,y,D,w,P,B,()=>Wl(B)]}class ua extends jl{constructor(o){super(),Tl(this,o,ea,ta,ml,{},null,[-1,-1])}}export{ua as component};