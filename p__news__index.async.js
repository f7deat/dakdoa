"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[480],{80351:function(B,r,t){t.r(r);var c=t(27424),n=t.n(c),h=t(59956),_=t(70859),E=t(57953),m=t(5529),a=t(62435),i=t(43886),e=t(86074),v=function(){var M=_.Z.Meta,f=(0,a.useState)(0),o=n()(f,2),D=o[0],P=o[1],g=(0,a.useState)(!1),d=n()(g,2),j=d[0],l=d[1],O=(0,i.YB)(),x=(0,a.useState)([]),u=n()(x,2),A=u[0],S=u[1];return(0,a.useEffect)(function(){l(!0),fetch("https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=8&type=1",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(s){return s.json().then(function(T){S(T.data),l(!1)})}),setTimeout(function(){P(147)},100)},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.ql,{children:(0,e.jsxs)("title",{children:[O.formatMessage({id:"NEWS"})," - Shinec Gia Lai"]})}),(0,e.jsxs)("div",{className:"container mx-auto py-4 md:py-10",children:[(0,e.jsx)(E.Z,{fullscreen:!0,spinning:j}),(0,e.jsx)("div",{className:"grid md:grid-cols-4 gap-4",children:A.map(function(s){return(0,e.jsx)(_.Z,{hoverable:!0,cover:(0,e.jsx)("img",{alt:s.name,src:s.thumbnail,className:"h-52 object-cover"}),children:(0,e.jsx)(m.Z,{title:s.name,children:(0,e.jsx)(M,{title:(0,e.jsx)(i.rU,{to:"/news/".concat(s.id),children:s.name}),description:(0,e.jsx)("div",{className:"truncate",children:s.description})})})},s.id)})})]}),(0,e.jsx)(h.Z,{height:D})]})};r.default=v}}]);
