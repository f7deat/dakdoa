"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[798],{80882:function(A,C,o){o.d(C,{Z:function(){return u}});var l=o(87462),p=o(62435),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},b=g,h=o(77346),S=function(m,c){return p.createElement(h.Z,(0,l.Z)({},m,{ref:c,icon:b}))},u=p.forwardRef(S)},73403:function(A,C,o){o.d(C,{Z:function(){return u}});var l=o(87462),p=o(62435),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},b=g,h=o(77346),S=function(m,c){return p.createElement(h.Z,(0,l.Z)({},m,{ref:c,icon:b}))},u=p.forwardRef(S)},85673:function(A,C,o){o.d(C,{Z:function(){return be}});var l=o(62435),p=o(94184),g=o.n(p),b=o(50344),h=o(64217),S=o(96159),u=o(53124),D=o(80882),m=o(1203);const c=e=>{let{children:r}=e;const{getPrefixCls:a}=l.useContext(u.E_),n=a("breadcrumb");return l.createElement("li",{className:`${n}-separator`,"aria-hidden":"true"},r===""?r:r||"/")};c.__ANT_BREADCRUMB_SEPARATOR=!0;var f=c,H=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};function v(e,r){if(e.title===void 0||e.title===null)return null;const a=Object.keys(r).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${a})`,"g"),(n,t)=>r[t]||n)}function J(e,r,a,n){if(a==null)return null;const{className:t,onClick:s}=r,i=H(r,["className","onClick"]),d=Object.assign(Object.assign({},(0,h.Z)(i,{data:!0,aria:!0})),{onClick:s});return n!==void 0?l.createElement("a",Object.assign({},d,{className:g()(`${e}-link`,t),href:n}),a):l.createElement("span",Object.assign({},d,{className:g()(`${e}-link`,t)}),a)}function ae(e,r){return(n,t,s,i,d)=>{if(r)return r(n,t,s,i);const P=v(n,t);return J(e,n,P,d)}}var X=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};const Y=e=>{const{prefixCls:r,separator:a="/",children:n,menu:t,overlay:s,dropdownProps:i,href:d}=e,N=(w=>{if(t||s){const M=Object.assign({},i);if(t){const L=t||{},{items:T}=L,y=X(L,["items"]);M.menu=Object.assign(Object.assign({},y),{items:T==null?void 0:T.map((j,x)=>{var{key:B,title:F,label:O,path:z}=j,K=X(j,["key","title","label","path"]);let R=O!=null?O:F;return z&&(R=l.createElement("a",{href:`${d}${z}`},R)),Object.assign(Object.assign({},K),{key:B!=null?B:x,label:R})})})}else s&&(M.overlay=s);return l.createElement(m.Z,Object.assign({placement:"bottom"},M),l.createElement("span",{className:`${r}-overlay-link`},w,l.createElement(D.Z,null)))}return w})(n);return N!=null?l.createElement(l.Fragment,null,l.createElement("li",null,N),a&&l.createElement(f,null,a)):null},k=e=>{const{prefixCls:r,children:a,href:n}=e,t=X(e,["prefixCls","children","href"]),{getPrefixCls:s}=l.useContext(u.E_),i=s("breadcrumb",r);return l.createElement(Y,Object.assign({},t,{prefixCls:i}),J(i,t,a,n))};k.__ANT_BREADCRUMB_ITEM=!0;var oe=k,q=o(54548),_=o(14747),le=o(30012),se=o(45503);const ie=e=>{const{componentCls:r,iconCls:a,calc:n}=e;return{[r]:Object.assign(Object.assign({},(0,_.Wf)(e)),{color:e.itemColor,fontSize:e.fontSize,[a]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${(0,q.bf)(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:n(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,_.Qy)(e)),["li:last-child"]:{color:e.lastItemColor},[`${r}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${r}-link`]:{[`
          > ${a} + span,
          > ${a} + a
        `]:{marginInlineStart:e.marginXXS}},[`${r}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${(0,q.bf)(e.paddingXXS)}`,marginInline:n(e.marginXXS).mul(-1).equal(),[`> ${a}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},ce=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS});var de=(0,le.I$)("Breadcrumb",e=>{const r=(0,se.TS)(e,{});return ie(r)},ce),ee=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};function ue(e){const{breadcrumbName:r,children:a}=e,n=ee(e,["breadcrumbName","children"]),t=Object.assign({title:r},n);return a&&(t.menu={items:a.map(s=>{var{breadcrumbName:i}=s,d=ee(s,["breadcrumbName"]);return Object.assign(Object.assign({},d),{title:i})})}),t}function me(e,r){return(0,l.useMemo)(()=>e||(r?r.map(ue):null),[e,r])}var fe=function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};const pe=(e,r)=>{if(r===void 0)return r;let a=(r||"").replace(/^\//,"");return Object.keys(e).forEach(n=>{a=a.replace(`:${n}`,e[n])}),a},V=e=>{const{prefixCls:r,separator:a="/",style:n,className:t,rootClassName:s,routes:i,items:d,children:P,itemRender:N,params:w={}}=e,M=fe(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:L,direction:T,breadcrumb:y}=l.useContext(u.E_);let j;const x=L("breadcrumb",r),[B,F]=de(x),O=me(d,i),z=ae(x,N);if(O&&O.length>0){const I=[],$=d||i;j=O.map((E,Z)=>{const{path:he,key:U,type:ve,menu:ne,overlay:re,onClick:ye,className:Oe,separator:Ce,dropdownProps:Se}=E,W=pe(w,he);W!==void 0&&I.push(W);const te=U!=null?U:Z;if(ve==="separator")return l.createElement(f,{key:te},Ce);const G={},xe=Z===O.length-1;ne?G.menu=ne:re&&(G.overlay=re);let{href:Q}=E;return I.length&&W!==void 0&&(Q=`#/${I.join("/")}`),l.createElement(Y,Object.assign({key:te},G,(0,h.Z)(E,{data:!0,aria:!0}),{className:Oe,dropdownProps:Se,href:Q,separator:xe?"":a,onClick:ye,prefixCls:x}),z(E,w,$,I,Q))})}else if(P){const I=(0,b.Z)(P).length;j=(0,b.Z)(P).map(($,E)=>{if(!$)return $;const Z=E===I-1;return(0,S.Tm)($,{separator:Z?"":a,key:E})})}const K=g()(x,y==null?void 0:y.className,{[`${x}-rtl`]:T==="rtl"},t,s,F),R=Object.assign(Object.assign({},y==null?void 0:y.style),n);return B(l.createElement("nav",Object.assign({className:K,style:R},M),l.createElement("ol",null,j)))};V.Item=oe,V.Separator=f;var ge=V,be=ge},64217:function(A,C,o){o.d(C,{Z:function(){return D}});var l=o(1413),p=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,g=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,b="".concat(p," ").concat(g).split(/[\s\n]+/),h="aria-",S="data-";function u(m,c){return m.indexOf(c)===0}function D(m){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,f;c===!1?f={aria:!0,data:!0,attr:!0}:c===!0?f={aria:!0}:f=(0,l.Z)({},c);var H={};return Object.keys(m).forEach(function(v){(f.aria&&(v==="role"||u(v,h))||f.data&&u(v,S)||f.attr&&b.includes(v))&&(H[v]=m[v])}),H}}}]);
