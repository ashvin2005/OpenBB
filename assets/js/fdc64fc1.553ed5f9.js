"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33167],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=u(r),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(g,l(l({ref:e},p),{},{components:r})):n.createElement(g,l({ref:e},p))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(67294),a=r(35742);function o(t){let{title:e}=t;return n.createElement(a.Z,null,n.createElement("title",null,e))}},47117:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const l={title:"topbuys",description:"Explore top buys for government trading. Discover how to use the 'topbuys' feature, including parameter selection for congress, senate and house, past transactions, and more for optimized use. Enhance your trading strategies today with quiverquant.",keywords:["government trading","topbuys","congress","senate","house","past transactions","quiverquant"]},i=void 0,s={unversionedId:"terminal/reference/stocks/gov/topbuys",id:"terminal/reference/stocks/gov/topbuys",title:"topbuys",description:"Explore top buys for government trading. Discover how to use the 'topbuys' feature, including parameter selection for congress, senate and house, past transactions, and more for optimized use. Enhance your trading strategies today with quiverquant.",source:"@site/content/terminal/reference/stocks/gov/topbuys.md",sourceDirName:"terminal/reference/stocks/gov",slug:"/terminal/reference/stocks/gov/topbuys",permalink:"/terminal/reference/stocks/gov/topbuys",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/gov/topbuys.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"topbuys",description:"Explore top buys for government trading. Discover how to use the 'topbuys' feature, including parameter selection for congress, senate and house, past transactions, and more for optimized use. Enhance your trading strategies today with quiverquant.",keywords:["government trading","topbuys","congress","senate","house","past transactions","quiverquant"]},sidebar:"tutorialSidebar",previous:{title:"qtrcontracts",permalink:"/terminal/reference/stocks/gov/qtrcontracts"},next:{title:"toplobbying",permalink:"/terminal/reference/stocks/gov/toplobbying"}},u={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],c={toc:p},m="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"stocks /gov/topbuys - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Top buys for government trading. ","[Source: www.quiverquant.com]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"topbuys [-g {congress,senate,house}] [-p PAST_TRANSACTIONS_MONTHS] [-l LIMIT] [--raw]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gov"),(0,a.kt)("td",{parentName:"tr",align:null},"-g  --govtype"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"congress"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"congress, senate, house")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"past_transactions_months"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --past_transactions_months"),(0,a.kt)("td",{parentName:"tr",align:null},"Past transaction months"),(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of top tickers to display"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"raw"),(0,a.kt)("td",{parentName:"tr",align:null},"--raw"),(0,a.kt)("td",{parentName:"tr",align:null},"Print raw data."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154266344-944b0c5b-f7b0-4fdb-a020-a93565f6c13c.png",alt:"topbuys"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);