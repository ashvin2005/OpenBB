"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return r?n.createElement(h,c(c({ref:t},m),{},{components:r})):n.createElement(h,c({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},9049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const c={title:"c15m",description:"The c15m command page explains how to retrieve a 15-minute intraday chart for any given stock ticker. This tool allows users to conduct technical analysis and monitor short-term price fluctuations.",keywords:["c15m command","intraday chart","technical analysis","stock trading","short-term price movements","stock ticker"]},i=void 0,l={unversionedId:"bot/reference/discord/charts/c15m",id:"bot/reference/discord/charts/c15m",title:"c15m",description:"The c15m command page explains how to retrieve a 15-minute intraday chart for any given stock ticker. This tool allows users to conduct technical analysis and monitor short-term price fluctuations.",source:"@site/content/bot/reference/discord/charts/c15m.md",sourceDirName:"bot/reference/discord/charts",slug:"/bot/reference/discord/charts/c15m",permalink:"/bot/reference/discord/charts/c15m",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/charts/c15m.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705602981,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{title:"c15m",description:"The c15m command page explains how to retrieve a 15-minute intraday chart for any given stock ticker. This tool allows users to conduct technical analysis and monitor short-term price fluctuations.",keywords:["c15m command","intraday chart","technical analysis","stock trading","short-term price movements","stock ticker"]},sidebar:"tutorialSidebar",previous:{title:"charts",permalink:"/bot/reference/discord/charts/"},next:{title:"c3m",permalink:"/bot/reference/discord/charts/c3m"}},s={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"charts: c15m - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to retrieve a 15-minute intraday chart for a given ticker. The chart will show the price and volume of the stock over the past 3 days in 15 minute intervals. This command is useful for performing technical analysis and tracking short-term price movements."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/c15m ticker\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/c15m ticker:AMD\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);