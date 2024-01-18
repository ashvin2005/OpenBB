"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15724],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=l,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||n;return r?a.createElement(k,o(o({ref:t},p),{},{components:r})):a.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294),l=r(35742);function n(e){let{title:t}=e;return a.createElement(l.Z,null,a.createElement("title",null,t))}},20144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=r(87462),l=(r(67294),r(3905)),n=r(88828);const o={title:"allblocks",description:"Page explaining the allblocks command in a trading platform, used to retrieve and summarise the last 15 block trades of a specified security.",keywords:["allblocks","block trades","security","stock ticker","trade summary"]},i=void 0,c={unversionedId:"bot/reference/telegram/darkpool/allblocks",id:"bot/reference/telegram/darkpool/allblocks",title:"allblocks",description:"Page explaining the allblocks command in a trading platform, used to retrieve and summarise the last 15 block trades of a specified security.",source:"@site/content/bot/reference/telegram/darkpool/allblocks.md",sourceDirName:"bot/reference/telegram/darkpool",slug:"/bot/reference/telegram/darkpool/allblocks",permalink:"/bot/reference/telegram/darkpool/allblocks",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/darkpool/allblocks.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705602981,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{title:"allblocks",description:"Page explaining the allblocks command in a trading platform, used to retrieve and summarise the last 15 block trades of a specified security.",keywords:["allblocks","block trades","security","stock ticker","trade summary"]},sidebar:"tutorialSidebar",previous:{title:"darkpool",permalink:"/bot/reference/telegram/darkpool/"},next:{title:"alldp",permalink:"/bot/reference/telegram/darkpool/alldp"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,{title:"darkpool: allblocks - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,l.kt)("p",null,"The command allows the user to retrieve the last 15 block trades of a given security. This command will provide a summary of the last 15 block trades, including the time, price, quantity, and total gross value of each trade."),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/allblocks ticker\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ticker"),(0,l.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/allblocks AMD\n")),(0,l.kt)("hr",null))}u.isMDXComponent=!0}}]);