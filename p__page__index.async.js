"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[766],{47669:function(O,v,e){var o=e(98163),s=e(62435),n=e(86074),p=function(E){var r=E.blocks;console.log(r);var d=function(l){return l?s.createElement("div",{dangerouslySetInnerHTML:{__html:l}}):""};return(0,n.jsxs)("div",{className:"2xl:text-lg",children:[r.map(function(t){return(0,n.jsxs)("div",{id:t.id,children:[t.type==="header"&&(0,n.jsx)("h1",{className:"mb-2 font-bold text-lg md:text-xl",children:d(t.data.text)}),t.type==="paragraph"&&(0,n.jsx)("p",{className:"mb-2",children:d(t.data.text)}),t.type==="list"&&(0,n.jsx)("div",{className:"mb-2",children:(0,n.jsx)("ul",{className:"list-disc pl-6",children:t.data.items.map(function(l,h){return(0,n.jsx)("li",{children:d(l)},h)})})}),t.type==="simpleImage"&&(0,n.jsx)("div",{className:"flex justify-center mb-2",children:(0,n.jsx)(o.Z,{src:t.data.url,alt:"IMG",loading:"lazy",width:"80%"})}),t.type==="raw"&&(0,n.jsx)("div",{className:"py-4 flex justify-center",children:(0,n.jsx)("div",{className:"md:w-1/2",children:d(t.data.html)})}),(0,n.jsx)("div",{className:"mb-4",children:t.type==="table"&&(0,n.jsx)(n.Fragment,{children:t.data.content.map(function(l,h){return(0,n.jsx)("div",{className:"grid grid-cols-".concat(l.length),children:l.map(function(g,x){return(0,n.jsx)("div",{className:"border p-2",children:d(g)},x)})},h)})})})]})}),(0,n.jsx)("div",{className:"grid-cols-3"}),(0,n.jsx)("div",{className:"grid-cols-5"})]})};v.Z=p},21454:function(O,v,e){var o=e(52830),s=e(86074),n=function(u){var E=(0,o.q_)({y:u.active?0:-400,opacity:u.active?1:0});return(0,s.jsx)(o.q.div,{style:E,children:(0,s.jsx)("h1",{className:"text-center text-2xl md:text-4xl 2xl:text-5xl uppercase font-bold py-4 ".concat(u.primary?"text-green-700":"text-white"," mb-0 2xl:mb-4"),children:u.children})})};v.Z=n},73425:function(O,v,e){var o=e(86074),s=function(p){return p.loading&&(0,o.jsx)("div",{id:"loader",children:(0,o.jsxs)("div",{className:"cube-folding",children:[(0,o.jsx)("span",{className:"leaf1"}),(0,o.jsx)("span",{className:"leaf2"}),(0,o.jsx)("span",{className:"leaf3"}),(0,o.jsx)("span",{className:"leaf4"})]})})};v.Z=s},5229:function(O,v,e){e.r(v);var o=e(27424),s=e.n(o),n=e(47669),p=e(21454),u=e(73425),E=e(12361),r=e(73403),d=e(20841),t=e(99611),l=e(85673),h=e(96074),g=e(30381),x=e.n(g),M=e(62435),D=e(43886),i=e(86074),j=function(){var c=(0,D.UO)(),f=c.id,a=c.parent,P=(0,D.YB)(),N=(0,M.useState)(),T=s()(N,2),m=T[0],b=T[1],w=(0,M.useState)(),A=s()(w,2),y=A[0],R=A[1],Z=(0,M.useState)(!1),I=s()(Z,2),S=I[0],B=I[1];return(0,M.useEffect)(function(){if(f){B(!0);var U=f;a&&(U=a+"/"+f),(0,E.z4)(U).then(function(W){b(W.data),(0,E.cT)(W.data.id).then(function(G){var C=G.data;C&&C.length>0?C.forEach(function(L){if(L.name==="Editor"&&L.arguments){var K=JSON.parse(L.arguments);R(K),console.log(K)}}):R([]),B(!1)})})}},[f]),(0,i.jsxs)("div",{className:"relative overflow-x-hidden",children:[(0,i.jsx)(D.ql,{children:(0,i.jsxs)("title",{children:[(m==null?void 0:m.name)||""," - Shinec Gia Lai"]})}),(0,i.jsx)(u.Z,{loading:S}),(0,i.jsx)("div",{className:"flex h-full flex-col justify-between w-screen",children:(0,i.jsxs)("main",{className:"container mx-auto py-10 px-4 md:px-0",children:[(0,i.jsx)("div",{className:"mb-4",children:(0,i.jsx)(l.Z,{items:[{title:(0,i.jsxs)(D.rU,{to:"/",children:[(0,i.jsx)(r.Z,{})," ",P.formatMessage({id:"HOME"})]})},{title:m==null?void 0:m.name}]})}),(0,i.jsx)(p.Z,{active:!0,primary:!0,children:m==null?void 0:m.name}),(0,i.jsxs)("div",{className:"mb-4 border-b border-dashed",children:[(0,i.jsx)("div",{className:"mb-4",children:(y==null?void 0:y.blocks)&&(0,i.jsx)(n.Z,{blocks:y.blocks})}),(0,i.jsx)(h.Z,{dashed:!0}),(0,i.jsxs)("div",{className:"italic flex justify-between",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(d.Z,{})," C\u1EADp nh\u1EADt l\xFAc: ",x()(m==null?void 0:m.modifiedDate).format("DD/MM/YYYY hh:mm")]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(t.Z,{})," L\u1EF1\u1EE3t xem: ",((m==null?void 0:m.viewCount)||0).toLocaleString()]})]})]})]})})]})};v.default=j},12361:function(O,v,e){e.d(v,{Ph:function(){return E},cT:function(){return l},sx:function(){return i},ws:function(){return M},z4:function(){return d}});var o=e(17061),s=e.n(o),n=e(17156),p=e.n(n),u=e(34859);function E(_){return r.apply(this,arguments)}function r(){return r=p()(s()().mark(function _(c){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",u.Z.get("catalog/".concat(c)));case 1:case"end":return a.stop()}},_)})),r.apply(this,arguments)}function d(_){return t.apply(this,arguments)}function t(){return t=p()(s()().mark(function _(c){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",u.Z.get("catalog/name/".concat(c)));case 1:case"end":return a.stop()}},_)})),t.apply(this,arguments)}function l(_){return h.apply(this,arguments)}function h(){return h=p()(s()().mark(function _(c){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",u.Z.get("catalog/structure-by-id/".concat(c)));case 1:case"end":return a.stop()}},_)})),h.apply(this,arguments)}function g(_){return x.apply(this,arguments)}function x(){return x=_asyncToGenerator(_regeneratorRuntime().mark(function _(c){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request.get("catalog/structure/".concat(c)));case 1:case"end":return a.stop()}},_)})),x.apply(this,arguments)}function M(_){return D.apply(this,arguments)}function D(){return D=p()(s()().mark(function _(c){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c.active=!0,a.abrupt("return",u.Z.get("catalog/list",{params:c}));case 2:case"end":return a.stop()}},_)})),D.apply(this,arguments)}function i(_,c){return j.apply(this,arguments)}function j(){return j=p()(s()().mark(function _(c,f){return s()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",u.Z.get("catalog/components",{params:{normalizedName:c,locale:f}}));case 1:case"end":return P.stop()}},_)})),j.apply(this,arguments)}},34859:function(O,v,e){var o=e(17061),s=e.n(o),n=e(17156),p=e.n(n),u=e(5121),E=u.Z.create({baseURL:"https://shinecgialai.com.vn/api/",headers:{Accept:"application/json","content-type":"application/json"}});E.interceptors.request.use(function(){var r=p()(s()().mark(function d(t){var l;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return l=window.localStorage.getItem("wf_token"),l&&(t.headers.Authorization="Bearer ".concat(l)),g.abrupt("return",t);case 3:case"end":return g.stop()}},d)}));return function(d){return r.apply(this,arguments)}}()),E.interceptors.response.use(function(r){return r},function(r){var d,t,l;throw(r==null||(d=r.response)===null||d===void 0?void 0:d.status)===401&&u.Z.post("https://shinecgialai.com.vn/api/user/password-sign-in",{userName:"admin",passWord:"Password@123"}).then(function(h){localStorage.setItem("wf_token",h.data.token),window.location.reload()}),console.log("error => ",r==null||(t=r.response)===null||t===void 0||(t=t.config)===null||t===void 0?void 0:t.url,r==null||(l=r.response)===null||l===void 0?void 0:l.status),r}),v.Z=E}}]);