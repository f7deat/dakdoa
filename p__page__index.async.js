"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[766],{47669:function(q,S,e){var T=e(98163),x=e(62435),l=e(86074),P=function(A){var C=A.blocks;console.log(C);var g=function(h){return h?x.createElement("div",{dangerouslySetInnerHTML:{__html:h}}):""};return(0,l.jsxs)("div",{className:"2xl:text-lg",children:[C.map(function(d){return(0,l.jsxs)("div",{id:d.id,children:[d.type==="header"&&(0,l.jsx)("h1",{className:"mb-2 font-bold text-lg md:text-xl",children:g(d.data.text)}),d.type==="paragraph"&&(0,l.jsx)("p",{className:"mb-2",children:g(d.data.text)}),d.type==="list"&&(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsx)("ul",{className:"list-disc pl-6",children:d.data.items.map(function(h,t){return(0,l.jsx)("li",{children:g(h)},t)})})}),d.type==="simpleImage"&&(0,l.jsx)("div",{className:"flex justify-center mb-2",children:(0,l.jsx)(T.Z,{src:d.data.url,alt:"IMG",loading:"lazy",width:"80%"})}),d.type==="raw"&&(0,l.jsx)("div",{className:"py-4 flex justify-center",children:(0,l.jsx)("div",{className:"md:w-1/2",children:g(d.data.html)})}),(0,l.jsx)("div",{className:"mb-4",children:d.type==="table"&&(0,l.jsx)(l.Fragment,{children:d.data.content.map(function(h,t){return(0,l.jsx)("div",{className:"grid grid-cols-".concat(h.length),children:h.map(function(m,f){return(0,l.jsx)("div",{className:"border p-2",children:g(m)},f)})},t)})})})]})}),(0,l.jsx)("div",{className:"grid-cols-3"}),(0,l.jsx)("div",{className:"grid-cols-5"})]})};S.Z=P},36716:function(q,S,e){e.d(S,{Z:function(){return G}});var T=e(17061),x=e.n(T),l=e(17156),P=e.n(l),I=e(27424),A=e.n(I),C=e(42122),g=e.n(C),d=e(63606),h=e(34896),t=e(86074),m=function(D){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(h.Z,g()(g()({},D),{},{footer:!1,centered:!0,children:(0,t.jsxs)("div",{className:"flex justify-center items-center flex-col gap-4",children:[(0,t.jsx)("div",{className:"bg-green-500 rounded-full h-20 w-20 flex items-center justify-center text-3xl text-white",children:(0,t.jsx)(d.Z,{})}),(0,t.jsx)("div",{className:"text-xl font-semibold text-slate-700",children:"Thank You!"}),(0,t.jsx)("div",{className:"text-slate-500 text-lg text-center",children:"C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 \u0111\u1EC3 l\u1EA1i th\xF4ng tin. Ch\xFAng t\xF4i s\u1EBD li\xEAn h\u1EC7 v\u1EDBi b\u1EA1n s\u1EDBm nh\u1EA5t!"})]})}))})},f=m,n=e(34859);function H(M){return b.apply(this,arguments)}function b(){return b=P()(x()().mark(function M(D){return x()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",n.Z.post("contact/add",D));case 1:case"end":return v.stop()}},M)})),b.apply(this,arguments)}var F=e(10154),O=e(27494),$=e(62435),K=function(){var D=(0,$.useState)(!1),B=A()(D,2),v=B[0],z=B[1],u=function(){var j=P()(x()().mark(function r(N){var L;return x()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,H(N);case 2:L=a.sent,L.data&&(F.ZP.success("G\u1EEDi th\xE0nh c\xF4ng!"),z(!0));case 4:case"end":return a.stop()}},r)}));return function(N){return j.apply(this,arguments)}}();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O.Z,{onFinish:u,children:(0,t.jsx)("div",{className:"lg:w-1/2 md:w-2/3 mx-auto",children:(0,t.jsxs)("div",{className:"flex flex-wrap -m-2",children:[(0,t.jsx)("div",{className:"p-2 w-1/2",children:(0,t.jsx)(O.Z.Item,{name:"name",rules:[{required:!0,message:"Vui l\xF2ng nh\u1EADp th\xF4ng tin"}],children:(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-600",children:"H\u1ECD v\xE0 t\xEAn"}),(0,t.jsx)("input",{type:"text",id:"name",name:"name",className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]})})}),(0,t.jsx)("div",{className:"p-2 w-1/2",children:(0,t.jsx)(O.Z.Item,{name:"email",rules:[{required:!0,message:"Vui l\xF2ng nh\u1EADp th\xF4ng tin"}],children:(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-600",children:"Email"}),(0,t.jsx)("input",{type:"email",id:"email",name:"email",className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]})})}),(0,t.jsx)("div",{className:"p-2 w-full",children:(0,t.jsx)(O.Z.Item,{name:"note",rules:[{required:!0,message:"Vui l\xF2ng nh\u1EADp th\xF4ng tin"}],children:(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-600",children:"L\u1EDDi nh\u1EAFn"}),(0,t.jsx)("textarea",{id:"message",name:"message",className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",defaultValue:""})]})})}),(0,t.jsx)("div",{className:"p-2 w-full",children:(0,t.jsx)("button",{type:"submit",className:"flex mx-auto text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg",children:"G\u1EEDi Y\xEAu C\u1EA7u"})}),(0,t.jsxs)("div",{className:"p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center",children:[(0,t.jsx)("a",{className:"text-green-500",children:"shinecgialai@gmai.com"}),(0,t.jsxs)("p",{className:"leading-normal my-5",children:["C\u1EE5m C\xF4ng Nghi\u1EC7p S\u1ED1 2 \u0110ak \u0110oa",(0,t.jsx)("br",{}),"14 Tr\u1EA7n H\u01B0ng \u0110\u1EA1o, Ph\u01B0\u1EDDng T\xE2y S\u01A1n, TP.Pleiku, T\u1EC9nh Gia Lai"]}),(0,t.jsxs)("span",{className:"inline-flex",children:[(0,t.jsx)("a",{className:"text-gray-500",children:(0,t.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"w-5 h-5",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}),(0,t.jsx)("a",{className:"ml-4 text-gray-500",children:(0,t.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"w-5 h-5",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}),(0,t.jsx)("a",{className:"ml-4 text-gray-500",children:(0,t.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"w-5 h-5",viewBox:"0 0 24 24",children:[(0,t.jsx)("rect",{width:20,height:20,x:2,y:2,rx:5,ry:5}),(0,t.jsx)("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"})]})}),(0,t.jsx)("a",{className:"ml-4 text-gray-500",children:(0,t.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"w-5 h-5",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})})})]})]})]})})}),(0,t.jsx)(f,{open:v,onCancel:function(){return z(!1)}})]})},G=K},89410:function(q,S,e){var T=e(17061),x=e.n(T),l=e(17156),P=e.n(l),I=e(27424),A=e.n(I),C=e(31474),g=e(12361),d=e(68795),h=e(56466),t=e(14313),m=e(62435),f=e(43886),n=e(86074),H=function(){var F=(0,m.useState)([]),O=A()(F,2),$=O[0],K=O[1],G=(0,m.useState)([]),M=A()(G,2),D=M[0],B=M[1],v=(0,f.YB)(),z=function(){var u=P()(x()().mark(function j(){return x()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(!($&&$.length>0)){N.next=2;break}return N.abrupt("return");case 2:(0,g.ws)({current:1,pageSize:8,type:2,locale:v.locale}).then(function(L){L.data.data&&K(L.data.data)});case 3:case"end":return N.stop()}},j)}));return function(){return u.apply(this,arguments)}}();return(0,m.useEffect)(function(){z();var u="125f06d1-dc08-4a18-9cfd-08dc39eb733b";v.locale==="vi-VN"&&(u="688d23e2-4567-49af-29ae-08dc39ef00ab"),(0,g.ws)({current:1,pageSize:8,type:0,locale:v.locale,parentId:u}).then(function(j){j.data.data&&B(j.data.data)})},[]),(0,n.jsxs)("div",{className:"md:w-1/4",children:[(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsxs)("div",{className:"flex rounded-full bg-slate-100 h-10 w-full",children:[(0,n.jsx)("input",{type:"text",className:"h-full w-full bg-slate-100 rounded-full px-4",placeholder:v.formatMessage({id:"SEARCH_PLACEHOLDER"})}),(0,n.jsx)(d.Z,{className:"text-xl text-slate-600 mr-3"})]})}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,n.jsx)(h.Z,{className:"mr-2"}),(0,n.jsx)(f._H,{id:"PRODUCT"})]}),$.map(function(u){return(0,n.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,n.jsx)(t.Z,{className:"text-green-700"})," ",(0,n.jsx)(f.rU,{to:"/product/".concat(u.id),className:"text-slate-800 font-medium hover:text-green-700",children:u.name})]},u.id)})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,n.jsx)(h.Z,{className:"mr-2"}),(0,n.jsx)(f._H,{id:"ABOUT"})]}),(0,n.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,n.jsx)(t.Z,{className:"text-green-700"})," ",(0,n.jsx)(f.rU,{to:"/catalog",className:"text-slate-800 font-medium hover:text-green-700",children:(0,n.jsx)(f._H,{id:"CATALOG"})})]}),D.map(function(u){return(0,n.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,n.jsx)(t.Z,{className:"text-green-700"})," ",(0,n.jsx)(f.rU,{to:"/page/".concat(u.normalizedName),className:"text-slate-800 font-medium hover:text-green-700",children:u.name})]},u.id)})]}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)(C.Z,{})})]})};S.Z=H},4261:function(q,S,e){e.r(S),e.d(S,{default:function(){return L}});var T=e(27424),x=e.n(T),l=e(47669),P=e(36716),I=e(73425),A=e(89410),C=e(12361),g=e(73403),d=e(20841),h=e(99611),t=e(85673),m=e(62435),f=e(94184),n=e.n(f),H=e(53124),b=e(54548),F=e(14747),O=e(30012),$=e(45503);const K=s=>{const{componentCls:a,sizePaddingEdgeHorizontal:p,colorSplit:i,lineWidth:c,textPaddingInline:W,orientationMargin:E,verticalMarginInline:o}=s;return{[a]:Object.assign(Object.assign({},(0,F.Wf)(s)),{borderBlockStart:`${(0,b.bf)(c)} solid ${i}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:o,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,b.bf)(c)} solid ${i}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,b.bf)(s.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${a}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,b.bf)(s.dividerHorizontalWithTextGutterMargin)} 0`,color:s.colorTextHeading,fontWeight:500,fontSize:s.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${i}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,b.bf)(c)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${a}-with-text-left`]:{"&::before":{width:`calc(${E} * 100%)`},"&::after":{width:`calc(100% - ${E} * 100%)`}},[`&-horizontal${a}-with-text-right`]:{"&::before":{width:`calc(100% - ${E} * 100%)`},"&::after":{width:`calc(${E} * 100%)`}},[`${a}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:W},"&-dashed":{background:"none",borderColor:i,borderStyle:"dashed",borderWidth:`${(0,b.bf)(c)} 0 0`},[`&-horizontal${a}-with-text${a}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${a}-dashed`]:{borderInlineStartWidth:c,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${a}-with-text`]:{color:s.colorText,fontWeight:"normal",fontSize:s.fontSize},[`&-horizontal${a}-with-text-left${a}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${a}-inner-text`]:{paddingInlineStart:p}},[`&-horizontal${a}-with-text-right${a}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${a}-inner-text`]:{paddingInlineEnd:p}}})}},G=s=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:s.marginXS});var M=(0,O.I$)("Divider",s=>{const a=(0,$.TS)(s,{dividerHorizontalWithTextGutterMargin:s.margin,dividerHorizontalGutterMargin:s.marginLG,sizePaddingEdgeHorizontal:0});return[K(a)]},G,{unitless:{orientationMargin:!0}}),D=function(s,a){var p={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&a.indexOf(i)<0&&(p[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(s);c<i.length;c++)a.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(s,i[c])&&(p[i[c]]=s[i[c]]);return p},v=s=>{const{getPrefixCls:a,direction:p,divider:i}=m.useContext(H.E_),{prefixCls:c,type:W="horizontal",orientation:E="center",orientationMargin:o,className:ee,rootClassName:te,children:R,dashed:Z,plain:Y,style:ae}=s,V=D(s,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),y=a("divider",c),[J,Q]=M(y),X=E.length>0?`-${E}`:E,k=!!R,U=E==="left"&&o!=null,w=E==="right"&&o!=null,_=n()(y,i==null?void 0:i.className,Q,`${y}-${W}`,{[`${y}-with-text`]:k,[`${y}-with-text${X}`]:k,[`${y}-dashed`]:!!Z,[`${y}-plain`]:!!Y,[`${y}-rtl`]:p==="rtl",[`${y}-no-default-orientation-margin-left`]:U,[`${y}-no-default-orientation-margin-right`]:w},ee,te),ne=m.useMemo(()=>typeof o=="number"?o:/^\d+$/.test(o)?Number(o):o,[o]),re=Object.assign(Object.assign({},U&&{marginLeft:ne}),w&&{marginRight:ne});return J(m.createElement("div",Object.assign({className:_,style:Object.assign(Object.assign({},i==null?void 0:i.style),ae)},V,{role:"separator"}),R&&W!=="vertical"&&m.createElement("span",{className:`${y}-inner-text`,style:re},R)))},z=e(30381),u=e.n(z),j=e(43886),r=e(86074),N=function(){var a=(0,j.UO)(),p=a.id,i=a.parent,c=(0,j.YB)(),W=(0,m.useState)(),E=x()(W,2),o=E[0],ee=E[1],te=(0,m.useState)(),R=x()(te,2),Z=R[0],Y=R[1],ae=(0,m.useState)(!1),V=x()(ae,2),y=V[0],J=V[1];return(0,m.useEffect)(function(){if(p){J(!0);var Q=p;i&&(Q=i+"/"+p),(0,C.z4)(Q).then(function(X){ee(X.data),(0,C.cT)(X.data.id).then(function(k){var U=k.data;U&&U.length>0?U.forEach(function(w){if(w.name==="Editor"&&w.arguments){var _=JSON.parse(w.arguments);Y(_),console.log(_)}}):Y([]),J(!1)})})}},[p]),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(j.ql,{children:(0,r.jsxs)("title",{children:[(o==null?void 0:o.name)||""," - Shinec Gia Lai"]})}),(0,r.jsx)(I.Z,{loading:y}),(0,r.jsx)("div",{style:{backgroundImage:"url(https://longhau.com.vn/assets/images/about-awards-bg-bottom.png)",backgroundRepeat:"no-repeat",backgroundPosition:"bottom"},children:(0,r.jsxs)("main",{className:"container mx-auto py-10 px-4 md:px-0",children:[(0,r.jsx)("div",{className:"mb-4",children:(0,r.jsx)(t.Z,{items:[{title:(0,r.jsxs)(j.rU,{to:"/",children:[(0,r.jsx)(g.Z,{})," ",c.formatMessage({id:"HOME"})]})},{title:c.formatMessage({id:"NEWS"})}]})}),(0,r.jsxs)("div",{className:"md:flex gap-4",children:[(0,r.jsxs)("div",{className:"md:w-3/4",children:[(0,r.jsx)("div",{className:"text-3xl text-green-700 text-center font-semibold py-4",children:o==null?void 0:o.name}),(0,r.jsxs)("div",{className:"mb-4 border-b border-dashed",children:[(0,r.jsx)("div",{className:"mb-4",children:(Z==null?void 0:Z.blocks)&&(0,r.jsx)(l.Z,{blocks:Z.blocks})}),(0,r.jsx)(v,{dashed:!0}),(0,r.jsx)(P.Z,{}),(0,r.jsxs)("div",{className:"text-slate-500 italic flex justify-between",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(d.Z,{})," C\u1EADp nh\u1EADt l\xFAc: ",u()(o==null?void 0:o.modifiedDate).format("DD/MM/YYYY hh:mm")]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(h.Z,{})," L\u1EF1\u1EE3t xem: ",((o==null?void 0:o.viewCount)||0).toLocaleString()]})]})]})]}),(0,r.jsx)(A.Z,{})]})]})})]})},L=N}}]);
