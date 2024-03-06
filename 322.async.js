"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[322],{47669:function(I,P,t){var E=t(98163),p=t(62435),i=t(86074),C=function(O){var D=O.blocks;console.log(D);var g=function(h){return h?p.createElement("div",{dangerouslySetInnerHTML:{__html:h}}):""};return(0,i.jsxs)("div",{className:"2xl:text-lg",children:[D.map(function(l){return(0,i.jsxs)("div",{id:l.id,children:[l.type==="header"&&(0,i.jsx)("h1",{className:"mb-2 font-bold text-lg md:text-xl",children:g(l.data.text)}),l.type==="paragraph"&&(0,i.jsx)("p",{className:"mb-2",children:g(l.data.text)}),l.type==="list"&&(0,i.jsx)("div",{className:"mb-2",children:(0,i.jsx)("ul",{className:"list-disc pl-6",children:l.data.items.map(function(h,e){return(0,i.jsx)("li",{children:g(h)},e)})})}),l.type==="simpleImage"&&(0,i.jsx)("div",{className:"flex justify-center mb-2",children:(0,i.jsx)(E.Z,{src:l.data.url,alt:"IMG",loading:"lazy",width:"80%"})}),l.type==="raw"&&(0,i.jsx)("div",{className:"py-4 flex justify-center",children:(0,i.jsx)("div",{className:"md:w-1/2",children:g(l.data.html)})}),(0,i.jsx)("div",{className:"mb-4",children:l.type==="table"&&(0,i.jsx)(i.Fragment,{children:l.data.content.map(function(h,e){return(0,i.jsx)("div",{className:"grid grid-cols-".concat(h.length),children:h.map(function(b,f){return(0,i.jsx)("div",{className:"border p-2",children:g(b)},f)})},e)})})})]})}),(0,i.jsx)("div",{className:"grid-cols-3"}),(0,i.jsx)("div",{className:"grid-cols-5"})]})};P.Z=C},36716:function(I,P,t){t.d(P,{Z:function(){return x}});var E=t(17061),p=t.n(E),i=t(17156),C=t.n(i),j=t(27424),O=t.n(j),D=t(42122),g=t.n(D),l=t(63606),h=t(34896),e=t(86074),b=function(N){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(h.Z,g()(g()({},N),{},{footer:!1,centered:!0,children:(0,e.jsxs)("div",{className:"flex justify-center items-center flex-col gap-4",children:[(0,e.jsx)("div",{className:"bg-green-500 rounded-full h-20 w-20 flex items-center justify-center text-3xl text-white",children:(0,e.jsx)(l.Z,{})}),(0,e.jsx)("div",{className:"text-xl font-semibold text-slate-700",children:"Thank You!"}),(0,e.jsx)("div",{className:"text-slate-500 text-lg text-center",children:"C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 \u0111\u1EC3 l\u1EA1i th\xF4ng tin. Ch\xFAng t\xF4i s\u1EBD li\xEAn h\u1EC7 v\u1EDBi b\u1EA1n s\u1EDBm nh\u1EA5t!"})]})}))})},f=b,a=t(34859);function r(c){return s.apply(this,arguments)}function s(){return s=C()(p()().mark(function c(N){return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",a.Z.post("contact/add",N));case 1:case"end":return m.stop()}},c)})),s.apply(this,arguments)}var v=t(10154),n=t(27494),o=t(62435),M=function(){var N=(0,o.useState)(!1),A=O()(N,2),m=A[0],T=A[1],u=function(){var y=C()(p()().mark(function $(d){var S;return p()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,r(d);case 2:S=_.sent,S.data&&(v.ZP.success("G\u1EEDi th\xE0nh c\xF4ng!"),T(!0));case 4:case"end":return _.stop()}},$)}));return function(d){return y.apply(this,arguments)}}();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.Z,{onFinish:u,children:(0,e.jsx)("div",{className:"lg:w-1/2 md:w-2/3 mx-auto",children:(0,e.jsxs)("div",{className:"flex flex-wrap -m-2",children:[(0,e.jsx)("div",{className:"p-2 w-1/2",children:(0,e.jsx)(n.Z.Item,{name:"name",rules:[{required:!0,message:"Vui l\xF2ng nh\u1EADp th\xF4ng tin"}],children:(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-600",children:"H\u1ECD v\xE0 t\xEAn"}),(0,e.jsx)("input",{type:"text",id:"name",name:"name",className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]})})}),(0,e.jsx)("div",{className:"p-2 w-1/2",children:(0,e.jsx)(n.Z.Item,{name:"email",rules:[{required:!0,message:"Vui l\xF2ng nh\u1EADp th\xF4ng tin"}],children:(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-600",children:"Email"}),(0,e.jsx)("input",{type:"email",id:"email",name:"email",className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]})})}),(0,e.jsx)("div",{className:"p-2 w-full",children:(0,e.jsx)(n.Z.Item,{name:"note",rules:[{required:!0,message:"Vui l\xF2ng nh\u1EADp th\xF4ng tin"}],children:(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-600",children:"L\u1EDDi nh\u1EAFn"}),(0,e.jsx)("textarea",{id:"message",name:"message",className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",defaultValue:""})]})})}),(0,e.jsx)("div",{className:"p-2 w-full",children:(0,e.jsx)("button",{type:"submit",className:"flex mx-auto text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg",children:"G\u1EEDi Y\xEAu C\u1EA7u"})}),(0,e.jsxs)("div",{className:"p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center",children:[(0,e.jsx)("a",{className:"text-green-500",children:"shinecgialai@gmai.com"}),(0,e.jsxs)("p",{className:"leading-normal my-5",children:["C\u1EE5m C\xF4ng Nghi\u1EC7p S\u1ED1 2 \u0110ak \u0110oa",(0,e.jsx)("br",{}),"14 Tr\u1EA7n H\u01B0ng \u0110\u1EA1o, Ph\u01B0\u1EDDng T\xE2y S\u01A1n, TP.Pleiku, T\u1EC9nh Gia Lai"]}),(0,e.jsxs)("span",{className:"inline-flex",children:[(0,e.jsx)("a",{className:"text-gray-500",children:(0,e.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"w-5 h-5",viewBox:"0 0 24 24",children:(0,e.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}),(0,e.jsx)("a",{className:"ml-4 text-gray-500",children:(0,e.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"w-5 h-5",viewBox:"0 0 24 24",children:(0,e.jsx)("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}),(0,e.jsx)("a",{className:"ml-4 text-gray-500",children:(0,e.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"w-5 h-5",viewBox:"0 0 24 24",children:[(0,e.jsx)("rect",{width:20,height:20,x:2,y:2,rx:5,ry:5}),(0,e.jsx)("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"})]})}),(0,e.jsx)("a",{className:"ml-4 text-gray-500",children:(0,e.jsx)("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"w-5 h-5",viewBox:"0 0 24 24",children:(0,e.jsx)("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})})})]})]})]})})}),(0,e.jsx)(f,{open:m,onCancel:function(){return T(!1)}})]})},x=M},89410:function(I,P,t){var E=t(17061),p=t.n(E),i=t(17156),C=t.n(i),j=t(27424),O=t.n(j),D=t(31474),g=t(12361),l=t(68795),h=t(56466),e=t(14313),b=t(62435),f=t(43886),a=t(86074),r=function(){var v=(0,b.useState)([]),n=O()(v,2),o=n[0],M=n[1],x=(0,b.useState)([]),c=O()(x,2),N=c[0],A=c[1],m=(0,f.YB)(),T=function(){var u=C()(p()().mark(function y(){return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!(o&&o.length>0)){d.next=2;break}return d.abrupt("return");case 2:(0,g.ws)({current:1,pageSize:8,type:2,locale:m.locale}).then(function(S){S.data.data&&M(S.data.data)});case 3:case"end":return d.stop()}},y)}));return function(){return u.apply(this,arguments)}}();return(0,b.useEffect)(function(){T();var u="125f06d1-dc08-4a18-9cfd-08dc39eb733b";m.locale==="vi-VN"&&(u="688d23e2-4567-49af-29ae-08dc39ef00ab"),(0,g.ws)({current:1,pageSize:8,type:0,locale:m.locale,parentId:u}).then(function(y){y.data.data&&A(y.data.data)})},[]),(0,a.jsxs)("div",{className:"md:w-1/4",children:[(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsxs)("div",{className:"flex rounded-full bg-slate-100 h-10 w-full",children:[(0,a.jsx)("input",{type:"text",className:"h-full w-full bg-slate-100 rounded-full px-4",placeholder:m.formatMessage({id:"SEARCH_PLACEHOLDER"})}),(0,a.jsx)(l.Z,{className:"text-xl text-slate-600 mr-3"})]})}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,a.jsx)(h.Z,{className:"mr-2"}),(0,a.jsx)(f._H,{id:"PRODUCT"})]}),o.map(function(u){return(0,a.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,a.jsx)(e.Z,{className:"text-green-700"})," ",(0,a.jsx)(f.rU,{to:"/product/".concat(u.id),className:"text-slate-800 font-medium hover:text-green-700",children:u.name})]},u.id)})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,a.jsx)(h.Z,{className:"mr-2"}),(0,a.jsx)(f._H,{id:"ABOUT"})]}),(0,a.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,a.jsx)(e.Z,{className:"text-green-700"})," ",(0,a.jsx)(f.rU,{to:"/catalog",className:"text-slate-800 font-medium hover:text-green-700",children:(0,a.jsx)(f._H,{id:"CATALOG"})})]}),N.map(function(u){return(0,a.jsxs)("div",{className:"border-b px-4 py-2",children:[(0,a.jsx)(e.Z,{className:"text-green-700"})," ",(0,a.jsx)(f.rU,{to:"/page/".concat(u.normalizedName),className:"text-slate-800 font-medium hover:text-green-700",children:u.name})]},u.id)})]}),(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)(D.Z,{})})]})};P.Z=r},96074:function(I,P,t){t.d(P,{Z:function(){return a}});var E=t(62435),p=t(94184),i=t.n(p),C=t(53124),j=t(54548),O=t(14747),D=t(30012),g=t(45503);const l=r=>{const{componentCls:s,sizePaddingEdgeHorizontal:v,colorSplit:n,lineWidth:o,textPaddingInline:M,orientationMargin:x,verticalMarginInline:c}=r;return{[s]:Object.assign(Object.assign({},(0,O.Wf)(r)),{borderBlockStart:`${(0,j.bf)(o)} solid ${n}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:c,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,j.bf)(o)} solid ${n}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,j.bf)(r.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${s}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,j.bf)(r.dividerHorizontalWithTextGutterMargin)} 0`,color:r.colorTextHeading,fontWeight:500,fontSize:r.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${n}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,j.bf)(o)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${s}-with-text-left`]:{"&::before":{width:`calc(${x} * 100%)`},"&::after":{width:`calc(100% - ${x} * 100%)`}},[`&-horizontal${s}-with-text-right`]:{"&::before":{width:`calc(100% - ${x} * 100%)`},"&::after":{width:`calc(${x} * 100%)`}},[`${s}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:M},"&-dashed":{background:"none",borderColor:n,borderStyle:"dashed",borderWidth:`${(0,j.bf)(o)} 0 0`},[`&-horizontal${s}-with-text${s}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${s}-dashed`]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${s}-with-text`]:{color:r.colorText,fontWeight:"normal",fontSize:r.fontSize},[`&-horizontal${s}-with-text-left${s}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${s}-inner-text`]:{paddingInlineStart:v}},[`&-horizontal${s}-with-text-right${s}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${s}-inner-text`]:{paddingInlineEnd:v}}})}},h=r=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:r.marginXS});var e=(0,D.I$)("Divider",r=>{const s=(0,g.TS)(r,{dividerHorizontalWithTextGutterMargin:r.margin,dividerHorizontalGutterMargin:r.marginLG,sizePaddingEdgeHorizontal:0});return[l(s)]},h,{unitless:{orientationMargin:!0}}),b=function(r,s){var v={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&s.indexOf(n)<0&&(v[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(r);o<n.length;o++)s.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(v[n[o]]=r[n[o]]);return v},a=r=>{const{getPrefixCls:s,direction:v,divider:n}=E.useContext(C.E_),{prefixCls:o,type:M="horizontal",orientation:x="center",orientationMargin:c,className:N,rootClassName:A,children:m,dashed:T,plain:u,style:y}=r,$=b(r,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),d=s("divider",o),[S,L]=e(d),_=x.length>0?`-${x}`:x,B=!!m,w=x==="left"&&c!=null,z=x==="right"&&c!=null,R=i()(d,n==null?void 0:n.className,L,`${d}-${M}`,{[`${d}-with-text`]:B,[`${d}-with-text${_}`]:B,[`${d}-dashed`]:!!T,[`${d}-plain`]:!!u,[`${d}-rtl`]:v==="rtl",[`${d}-no-default-orientation-margin-left`]:w,[`${d}-no-default-orientation-margin-right`]:z},N,A),W=E.useMemo(()=>typeof c=="number"?c:/^\d+$/.test(c)?Number(c):c,[c]),U=Object.assign(Object.assign({},w&&{marginLeft:W}),z&&{marginRight:W});return S(E.createElement("div",Object.assign({className:R,style:Object.assign(Object.assign({},n==null?void 0:n.style),y)},$,{role:"separator"}),m&&M!=="vertical"&&E.createElement("span",{className:`${d}-inner-text`,style:U},m)))}}}]);