"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36564],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},99314:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const i={title:"uoastock",description:"The uoastock command retrieves the 20-day average options volume by ticker, including both calls and puts. This page provides instructions for its usage, including how to filter stocks by price.",keywords:["uoastock command","options volume by ticker","20-day average options volume","commands for stocks","trading commands","stock price filtering"]},s=void 0,c={unversionedId:"bot/reference/discord/options/uoastock",id:"bot/reference/discord/options/uoastock",title:"uoastock",description:"The uoastock command retrieves the 20-day average options volume by ticker, including both calls and puts. This page provides instructions for its usage, including how to filter stocks by price.",source:"@site/content/bot/reference/discord/options/uoastock.md",sourceDirName:"bot/reference/discord/options",slug:"/bot/reference/discord/options/uoastock",permalink:"/bot/reference/discord/options/uoastock",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/options/uoastock.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705199383,formattedLastUpdatedAt:"Jan 14, 2024",frontMatter:{title:"uoastock",description:"The uoastock command retrieves the 20-day average options volume by ticker, including both calls and puts. This page provides instructions for its usage, including how to filter stocks by price.",keywords:["uoastock command","options volume by ticker","20-day average options volume","commands for stocks","trading commands","stock price filtering"]},sidebar:"tutorialSidebar",previous:{title:"unu",permalink:"/bot/reference/discord/options/unu"},next:{title:"vol",permalink:"/bot/reference/discord/options/vol"}},l={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"options: uoastock - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve the 20-day average options volume by ticker. The volume is based on the total volume of all options traded in the given period of time, including calls and puts."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/op uoastock [price]\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"price"),(0,o.kt)("td",{parentName:"tr",align:null},"Filter by stocks over a certain price"),(0,o.kt)("td",{parentName:"tr",align:null},"True"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/op uoastock\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/op uoastock price:50\n")),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);