"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[766],{47669:function(D,E,e){var u=e(98163),r=e(62435),n=e(86074),p=function(v){var i=v.blocks;console.log(i);var c=function(l){return l?r.createElement("div",{dangerouslySetInnerHTML:{__html:l}}):""};return(0,n.jsxs)("div",{className:"2xl:text-lg",children:[i.map(function(t){return(0,n.jsxs)("div",{id:t.id,children:[t.type==="header"&&(0,n.jsx)("h1",{className:"mb-2 font-bold text-lg md:text-xl",children:c(t.data.text)}),t.type==="paragraph"&&(0,n.jsx)("p",{className:"mb-2",children:c(t.data.text)}),t.type==="list"&&(0,n.jsx)("div",{className:"mb-2",children:(0,n.jsx)("ul",{className:"list-disc pl-6",children:t.data.items.map(function(l,h){return(0,n.jsx)("li",{children:c(l)},h)})})}),t.type==="simpleImage"&&(0,n.jsx)("div",{className:"flex justify-center mb-2",children:(0,n.jsx)(u.Z,{src:t.data.url,alt:"IMG",loading:"lazy",width:"80%"})}),t.type==="raw"&&(0,n.jsx)("div",{className:"py-4 flex justify-center",children:(0,n.jsx)("div",{className:"md:w-1/2",children:c(t.data.html)})}),(0,n.jsx)("div",{className:"mb-4",children:t.type==="table"&&(0,n.jsx)(n.Fragment,{children:t.data.content.map(function(l,h){return(0,n.jsx)("div",{className:"grid grid-cols-".concat(l.length),children:l.map(function(g,x){return(0,n.jsx)("div",{className:"border p-2",children:c(g)},x)})},h)})})})]})}),(0,n.jsx)("div",{className:"grid-cols-3"}),(0,n.jsx)("div",{className:"grid-cols-5"})]})};E.Z=p},21454:function(D,E,e){var u=e(52830),r=e(86074),n=function(d){var v=(0,u.q_)({y:d.active?0:-400,opacity:d.active?1:0});return(0,r.jsx)(u.q.div,{style:v,children:(0,r.jsx)("h1",{className:"text-center text-2xl md:text-4xl 2xl:text-5xl uppercase font-bold py-4 ".concat(d.primary?"text-green-700":"text-white"," mb-0 2xl:mb-4"),children:d.children})})};E.Z=n},73425:function(D,E,e){var u=e(86074),r=function(p){return p.loading&&(0,u.jsx)("div",{id:"loader",children:(0,u.jsxs)("div",{className:"cube-folding",children:[(0,u.jsx)("span",{className:"leaf1"}),(0,u.jsx)("span",{className:"leaf2"}),(0,u.jsx)("span",{className:"leaf3"}),(0,u.jsx)("span",{className:"leaf4"})]})})};E.Z=r},5229:function(D,E,e){e.r(E);var u=e(27424),r=e.n(u),n=e(47669),p=e(21454),d=e(73425),v=e(12361),i=e(73403),c=e(20841),t=e(99611),l=e(85673),h=e(96074),g=e(30381),x=e.n(g),P=e(62435),j=e(43886),s=e(86074),O=function(){var m=(0,j.UO)(),f=m.id,a=m.parent,M=(0,j.YB)(),K=(0,P.useState)(),T=r()(K,2),o=T[0],b=T[1],w=(0,P.useState)(),A=r()(w,2),y=A[0],R=A[1],Z=(0,P.useState)(!1),B=r()(Z,2),S=B[0],I=B[1];return(0,P.useEffect)(function(){if(f){I(!0);var U=f;a&&(U=a+"/"+f),(0,v.z4)(U).then(function(N){b(N.data),(0,v.cT)(N.data.id).then(function(G){var C=G.data;C&&C.length>0?C.forEach(function(L){if(L.name==="Editor"&&L.arguments){var W=JSON.parse(L.arguments);R(W),console.log(W)}}):R([]),I(!1)})})}},[f]),(0,s.jsxs)("div",{className:"relative overflow-x-hidden",children:[(0,s.jsx)(j.ql,{children:(0,s.jsxs)("title",{children:[(o==null?void 0:o.name)||""," - Shinec Gia Lai"]})}),(0,s.jsx)("div",{className:"mb-4 h-32 bg-gray-300 flex items-center justify-center text-white",style:{background:"url('https://longhau.com.vn/assets/images/about-awards-bg-bottom.png') #010e007d bottom",backgroundBlendMode:"multiply"},children:(0,s.jsx)(l.Z,{items:[{title:(0,s.jsxs)(j.rU,{to:"/",children:[(0,s.jsx)(i.Z,{})," ",M.formatMessage({id:"HOME"})]})},{title:o==null?void 0:o.name}]})}),(0,s.jsx)(d.Z,{loading:S}),(0,s.jsx)("div",{className:"flex h-full flex-col justify-between w-screen",children:(0,s.jsxs)("main",{className:"container mx-auto px-4 md:px-0",children:[(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsx)(l.Z,{items:[{title:(0,s.jsxs)(j.rU,{to:"/",children:[(0,s.jsx)(i.Z,{})," ",M.formatMessage({id:"HOME"})]})},{title:o==null?void 0:o.name}]})}),(0,s.jsx)(p.Z,{active:!0,primary:!0,children:o==null?void 0:o.name}),(0,s.jsxs)("div",{className:"mb-4 border-b border-dashed",children:[(0,s.jsx)("div",{className:"mb-4",children:(y==null?void 0:y.blocks)&&(0,s.jsx)(n.Z,{blocks:y.blocks})}),(0,s.jsx)(h.Z,{dashed:!0}),(0,s.jsxs)("div",{className:"italic flex justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(c.Z,{})," C\u1EADp nh\u1EADt l\xFAc: ",x()(o==null?void 0:o.modifiedDate).format("DD/MM/YYYY hh:mm")]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(t.Z,{})," L\u1EF1\u1EE3t xem: ",((o==null?void 0:o.viewCount)||0).toLocaleString()]})]})]})]})})]})};E.default=O},12361:function(D,E,e){e.d(E,{Ph:function(){return v},cT:function(){return l},sx:function(){return s},ws:function(){return P},z4:function(){return c}});var u=e(17061),r=e.n(u),n=e(17156),p=e.n(n),d=e(34859);function v(_){return i.apply(this,arguments)}function i(){return i=p()(r()().mark(function _(m){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",d.Z.get("catalog/".concat(m)));case 1:case"end":return a.stop()}},_)})),i.apply(this,arguments)}function c(_){return t.apply(this,arguments)}function t(){return t=p()(r()().mark(function _(m){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",d.Z.get("catalog/name/".concat(m)));case 1:case"end":return a.stop()}},_)})),t.apply(this,arguments)}function l(_){return h.apply(this,arguments)}function h(){return h=p()(r()().mark(function _(m){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",d.Z.get("catalog/structure-by-id/".concat(m)));case 1:case"end":return a.stop()}},_)})),h.apply(this,arguments)}function g(_){return x.apply(this,arguments)}function x(){return x=_asyncToGenerator(_regeneratorRuntime().mark(function _(m){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request.get("catalog/structure/".concat(m)));case 1:case"end":return a.stop()}},_)})),x.apply(this,arguments)}function P(_){return j.apply(this,arguments)}function j(){return j=p()(r()().mark(function _(m){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return m.active=!0,a.abrupt("return",d.Z.get("catalog/list",{params:m}));case 2:case"end":return a.stop()}},_)})),j.apply(this,arguments)}function s(_,m){return O.apply(this,arguments)}function O(){return O=p()(r()().mark(function _(m,f){return r()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.abrupt("return",d.Z.get("catalog/components",{params:{normalizedName:m,locale:f}}));case 1:case"end":return M.stop()}},_)})),O.apply(this,arguments)}},34859:function(D,E,e){var u=e(17061),r=e.n(u),n=e(17156),p=e.n(n),d=e(5121),v=d.Z.create({baseURL:"https://shinecgialai.com.vn/api/",headers:{Accept:"application/json","content-type":"application/json"}});v.interceptors.request.use(function(){var i=p()(r()().mark(function c(t){var l;return r()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return l=window.localStorage.getItem("wf_token"),l&&(t.headers.Authorization="Bearer ".concat(l)),g.abrupt("return",t);case 3:case"end":return g.stop()}},c)}));return function(c){return i.apply(this,arguments)}}()),v.interceptors.response.use(function(i){return i},function(i){var c,t,l;throw(i==null||(c=i.response)===null||c===void 0?void 0:c.status)===401&&d.Z.post("https://shinecgialai.com.vn/api/user/password-sign-in",{userName:"admin",passWord:"Password@123"}).then(function(h){localStorage.setItem("wf_token",h.data.token),window.location.reload()}),console.log("error => ",i==null||(t=i.response)===null||t===void 0||(t=t.config)===null||t===void 0?void 0:t.url,i==null||(l=i.response)===null||l===void 0?void 0:l.status),i}),E.Z=v}}]);
