"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[195],{47669:function(N,m,e){var x=e(98163),o=e(62435),t=e(86074),r=function(v){var j=v.blocks;console.log(j);var c=function(l){return l?o.createElement("div",{dangerouslySetInnerHTML:{__html:l}}):""};return(0,t.jsxs)("div",{className:"2xl:text-lg",children:[j.map(function(d){return(0,t.jsxs)("div",{id:d.id,children:[d.type==="header"&&(0,t.jsx)("h1",{className:"mb-2 font-bold text-lg md:text-xl",children:c(d.data.text)}),d.type==="paragraph"&&(0,t.jsx)("p",{className:"mb-2",children:c(d.data.text)}),d.type==="list"&&(0,t.jsx)("div",{className:"mb-2",children:(0,t.jsx)("ul",{className:"list-disc pl-6",children:d.data.items.map(function(l,i){return(0,t.jsx)("li",{children:c(l)},i)})})}),d.type==="simpleImage"&&(0,t.jsx)("div",{className:"flex justify-center mb-2",children:(0,t.jsx)(x.Z,{src:d.data.url,alt:"IMG",loading:"lazy",width:"80%"})}),d.type==="raw"&&(0,t.jsx)("div",{className:"py-4 flex justify-center",children:(0,t.jsx)("div",{className:"md:w-1/2",children:c(d.data.html)})}),(0,t.jsx)("div",{className:"mb-4",children:d.type==="table"&&(0,t.jsx)(t.Fragment,{children:d.data.content.map(function(l,i){return(0,t.jsx)("div",{className:"grid grid-cols-".concat(l.length),children:l.map(function(D,_){return(0,t.jsx)("div",{className:"border p-2",children:c(D)},_)})},i)})})})]})}),(0,t.jsx)("div",{className:"grid-cols-3"}),(0,t.jsx)("div",{className:"grid-cols-5"})]})};m.Z=r},89892:function(N,m,e){var x=e(62307),o=e(26515),t=e(12245),r=e(86074),h=function(){return(0,r.jsxs)("div",{className:"flex mb-4 gap-2 justify-end",children:[(0,r.jsx)("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://shinecgialai.vn/#/news/f4df3e6b-69ae-41cf-6ac0-08dc045466df",children:(0,r.jsx)("button",{className:"h-12 w-12 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,r.jsx)(x.Z,{})})}),(0,r.jsx)("button",{className:"h-12 w-12 bg-sky-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,r.jsx)(o.Z,{})}),(0,r.jsx)("button",{className:"h-12 w-12 bg-red-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,r.jsx)(t.Z,{})})]})};m.Z=h},89410:function(N,m,e){var x=e(17061),o=e.n(x),t=e(17156),r=e.n(t),h=e(27424),v=e.n(h),j=e(31474),c=e(12361),d=e(68795),l=e(56466),i=e(14313),D=e(62435),_=e(43886),s=e(86074),O=function(){var U=(0,D.useState)([]),A=v()(U,2),P=A[0],f=A[1],g=(0,_.YB)(),T=function(){var u=r()(o()().mark(function n(){return o()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:if(!(P&&P.length>0)){E.next=2;break}return E.abrupt("return");case 2:(0,c.ws)({current:1,pageSize:8,type:2,locale:g.locale}).then(function(M){M.data.data&&f(M.data.data)});case 3:case"end":return E.stop()}},n)}));return function(){return u.apply(this,arguments)}}();return(0,D.useEffect)(function(){T()},[]),(0,s.jsxs)("div",{className:"md:w-1/4",children:[(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsxs)("div",{className:"flex rounded-full bg-slate-100 h-10 w-full",children:[(0,s.jsx)("input",{type:"text",className:"h-full w-full bg-slate-100 rounded-full px-4",placeholder:g.formatMessage({id:"SEARCH_PLACEHOLDER"})}),(0,s.jsx)(d.Z,{className:"text-xl text-slate-600 mr-3"})]})}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,s.jsx)(l.Z,{className:"mr-2"}),(0,s.jsx)(_._H,{id:"PRODUCT"})]}),P.map(function(u){return(0,s.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,s.jsx)(i.Z,{className:"text-green-700"})," ",(0,s.jsx)(_.rU,{to:"/product/".concat(u.id),className:"text-slate-800 font-medium hover:text-green-700",children:u.name})]},u.id)})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,s.jsx)(l.Z,{className:"mr-2"}),(0,s.jsx)(_._H,{id:"ABOUT"})]}),(0,s.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,s.jsx)(i.Z,{className:"text-green-700"})," ",(0,s.jsx)(_.rU,{to:"/catalog",className:"text-slate-800 font-medium hover:text-green-700",children:(0,s.jsx)(_._H,{id:"CATALOG"})})]}),(0,s.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,s.jsx)(i.Z,{className:"text-green-700"})," ",(0,s.jsx)(_.rU,{to:"/news/8bc9db4e-3ffb-4950-8e41-08dc081eba2c",className:"text-slate-800 font-medium hover:text-green-700",children:"Ph\u1ED1i c\u1EA3nh 3D"})]}),(0,s.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,s.jsx)(i.Z,{className:"text-green-700"})," ",(0,s.jsx)(_.rU,{to:"/news/1c87fe8e-5094-49cf-4d09-08dc0823fa43",className:"text-slate-800 font-medium hover:text-green-700",children:"Gi\u1EA3i th\u01B0\u1EDFng"})]}),(0,s.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,s.jsx)(i.Z,{className:"text-green-700"})," ",(0,s.jsx)(_.rU,{to:"/news/36724df0-a109-44b2-770f-08dc08244635",className:"text-slate-800 font-medium hover:text-green-700",children:"\u0110\u1ECBnh h\u01B0\u1EDBng v\xE0 t\u1EA7m nh\xECn SHINEC"})]})]}),(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsx)(j.Z,{})})]})};m.Z=O},6196:function(N,m,e){e.r(m);var x=e(27424),o=e.n(x),t=e(62435),r=e(43886),h=e(85673),v=e(89410),j=e(47669),c=e(73425),d=e(73403),l=e(20841),i=e(99611),D=e(89892),_=e(30381),s=e.n(_),O=e(12361),a=e(86074),U=function(){var P=(0,r.UO)(),f=P.id,g=(0,r.YB)(),T=(0,t.useState)(),u=o()(T,2),n=u[0],L=u[1],E=(0,t.useState)(),M=o()(E,2),p=M[0],W=M[1],I=(0,t.useState)(!1),R=o()(I,2),K=R[0],y=R[1];return(0,t.useEffect)(function(){f&&(y(!0),(0,O.cT)(f).then(function(C){var b=C.data;b&&b.length>0?b.forEach(function(B){if(B.name==="Editor"&&B.arguments){var S=JSON.parse(B.arguments);W(S)}}):W([]),y(!1)}),(0,O.Ph)(f).then(function(C){L(C.data),console.log(C.data)}))},[f]),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)(r.ql,{children:[(0,a.jsxs)("title",{children:[(n==null?void 0:n.name)||""," - Shinec Gia Lai"]}),(0,a.jsx)("meta",{property:"og:title",content:n==null?void 0:n.name}),(0,a.jsx)("meta",{property:"og:description",content:n==null?void 0:n.description}),(0,a.jsx)("meta",{property:"og:image",content:n==null?void 0:n.thumbnail})]}),(0,a.jsx)(c.Z,{loading:K}),(0,a.jsx)("div",{style:{backgroundImage:"url(https://longhau.com.vn/assets/images/about-awards-bg-bottom.png)",backgroundRepeat:"no-repeat",backgroundPosition:"bottom"},children:(0,a.jsxs)("main",{className:"container mx-auto py-10 px-4 md:px-0",children:[(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)(h.Z,{items:[{title:(0,a.jsxs)(r.rU,{to:"/",children:[(0,a.jsx)(d.Z,{})," ",g.formatMessage({id:"HOME"})]})},{title:g.formatMessage({id:"PRODUCT"})}]})}),(0,a.jsxs)("div",{className:"md:flex gap-4",children:[(0,a.jsxs)("div",{className:"md:w-3/4",children:[(0,a.jsx)("h1",{className:"text-2xl md:text-4xl text-green-700 text-center font-semibold py-4",children:n==null?void 0:n.name}),(0,a.jsxs)("div",{className:"mb-4 border-b border-dashed",children:[(0,a.jsx)("div",{className:"mb-4",children:(p==null?void 0:p.blocks)&&(0,a.jsx)(j.Z,{blocks:p.blocks})}),(0,a.jsxs)("div",{className:"text-slate-500 italic flex justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(l.Z,{})," C\u1EADp nh\u1EADt l\xFAc: ",s()(n==null?void 0:n.modifiedDate).format("DD/MM/YYYY hh:mm")]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.Z,{})," L\u1EF1\u1EE3t xem: ",((n==null?void 0:n.viewCount)||0).toLocaleString()]})]})]}),(0,a.jsx)(D.Z,{})]}),(0,a.jsx)(v.Z,{})]})]})})]})};m.default=U}}]);
