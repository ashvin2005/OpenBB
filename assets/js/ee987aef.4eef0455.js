"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31344],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(r),c=a,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return r?n.createElement(g,i(i({ref:e},u),{},{components:r})):n.createElement(g,i({ref:e},u))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(67294),a=r(35742);function l(t){let{title:e}=t;return n.createElement(a.Z,null,n.createElement("title",null,e))}},72466:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),l=r(88828);const i={title:"create",description:"This is a technical page with detailed instructions on how to create and use parameters including action, product, symbol, price, size, up_to, duration, type, and their respective choices in programming. This covers various market operations including buy, sell, GTD, GTC, limit, market, stop-limit, and stop-loss.",keywords:["create","usage","parameters","action","product","symbol","price","size","up_to","duration","type","order","buy","sell","gtd","gtc","limit","market","stop-limit","stop-loss"]},o=void 0,p={unversionedId:"terminal/reference/portfolio/brokers/degiro/create",id:"terminal/reference/portfolio/brokers/degiro/create",title:"create",description:"This is a technical page with detailed instructions on how to create and use parameters including action, product, symbol, price, size, up_to, duration, type, and their respective choices in programming. This covers various market operations including buy, sell, GTD, GTC, limit, market, stop-limit, and stop-loss.",source:"@site/content/terminal/reference/portfolio/brokers/degiro/create.md",sourceDirName:"terminal/reference/portfolio/brokers/degiro",slug:"/terminal/reference/portfolio/brokers/degiro/create",permalink:"/terminal/reference/portfolio/brokers/degiro/create",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/brokers/degiro/create.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705199383,formattedLastUpdatedAt:"Jan 14, 2024",frontMatter:{title:"create",description:"This is a technical page with detailed instructions on how to create and use parameters including action, product, symbol, price, size, up_to, duration, type, and their respective choices in programming. This covers various market operations including buy, sell, GTD, GTC, limit, market, stop-limit, and stop-loss.",keywords:["create","usage","parameters","action","product","symbol","price","size","up_to","duration","type","order","buy","sell","gtd","gtc","limit","market","stop-limit","stop-loss"]},sidebar:"tutorialSidebar",previous:{title:"companynews",permalink:"/terminal/reference/portfolio/brokers/degiro/companynews"},next:{title:"lastnews",permalink:"/terminal/reference/portfolio/brokers/degiro/lastnews"}},s={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:u},m="wrapper";function c(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"portfolio /brokers/degiro/create - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"create [-a {buy,sell}] (-prod PRODUCT | -sym SYMBOL) -p PRICE (-s SIZE | -up UP_TO) [-d {gtd,gtc}] [-t {limit,market,stop-limit,stop-loss}]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"action"),(0,a.kt)("td",{parentName:"tr",align:null},"-a  --action"),(0,a.kt)("td",{parentName:"tr",align:null},"Action wanted."),(0,a.kt)("td",{parentName:"tr",align:null},"buy"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"buy, sell")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"product"),(0,a.kt)("td",{parentName:"tr",align:null},"-prod  --product"),(0,a.kt)("td",{parentName:"tr",align:null},"Id of the product wanted."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"-sym  --symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol wanted."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"price"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --price"),(0,a.kt)("td",{parentName:"tr",align:null},"Price wanted."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"size"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --size"),(0,a.kt)("td",{parentName:"tr",align:null},"Price wanted."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"up_to"),(0,a.kt)("td",{parentName:"tr",align:null},"-up  --up-to"),(0,a.kt)("td",{parentName:"tr",align:null},"Up to price."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"duration"),(0,a.kt)("td",{parentName:"tr",align:null},"-d  --duration"),(0,a.kt)("td",{parentName:"tr",align:null},"Duration of the Order."),(0,a.kt)("td",{parentName:"tr",align:null},"gtd"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"gtd, gtc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"-t  --type"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the Order."),(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"limit, market, stop-limit, stop-loss")))),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);