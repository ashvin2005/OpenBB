"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47179],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),s=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(a),m=n,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(f,i(i({ref:e},p),{},{components:a})):r.createElement(f,i({ref:e},p))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(67294),n=a(35742);function l(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},70007:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(88828);const i={title:"ftd",description:"Documentation and usage guide for the 'ftd' function that prints the latest fails-to-deliver data sourced from SEC. It allows users to specify date range, volume of data and offers raw data print.",keywords:["fails-to-deliver data","SEC source","ftd","datetime parameter","raw data","data print","data analysis"]},o=void 0,d={unversionedId:"terminal/reference/stocks/dps/ftd",id:"terminal/reference/stocks/dps/ftd",title:"ftd",description:"Documentation and usage guide for the 'ftd' function that prints the latest fails-to-deliver data sourced from SEC. It allows users to specify date range, volume of data and offers raw data print.",source:"@site/content/terminal/reference/stocks/dps/ftd.md",sourceDirName:"terminal/reference/stocks/dps",slug:"/terminal/reference/stocks/dps/ftd",permalink:"/terminal/reference/stocks/dps/ftd",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/dps/ftd.md",tags:[],version:"current",lastUpdatedBy:"minhhoang1023",lastUpdatedAt:1705489831,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"ftd",description:"Documentation and usage guide for the 'ftd' function that prints the latest fails-to-deliver data sourced from SEC. It allows users to specify date range, volume of data and offers raw data print.",keywords:["fails-to-deliver data","SEC source","ftd","datetime parameter","raw data","data print","data analysis"]},sidebar:"tutorialSidebar",previous:{title:"dpotc",permalink:"/terminal/reference/stocks/dps/dpotc"},next:{title:"hsi",permalink:"/terminal/reference/stocks/dps/hsi"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p},c="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"stocks /dps/ftd - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Prints latest fails-to-deliver data. ","[Source: SEC]"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"ftd [-s START] [-e END] [-n N_NUM] [--raw]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start"),(0,n.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,n.kt)("td",{parentName:"tr",align:null},"start of datetime to see FTD"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-11-18"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end"),(0,n.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,n.kt)("td",{parentName:"tr",align:null},"end of datetime to see FTD"),(0,n.kt)("td",{parentName:"tr",align:null},"2024-01-17"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"n_num"),(0,n.kt)("td",{parentName:"tr",align:null},"-n  --num"),(0,n.kt)("td",{parentName:"tr",align:null},"number of latest fails-to-deliver being printed"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"raw"),(0,n.kt)("td",{parentName:"tr",align:null},"--raw"),(0,n.kt)("td",{parentName:"tr",align:null},"Print raw data."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154075166-a5a84604-e8ec-46d5-a990-8ca3d928c662.png",alt:"ftd"})),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);