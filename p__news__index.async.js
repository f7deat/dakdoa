"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[480],{80351:function(J,c,t){t.r(c);var g=t(27424),i=t.n(g),P=t(91939),O=t(73425),j=t(90950),x=t(50108),C=t(73403),m=t(85813),A=t(85673),S=t(75214),T=t(5529),L=t(12643),U=t(92941),W=t(30381),B=t.n(W),r=t(62435),d=t(43886),e=t(86074),I=function(){var K=m.Z.Meta,R=(0,r.useState)(!1),h=i()(R,2),N=h[0],E=h[1],y=(0,r.useState)(!1),u=i()(y,2),p=u[0],v=u[1],l=(0,d.YB)(),Z=(0,r.useState)([]),M=i()(Z,2),o=M[0],Y=M[1],H=(0,r.useState)([]),D=i()(H,2),f=D[0],F=D[1];(0,r.useEffect)(function(){o&&o.length>1||(E(!0),fetch("https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=8&type=1",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(n){return n.json().then(function(a){Y(a.data),E(!1)})}))},[]);var G=function(a){a==="namcaukien"&&f.length===0&&(v(!0),fetch("https://shinecgialai.com.vn/api/open-api/wordpress/posts?domain=https://namcaukien.com.vn/",{method:"GET"}).then(function(s){return s.json().then(function(_){F(_),v(!1)})}))},z=function(a){return a?r.createElement("div",{dangerouslySetInnerHTML:{__html:a}}):""};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(d.ql,{children:(0,e.jsxs)("title",{children:[l.formatMessage({id:"NEWS"})," - Shinec Gia Lai"]})}),(0,e.jsxs)("div",{className:"container mx-auto py-4 md:py-10",children:[(0,e.jsx)(O.Z,{loading:N}),(0,e.jsx)("div",{className:"mb-4 px-4",children:(0,e.jsx)(A.Z,{items:[{title:(0,e.jsxs)(d.rU,{to:"/",children:[(0,e.jsx)(C.Z,{})," ",l.formatMessage({id:"HOME"})]})},{title:l.formatMessage({id:"NEWS"})}]})}),(0,e.jsxs)("div",{className:"md:flex gap-4",children:[(0,e.jsx)("div",{className:"md:w-3/4",children:(0,e.jsx)(S.Z,{onChange:G,type:"card",items:[{key:"gialai",label:"N\u1ED9i b\u1ED9",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"grid md:grid-cols-3 gap-4",children:o.map(function(n){return(0,e.jsx)(m.Z,{hoverable:!0,cover:(0,e.jsx)("img",{alt:n.name,src:n.thumbnail,className:"h-52 object-cover"}),children:(0,e.jsx)(T.Z,{title:n.name,children:(0,e.jsx)(K,{title:(0,e.jsx)(d.rU,{to:"/news/".concat(n.id),children:n.name}),description:(0,e.jsx)("div",{className:"truncate",children:n.description})})})},n.id)})}),(0,e.jsx)("div",{className:"py-2 flex justify-end",children:(0,e.jsx)(L.Z,{})})]})},{key:"namcaukien",label:"Shinec",children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(U.Z,{loading:p,columns:[{title:"#",render:function(a,s,_){return _+1}},{title:"Ti\xEAu \u0111\u1EC1",render:function(a,s){return(0,e.jsx)("a",{href:"https://namcaukien.com.vn/".concat(s.slug),target:"_blank",className:"hover:text-green-700",children:z(s.title.rendered)})}},{title:"Ng\xE0y",render:function(a,s){return B()(s.date).format("DD-MM-YYYY hh:mm")},width:200}],dataSource:f})})}]})}),(0,e.jsx)(x.Z,{})]})]}),(0,e.jsx)(P.b,{}),(0,e.jsx)(j.Z,{height:100})]})};c.default=I}}]);
