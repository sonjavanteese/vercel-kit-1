import{S as te,i as le,s as se,e as d,t as F,k as C,c as _,a as p,g as V,d as o,n as L,b as f,f as S,G as n,H as q,h as G,I as M,P as ae,F as J,a2 as K,l as Q}from"../../chunks/vendor-dd0a360d.js";import{s as re}from"../../chunks/db-26aa390c.js";function W(i,t,l){const e=i.slice();return e[6]=t[l].id,e[7]=t[l].titel,e[8]=t[l].info,e[9]=t[l].tags,e[10]=t[l].screen,e[11]=t[l].fileurl,e[12]=t[l].thumb,e}function X(i,t,l){const e=i.slice();return e[6]=t[l].id,e[7]=t[l].titel,e[8]=t[l].info,e[9]=t[l].tags,e[10]=t[l].screen,e[11]=t[l].fileurl,e[12]=t[l].thumb,e}function ce(i){let t,l=i[0],e=[];for(let s=0;s<l.length;s+=1)e[s]=Z(W(i,l,s));let a=null;return l.length||(a=Y()),{c(){t=d("ul");for(let s=0;s<e.length;s+=1)e[s].c();a&&a.c(),this.h()},l(s){t=_(s,"UL",{class:!0});var c=p(t);for(let r=0;r<e.length;r+=1)e[r].l(c);a&&a.l(c),c.forEach(o),this.h()},h(){f(t,"class","flex flex-col divide divide-y svelte-wrf6zi")},m(s,c){S(s,t,c);for(let r=0;r<e.length;r+=1)e[r].m(t,null);a&&a.m(t,null)},p(s,c){if(c&1){l=s[0];let r;for(r=0;r<l.length;r+=1){const h=W(s,l,r);e[r]?e[r].p(h,c):(e[r]=Z(h),e[r].c(),e[r].m(t,null))}for(;r<e.length;r+=1)e[r].d(1);e.length=l.length,l.length?a&&(a.d(1),a=null):a||(a=Y(),a.c(),a.m(t,null))}},d(s){s&&o(t),K(e,s),a&&a.d()}}}function ne(i){let t,l=i[0],e=[];for(let s=0;s<l.length;s+=1)e[s]=ee(X(i,l,s));let a=null;return l.length||(a=$()),{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=Q(),a&&a.c()},l(s){for(let c=0;c<e.length;c+=1)e[c].l(s);t=Q(),a&&a.l(s)},m(s,c){for(let r=0;r<e.length;r+=1)e[r].m(s,c);S(s,t,c),a&&a.m(s,c)},p(s,c){if(c&1){l=s[0];let r;for(r=0;r<l.length;r+=1){const h=X(s,l,r);e[r]?e[r].p(h,c):(e[r]=ee(h),e[r].c(),e[r].m(t.parentNode,t))}for(;r<e.length;r+=1)e[r].d(1);e.length=l.length,l.length?a&&(a.d(1),a=null):a||(a=$(),a.c(),a.m(t.parentNode,t))}},d(s){K(e,s),s&&o(t),a&&a.d(s)}}}function Y(i){let t,l;return{c(){t=d("li"),l=F("press 'Fetch' button"),this.h()},l(e){t=_(e,"LI",{class:!0});var a=p(t);l=V(a,"press 'Fetch' button"),a.forEach(o),this.h()},h(){f(t,"class","svelte-wrf6zi")},m(e,a){S(e,t,a),n(t,l)},d(e){e&&o(t)}}}function Z(i){let t,l,e,a,s,c,r,h,m,I=i[7]+"",E,z,y,x=i[9]+"",g,N,k,D=i[6]+"",T,U;return{c(){t=d("li"),l=d("div"),e=d("div"),a=d("figure"),s=d("img"),r=C(),h=d("div"),m=d("div"),E=F(I),z=C(),y=d("div"),g=F(x),N=C(),k=d("div"),T=F(D),U=C(),this.h()},l(b){t=_(b,"LI",{class:!0});var u=p(t);l=_(u,"DIV",{class:!0});var v=p(l);e=_(v,"DIV",{class:!0});var w=p(e);a=_(w,"FIGURE",{class:!0});var j=p(a);s=_(j,"IMG",{alt:!0,src:!0,class:!0}),j.forEach(o),w.forEach(o),r=L(v),h=_(v,"DIV",{class:!0});var A=p(h);m=_(A,"DIV",{class:!0});var O=p(m);E=V(O,I),O.forEach(o),z=L(A),y=_(A,"DIV",{class:!0});var B=p(y);g=V(B,x),B.forEach(o),A.forEach(o),N=L(v),k=_(v,"DIV",{class:!0});var P=p(k);T=V(P,D),P.forEach(o),v.forEach(o),U=L(u),u.forEach(o),this.h()},h(){f(s,"alt","profil"),J(s.src,c=i[12])||f(s,"src",c),f(s,"class","mx-auto object-cover rounded-full h-10 w-10 svelte-wrf6zi"),f(a,"class","block relative svelte-wrf6zi"),f(e,"class","flex flex-col w-10 h-10 justify-center items-center mr-4 svelte-wrf6zi"),f(m,"class","font-medium dark:text-white svelte-wrf6zi"),f(y,"class","text-gray-600 dark:text-gray-200 text-sm svelte-wrf6zi"),f(h,"class","flex-1 pl-1 mr-16 svelte-wrf6zi"),f(k,"class","text-gray-600 dark:text-gray-200 text-xs svelte-wrf6zi"),f(l,"class","select-none cursor-pointer flex flex-1 items-center p-4 svelte-wrf6zi"),f(t,"class","flex flex-row svelte-wrf6zi")},m(b,u){S(b,t,u),n(t,l),n(l,e),n(e,a),n(a,s),n(l,r),n(l,h),n(h,m),n(m,E),n(h,z),n(h,y),n(y,g),n(l,N),n(l,k),n(k,T),n(t,U)},p(b,u){u&1&&!J(s.src,c=b[12])&&f(s,"src",c),u&1&&I!==(I=b[7]+"")&&G(E,I),u&1&&x!==(x=b[9]+"")&&G(g,x),u&1&&D!==(D=b[6]+"")&&G(T,D)},d(b){b&&o(t)}}}function $(i){let t,l;return{c(){t=d("div"),l=F("press 'Fetch' button")},l(e){t=_(e,"DIV",{});var a=p(t);l=V(a,"press 'Fetch' button"),a.forEach(o)},m(e,a){S(e,t,a),n(t,l)},d(e){e&&o(t)}}}function ee(i){let t,l=i[7]+"",e;return{c(){t=d("div"),e=F(l)},l(a){t=_(a,"DIV",{});var s=p(t);e=V(s,l),s.forEach(o)},m(a,s){S(a,t,s),n(t,e)},p(a,s){s&1&&l!==(l=a[7]+"")&&G(e,l)},d(a){a&&o(t)}}}function ie(i){let t,l,e,a,s,c,r,h=(i[1]?"... loading":"Fetch Data")+"",m,I,E,z,y,x,g,N,k,D,T;function U(v,w){return v[2]?ce:ne}let b=U(i),u=b(i);return{c(){t=d("section"),l=d("header"),e=d("h2"),a=F("Classics"),s=C(),c=d("p"),r=d("button"),m=F(h),I=C(),E=d("label"),z=d("span"),y=F("Op 2"),x=C(),g=d("input"),N=C(),k=d("article"),u.c(),this.h()},l(v){t=_(v,"SECTION",{class:!0});var w=p(t);l=_(w,"HEADER",{});var j=p(l);e=_(j,"H2",{});var A=p(e);a=V(A,"Classics"),A.forEach(o),s=L(j),c=_(j,"P",{});var O=p(c);r=_(O,"BUTTON",{class:!0});var B=p(r);m=V(B,h),B.forEach(o),I=L(O),E=_(O,"LABEL",{class:!0,for:!0});var P=p(E);z=_(P,"SPAN",{});var H=p(z);y=V(H,"Op 2"),H.forEach(o),x=L(P),g=_(P,"INPUT",{type:!0,name:!0,id:!0,class:!0}),P.forEach(o),O.forEach(o),j.forEach(o),N=L(w),k=_(w,"ARTICLE",{class:!0});var R=p(k);u.l(R),R.forEach(o),w.forEach(o),this.h()},h(){f(r,"class","btn btn-blue"),f(g,"type","checkbox"),f(g,"name","op2"),f(g,"id","op2"),f(g,"class","hidden svelte-wrf6zi"),f(E,"class","btn btn-blue ml-2 svelte-wrf6zi"),f(E,"for","op2"),f(k,"class","py-8 svelte-wrf6zi"),f(t,"class","page-container")},m(v,w){S(v,t,w),n(t,l),n(l,e),n(e,a),n(l,s),n(l,c),n(c,r),n(r,m),n(c,I),n(c,E),n(E,z),n(z,y),n(E,x),n(E,g),g.checked=i[2],n(t,N),n(t,k),u.m(k,null),D||(T=[q(r,"click",i[3]),q(g,"change",i[4])],D=!0)},p(v,[w]){w&2&&h!==(h=(v[1]?"... loading":"Fetch Data")+"")&&G(m,h),w&4&&(g.checked=v[2]),b===(b=U(v))&&u?u.p(v,w):(u.d(1),u=b(v),u&&(u.c(),u.m(k,null)))},i:M,o:M,d(v){v&&o(t),u.d(),D=!1,ae(T)}}}function oe(i,t,l){const e=async()=>{l(1,s=!0);try{let{data:m,error:I}=await re.from("bb_classics").select("*");if(I)throw I;l(0,a=m)}catch(m){alert(m)}finally{l(1,s=!1)}};let a=[],s=!1,c=!1;const r=()=>e();function h(){c=this.checked,l(2,c)}return[a,s,c,r,h]}class ue extends te{constructor(t){super();le(this,t,oe,ie,se,{})}}export{ue as default};
