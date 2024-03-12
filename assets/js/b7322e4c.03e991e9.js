"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78869],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,y=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(35742);function l(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},84052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),l=r(88828);const i={title:"dvcp",description:"dvcp helps you to analyze the daily trading volume for any given cryptocurrency pair. It includes features for sorting and displaying the data based on different parameters including coin type, quote currency, and range of days.",keywords:["crypto","dvcp","crypto pair volume","ERC20 token","Sort data","Bitcoin","Ethereum","USDT","crypto trading","trade volume"]},o=void 0,p={unversionedId:"terminal/reference/crypto/onchain/dvcp",id:"terminal/reference/crypto/onchain/dvcp",title:"dvcp",description:"dvcp helps you to analyze the daily trading volume for any given cryptocurrency pair. It includes features for sorting and displaying the data based on different parameters including coin type, quote currency, and range of days.",source:"@site/content/terminal/reference/crypto/onchain/dvcp.md",sourceDirName:"terminal/reference/crypto/onchain",slug:"/terminal/reference/crypto/onchain/dvcp",permalink:"/terminal/reference/crypto/onchain/dvcp",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/onchain/dvcp.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"dvcp",description:"dvcp helps you to analyze the daily trading volume for any given cryptocurrency pair. It includes features for sorting and displaying the data based on different parameters including coin type, quote currency, and range of days.",keywords:["crypto","dvcp","crypto pair volume","ERC20 token","Sort data","Bitcoin","Ethereum","USDT","crypto trading","trade volume"]},sidebar:"tutorialSidebar",previous:{title:"btcct",permalink:"/terminal/reference/crypto/onchain/btcct"},next:{title:"hist",permalink:"/terminal/reference/crypto/onchain/hist"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:d},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"crypto /onchain/dvcp - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display daily volume for given crypto pair ","[Source: https://graphql.bitquery.io/]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"dvcp -c COIN [-vs {ETH,USD,BTC,USDT}] [-d DAYS] [-s {date,exchange,base,quote,open,high,low,close,tradeAmount,trades}] [-r]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"coin"),(0,a.kt)("td",{parentName:"tr",align:null},"-c  --coin"),(0,a.kt)("td",{parentName:"tr",align:null},"ERC20 token symbol or address."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vs"),(0,a.kt)("td",{parentName:"tr",align:null},"-vs  --vs"),(0,a.kt)("td",{parentName:"tr",align:null},"Quote currency"),(0,a.kt)("td",{parentName:"tr",align:null},"USDT"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"ETH, USD, BTC, USDT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"days"),(0,a.kt)("td",{parentName:"tr",align:null},"-d  --days"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of days to display data for."),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"range(1, 100)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sortby"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --sort"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort by given column."),(0,a.kt)("td",{parentName:"tr",align:null},"date"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"date, exchange, base, quote, open, high, low, close, tradeAmount, trades")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"-r  --reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);