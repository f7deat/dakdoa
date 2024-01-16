"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[316],{50108:function(S,h,s){s.d(h,{Z:function(){return b}});var N=s(17061),d=s.n(N),P=s(17156),D=s.n(P),M=s(27424),O=s.n(M),p=s(28548),A=s(10174),e=s(86074),T=function(){return(0,e.jsxs)("div",{className:"h-[180px] bg-green-700 rounded-lg w-full flex flex-col justify-center items-center gap-4 text-white uppercase relative",style:{backgroundImage:"url(".concat(A.Z,")"),backgroundSize:"cover"},children:[(0,e.jsxs)("div",{className:"font-semibold text-3xl",children:[(0,e.jsx)(p.Z,{})," Hotline"]}),(0,e.jsx)("div",{className:"font-bold text-4xl",children:(0,e.jsx)("a",{href:"tel:0269.6333.456",children:"0269.6333.456"})})]})},C=T,i=s(68795),l=s(56466),t=s(14313),v=s(62435),o=s(43886),U=function(){var y=(0,v.useState)([]),E=O()(y,2),u=E[0],j=E[1],B=function(){var r=D()(d()().mark(function c(){var x,m;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(u&&u.length>0)){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,fetch("https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=10&type=2",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}});case 4:if(x=a.sent,!x.ok){a.next=10;break}return a.next=8,x.json().then(function(n){return n.data});case 8:m=a.sent,j(m);case 10:case"end":return a.stop()}},c)}));return function(){return r.apply(this,arguments)}}();return(0,v.useEffect)(function(){B()},[]),(0,e.jsxs)("div",{className:"md:w-1/4",children:[(0,e.jsx)("div",{className:"mb-4",children:(0,e.jsxs)("div",{className:"flex rounded-full bg-slate-100 h-10 w-full",children:[(0,e.jsx)("input",{type:"text",className:"h-full w-full bg-slate-100 rounded-full px-4",placeholder:"Nh\u1EADp t\u1EEB kh\xF3a..."}),(0,e.jsx)(i.Z,{className:"text-xl text-slate-600 mr-3"})]})}),(0,e.jsxs)("div",{className:"mb-4",children:[(0,e.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,e.jsx)(l.Z,{})," S\u1EA2N PH\u1EA8M - D\u1ECACH V\u1EE4"]}),u.map(function(r){return(0,e.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,e.jsx)(t.Z,{className:"text-green-700"})," ",(0,e.jsx)(o.rU,{to:"/product/".concat(r.id),className:"text-slate-600 font-medium hover:text-green-700",children:r.name})]},r.id)})]}),(0,e.jsxs)("div",{className:"mb-4",children:[(0,e.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,e.jsx)(l.Z,{})," TH\xD4NG TIN CHI TI\u1EBET"]}),(0,e.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,e.jsx)(t.Z,{className:"text-green-700"})," ",(0,e.jsx)(o.rU,{to:"/catalog",className:"text-slate-600 font-medium hover:text-green-700",children:"T\xE0i li\u1EC7u"})]}),(0,e.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,e.jsx)(t.Z,{className:"text-green-700"})," ",(0,e.jsx)(o.rU,{to:"/news/8bc9db4e-3ffb-4950-8e41-08dc081eba2c",className:"text-slate-600 font-medium hover:text-green-700",children:"Ph\u1ED1i c\u1EA3nh 3D"})]}),(0,e.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,e.jsx)(t.Z,{className:"text-green-700"})," ",(0,e.jsx)(o.rU,{to:"/news/1c87fe8e-5094-49cf-4d09-08dc0823fa43",className:"text-slate-600 font-medium hover:text-green-700",children:"Gi\u1EA3i th\u01B0\u1EDFng"})]}),(0,e.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,e.jsx)(t.Z,{className:"text-green-700"})," ",(0,e.jsx)(o.rU,{to:"/news/36724df0-a109-44b2-770f-08dc08244635",className:"text-slate-600 font-medium hover:text-green-700",children:"\u0110\u1ECBnh h\u01B0\u1EDBng v\xE0 t\u1EA7m nh\xECn SHINEC"})]})]}),(0,e.jsx)("div",{className:"mb-4",children:(0,e.jsx)(C,{})})]})},b=U},54303:function(S,h,s){s.r(h);var N=s(27424),d=s.n(N),P=s(91939),D=s(73425),M=s(90950),O=s(50108),p=s(93937),A=s(73403),e=s(85813),T=s(85673),C=s(61781),i=s(62435),l=s(43886),t=s(86074),v=function(){var U=e.Z.Meta,b=(0,i.useState)(0),f=d()(b,2),y=f[0],E=f[1],u=(0,i.useState)(!1),j=d()(u,2),B=j[0],r=j[1],c=(0,l.YB)(),x=(0,i.useState)([]),m=d()(x,2),g=m[0],a=m[1];return(0,i.useEffect)(function(){g&&g.length>1||(r(!0),(0,p.ws)({current:1,pageSize:8,type:2}).then(function(n){a(n.data.data),r(!1)}),setTimeout(function(){E(100)},100))},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.ql,{children:(0,t.jsxs)("title",{children:[c.formatMessage({id:"PRODUCT"})," - Shinec Gia Lai"]})}),(0,t.jsxs)("div",{className:"container mx-auto py-4",children:[(0,t.jsx)(D.Z,{loading:B}),(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(T.Z,{items:[{title:(0,t.jsxs)(l.rU,{to:"/",children:[(0,t.jsx)(A.Z,{})," ",c.formatMessage({id:"HOME"})]})},{title:c.formatMessage({id:"PRODUCT"})}]})}),(0,t.jsxs)("div",{className:"md:flex gap-4 mb-4",children:[(0,t.jsx)("div",{className:"md:w-3/4",children:(0,t.jsx)("div",{className:"grid md:grid-cols-3 gap-4",children:g.map(function(n){return(0,t.jsx)(e.Z,{hoverable:!0,cover:(0,t.jsx)("img",{alt:n.name,src:n.thumbnail,className:"h-52 object-cover"}),children:(0,t.jsx)(C.Z,{title:n.name,children:(0,t.jsx)(U,{title:(0,t.jsx)(l.rU,{to:"/product/".concat(n.id),children:n.name}),description:(0,t.jsx)("div",{className:"truncate",children:n.description})})})},n.id)})})}),(0,t.jsx)(O.Z,{})]})]}),(0,t.jsx)(P.b,{}),(0,t.jsx)(M.Z,{height:y})]})};h.default=v}}]);
