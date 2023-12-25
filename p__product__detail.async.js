"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[195],{47669:function(C,o,e){var E=e(56210),i=e(62435),s=e(86074),l=function(h){var u=h.blocks,c=function(t){return t?i.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):""};return console.log(u),(0,s.jsx)(s.Fragment,{children:u.map(function(a){return(0,s.jsxs)("div",{id:a.id,children:[a.type==="header"&&(0,s.jsx)("h1",{className:"mb-2 font-semibold text-lg",children:c(a.data.text)}),a.type==="paragraph"&&(0,s.jsx)("p",{className:"mb-2",children:c(a.data.text)}),a.type==="list"&&(0,s.jsx)("div",{className:"mb-2",children:(0,s.jsx)("ul",{className:"list-disc pl-6",children:a.data.items.map(function(t,f){return(0,s.jsx)("li",{children:t},f)})})}),a.type==="simpleImage"&&(0,s.jsx)("div",{className:"flex justify-center mb-2",children:(0,s.jsx)(E.Z,{src:a.data.url,alt:"IMG",loading:"lazy"})})]})})})};o.Z=l},89410:function(C,o,e){var E=e(17061),i=e.n(E),s=e(17156),l=e.n(s),O=e(27424),h=e.n(O),u=e(68795),c=e(56466),a=e(14313),t=e(62435),f=e(43886),n=e(86074),p=function(){var T=(0,t.useState)([]),D=h()(T,2),P=D[0],A=D[1],g=function(){var d=l()(i()().mark(function x(){var _,j;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!(P&&P.length>0)){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,fetch("https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=10&type=2",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}});case 4:if(_=r.sent,!_.ok){r.next=10;break}return r.next=8,_.json().then(function(m){return m.data});case 8:j=r.sent,A(j);case 10:case"end":return r.stop()}},x)}));return function(){return d.apply(this,arguments)}}();return(0,t.useEffect)(function(){g()},[]),(0,n.jsxs)("div",{className:"md:w-1/4",children:[(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsxs)("div",{className:"flex rounded-full bg-slate-100 h-10 w-full",children:[(0,n.jsx)("input",{type:"text",className:"h-full w-full bg-slate-100 rounded-full px-4",placeholder:"Nh\u1EADp t\u1EEB kh\xF3a..."}),(0,n.jsx)(u.Z,{className:"text-xl text-slate-600 mr-3"})]})}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,n.jsx)(c.Z,{})," S\u1EA2N PH\u1EA8M - D\u1ECACH V\u1EE4"]}),P.map(function(d){return(0,n.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,n.jsx)(a.Z,{className:"text-green-700"})," ",(0,n.jsx)(f.rU,{to:"/product/".concat(d.id),className:"text-slate-600 font-medium hover:text-green-700",children:d.name})]},d.id)})]}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("img",{src:"https://namcaukien.com.vn/wp-content/uploads/2021/05/photo-Hotline.jpg",alt:"HOTLINE",className:"w-full"})})]})};o.Z=p},6196:function(C,o,e){e.r(o);var E=e(27424),i=e.n(E),s=e(62435),l=e(43886),O=e(59956),h=e(57953),u=e(9963),c=e(89410),a=e(47669),t=e(86074),f=function(){var p=(0,l.UO)(),v=p.id,T=(0,s.useState)(0),D=i()(T,2),P=D[0],A=D[1],g=(0,l.YB)(),d=(0,s.useState)(),x=i()(d,2),_=x[0],j=x[1],L=(0,s.useState)(),r=i()(L,2),m=r[0],R=r[1],K=(0,s.useState)(!1),U=i()(K,2),S=U[0],N=U[1];return(0,s.useEffect)(function(){v&&(N(!0),fetch("https://shinecgialai.com.vn/api/catalog/structure/".concat(v),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(I){return I.json().then(function(M){M&&M.length>0?M.forEach(function(B){if(B.name==="Editor"&&B.arguments){var W=JSON.parse(B.arguments);R(W)}}):R([]),N(!1)})}),fetch("https://shinecgialai.com.vn/api/catalog/".concat(v),{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}}).then(function(I){return I.json().then(function(M){j(M)})}),setTimeout(function(){A(147)},100))},[v]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.ql,{children:(0,t.jsxs)("title",{children:[(_==null?void 0:_.name)||""," - Shinec Gia Lai"]})}),(0,t.jsx)(h.Z,{fullscreen:!0,spinning:S}),(0,t.jsxs)("main",{className:"container mx-auto py-10 px-4 md:px-0",children:[(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(u.Z,{items:[{title:g.formatMessage({id:"HOME"})},{title:g.formatMessage({id:"PRODUCT"})}]})}),(0,t.jsxs)("div",{className:"md:flex gap-4",children:[(0,t.jsxs)("div",{className:"md:w-3/4",children:[(0,t.jsx)("div",{className:"text-3xl text-green-700 text-center font-semibold py-4",children:_==null?void 0:_.name}),(0,t.jsx)("div",{className:"mb-4",children:(m==null?void 0:m.blocks)&&(0,t.jsx)(a.Z,{blocks:m.blocks})})]}),(0,t.jsx)(c.Z,{})]})]}),(0,t.jsx)(O.Z,{height:P})]})};o.default=f}}]);
