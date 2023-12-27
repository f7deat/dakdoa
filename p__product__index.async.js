"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[316],{50108:function(U,c,e){e.d(c,{Z:function(){return h}});var E=e(17061),r=e.n(E),g=e(17156),j=e.n(g),P=e(27424),M=e.n(P),m=e(28548),a=e(86074),O=function(){return(0,a.jsxs)("div",{className:"h-[180px] bg-green-700 rounded-lg w-full flex flex-col justify-center items-center gap-4 text-white uppercase relative",children:[(0,a.jsxs)("div",{className:"font-semibold text-3xl",children:[(0,a.jsx)(m.Z,{})," Hotline"]}),(0,a.jsx)("div",{className:"font-bold text-4xl",children:"0269.6333.456"})]})},l=O,i=e(68795),t=e(56466),D=e(14313),p=e(62435),A=e(43886),N=function(){var S=(0,p.useState)([]),v=M()(S,2),d=v[0],C=v[1],f=function(){var n=j()(r()().mark(function x(){var o,u;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(d&&d.length>0)){s.next=2;break}return s.abrupt("return");case 2:return s.next=4,fetch("https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=10&type=2",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}});case 4:if(o=s.sent,!o.ok){s.next=10;break}return s.next=8,o.json().then(function(y){return y.data});case 8:u=s.sent,C(u);case 10:case"end":return s.stop()}},x)}));return function(){return n.apply(this,arguments)}}();return(0,p.useEffect)(function(){f()},[]),(0,a.jsxs)("div",{className:"md:w-1/4",children:[(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsxs)("div",{className:"flex rounded-full bg-slate-100 h-10 w-full",children:[(0,a.jsx)("input",{type:"text",className:"h-full w-full bg-slate-100 rounded-full px-4",placeholder:"Nh\u1EADp t\u1EEB kh\xF3a..."}),(0,a.jsx)(i.Z,{className:"text-xl text-slate-600 mr-3"})]})}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,a.jsx)(t.Z,{})," S\u1EA2N PH\u1EA8M - D\u1ECACH V\u1EE4"]}),d.map(function(n){return(0,a.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,a.jsx)(D.Z,{className:"text-green-700"})," ",(0,a.jsx)(A.rU,{to:"/product/".concat(n.id),className:"text-slate-600 font-medium hover:text-green-700",children:n.name})]},n.id)})]}),(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)(l,{})})]})},h=N},54303:function(U,c,e){e.r(c);var E=e(27424),r=e.n(E),g=e(73425),j=e(59956),P=e(50108),M=e(73403),m=e(70859),a=e(85673),O=e(5529),l=e(62435),i=e(43886),t=e(86074),D=function(){var A=m.Z.Meta,N=(0,l.useState)(0),h=r()(N,2),T=h[0],S=h[1],v=(0,l.useState)(!1),d=r()(v,2),C=d[0],f=d[1],n=(0,i.YB)(),x=(0,l.useState)([]),o=r()(x,2),u=o[0],R=o[1];return(0,l.useEffect)(function(){u&&u.length>1||(f(!0),fetch("https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=8&type=2",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(s){return s.json().then(function(y){R(y.data),f(!1)})}),setTimeout(function(){S(147)},100))},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.ql,{children:(0,t.jsxs)("title",{children:[n.formatMessage({id:"PRODUCT"})," - Shinec Gia Lai"]})}),(0,t.jsxs)("div",{className:"container mx-auto py-4 md:py-10",children:[(0,t.jsx)(g.Z,{loading:C}),(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(a.Z,{items:[{title:(0,t.jsxs)(i.rU,{to:"/",children:[(0,t.jsx)(M.Z,{})," ",n.formatMessage({id:"HOME"})]})},{title:n.formatMessage({id:"PRODUCT"})}]})}),(0,t.jsxs)("div",{className:"md:flex gap-4",children:[(0,t.jsx)("div",{className:"md:w-3/4",children:(0,t.jsx)("div",{className:"grid md:grid-cols-3 gap-4",children:u.map(function(s){return(0,t.jsx)(m.Z,{hoverable:!0,cover:(0,t.jsx)("img",{alt:s.name,src:s.thumbnail,className:"h-52 object-cover"}),children:(0,t.jsx)(O.Z,{title:s.name,children:(0,t.jsx)(A,{title:(0,t.jsx)(i.rU,{to:"/product/".concat(s.id),children:s.name}),description:(0,t.jsx)("div",{className:"truncate",children:s.description})})})},s.id)})})}),(0,t.jsx)(P.Z,{})]})]}),(0,t.jsx)(j.Z,{height:T})]})};c.default=D}}]);
