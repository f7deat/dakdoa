"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[316],{54303:function(I,o,s){s.r(o);var h=s(27424),i=s.n(h),u=s(91939),M=s(73425),P=s(90950),D=s(50108),v=s(73403),r=s(70859),O=s(85673),j=s(5529),a=s(62435),n=s(43886),t=s(86074),g=function(){var f=r.Z.Meta,x=(0,a.useState)(0),l=i()(x,2),T=l[0],A=l[1],C=(0,a.useState)(!1),c=i()(C,2),L=c[0],E=c[1],_=(0,n.YB)(),U=(0,a.useState)([]),m=i()(U,2),d=m[0],B=m[1];return(0,a.useEffect)(function(){d&&d.length>1||(E(!0),fetch("https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=8&type=2",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(e){return e.json().then(function(R){B(R.data),E(!1)})}),setTimeout(function(){A(147)},100))},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.ql,{children:(0,t.jsxs)("title",{children:[_.formatMessage({id:"PRODUCT"})," - Shinec Gia Lai"]})}),(0,t.jsxs)("div",{className:"container mx-auto py-4",children:[(0,t.jsx)(M.Z,{loading:L}),(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(O.Z,{items:[{title:(0,t.jsxs)(n.rU,{to:"/",children:[(0,t.jsx)(v.Z,{})," ",_.formatMessage({id:"HOME"})]})},{title:_.formatMessage({id:"PRODUCT"})}]})}),(0,t.jsxs)("div",{className:"md:flex gap-4 mb-4",children:[(0,t.jsx)("div",{className:"md:w-3/4",children:(0,t.jsx)("div",{className:"grid md:grid-cols-3 gap-4",children:d.map(function(e){return(0,t.jsx)(r.Z,{hoverable:!0,cover:(0,t.jsx)("img",{alt:e.name,src:e.thumbnail,className:"h-52 object-cover"}),children:(0,t.jsx)(j.Z,{title:e.name,children:(0,t.jsx)(f,{title:(0,t.jsx)(n.rU,{to:"/product/".concat(e.id),children:e.name}),description:(0,t.jsx)("div",{className:"truncate",children:e.description})})})},e.id)})})}),(0,t.jsx)(D.Z,{})]})]}),(0,t.jsx)(u.b,{}),(0,t.jsx)(P.Z,{height:T})]})};o.default=g}}]);
