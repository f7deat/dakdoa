"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[195],{47669:function(P,_,t){var l=t(56486),d=t(62435),s=t(86074),a=function(E){var x=E.blocks,o=function(r){return r?d.createElement("div",{dangerouslySetInnerHTML:{__html:r}}):""};return(0,s.jsx)(s.Fragment,{children:x.map(function(n){return(0,s.jsxs)("div",{id:n.id,children:[n.type==="header"&&(0,s.jsx)("h1",{className:"mb-2 font-semibold text-lg",children:o(n.data.text)}),n.type==="paragraph"&&(0,s.jsx)("p",{className:"mb-2",children:o(n.data.text)}),n.type==="list"&&(0,s.jsx)("div",{className:"mb-2",children:(0,s.jsx)("ul",{className:"list-disc pl-6",children:n.data.items.map(function(r,v){return(0,s.jsx)("li",{children:o(r)},v)})})}),n.type==="simpleImage"&&(0,s.jsx)("div",{className:"flex justify-center mb-2",children:(0,s.jsx)(l.Z,{src:n.data.url,alt:"IMG",loading:"lazy",width:"80%"})}),n.type==="raw"&&(0,s.jsx)("div",{className:"py-4 flex justify-center",children:(0,s.jsx)("div",{className:"md:w-1/2",children:o(n.data.html)})})]})})})};_.Z=a},89892:function(P,_,t){var l=t(62307),d=t(26515),s=t(12245),a=t(86074),m=function(){return(0,a.jsxs)("div",{className:"flex mb-4 gap-2 justify-end",children:[(0,a.jsx)("button",{className:"h-12 w-12 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,a.jsx)(l.Z,{})}),(0,a.jsx)("button",{className:"h-12 w-12 bg-sky-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,a.jsx)(d.Z,{})}),(0,a.jsx)("button",{className:"h-12 w-12 bg-red-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,a.jsx)(s.Z,{})})]})};_.Z=m},6196:function(P,_,t){t.r(_);var l=t(27424),d=t.n(l),s=t(62435),a=t(43886),m=t(90950),E=t(85673),x=t(50108),o=t(47669),n=t(73425),r=t(73403),v=t(20841),C=t(99611),I=t(89892),L=t(91939),U=t(30381),y=t.n(U),e=t(86074),R=function(){var p=(0,a.UO)(),u=p.id,K=(0,s.useState)(0),f=d()(K,2),W=f[0],N=f[1],j=(0,a.YB)(),S=(0,s.useState)(),O=d()(S,2),i=O[0],Z=O[1],b=(0,s.useState)(),g=d()(b,2),h=g[0],A=g[1],H=(0,s.useState)(!1),T=d()(H,2),Y=T[0],B=T[1];return(0,s.useEffect)(function(){u&&(B(!0),fetch("https://shinecgialai.com.vn/api/catalog/structure/".concat(u),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(D){return D.json().then(function(c){c&&c.length>0?c.forEach(function(M){if(M.name==="Editor"&&M.arguments){var F=JSON.parse(M.arguments);A(F)}}):A([]),B(!1)})}),fetch("https://shinecgialai.com.vn/api/catalog/".concat(u),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(D){return D.json().then(function(c){Z(c)})}),setTimeout(function(){N(100)},100))},[u]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.ql,{children:(0,e.jsxs)("title",{children:[(i==null?void 0:i.name)||""," - Shinec Gia Lai"]})}),(0,e.jsx)(n.Z,{loading:Y}),(0,e.jsxs)("main",{className:"container mx-auto py-10 px-4 md:px-0",children:[(0,e.jsx)("div",{className:"mb-4",children:(0,e.jsx)(E.Z,{items:[{title:(0,e.jsxs)(a.rU,{to:"/",children:[(0,e.jsx)(r.Z,{})," ",j.formatMessage({id:"HOME"})]})},{title:j.formatMessage({id:"PRODUCT"})}]})}),(0,e.jsxs)("div",{className:"md:flex gap-4",children:[(0,e.jsxs)("div",{className:"md:w-3/4",children:[(0,e.jsx)("div",{className:"text-2xl md:text-4xl text-green-700 text-center font-semibold py-4",children:i==null?void 0:i.name}),(0,e.jsxs)("div",{className:"mb-4 border-b border-dashed",children:[(0,e.jsx)("div",{className:"mb-4",children:(h==null?void 0:h.blocks)&&(0,e.jsx)(o.Z,{blocks:h.blocks})}),(0,e.jsxs)("div",{className:"text-slate-500 italic flex justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(v.Z,{})," C\u1EADp nh\u1EADt l\xFAc: ",y()(i==null?void 0:i.modifiedDate).format("DD/MM/YYYY hh:mm")]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(C.Z,{})," L\u1EF1\u1EE3t xem: ",((i==null?void 0:i.viewCount)||0).toLocaleString()]})]})]}),(0,e.jsx)(I.Z,{})]}),(0,e.jsx)(x.Z,{})]})]}),(0,e.jsx)(L.b,{}),(0,e.jsx)(m.Z,{height:W})]})};_.default=R}}]);
