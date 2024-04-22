"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55],{65361:function(j,v,e){var g=e(98918),a=e(2261),i=e(86074),l=function(h){var n=h.brands,d=function(_){return(0,i.jsx)("div",{className:"shadow-lg",children:(0,i.jsx)("div",{className:"h-24 2xl:h-28 flex justify-center items-center p-4 bg-white border-green-800 border-2 rounded-lg",children:(0,i.jsx)("img",{src:_,alt:"LOGO",className:"transition duration-500 h-14 object-contain"})})})};return(0,i.jsx)(i.Fragment,{children:n&&(0,i.jsx)(a.tq,{slidesPerView:2,autoplay:{disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{768:{spaceBetween:20,slidesPerView:2},1024:{spaceBetween:30,slidesPerView:2},1280:{spaceBetween:40,slidesPerView:5},1536:{spaceBetween:60,slidesPerView:5}},loop:!0,spaceBetween:10,modules:[g.pt,g.W_],children:n.map(function(s){return(0,i.jsx)(a.o5,{children:d(s.logo)},s.id)})})})};v.Z=l},61616:function(j,v,e){e.r(v);var g=e(27424),a=e.n(g),i=e(65361),l=e(12361),c=e(28548),h=e(61781),n=e(15867),d=e(75214),s=e(58642),_=e(30381),E=e.n(_),m=e(62435),f=e(43886),r=e(86074),C=function(){var y=(0,m.useState)([]),u=a()(y,2),o=u[0],D=u[1],t=(0,f.YB)(),M=[{title:"#",render:function(P,O,B){return B+1},width:50},{title:"V\u1ECB tr\xED tuy\u1EC3n d\u1EE5ng",dataIndex:"name",render:function(P,O){return(0,r.jsx)(f.rU,{to:"/page/".concat(O.normalizedName),className:"font-medium",children:P})}},{title:"Ng\xE0y \u0111\u0103ng t\u1EA3i",render:function(P,O){return E()(O.modifiedDate).format("DD/MM/YYYY hh:mm:ss")},width:200},{title:"H\u1EA1n \u1EE9ng tuy\u1EC3n",render:function(P,O){return E()(O.modifiedDate).add(1,"month").format("DD/MM/YYYY hh:mm:ss")},width:200},{title:"T\xE1c v\u1EE5",render:function(P){return(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)("a",{href:"tel:02696333456",children:(0,r.jsx)(h.Z,{title:(0,r.jsx)(f._H,{id:"CONTACT"}),children:(0,r.jsx)(n.ZP,{size:"small",type:"link",icon:(0,r.jsx)(c.Z,{})})})})})},width:100}],A=(0,m.useState)([]),R=a()(A,2),w=R[0],L=R[1],U=(0,m.useState)([]),I=a()(U,2),W=I[0],K=I[1],S=(0,m.useState)(!1),b=a()(S,2),N=b[0],x=b[1];return(0,m.useEffect)(function(){x(!0),(0,l.ws)({parentId:"44b549a9-abf2-4f91-45a0-08dc3514ae40"}).then(function(p){L(p.data.data),x(!1)}),(0,l.ws)({parentId:"34807610-93e0-45c6-3a07-08dc3521274a"}).then(function(p){K(p.data.data)}),(0,l.sx)("/index",t.locale).then(function(p){var P=p.data.find(function(B){return B.normalizedName==="Sponsor"});if(P){var O=JSON.parse(P.arguments);D(O.brands)}x(!1)})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.ql,{children:(0,r.jsx)("title",{children:"Tuy\u1EC3n d\u1EE5ng"})}),(0,r.jsxs)("main",{className:"container mx-auto py-4 md:py-8 2xl:py-10",children:[(0,r.jsx)("h1",{className:"text-center text-2xl md:text-4xl 2xl:text-5xl uppercase font-bold py-4 text-green-700 mb-0 md:mb-4 md:pt-8",children:(0,r.jsx)(f._H,{id:"CAREER"})}),(0,r.jsx)(d.Z,{items:[{key:"shinec",label:"Shinec Gia Lai tuy\u1EC3n d\u1EE5ng",children:(0,r.jsx)(s.Z,{columns:M,dataSource:w,loading:N})},{key:"cluster",label:"Nh\xE0 \u0111\u1EA7u t\u01B0 tuy\u1EC3n d\u1EE5ng",children:(0,r.jsx)(s.Z,{columns:M,dataSource:W})}]}),(0,r.jsx)("h1",{className:"text-center text-2xl uppercase font-bold py-4 text-green-700 mb-0 md:mb-4",children:"Nh\xE0 \u0111\u1EA7u t\u01B0 tuy\u1EC3n d\u1EE5ng"}),(0,r.jsx)(i.Z,{brands:o})]})]})};v.default=C},12361:function(j,v,e){e.d(v,{Ph:function(){return h},cT:function(){return _},sx:function(){return T},ws:function(){return r},z4:function(){return d}});var g=e(17061),a=e.n(g),i=e(17156),l=e.n(i),c=e(34859);function h(u){return n.apply(this,arguments)}function n(){return n=l()(a()().mark(function u(o){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.Z.get("catalog/".concat(o)));case 1:case"end":return t.stop()}},u)})),n.apply(this,arguments)}function d(u){return s.apply(this,arguments)}function s(){return s=l()(a()().mark(function u(o){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.Z.get("catalog/name/".concat(o)));case 1:case"end":return t.stop()}},u)})),s.apply(this,arguments)}function _(u){return E.apply(this,arguments)}function E(){return E=l()(a()().mark(function u(o){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.Z.get("catalog/structure-by-id/".concat(o)));case 1:case"end":return t.stop()}},u)})),E.apply(this,arguments)}function m(u){return f.apply(this,arguments)}function f(){return f=_asyncToGenerator(_regeneratorRuntime().mark(function u(o){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request.get("catalog/structure/".concat(o)));case 1:case"end":return t.stop()}},u)})),f.apply(this,arguments)}function r(u){return C.apply(this,arguments)}function C(){return C=l()(a()().mark(function u(o){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o.active=!0,t.abrupt("return",c.Z.get("catalog/list",{params:o}));case 2:case"end":return t.stop()}},u)})),C.apply(this,arguments)}function T(u,o){return y.apply(this,arguments)}function y(){return y=l()(a()().mark(function u(o,D){return a()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.abrupt("return",c.Z.get("catalog/components",{params:{normalizedName:o,locale:D}}));case 1:case"end":return M.stop()}},u)})),y.apply(this,arguments)}},34859:function(j,v,e){var g=e(17061),a=e.n(g),i=e(17156),l=e.n(i),c=e(5121),h=c.Z.create({baseURL:"https://shinecgialai.com.vn/api/",headers:{Accept:"application/json","content-type":"application/json"}});h.interceptors.request.use(function(){var n=l()(a()().mark(function d(s){var _;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return _=window.localStorage.getItem("wf_token"),_&&(s.headers.Authorization="Bearer ".concat(_)),m.abrupt("return",s);case 3:case"end":return m.stop()}},d)}));return function(d){return n.apply(this,arguments)}}()),h.interceptors.response.use(function(n){return n},function(n){var d,s,_;throw(n==null||(d=n.response)===null||d===void 0?void 0:d.status)===401&&c.Z.post("https://shinecgialai.com.vn/api/user/password-sign-in",{userName:"admin",passWord:"Password@123"}).then(function(E){localStorage.setItem("wf_token",E.data.token),window.location.reload()}),console.log("error => ",n==null||(s=n.response)===null||s===void 0||(s=s.config)===null||s===void 0?void 0:s.url,n==null||(_=n.response)===null||_===void 0?void 0:_.status),n}),v.Z=h}}]);
