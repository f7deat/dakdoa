"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[766],{97937:function(O,v,e){e.d(v,{Z:function(){return r}});var o=e(87462),s=e(62435),a={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},m=a,u=e(77346),E=function(t,i){return s.createElement(u.Z,(0,o.Z)({},t,{ref:i,icon:m}))},r=s.forwardRef(E)},47669:function(O,v,e){var o=e(98163),s=e(62435),a=e(86074),m=function(E){var r=E.blocks;console.log(r);var _=function(i){return i?s.createElement("div",{dangerouslySetInnerHTML:{__html:i}}):""};return(0,a.jsxs)("div",{className:"2xl:text-lg",children:[r.map(function(t){return(0,a.jsxs)("div",{id:t.id,children:[t.type==="header"&&(0,a.jsx)("h1",{className:"mb-2 font-bold text-lg md:text-xl","data-aos":"fade-up",children:_(t.data.text)}),t.type==="paragraph"&&(0,a.jsx)("p",{className:"mb-2",children:_(t.data.text)}),t.type==="list"&&(0,a.jsx)("div",{className:"mb-2",children:(0,a.jsx)("ul",{className:"list-disc pl-6",children:t.data.items.map(function(i,f){return(0,a.jsx)("li",{children:_(i)},f)})})}),t.type==="simpleImage"&&(0,a.jsx)("div",{className:"flex justify-center mb-2","data-aos":"zoom-in",children:(0,a.jsx)(o.Z,{src:t.data.url,alt:"IMG",loading:"lazy",width:"80%"})}),t.type==="raw"&&(0,a.jsx)("div",{className:"py-4 flex justify-center",children:(0,a.jsx)("div",{className:"md:w-1/2",children:_(t.data.html)})}),(0,a.jsx)("div",{className:"mb-4",children:t.type==="table"&&(0,a.jsx)(a.Fragment,{children:t.data.content.map(function(i,f){return(0,a.jsx)("div",{className:"grid grid-cols-".concat(i.length),children:i.map(function(g,j){return(0,a.jsx)("div",{className:"border p-2",children:_(g)},j)})},f)})})})]})}),(0,a.jsx)("div",{className:"grid-cols-3"}),(0,a.jsx)("div",{className:"grid-cols-5"})]})};v.Z=m},21454:function(O,v,e){var o=e(52830),s=e(86074),a=function(u){var E=(0,o.q_)({y:u.active?0:-400,opacity:u.active?1:0});return(0,s.jsx)(o.q.div,{style:E,children:(0,s.jsx)("h1",{className:"text-center text-2xl md:text-4xl 2xl:text-5xl uppercase font-bold py-4 ".concat(u.primary?"text-green-700":"text-white"," mb-0 2xl:mb-4"),children:u.children})})};v.Z=a},73425:function(O,v,e){var o=e(86074),s=function(m){return m.loading&&(0,o.jsx)("div",{id:"loader",children:(0,o.jsxs)("div",{className:"cube-folding",children:[(0,o.jsx)("span",{className:"leaf1"}),(0,o.jsx)("span",{className:"leaf2"}),(0,o.jsx)("span",{className:"leaf3"}),(0,o.jsx)("span",{className:"leaf4"})]})})};v.Z=s},5229:function(O,v,e){e.r(v);var o=e(27424),s=e.n(o),a=e(47669),m=e(21454),u=e(73425),E=e(12361),r=e(73403),_=e(20841),t=e(99611),i=e(85673),f=e(96074),g=e(30381),j=e.n(g),P=e(62435),x=e(43886),l=e(86074),D=function(){var p=(0,x.UO)(),h=p.id,n=p.parent,M=(0,x.YB)(),K=(0,P.useState)(),T=s()(K,2),c=T[0],b=T[1],Z=(0,P.useState)(),A=s()(Z,2),C=A[0],R=A[1],w=(0,P.useState)(!1),B=s()(w,2),S=B[0],I=B[1];return(0,P.useEffect)(function(){if(h){I(!0);var U=h;n&&(U=n+"/"+h),(0,E.z4)(U).then(function(N){b(N.data),(0,E.cT)(N.data.id).then(function(G){var y=G.data;y&&y.length>0?y.forEach(function(L){if(L.name==="Editor"&&L.arguments){var W=JSON.parse(L.arguments);R(W),console.log(W)}}):R([]),I(!1)})})}},[h]),(0,l.jsxs)("div",{className:"relative overflow-x-hidden",children:[(0,l.jsx)(x.ql,{children:(0,l.jsxs)("title",{children:[(c==null?void 0:c.name)||""," - Shinec Gia Lai"]})}),(0,l.jsx)("div",{className:"mb-4 h-32 bg-gray-300 flex items-center justify-center text-white",style:{background:"url('https://longhau.com.vn/assets/images/about-awards-bg-bottom.png') #010e007d bottom",backgroundBlendMode:"multiply"},children:(0,l.jsx)(i.Z,{items:[{title:(0,l.jsxs)(x.rU,{to:"/",children:[(0,l.jsx)(r.Z,{})," ",M.formatMessage({id:"HOME"})]})},{title:c==null?void 0:c.name}]})}),(0,l.jsx)(u.Z,{loading:S}),(0,l.jsx)("div",{className:"flex h-full flex-col justify-between w-full",children:(0,l.jsxs)("main",{className:"container mx-auto px-4 md:px-0",children:[(0,l.jsx)("div",{className:"mb-4",children:(0,l.jsx)(i.Z,{items:[{title:(0,l.jsxs)(x.rU,{to:"/",children:[(0,l.jsx)(r.Z,{})," ",M.formatMessage({id:"HOME"})]})},{title:c==null?void 0:c.name}]})}),(0,l.jsx)(m.Z,{active:!0,primary:!0,children:c==null?void 0:c.name}),(0,l.jsxs)("div",{className:"mb-4 border-b border-dashed",children:[(0,l.jsx)("div",{className:"mb-4",children:(C==null?void 0:C.blocks)&&(0,l.jsx)(a.Z,{blocks:C.blocks})}),(0,l.jsx)(f.Z,{dashed:!0}),(0,l.jsxs)("div",{className:"italic flex justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(_.Z,{})," C\u1EADp nh\u1EADt l\xFAc: ",j()(c==null?void 0:c.modifiedDate).format("DD/MM/YYYY hh:mm")]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(t.Z,{})," L\u1EF1\u1EE3t xem: ",((c==null?void 0:c.viewCount)||0).toLocaleString()]})]})]})]})})]})};v.default=D},12361:function(O,v,e){e.d(v,{Ph:function(){return E},cT:function(){return i},sx:function(){return l},ws:function(){return P},z4:function(){return _}});var o=e(17061),s=e.n(o),a=e(17156),m=e.n(a),u=e(34859);function E(d){return r.apply(this,arguments)}function r(){return r=m()(s()().mark(function d(p){return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u.Z.get("catalog/".concat(p)));case 1:case"end":return n.stop()}},d)})),r.apply(this,arguments)}function _(d){return t.apply(this,arguments)}function t(){return t=m()(s()().mark(function d(p){return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u.Z.get("catalog/name/".concat(p)));case 1:case"end":return n.stop()}},d)})),t.apply(this,arguments)}function i(d){return f.apply(this,arguments)}function f(){return f=m()(s()().mark(function d(p){return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u.Z.get("catalog/structure-by-id/".concat(p)));case 1:case"end":return n.stop()}},d)})),f.apply(this,arguments)}function g(d){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime().mark(function d(p){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request.get("catalog/structure/".concat(p)));case 1:case"end":return n.stop()}},d)})),j.apply(this,arguments)}function P(d){return x.apply(this,arguments)}function x(){return x=m()(s()().mark(function d(p){return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return p.active=!0,n.abrupt("return",u.Z.get("catalog/list",{params:p}));case 2:case"end":return n.stop()}},d)})),x.apply(this,arguments)}function l(d,p){return D.apply(this,arguments)}function D(){return D=m()(s()().mark(function d(p,h){return s()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.abrupt("return",u.Z.get("catalog/components",{params:{normalizedName:p,locale:h}}));case 1:case"end":return M.stop()}},d)})),D.apply(this,arguments)}},34859:function(O,v,e){var o=e(17061),s=e.n(o),a=e(17156),m=e.n(a),u=e(5121),E=u.Z.create({baseURL:"https://shinecgialai.com.vn/api/",headers:{Accept:"application/json","content-type":"application/json"}});E.interceptors.request.use(function(){var r=m()(s()().mark(function _(t){var i;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return i=window.localStorage.getItem("wf_token"),i&&(t.headers.Authorization="Bearer ".concat(i)),g.abrupt("return",t);case 3:case"end":return g.stop()}},_)}));return function(_){return r.apply(this,arguments)}}()),E.interceptors.response.use(function(r){return r},function(r){var _,t,i;throw(r==null||(_=r.response)===null||_===void 0?void 0:_.status)===401&&u.Z.post("https://shinecgialai.com.vn/api/user/password-sign-in",{userName:"admin",passWord:"Password@123"}).then(function(f){localStorage.setItem("wf_token",f.data.token),window.location.reload()}),console.log("error => ",r==null||(t=r.response)===null||t===void 0||(t=t.config)===null||t===void 0?void 0:t.url,r==null||(i=r.response)===null||i===void 0?void 0:i.status),r}),v.Z=E}}]);
