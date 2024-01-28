"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[969],{47669:function(p,E,e){var h=e(98163),_=e(62435),a=e(86074),r=function(v){var D=v.blocks;console.log(D);var m=function(d){return d?_.createElement("div",{dangerouslySetInnerHTML:{__html:d}}):""};return(0,a.jsxs)("div",{className:"tinos 2xl:text-xl text-lg",children:[D.map(function(n){return(0,a.jsxs)("div",{id:n.id,children:[n.type==="header"&&(0,a.jsx)("h1",{className:"mb-2 font-semibold text-lg",children:m(n.data.text)}),n.type==="paragraph"&&(0,a.jsx)("p",{className:"mb-2",children:m(n.data.text)}),n.type==="list"&&(0,a.jsx)("div",{className:"mb-2",children:(0,a.jsx)("ul",{className:"list-disc pl-6",children:n.data.items.map(function(d,x){return(0,a.jsx)("li",{children:m(d)},x)})})}),n.type==="simpleImage"&&(0,a.jsx)("div",{className:"flex justify-center mb-2",children:(0,a.jsx)(h.Z,{src:n.data.url,alt:"IMG",loading:"lazy",width:"80%"})}),n.type==="raw"&&(0,a.jsx)("div",{className:"py-4 flex justify-center",children:(0,a.jsx)("div",{className:"md:w-1/2",children:m(n.data.html)})}),(0,a.jsx)("div",{className:"mb-4",children:n.type==="table"&&(0,a.jsx)(a.Fragment,{children:n.data.content.map(function(d,x){return(0,a.jsx)("div",{className:"grid grid-cols-".concat(d.length),children:d.map(function(u,s){return(0,a.jsx)("div",{className:"border p-2",children:m(u)},s)})},x)})})})]})}),(0,a.jsx)("div",{className:"grid-cols-3"}),(0,a.jsx)("div",{className:"grid-cols-5"})]})};E.Z=r},89892:function(p,E,e){var h=e(62307),_=e(26515),a=e(12245),r=e(86074),c=function(){return(0,r.jsxs)("div",{className:"flex mb-4 gap-2 justify-end",children:[(0,r.jsx)("button",{className:"h-12 w-12 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,r.jsx)(h.Z,{})}),(0,r.jsx)("button",{className:"h-12 w-12 bg-sky-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,r.jsx)(_.Z,{})}),(0,r.jsx)("button",{className:"h-12 w-12 bg-red-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl",children:(0,r.jsx)(a.Z,{})})]})};E.Z=c},89410:function(p,E,e){var h=e(17061),_=e.n(h),a=e(17156),r=e.n(a),c=e(27424),v=e.n(c),D=e(31474),m=e(68795),n=e(56466),d=e(14313),x=e(62435),u=e(43886),s=e(86074),N=function(){var g=(0,x.useState)([]),t=v()(g,2),f=t[0],U=t[1],A=function(){var o=r()(_()().mark(function M(){var j,P;return _()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!(f&&f.length>0)){i.next=2;break}return i.abrupt("return");case 2:return i.next=4,fetch("https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=10&type=2",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("wf_token")}});case 4:if(j=i.sent,!j.ok){i.next=10;break}return i.next=8,j.json().then(function(T){return T.data});case 8:P=i.sent,U(P);case 10:case"end":return i.stop()}},M)}));return function(){return o.apply(this,arguments)}}();return(0,x.useEffect)(function(){A()},[]),(0,s.jsxs)("div",{className:"md:w-1/4",children:[(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsxs)("div",{className:"flex rounded-full bg-slate-100 h-10 w-full",children:[(0,s.jsx)("input",{type:"text",className:"h-full w-full bg-slate-100 rounded-full px-4",placeholder:"Nh\u1EADp t\u1EEB kh\xF3a..."}),(0,s.jsx)(m.Z,{className:"text-xl text-slate-600 mr-3"})]})}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,s.jsx)(n.Z,{})," S\u1EA2N PH\u1EA8M - D\u1ECACH V\u1EE4"]}),f.map(function(o){return(0,s.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,s.jsx)(d.Z,{className:"text-green-700"})," ",(0,s.jsx)(u.rU,{to:"/product/".concat(o.id),className:"text-slate-800 font-medium hover:text-green-700",children:o.name})]},o.id)})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,s.jsx)(n.Z,{})," TH\xD4NG TIN CHI TI\u1EBET"]}),(0,s.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,s.jsx)(d.Z,{className:"text-green-700"})," ",(0,s.jsx)(u.rU,{to:"/catalog",className:"text-slate-800 font-medium hover:text-green-700",children:"T\xE0i li\u1EC7u"})]}),(0,s.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,s.jsx)(d.Z,{className:"text-green-700"})," ",(0,s.jsx)(u.rU,{to:"/news/8bc9db4e-3ffb-4950-8e41-08dc081eba2c",className:"text-slate-800 font-medium hover:text-green-700",children:"Ph\u1ED1i c\u1EA3nh 3D"})]}),(0,s.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,s.jsx)(d.Z,{className:"text-green-700"})," ",(0,s.jsx)(u.rU,{to:"/news/1c87fe8e-5094-49cf-4d09-08dc0823fa43",className:"text-slate-800 font-medium hover:text-green-700",children:"Gi\u1EA3i th\u01B0\u1EDFng"})]}),(0,s.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,s.jsx)(d.Z,{className:"text-green-700"})," ",(0,s.jsx)(u.rU,{to:"/news/36724df0-a109-44b2-770f-08dc08244635",className:"text-slate-800 font-medium hover:text-green-700",children:"\u0110\u1ECBnh h\u01B0\u1EDBng v\xE0 t\u1EA7m nh\xECn SHINEC"})]})]}),(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsx)(D.Z,{})})]})};E.Z=N},50453:function(p,E,e){e.r(E);var h=e(27424),_=e.n(h),a=e(90950),r=e(62435),c=e(43886),v=e(85673),D=e(89410),m=e(47669),n=e(73425),d=e(73403),x=e(20841),u=e(99611),s=e(89892),N=e(30381),b=e.n(N),g=e(93937),t=e(86074),f=function(){var A=(0,c.UO)(),o=A.id,M=(0,r.useState)(0),j=_()(M,2),P=j[0],L=j[1],i=(0,c.YB)(),T=(0,r.useState)(),y=_()(T,2),l=y[0],H=y[1],G=(0,r.useState)(),R=_()(G,2),O=R[0],W=R[1],F=(0,r.useState)(!1),K=_()(F,2),Y=K[0],S=K[1];return(0,r.useEffect)(function(){setTimeout(function(){L(100)},100),o&&(S(!0),(0,g.Ph)(o).then(function(C){H(C.data)}),(0,g.cT)(o).then(function(C){var B=C.data;B&&B.length>0?B.forEach(function(I){if(I.name==="Editor"&&I.arguments){var Z=JSON.parse(I.arguments);W(Z),console.log(Z)}}):W([]),S(!1)}))},[o]),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(c.ql,{children:(0,t.jsxs)("title",{children:[(l==null?void 0:l.name)||""," - Shinec Gia Lai"]})}),(0,t.jsx)(n.Z,{loading:Y}),(0,t.jsx)("div",{style:{backgroundImage:"url(https://longhau.com.vn/assets/images/about-awards-bg-bottom.png)",backgroundRepeat:"no-repeat",backgroundPosition:"bottom"},children:(0,t.jsxs)("main",{className:"container mx-auto py-10 px-4 md:px-0",children:[(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(v.Z,{items:[{title:(0,t.jsxs)(c.rU,{to:"/",children:[(0,t.jsx)(d.Z,{})," ",i.formatMessage({id:"HOME"})]})},{title:i.formatMessage({id:"NEWS"})}]})}),(0,t.jsxs)("div",{className:"md:flex gap-4",children:[(0,t.jsxs)("div",{className:"md:w-3/4",children:[(0,t.jsx)("div",{className:"text-3xl text-green-700 text-center font-semibold py-4",children:l==null?void 0:l.name}),(0,t.jsxs)("div",{className:"mb-4 border-b border-dashed",children:[(0,t.jsx)("div",{className:"mb-4",children:(O==null?void 0:O.blocks)&&(0,t.jsx)(m.Z,{blocks:O.blocks})}),(0,t.jsxs)("div",{className:"text-slate-500 italic flex justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(x.Z,{})," C\u1EADp nh\u1EADt l\xFAc: ",b()(l==null?void 0:l.modifiedDate).format("DD/MM/YYYY hh:mm")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(u.Z,{})," L\u1EF1\u1EE3t xem: ",((l==null?void 0:l.viewCount)||0).toLocaleString()]})]})]}),(0,t.jsx)(s.Z,{})]}),(0,t.jsx)(D.Z,{})]})]})}),(0,t.jsx)(a.Z,{height:P})]})};E.default=f}}]);
