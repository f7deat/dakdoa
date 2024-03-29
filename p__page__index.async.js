"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[766],{47669:function(W,g,e){var m=e(98163),h=e(62435),r=e(86074),C=function(P){var b=P.blocks;console.log(b);var E=function(f){return f?h.createElement("div",{dangerouslySetInnerHTML:{__html:f}}):""};return(0,r.jsxs)("div",{className:"2xl:text-lg",children:[b.map(function(s){return(0,r.jsxs)("div",{id:s.id,children:[s.type==="header"&&(0,r.jsx)("h1",{className:"mb-2 font-bold text-lg md:text-xl",children:E(s.data.text)}),s.type==="paragraph"&&(0,r.jsx)("p",{className:"mb-2",children:E(s.data.text)}),s.type==="list"&&(0,r.jsx)("div",{className:"mb-2",children:(0,r.jsx)("ul",{className:"list-disc pl-6",children:s.data.items.map(function(f,D){return(0,r.jsx)("li",{children:E(f)},D)})})}),s.type==="simpleImage"&&(0,r.jsx)("div",{className:"flex justify-center mb-2",children:(0,r.jsx)(m.Z,{src:s.data.url,alt:"IMG",loading:"lazy",width:"80%"})}),s.type==="raw"&&(0,r.jsx)("div",{className:"py-4 flex justify-center",children:(0,r.jsx)("div",{className:"md:w-1/2",children:E(s.data.html)})}),(0,r.jsx)("div",{className:"mb-4",children:s.type==="table"&&(0,r.jsx)(r.Fragment,{children:s.data.content.map(function(f,D){return(0,r.jsx)("div",{className:"grid grid-cols-".concat(f.length),children:f.map(function(y,I){return(0,r.jsx)("div",{className:"border p-2",children:E(y)},I)})},D)})})})]})}),(0,r.jsx)("div",{className:"grid-cols-3"}),(0,r.jsx)("div",{className:"grid-cols-5"})]})};g.Z=C},21454:function(W,g,e){var m=e(52830),h=e(86074),r=function(l){var P=(0,m.q_)({y:l.active?0:-400,opacity:l.active?1:0});return(0,h.jsx)(m.q.div,{style:P,children:(0,h.jsx)("h1",{className:"text-center text-2xl md:text-4xl 2xl:text-5xl uppercase font-bold py-4 ".concat(l.primary?"text-green-700":"text-white"," mb-0 md:mb-4"),children:l.children})})};g.Z=r},89410:function(W,g,e){var m=e(17061),h=e.n(m),r=e(17156),C=e.n(r),l=e(27424),P=e.n(l),b=e(31474),E=e(85030),s=e(12361),f=e(68795),D=e(56466),y=e(68508),I=e(62435),x=e(43886),n=e(86074),i=function(){var a,t=(0,I.useState)([]),j=P()(t,2),u=j[0],c=j[1],M=(0,x.YB)(),S=function(v){if(v.key==="/about-shinec"){x.m8.push("/page/gioi-thieu");return}if(v.key==="thue-dat-cong-nghiep"){x.m8.push("/product/1f025462-0ad8-4ffb-31df-08dc044e3bfc");return}if(v.key==="thue-xuong-kho-xay-san"){x.m8.push("/product/65773527-8ba5-485e-f318-08dc044f3d01");return}if(v.key==="cho-thue-dat-thuong-mai"){x.m8.push("/product/ae3486a8-194d-4a37-d5d6-08dc0451c999");return}if(v.key==="cho-thue-van-phong"){x.m8.push("/product/5dd86918-9719-4ca7-0359-08dc045188ed");return}},T=function(){var O=C()(h()().mark(function v(){return h()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(!(u&&u.length>0)){p.next=2;break}return p.abrupt("return");case 2:(0,s.ws)({current:1,pageSize:8,type:2,locale:M.locale}).then(function(o){o.data.data&&c(o.data.data)});case 3:case"end":return p.stop()}},v)}));return function(){return O.apply(this,arguments)}}();return(0,I.useEffect)(function(){T();var O="125f06d1-dc08-4a18-9cfd-08dc39eb733b";M.locale==="vi-VN"&&(O="688d23e2-4567-49af-29ae-08dc39ef00ab")},[]),(0,n.jsxs)("div",{className:"md:w-1/4",children:[(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsxs)("div",{className:"flex rounded-full bg-green-700 h-10 w-full",children:[(0,n.jsx)("input",{type:"text",className:"h-full w-full bg-green-700 rounded-full px-4",placeholder:M.formatMessage({id:"SEARCH_PLACEHOLDER"})}),(0,n.jsx)(f.Z,{className:"text-xl text-slate-100 mr-3"})]})}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsxs)("div",{className:"bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700",children:[(0,n.jsx)(D.Z,{className:"mr-2"}),(0,n.jsx)(x._H,{id:"PRODUCT"})]}),(0,n.jsx)(y.Z,{className:"justify-end bg-green-700 text-white",mode:"vertical",onClick:S,items:(a=(0,E.Z)().find(function(O){return O.key==="/product"}))===null||a===void 0?void 0:a.children})]}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)(b.Z,{})})]})};g.Z=i},5229:function(W,g,e){e.r(g);var m=e(27424),h=e.n(m),r=e(47669),C=e(37247),l=e(10174),P=e(21454),b=e(73425),E=e(89410),s=e(12361),f=e(73403),D=e(20841),y=e(99611),I=e(85673),x=e(96074),n=e(30381),i=e.n(n),_=e(62435),a=e(43886),t=e(86074),j=function(){var c=(0,a.UO)(),M=c.id,S=c.parent,T=(0,a.YB)(),O=(0,_.useState)(),v=h()(O,2),d=v[0],p=v[1],o=(0,_.useState)(),U=h()(o,2),A=U[0],R=U[1],N=(0,_.useState)(!1),B=h()(N,2),$=B[0],K=B[1];return(0,_.useEffect)(function(){if(M){K(!0);var L=M;S&&(L=S+"/"+M),(0,s.z4)(L).then(function(z){p(z.data),(0,s.cT)(z.data.id).then(function(w){var Z=w.data;Z&&Z.length>0?Z.forEach(function(H){if(H.name==="Editor"&&H.arguments){var G=JSON.parse(H.arguments);R(G),console.log(G)}}):R([]),K(!1)})})}},[M]),(0,t.jsxs)("div",{className:"relative overflow-x-hidden",children:[(0,t.jsx)(a.ql,{children:(0,t.jsxs)("title",{children:[(d==null?void 0:d.name)||""," - Shinec Gia Lai"]})}),(0,t.jsx)(b.Z,{loading:$}),(0,t.jsx)("div",{className:"bg-cover bg-no-repeat bg-fixed bg-right bg-green-800 relative",style:{backgroundImage:"url(".concat(C,")")},children:(0,t.jsx)("div",{className:"flex h-full flex-col justify-between w-screen",children:(0,t.jsx)("div",{className:"relative h-full",style:{background:"linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)"},children:(0,t.jsx)("div",{className:"h-full flex items-center justify-center",style:{backgroundImage:"url(".concat(l.Z,")"),backgroundRepeat:"no-repeat",backgroundPosition:"bottom right"},children:(0,t.jsxs)("main",{className:"container mx-auto py-10 px-4 md:px-0",children:[(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(I.Z,{items:[{title:(0,t.jsxs)(a.rU,{to:"/",children:[(0,t.jsx)(f.Z,{})," ",T.formatMessage({id:"HOME"})]})},{title:d==null?void 0:d.name}]})}),(0,t.jsxs)("div",{className:"md:flex gap-4",children:[(0,t.jsxs)("div",{className:"md:w-3/4",children:[(0,t.jsx)(P.Z,{active:!0,children:d==null?void 0:d.name}),(0,t.jsxs)("div",{className:"mb-4 border-b border-dashed",children:[(0,t.jsx)("div",{className:"mb-4",children:(A==null?void 0:A.blocks)&&(0,t.jsx)(r.Z,{blocks:A.blocks})}),(0,t.jsx)(x.Z,{dashed:!0}),(0,t.jsxs)("div",{className:"text-slate-500 italic flex justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(D.Z,{})," C\u1EADp nh\u1EADt l\xFAc: ",i()(d==null?void 0:d.modifiedDate).format("DD/MM/YYYY hh:mm")]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(y.Z,{})," L\u1EF1\u1EE3t xem: ",((d==null?void 0:d.viewCount)||0).toLocaleString()]})]})]})]}),(0,t.jsx)(E.Z,{})]})]})})})})})]})};g.default=j},96074:function(W,g,e){e.d(g,{Z:function(){return x}});var m=e(62435),h=e(94184),r=e.n(h),C=e(53124),l=e(54548),P=e(14747),b=e(30012),E=e(45503);const s=n=>{const{componentCls:i,sizePaddingEdgeHorizontal:_,colorSplit:a,lineWidth:t,textPaddingInline:j,orientationMargin:u,verticalMarginInline:c}=n;return{[i]:Object.assign(Object.assign({},(0,P.Wf)(n)),{borderBlockStart:`${(0,l.bf)(t)} solid ${a}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:c,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,l.bf)(t)} solid ${a}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,l.bf)(n.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${i}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,l.bf)(n.dividerHorizontalWithTextGutterMargin)} 0`,color:n.colorTextHeading,fontWeight:500,fontSize:n.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${a}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,l.bf)(t)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${i}-with-text-left`]:{"&::before":{width:`calc(${u} * 100%)`},"&::after":{width:`calc(100% - ${u} * 100%)`}},[`&-horizontal${i}-with-text-right`]:{"&::before":{width:`calc(100% - ${u} * 100%)`},"&::after":{width:`calc(${u} * 100%)`}},[`${i}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:j},"&-dashed":{background:"none",borderColor:a,borderStyle:"dashed",borderWidth:`${(0,l.bf)(t)} 0 0`},[`&-horizontal${i}-with-text${i}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${i}-dashed`]:{borderInlineStartWidth:t,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${i}-with-text`]:{color:n.colorText,fontWeight:"normal",fontSize:n.fontSize},[`&-horizontal${i}-with-text-left${i}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${i}-inner-text`]:{paddingInlineStart:_}},[`&-horizontal${i}-with-text-right${i}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${i}-inner-text`]:{paddingInlineEnd:_}}})}},f=n=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:n.marginXS});var D=(0,b.I$)("Divider",n=>{const i=(0,E.TS)(n,{dividerHorizontalWithTextGutterMargin:n.margin,dividerHorizontalGutterMargin:n.marginLG,sizePaddingEdgeHorizontal:0});return[s(i)]},f,{unitless:{orientationMargin:!0}}),y=function(n,i){var _={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&i.indexOf(a)<0&&(_[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(n);t<a.length;t++)i.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(n,a[t])&&(_[a[t]]=n[a[t]]);return _},x=n=>{const{getPrefixCls:i,direction:_,divider:a}=m.useContext(C.E_),{prefixCls:t,type:j="horizontal",orientation:u="center",orientationMargin:c,className:M,rootClassName:S,children:T,dashed:O,plain:v,style:d}=n,p=y(n,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),o=i("divider",t),[U,A]=D(o),R=u.length>0?`-${u}`:u,N=!!T,B=u==="left"&&c!=null,$=u==="right"&&c!=null,K=r()(o,a==null?void 0:a.className,A,`${o}-${j}`,{[`${o}-with-text`]:N,[`${o}-with-text${R}`]:N,[`${o}-dashed`]:!!O,[`${o}-plain`]:!!v,[`${o}-rtl`]:_==="rtl",[`${o}-no-default-orientation-margin-left`]:B,[`${o}-no-default-orientation-margin-right`]:$},M,S),L=m.useMemo(()=>typeof c=="number"?c:/^\d+$/.test(c)?Number(c):c,[c]),z=Object.assign(Object.assign({},B&&{marginLeft:L}),$&&{marginRight:L});return U(m.createElement("div",Object.assign({className:K,style:Object.assign(Object.assign({},a==null?void 0:a.style),d)},p,{role:"separator"}),T&&j!=="vertical"&&m.createElement("span",{className:`${o}-inner-text`,style:z},T)))}},37247:function(W,g,e){W.exports=e.p+"static/bg-feature.7032fd99.gif"}}]);
