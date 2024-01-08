"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[969],{47669:function(f,o,t){var c=t(56486),_=t(62435),s=t(86074),a=function(E){var x=E.blocks,l=function(r){return r?_.createElement("div",{dangerouslySetInnerHTML:{__html:r}}):""};return(0,s.jsx)(s.Fragment,{children:x.map(function(n){return(0,s.jsxs)("div",{id:n.id,children:[n.type==="header"&&(0,s.jsx)("h1",{className:"mb-2 font-semibold text-lg",children:l(n.data.text)}),n.type==="paragraph"&&(0,s.jsx)("p",{className:"mb-2",children:l(n.data.text)}),n.type==="list"&&(0,s.jsx)("div",{className:"mb-2",children:(0,s.jsx)("ul",{className:"list-disc pl-6",children:n.data.items.map(function(r,v){return(0,s.jsx)("li",{children:l(r)},v)})})}),n.type==="simpleImage"&&(0,s.jsx)("div",{className:"flex justify-center mb-2",children:(0,s.jsx)(c.Z,{src:n.data.url,alt:"IMG",loading:"lazy",width:"80%"})}),n.type==="raw"&&(0,s.jsx)("div",{className:"py-4 flex justify-center",children:(0,s.jsx)("div",{className:"md:w-1/2",children:l(n.data.html)})})]})})})};o.Z=a},89892:function(f,o,t){var c=t(62307),_=t(26515),s=t(12245),a=t(86074),d=function(){return(0,a.jsxs)("div",{className:"flex mb-4 gap-2 justify-end",children:[(0,a.jsx)("button",{className:"h-12 w-12 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,a.jsx)(c.Z,{})}),(0,a.jsx)("button",{className:"h-12 w-12 bg-sky-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,a.jsx)(_.Z,{})}),(0,a.jsx)("button",{className:"h-12 w-12 bg-red-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,a.jsx)(s.Z,{})})]})};o.Z=d},50453:function(f,o,t){t.r(o);var c=t(27424),_=t.n(c),s=t(90950),a=t(62435),d=t(43886),E=t(85673),x=t(50108),l=t(47669),n=t(73425),r=t(73403),v=t(20841),I=t(99611),L=t(89892),U=t(91939),W=t(30381),y=t.n(W),e=t(86074),K=function(){var R=(0,d.UO)(),u=R.id,N=(0,a.useState)(0),j=_()(N,2),S=j[0],p=j[1],O=(0,d.YB)(),Z=(0,a.useState)(),P=_()(Z,2),i=P[0],b=P[1],H=(0,a.useState)(),g=_()(H,2),h=g[0],A=g[1],Y=(0,a.useState)(!1),C=_()(Y,2),F=C[0],T=C[1];return(0,a.useEffect)(function(){setTimeout(function(){p(100)},100),u&&(T(!0),fetch("https://shinecgialai.com.vn/api/catalog/".concat(u),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(D){return D.json().then(function(m){b(m)})}),fetch("https://shinecgialai.com.vn/api/catalog/structure/".concat(u),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(D){return D.json().then(function(m){m&&m.length>0?m.forEach(function(M){if(M.name==="Editor"&&M.arguments){var B=JSON.parse(M.arguments);A(B),console.log(B)}}):A([]),T(!1)})}))},[u]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(d.ql,{children:(0,e.jsxs)("title",{children:[(i==null?void 0:i.name)||""," - Shinec Gia Lai"]})}),(0,e.jsx)(n.Z,{loading:F}),(0,e.jsxs)("main",{className:"container mx-auto py-10 px-4 md:px-0",children:[(0,e.jsx)("div",{className:"mb-4",children:(0,e.jsx)(E.Z,{items:[{title:(0,e.jsxs)(d.rU,{to:"/",children:[(0,e.jsx)(r.Z,{})," ",O.formatMessage({id:"HOME"})]})},{title:O.formatMessage({id:"NEWS"})}]})}),(0,e.jsxs)("div",{className:"md:flex gap-4",children:[(0,e.jsxs)("div",{className:"md:w-3/4",children:[(0,e.jsx)("div",{className:"text-3xl text-green-700 text-center font-semibold py-4",children:i==null?void 0:i.name}),(0,e.jsxs)("div",{className:"mb-4 border-b border-dashed",children:[(0,e.jsx)("div",{className:"mb-4",children:(h==null?void 0:h.blocks)&&(0,e.jsx)(l.Z,{blocks:h.blocks})}),(0,e.jsxs)("div",{className:"text-slate-500 italic flex justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(v.Z,{})," C\u1EADp nh\u1EADt l\xFAc: ",y()(i==null?void 0:i.modifiedDate).format("DD/MM/YYYY hh:mm")]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(I.Z,{})," L\u1EF1\u1EE3t xem: ",((i==null?void 0:i.viewCount)||0).toLocaleString()]})]})]}),(0,e.jsx)(L.Z,{})]}),(0,e.jsx)(x.Z,{})]})]}),(0,e.jsx)(U.b,{}),(0,e.jsx)(s.Z,{height:S})]})};o.default=K}}]);
