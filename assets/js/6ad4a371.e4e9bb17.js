"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(35742);function i(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},23295:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),i=r(88828);const o={title:"scorr",description:"The page provides reference to FinBrain's sentiment correlation tool, demonstrating usage, parameters, and a screenshot for better interpretation. It aids with extracting and comparing sentiment data across similar tickers.",keywords:["FinBrain","sentiment correlation","similar tickers","sentiment_compare","raw sentiment data"]},s=void 0,l={unversionedId:"terminal/reference/stocks/ca/scorr",id:"terminal/reference/stocks/ca/scorr",title:"scorr",description:"The page provides reference to FinBrain's sentiment correlation tool, demonstrating usage, parameters, and a screenshot for better interpretation. It aids with extracting and comparing sentiment data across similar tickers.",source:"@site/content/terminal/reference/stocks/ca/scorr.md",sourceDirName:"terminal/reference/stocks/ca",slug:"/terminal/reference/stocks/ca/scorr",permalink:"/terminal/reference/stocks/ca/scorr",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ca/scorr.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1701462427,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"scorr",description:"The page provides reference to FinBrain's sentiment correlation tool, demonstrating usage, parameters, and a screenshot for better interpretation. It aids with extracting and comparing sentiment data across similar tickers.",keywords:["FinBrain","sentiment correlation","similar tickers","sentiment_compare","raw sentiment data"]},sidebar:"tutorialSidebar",previous:{title:"rmv",permalink:"/terminal/reference/stocks/ca/rmv"},next:{title:"sentiment",permalink:"/terminal/reference/stocks/ca/sentiment"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"stocks /ca/scorr - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"FinBrain's sentiment correlation across similar tickers."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"sentiment_compare [-r]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"raw"),(0,a.kt)("td",{parentName:"tr",align:null},"-r  --raw"),(0,a.kt)("td",{parentName:"tr",align:null},"Display raw sentiment data"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154073958-a2d7afd1-2406-46a6-8dc2-fdfd8b8605a4.png",alt:"scorr"})),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);