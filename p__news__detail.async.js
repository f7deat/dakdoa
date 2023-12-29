"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[969],{47669:function(f,l,t){var r=t(40017),o=t(62435),n=t(86074),s=function(m){var x=m.blocks,c=function(d){return d?o.createElement("div",{dangerouslySetInnerHTML:{__html:d}}):""};return(0,n.jsx)(n.Fragment,{children:x.map(function(a){return(0,n.jsxs)("div",{id:a.id,children:[a.type==="header"&&(0,n.jsx)("h1",{className:"mb-2 font-semibold text-lg",children:c(a.data.text)}),a.type==="paragraph"&&(0,n.jsx)("p",{className:"mb-2",children:c(a.data.text)}),a.type==="list"&&(0,n.jsx)("div",{className:"mb-2",children:(0,n.jsx)("ul",{className:"list-disc pl-6",children:a.data.items.map(function(d,v){return(0,n.jsx)("li",{children:c(d)},v)})})}),a.type==="simpleImage"&&(0,n.jsx)("div",{className:"flex justify-center mb-2",children:(0,n.jsx)(r.Z,{src:a.data.url,alt:"IMG",loading:"lazy",width:"80%"})})]})})})};l.Z=s},89892:function(f,l,t){var r=t(62307),o=t(26515),n=t(12245),s=t(86074),_=function(){return(0,s.jsxs)("div",{className:"flex mb-4 gap-2 justify-end",children:[(0,s.jsx)("button",{className:"h-12 w-12 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,s.jsx)(r.Z,{})}),(0,s.jsx)("button",{className:"h-12 w-12 bg-sky-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,s.jsx)(o.Z,{})}),(0,s.jsx)("button",{className:"h-12 w-12 bg-red-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,s.jsx)(n.Z,{})})]})};l.Z=_},50453:function(f,l,t){t.r(l);var r=t(27424),o=t.n(r),n=t(59956),s=t(62435),_=t(43886),m=t(85673),x=t(50108),c=t(47669),a=t(73425),d=t(73403),v=t(20841),I=t(99611),L=t(89892),U=t(91939),W=t(30381),K=t.n(W),e=t(86074),R=function(){var y=(0,_.UO)(),u=y.id,p=(0,s.useState)(0),O=o()(p,2),N=O[0],S=O[1],j=(0,_.YB)(),Z=(0,s.useState)(),P=o()(Z,2),i=P[0],b=P[1],H=(0,s.useState)(),g=o()(H,2),h=g[0],A=g[1],Y=(0,s.useState)(!1),T=o()(Y,2),F=T[0],B=T[1];return(0,s.useEffect)(function(){setTimeout(function(){S(147)},100),u&&(B(!0),fetch("https://shinecgialai.com.vn/api/catalog/".concat(u),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(D){return D.json().then(function(E){b(E)})}),fetch("https://shinecgialai.com.vn/api/catalog/structure/".concat(u),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(D){return D.json().then(function(E){E&&E.length>0?E.forEach(function(M){if(M.name==="Editor"&&M.arguments){var C=JSON.parse(M.arguments);A(C),console.log(C)}}):A([]),B(!1)})}))},[u]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(_.ql,{children:(0,e.jsxs)("title",{children:[(i==null?void 0:i.name)||""," - Shinec Gia Lai"]})}),(0,e.jsx)(a.Z,{loading:F}),(0,e.jsxs)("main",{className:"container mx-auto py-10 px-4 md:px-0",children:[(0,e.jsx)("div",{className:"mb-4",children:(0,e.jsx)(m.Z,{items:[{title:(0,e.jsxs)(_.rU,{to:"/",children:[(0,e.jsx)(d.Z,{})," ",j.formatMessage({id:"HOME"})]})},{title:j.formatMessage({id:"NEWS"})}]})}),(0,e.jsxs)("div",{className:"md:flex gap-4",children:[(0,e.jsxs)("div",{className:"md:w-3/4",children:[(0,e.jsx)("div",{className:"text-3xl text-green-700 text-center font-semibold py-4",children:i==null?void 0:i.name}),(0,e.jsxs)("div",{className:"mb-4 border-b border-dashed",children:[(0,e.jsx)("div",{className:"mb-4",children:(h==null?void 0:h.blocks)&&(0,e.jsx)(c.Z,{blocks:h.blocks})}),(0,e.jsxs)("div",{className:"text-slate-500 italic flex justify-between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(v.Z,{})," C\u1EADp nh\u1EADt l\xFAc: ",K()(i==null?void 0:i.modifiedDate).format("DD/MM/YYYY hh:mm")]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(I.Z,{})," L\u1EF1\u1EE3t xem: ",((i==null?void 0:i.viewCount)||0).toLocaleString()]})]})]}),(0,e.jsx)(L.Z,{})]}),(0,e.jsx)(x.Z,{})]})]}),(0,e.jsx)(U.b,{}),(0,e.jsx)(n.Z,{height:N})]})};l.default=R}}]);
