var rt=Object.create;var h=Object.defineProperty,ot=Object.defineProperties,at=Object.getOwnPropertyDescriptor,it=Object.getOwnPropertyDescriptors,nt=Object.getOwnPropertyNames,$=Object.getOwnPropertySymbols,st=Object.getPrototypeOf,q=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable;var j=(t,e,r)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,n=(t,e)=>{for(var r in e||(e={}))q.call(e,r)&&j(t,r,e[r]);if($)for(var r of $(e))mt.call(e,r)&&j(t,r,e[r]);return t},G=(t,e)=>ot(t,it(e));var lt=(t,e)=>{for(var r in e)h(t,r,{get:e[r],enumerable:!0})},O=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of nt(e))!q.call(t,o)&&o!==r&&h(t,o,{get:()=>e[o],enumerable:!(a=at(e,o))||a.enumerable});return t};var u=(t,e,r)=>(r=t!=null?rt(st(t)):{},O(e||!t||!t.__esModule?h(r,"default",{value:t,enumerable:!0}):r,t)),ut=t=>O(h({},"__esModule",{value:!0}),t);var Tt={};lt(Tt,{Homepage:()=>P,Label:()=>N,Metadata:()=>B,RequiredStatement:()=>J,SeeAlso:()=>Q,Summary:()=>X,Thumbnail:()=>et,Value:()=>k});module.exports=ut(Tt);var M=u(require("react"));var V=require("@stitches/react"),{styled:l,css:Ht,keyframes:wt}=(0,V.createStitches)({prefix:"nectar"});var c=(t,e="none")=>{var a;if(!t)return null;if(typeof t=="string")return[t];if(!t[e]){let o=Object.getOwnPropertyNames(t);if(o.length>0)return(a=t[o[0]])==null?void 0:a.join(", ")}return!t[e]||!Array.isArray(t[e])?null:t[e].join(", ")};var W=u(require("sanitize-html"));function _(t){return{__html:ct(t)}}function s(t,e){let r=Object.keys(t).filter(o=>e.includes(o)?null:o),a=new Object;return r.forEach(o=>{a[o]=t[o]}),a}function ct(t){return(0,W.default)(t,{allowedAttributes:{a:["href"],img:["alt","src"]},allowedSchemes:["http","https","mailto"],allowedTags:["a","b","br","i","img","p","small","span","sub","sup"]})}var ft=l("a",{}),pt=t=>{let{children:e,homepage:r}=t,o=s(t,["children","homepage"]);return M.default.createElement(M.default.Fragment,null,r&&r.map(i=>{let p=c(i.label,o.lang);return M.default.createElement(ft,n({"aria-label":e?p:void 0,href:i.id,key:i.id},o),e||p)}))},P=pt;var D=u(require("react"));var dt=l("span",{}),gt=t=>{let{as:e,label:r}=t,o=s(t,["as","label"]);return D.default.createElement(dt,n({as:e},o),c(r,o.lang))},N=gt;var g=u(require("react"));var L=u(require("react"));var K=u(require("react"));var I=u(require("react"));var yt=l("span",{}),bt=t=>{let{as:e,markup:r}=t;if(!r)return I.default.createElement(I.default.Fragment,null);let o=s(t,["as","markup"]),i=_(c(r,o.lang));return I.default.createElement(yt,G(n({as:e},o),{dangerouslySetInnerHTML:i}))},R=bt;var St=({as:t="dd",lang:e,value:r})=>K.default.createElement(R,{markup:r,as:t,lang:e}),k=St;var ht=t=>{let{item:e,lang:r}=t,{label:a,value:o}=e;return L.default.createElement("div",{role:"group"},L.default.createElement(N,{as:"dt",label:a,lang:r}),L.default.createElement(k,{as:"dd",value:o,lang:r}))},x=ht;var vt=l("dl",{}),At=t=>{let{as:e,metadata:r}=t;if(!Array.isArray(r))return g.default.createElement(g.default.Fragment,null);let o=s(t,["as","metadata"]);return g.default.createElement(g.default.Fragment,null,r.length>0&&g.default.createElement(vt,n({as:e},o),r.map((i,p)=>g.default.createElement(x,{item:i,key:p,lang:o.lang}))))},B=At;var v=u(require("react"));var Mt=l("dl",{}),Nt=t=>{let{as:e,requiredStatement:r}=t;if(!r)return v.default.createElement(v.default.Fragment,null);let o=s(t,["as","requiredStatement"]);return v.default.createElement(Mt,n({as:e},o),v.default.createElement(x,{item:r,lang:o.lang}))},J=Nt;var E=u(require("react"));var It=l("li",{}),Rt=l("ul",{}),kt=t=>{let{as:e,seeAlso:r}=t,o=s(t,["as","seeAlso"]);return E.default.createElement(Rt,{as:e},r&&r.map(i=>{let p=c(i.label,o.lang);return E.default.createElement(It,{key:i.id},E.default.createElement("a",n({href:i.id},o),p||i.id))}))},Q=kt;var U=u(require("react"));var Lt=t=>{let{as:e,summary:r}=t,o=s(t,["as","summary"]);return U.default.createElement(R,n({as:e,markup:r},o))},X=Lt;var T=u(require("react"));var f=u(require("react"));var y=u(require("hls.js"));var Y=(t,e="200,",r="full")=>{Array.isArray(t)&&(t=t[0]);let{id:a,service:o}=t,i;if(!o)return a;if(Array.isArray(t.service)&&t.service.length>0&&(i=o[0]),i){if(i["@id"])return`${i["@id"]}/${r}/${e}/0/default.jpg`;if(i.id)return`${i.id}/${r}/${e}/0/default.jpg`}};var Z=l("img",{objectFit:"cover"}),xt=t=>{let e=(0,f.useRef)(null),{contentResource:r,altAsLabel:a}=t,o;a&&(o=c(a));let p=s(t,["contentResource","altAsLabel"]),{type:C,id:d,width:H=200,height:w,format:Ct,duration:A}=r;(0,f.useEffect)(()=>{if(!d&&!e.current||["Image"].includes(C)||!d.includes("m3u8"))return;let m=new y.default;return e.current&&(m.attachMedia(e.current),m.on(y.default.Events.MEDIA_ATTACHED,function(){m.loadSource(d)})),m.on(y.default.Events.ERROR,function(b,S){if(S.fatal)switch(S.type){case y.default.ErrorTypes.NETWORK_ERROR:console.error(`fatal ${b} network error encountered, try to recover`),m.startLoad();break;case y.default.ErrorTypes.MEDIA_ERROR:console.error(`fatal ${b} media error encountered, try to recover`),m.recoverMediaError();break;default:m.destroy();break}}),()=>{m&&(m.detachMedia(),m.destroy())}},[]),(0,f.useEffect)(()=>F(),[]);let F=()=>{if(!e.current)return;let m=0,b=30;if(A&&(b=A),!d.split("#t=")&&A&&(m=A*.1),d.split("#t=").pop()){let z=d.split("#t=").pop();z&&(m=parseInt(z.split(",")[0]))}let S=e.current;S.currentTime=m,S.play(),setTimeout(()=>F(),b*1e3)};switch(C){case"Image":let m=Y(r);return f.default.createElement(Z,n({as:"img",alt:o,css:{width:H,height:w},key:d,src:m},p));case"Video":return f.default.createElement(Z,{as:"video",css:{width:H,height:w},disablePictureInPicture:!0,key:d,loop:!0,muted:!0,onPause:F,ref:e,src:d});default:return console.warn(`Resource type: ${C} is not valid or not yet supported in Nectar.`),f.default.createElement(f.default.Fragment,null)}},tt=xt;var Et=t=>{let{thumbnail:e}=t,a=s(t,["thumbnail"]);return T.default.createElement(T.default.Fragment,null,e&&e.map(o=>T.default.createElement(tt,n({contentResource:o,key:o.id},a))))},et=Et;
//# sourceMappingURL=index.cjs.js.map