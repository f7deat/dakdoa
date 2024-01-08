"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[195],{47669:function(P,d,t){var l=t(56486),_=t(62435),s=t(86074),n=function(u){var x=u.blocks,o=function(r){return r?_.createElement("div",{dangerouslySetInnerHTML:{__html:r}}):""};return(0,s.jsx)(s.Fragment,{children:x.map(function(a){return(0,s.jsxs)("div",{id:a.id,children:[a.type==="header"&&(0,s.jsx)("h1",{className:"mb-2 font-semibold text-lg",children:o(a.data.text)}),a.type==="paragraph"&&(0,s.jsx)("p",{className:"mb-2",children:o(a.data.text)}),a.type==="list"&&(0,s.jsx)("div",{className:"mb-2",children:(0,s.jsx)("ul",{className:"list-disc pl-6",children:a.data.items.map(function(r,v){return(0,s.jsx)("li",{children:o(r)},v)})})}),a.type==="simpleImage"&&(0,s.jsx)("div",{className:"flex justify-center mb-2",children:(0,s.jsx)(l.Z,{src:a.data.url,alt:"IMG",loading:"lazy",width:"80%"})}),a.type==="raw"&&(0,s.jsx)("div",{className:"py-4 flex justify-center",children:(0,s.jsx)("div",{className:"md:w-1/2",children:o(a.data.html)})})]})})})};d.Z=n},89892:function(P,d,t){var l=t(62307),_=t(26515),s=t(12245),n=t(86074),m=function(){return(0,n.jsxs)("div",{className:"flex mb-4 gap-2 justify-end",children:[(0,n.jsx)("button",{className:"h-12 w-12 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,n.jsx)(l.Z,{})}),(0,n.jsx)("button",{className:"h-12 w-12 bg-sky-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,n.jsx)(_.Z,{})}),(0,n.jsx)("button",{className:"h-12 w-12 bg-red-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,n.jsx)(s.Z,{})})]})};d.Z=m},6196:function(P,d,t){t.r(d);var l=t(27424),_=t.n(l),s=t(62435),n=t(43886),m=t(90950),u=t(85673),x=t(50108),o=t(47669),a=t(73425),r=t(73403),v=t(20841),B=t(99611),I=t(89892),L=t(91939),U=t(30381),W=t.n(U),e=t(86074),y=function(){var R=(0,n.UO)(),E=R.id,K=(0,s.useState)(0),f=_()(K,2),p=f[0],S=f[1],j=(0,n.YB)(),N=(0,s.useState)(),O=_()(N,2),i=O[0],Z=O[1],b=(0,s.useState)(),g=_()(b,2),h=g[0],A=g[1],H=(0,s.useState)(!1),C=_()(H,2),Y=C[0],T=C[1];return(0,s.useEffect)(function(){E&&(T(!0),fetch("https://shinecgialai.com.vn/api/catalog/structure/".concat(E),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(D){return D.json().then(function(c){c&&c.length>0?c.forEach(function(M){if(M.name==="Editor"&&M.arguments){var F=JSON.parse(M.arguments);A(F)}}):A([]),T(!1)})}),fetch("https://shinecgialai.com.vn/api/catalog/".concat(E),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(D){return D.json().then(function(c){Z(c)})}),setTimeout(function(){S(100)},100))},[E]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.ql,{children:(0,e.jsxs)("title",{children:[(i==null?void 0:i.name)||""," - Shinec Gia Lai"]})}),(0,e.jsx)(a.Z,{loading:Y}),(0,e.jsxs)("main",{className:"container mx-auto py-10 px-4 md:px-0",children:[(0,e.jsx)("div",{className:"mb-4",children:(0,e.jsx)(u.Z,{items:[{title:(0,e.jsxs)(n.rU,{to:"/",children:[(0,e.jsx)(r.Z,{})," ",j.formatMessage({id:"HOME"})]})},{title:j.formatMessage({id:"PRODUCT"})}]})}),(0,e.jsxs)("div",{className:"md:flex gap-4",children:[(0,e.jsxs)("div",{className:"md:w-3/4",children:[(0,e.jsx)("div",{className:"text-2xl md:text-4xl text-green-700 text-center font-semibold py-4",children:i==null?void 0:i.name}),(0,e.jsxs)("div",{className:"mb-4 border-b border-dashed",children:[(0,e.jsx)("div",{className:"mb-4",children:(h==null?void 0:h.blocks)&&(0,e.jsx)(o.Z,{blocks:h.blocks})}),(0,e.jsxs)("div",{className:"text-slate-500 italic flex justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(v.Z,{})," C\u1EADp nh\u1EADt l\xFAc: ",W()(i==null?void 0:i.modifiedDate).format("DD/MM/YYYY hh:mm")]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(B.Z,{})," L\u1EF1\u1EE3t xem: ",((i==null?void 0:i.viewCount)||0).toLocaleString()]})]})]}),(0,e.jsx)(I.Z,{})]}),(0,e.jsx)(x.Z,{})]})]}),(0,e.jsx)(L.b,{}),(0,e.jsx)(m.Z,{height:p})]})};d.default=y}}]);
