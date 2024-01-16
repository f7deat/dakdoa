"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[195],{47669:function(y,l,t){var u=t(56486),d=t(62435),n=t(86074),r=function(E){var j=E.blocks,i=function(o){return o?d.createElement("div",{dangerouslySetInnerHTML:{__html:o}}):""};return(0,n.jsx)(n.Fragment,{children:j.map(function(e){return(0,n.jsxs)("div",{id:e.id,children:[e.type==="header"&&(0,n.jsx)("h1",{className:"mb-2 font-semibold text-lg",children:i(e.data.text)}),e.type==="paragraph"&&(0,n.jsx)("p",{className:"mb-2",children:i(e.data.text)}),e.type==="list"&&(0,n.jsx)("div",{className:"mb-2",children:(0,n.jsx)("ul",{className:"list-disc pl-6",children:e.data.items.map(function(o,_){return(0,n.jsx)("li",{children:i(o)},_)})})}),e.type==="simpleImage"&&(0,n.jsx)("div",{className:"flex justify-center mb-2",children:(0,n.jsx)(u.Z,{src:e.data.url,alt:"IMG",loading:"lazy",width:"80%"})}),e.type==="raw"&&(0,n.jsx)("div",{className:"py-4 flex justify-center",children:(0,n.jsx)("div",{className:"md:w-1/2",children:i(e.data.html)})})]})})})};l.Z=r},89892:function(y,l,t){var u=t(62307),d=t(26515),n=t(12245),r=t(86074),v=function(){return(0,r.jsxs)("div",{className:"flex mb-4 gap-2 justify-end",children:[(0,r.jsx)("button",{className:"h-12 w-12 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,r.jsx)(u.Z,{})}),(0,r.jsx)("button",{className:"h-12 w-12 bg-sky-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)("button",{className:"h-12 w-12 bg-red-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,r.jsx)(n.Z,{})})]})};l.Z=v},50108:function(y,l,t){t.d(l,{Z:function(){return s}});var u=t(17061),d=t.n(u),n=t(17156),r=t.n(n),v=t(27424),E=t.n(v),j=t(28548),i=t(10174),e=t(86074),o=function(){return(0,e.jsxs)("div",{className:"h-[180px] bg-green-700 rounded-lg w-full flex flex-col justify-center items-center gap-4 text-white uppercase relative",style:{backgroundImage:"url(".concat(i.Z,")"),backgroundSize:"cover"},children:[(0,e.jsxs)("div",{className:"font-semibold text-3xl",children:[(0,e.jsx)(j.Z,{})," Hotline"]}),(0,e.jsx)("div",{className:"font-bold text-4xl",children:(0,e.jsx)("a",{href:"tel:0269.6333.456",children:"0269.6333.456"})})]})},_=o,T=t(68795),g=t(56466),x=t(14313),D=t(62435),m=t(43886),P=function(){var b=(0,D.useState)([]),M=E()(b,2),c=M[0],B=M[1],O=function(){var h=r()(d()().mark(function N(){var f,p;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(c&&c.length>0)){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,fetch("https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=10&type=2",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}});case 4:if(f=a.sent,!f.ok){a.next=10;break}return a.next=8,f.json().then(function(U){return U.data});case 8:p=a.sent,B(p);case 10:case"end":return a.stop()}},N)}));return function(){return h.apply(this,arguments)}}();return(0,D.useEffect)(function(){O()},[]),(0,e.jsxs)("div",{className:"md:w-1/4",children:[(0,e.jsx)("div",{className:"mb-4",children:(0,e.jsxs)("div",{className:"flex rounded-full bg-slate-100 h-10 w-full",children:[(0,e.jsx)("input",{type:"text",className:"h-full w-full bg-slate-100 rounded-full px-4",placeholder:"Nh\u1EADp t\u1EEB kh\xF3a..."}),(0,e.jsx)(T.Z,{className:"text-xl text-slate-600 mr-3"})]})}),(0,e.jsxs)("div",{className:"mb-4",children:[(0,e.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,e.jsx)(g.Z,{})," S\u1EA2N PH\u1EA8M - D\u1ECACH V\u1EE4"]}),c.map(function(h){return(0,e.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,e.jsx)(x.Z,{className:"text-green-700"})," ",(0,e.jsx)(m.rU,{to:"/product/".concat(h.id),className:"text-slate-600 font-medium hover:text-green-700",children:h.name})]},h.id)})]}),(0,e.jsxs)("div",{className:"mb-4",children:[(0,e.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,e.jsx)(g.Z,{})," TH\xD4NG TIN CHI TI\u1EBET"]}),(0,e.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,e.jsx)(x.Z,{className:"text-green-700"})," ",(0,e.jsx)(m.rU,{to:"/catalog",className:"text-slate-600 font-medium hover:text-green-700",children:"T\xE0i li\u1EC7u"})]}),(0,e.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,e.jsx)(x.Z,{className:"text-green-700"})," ",(0,e.jsx)(m.rU,{to:"/news/8bc9db4e-3ffb-4950-8e41-08dc081eba2c",className:"text-slate-600 font-medium hover:text-green-700",children:"Ph\u1ED1i c\u1EA3nh 3D"})]}),(0,e.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,e.jsx)(x.Z,{className:"text-green-700"})," ",(0,e.jsx)(m.rU,{to:"/news/1c87fe8e-5094-49cf-4d09-08dc0823fa43",className:"text-slate-600 font-medium hover:text-green-700",children:"Gi\u1EA3i th\u01B0\u1EDFng"})]}),(0,e.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,e.jsx)(x.Z,{className:"text-green-700"})," ",(0,e.jsx)(m.rU,{to:"/news/36724df0-a109-44b2-770f-08dc08244635",className:"text-slate-600 font-medium hover:text-green-700",children:"\u0110\u1ECBnh h\u01B0\u1EDBng v\xE0 t\u1EA7m nh\xECn SHINEC"})]})]}),(0,e.jsx)("div",{className:"mb-4",children:(0,e.jsx)(_,{})})]})},s=P},6196:function(y,l,t){t.r(l);var u=t(27424),d=t.n(u),n=t(62435),r=t(43886),v=t(90950),E=t(85673),j=t(50108),i=t(47669),e=t(73425),o=t(73403),_=t(20841),T=t(99611),g=t(89892),x=t(91939),D=t(30381),m=t.n(D),P=t(93937),s=t(86074),C=function(){var M=(0,r.UO)(),c=M.id,B=(0,n.useState)(0),O=d()(B,2),h=O[0],N=O[1],f=(0,r.YB)(),p=(0,n.useState)(),I=d()(p,2),a=I[0],U=I[1],G=(0,n.useState)(),Z=d()(G,2),A=Z[0],K=Z[1],F=(0,n.useState)(!1),W=d()(F,2),Y=W[0],H=W[1];return(0,n.useEffect)(function(){c&&(H(!0),(0,P.cT)(c).then(function(L){var R=L.data;R&&R.length>0?R.forEach(function(S){if(S.name==="Editor"&&S.arguments){var z=JSON.parse(S.arguments);K(z)}}):K([]),H(!1)}),(0,P.Ph)(c).then(function(L){U(L.data.data)}),setTimeout(function(){N(100)},100))},[c]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.ql,{children:(0,s.jsxs)("title",{children:[(a==null?void 0:a.name)||""," - Shinec Gia Lai"]})}),(0,s.jsx)(e.Z,{loading:Y}),(0,s.jsxs)("main",{className:"container mx-auto py-10 px-4 md:px-0",children:[(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsx)(E.Z,{items:[{title:(0,s.jsxs)(r.rU,{to:"/",children:[(0,s.jsx)(o.Z,{})," ",f.formatMessage({id:"HOME"})]})},{title:f.formatMessage({id:"PRODUCT"})}]})}),(0,s.jsxs)("div",{className:"md:flex gap-4",children:[(0,s.jsxs)("div",{className:"md:w-3/4",children:[(0,s.jsx)("div",{className:"text-2xl md:text-4xl text-green-700 text-center font-semibold py-4",children:a==null?void 0:a.name}),(0,s.jsxs)("div",{className:"mb-4 border-b border-dashed",children:[(0,s.jsx)("div",{className:"mb-4",children:(A==null?void 0:A.blocks)&&(0,s.jsx)(i.Z,{blocks:A.blocks})}),(0,s.jsxs)("div",{className:"text-slate-500 italic flex justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(_.Z,{})," C\u1EADp nh\u1EADt l\xFAc: ",m()(a==null?void 0:a.modifiedDate).format("DD/MM/YYYY hh:mm")]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(T.Z,{})," L\u1EF1\u1EE3t xem: ",((a==null?void 0:a.viewCount)||0).toLocaleString()]})]})]}),(0,s.jsx)(g.Z,{})]}),(0,s.jsx)(j.Z,{})]})]}),(0,s.jsx)(x.b,{}),(0,s.jsx)(v.Z,{height:h})]})};l.default=C}}]);