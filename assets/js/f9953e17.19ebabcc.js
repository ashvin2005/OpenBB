"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},80518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const i={title:"prints",description:"This tutorial explains the use of the command '/crypto prints coin' to retrieve the last 15 crypto prints over the last 24 hours for a specific coin. Charge into the world of crypto metrics, track prices, volumes, sizes, and other associated metrics.",keywords:["Crypto Prints","Crypto metrics","Crypto commands","Bitcoin","Ethereum","Docusaurus SEO"]},c=void 0,s={unversionedId:"bot/reference/discord/crypto/prints",id:"bot/reference/discord/crypto/prints",title:"prints",description:"This tutorial explains the use of the command '/crypto prints coin' to retrieve the last 15 crypto prints over the last 24 hours for a specific coin. Charge into the world of crypto metrics, track prices, volumes, sizes, and other associated metrics.",source:"@site/content/bot/reference/discord/crypto/prints.md",sourceDirName:"bot/reference/discord/crypto",slug:"/bot/reference/discord/crypto/prints",permalink:"/bot/reference/discord/crypto/prints",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/crypto/prints.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"prints",description:"This tutorial explains the use of the command '/crypto prints coin' to retrieve the last 15 crypto prints over the last 24 hours for a specific coin. Charge into the world of crypto metrics, track prices, volumes, sizes, and other associated metrics.",keywords:["Crypto Prints","Crypto metrics","Crypto commands","Bitcoin","Ethereum","Docusaurus SEO"]},sidebar:"tutorialSidebar",previous:{title:"ir",permalink:"/bot/reference/discord/crypto/ir"},next:{title:"top",permalink:"/bot/reference/discord/crypto/top"}},p={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"crypto: prints - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve the Last 15 Crypto Prints over the last 24 hours for the specified coin. The command will provide information on the price, volume, size, and other metrics associated with the prints."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/crypto prints coin\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"coin"),(0,o.kt)("td",{parentName:"tr",align:null},"Coin from the list of supported coins"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"ADA-USD, AVAX-USD, BTC-USD, DAI-USD, DOGE-USD, DOT-USD, ETH-USD, LTC-USD, MATIC-USD, SHIB-USD, SOL-USD, TRX-USD, USDC-USD, USDT-USD, WBTC-USD, XRP-USD")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/crypto prints coin:BTC-USD\n")),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);