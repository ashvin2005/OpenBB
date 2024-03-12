"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=i(r),u=n,y=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return r?a.createElement(y,l(l({ref:t},m),{},{components:r})):a.createElement(y,l({ref:t},m))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},53:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const l={title:"summary",description:"Learn how to retrieve a summary of all the prints by percentage of MarketCap over the last x days, sorted by MarketCap. Understand the usage, parameters, and see examples.",keywords:["prints summary","MarketCap","Sort by MarketCap","/dp summary command","MarketCap over time","Market analysis","Financial Data Analysis","Short Percentage","Float"]},s=void 0,p={unversionedId:"bot/reference/discord/darkpool/summary",id:"bot/reference/discord/darkpool/summary",title:"summary",description:"Learn how to retrieve a summary of all the prints by percentage of MarketCap over the last x days, sorted by MarketCap. Understand the usage, parameters, and see examples.",source:"@site/content/bot/reference/discord/darkpool/summary.md",sourceDirName:"bot/reference/discord/darkpool",slug:"/bot/reference/discord/darkpool/summary",permalink:"/bot/reference/discord/darkpool/summary",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/darkpool/summary.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"summary",description:"Learn how to retrieve a summary of all the prints by percentage of MarketCap over the last x days, sorted by MarketCap. Understand the usage, parameters, and see examples.",keywords:["prints summary","MarketCap","Sort by MarketCap","/dp summary command","MarketCap over time","Market analysis","Financial Data Analysis","Short Percentage","Float"]},sidebar:"tutorialSidebar",previous:{title:"sectors",permalink:"/bot/reference/discord/darkpool/sectors"},next:{title:"topsum",permalink:"/bot/reference/discord/darkpool/topsum"}},i={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:m},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"darkpool: summary - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command retrieves a summary of all the prints by percentage of MarketCap over the last x days, sorted by MarketCap. The summary includes the total number of prints and their total percentage of MarketCap, as well as the float and short percentage."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/dp summary days sort\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of days to look back"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sort"),(0,n.kt)("td",{parentName:"tr",align:null},"Sort by MarketCap, Float, Total, or Short Percentage"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"MarketCap (mc), Float (float), Total (sum), Short Percentage (short)")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/dp summary days:10 sort:MarketCap\n")),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);