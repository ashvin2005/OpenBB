"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54170],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),h=a,d=u["".concat(c,".").concat(h)]||u[h]||f[h]||i;return t?n.createElement(d,o(o({ref:r},p),{},{components:t})):n.createElement(d,o({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},88828:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(67294),a=t(35742);function i(e){let{title:r}=e;return n.createElement(a.Z,null,n.createElement("title",null,r))}},77533:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905)),i=t(88828);const o={title:"which",description:"This page provides instructions on how to show library versions of required packages using the function 'which'.",keywords:["docusaurus","which function","library versions","required packages","Torch version","Darts version","Commands","CPU","RAM","Dataset size"]},s=void 0,c={unversionedId:"terminal/reference/forecast/which",id:"terminal/reference/forecast/which",title:"which",description:"This page provides instructions on how to show library versions of required packages using the function 'which'.",source:"@site/content/terminal/reference/forecast/which.md",sourceDirName:"terminal/reference/forecast",slug:"/terminal/reference/forecast/which",permalink:"/terminal/reference/forecast/which",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forecast/which.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705199383,formattedLastUpdatedAt:"Jan 14, 2024",frontMatter:{title:"which",description:"This page provides instructions on how to show library versions of required packages using the function 'which'.",keywords:["docusaurus","which function","library versions","required packages","Torch version","Darts version","Commands","CPU","RAM","Dataset size"]},sidebar:"tutorialSidebar",previous:{title:"trans",permalink:"/terminal/reference/forecast/trans"},next:{title:"whisper",permalink:"/terminal/reference/forecast/whisper"}},l={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},f="wrapper";function h(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"forecast /which - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Show library versions of required packages."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"which\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This command has no parameters"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Sep 15, 00:04 (\ud83e\udd8b) /forecast/ $ which\nwhich\n\nCurrent Compute Device (CPU or GPU): CPU\nCurrent RAM: 16.0G\nRecommended Max dataset size based on current RAM: 5.0G\nTorch version: 1.11.0\nDarts version: 0.21.0\n")),(0,a.kt)("hr",null))}h.isMDXComponent=!0}}]);