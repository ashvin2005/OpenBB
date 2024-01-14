"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(r),s=n,g=c["".concat(o,".").concat(s)]||c[s]||m[s]||l;return r?a.createElement(g,i(i({ref:t},d),{},{components:r})):a.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},48731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={title:"revenue_per_geography",description:"Learn about the revenue per geography data with the geographic revenue data Python function in this documentation page. Understand the symbol, period, structure, and provider parameters. Explore the returns, results, metadata, and the data structure including the date, geographic segment, and revenue by region (Americas, Europe, Greater China, Japan, Rest of Asia Pacific).",keywords:["geographic revenue data","revenue per geography","Python function","documentation page","symbol parameter","period parameter","structure parameter","provider parameter","returns","results","metadata","data","date","geographic segment","Americas","Europe","Greater China","Japan","Rest of Asia Pacific"]},i=void 0,p={unversionedId:"excel/reference/equity/fundamental/revenue_per_geography",id:"excel/reference/equity/fundamental/revenue_per_geography",title:"revenue_per_geography",description:"Learn about the revenue per geography data with the geographic revenue data Python function in this documentation page. Understand the symbol, period, structure, and provider parameters. Explore the returns, results, metadata, and the data structure including the date, geographic segment, and revenue by region (Americas, Europe, Greater China, Japan, Rest of Asia Pacific).",source:"@site/content/excel/reference/equity/fundamental/revenue_per_geography.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/revenue_per_geography",permalink:"/excel/reference/equity/fundamental/revenue_per_geography",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/fundamental/revenue_per_geography.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705199383,formattedLastUpdatedAt:"Jan 14, 2024",frontMatter:{title:"revenue_per_geography",description:"Learn about the revenue per geography data with the geographic revenue data Python function in this documentation page. Understand the symbol, period, structure, and provider parameters. Explore the returns, results, metadata, and the data structure including the date, geographic segment, and revenue by region (Americas, Europe, Greater China, Japan, Rest of Asia Pacific).",keywords:["geographic revenue data","revenue per geography","Python function","documentation page","symbol parameter","period parameter","structure parameter","provider parameter","returns","results","metadata","data","date","geographic segment","Americas","Europe","Greater China","Japan","Rest of Asia Pacific"]},sidebar:"tutorialSidebar",previous:{title:"reported_financials",permalink:"/excel/reference/equity/fundamental/reported_financials"},next:{title:"revenue_per_segment",permalink:"/excel/reference/equity/fundamental/revenue_per_segment"}},o={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],d={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Revenue Geographic. Geographic revenue data."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.FUNDAMENTAL.REVENUE_PER_GEOGRAPHY(symbol;[period];[structure];[provider])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.EQUITY.FUNDAMENTAL.REVENUE_PER_GEOGRAPHY("AAPL")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Text")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"True"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"structure"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Structure of the returned data."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp, defaults to fmp."),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period_ending"),(0,n.kt)("td",{parentName:"tr",align:null},"The end date of the reporting period.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fiscal_period"),(0,n.kt)("td",{parentName:"tr",align:null},"The fiscal period of the reporting period.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fiscal_year"),(0,n.kt)("td",{parentName:"tr",align:null},"The fiscal year of the reporting period.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,n.kt)("td",{parentName:"tr",align:null},"The filing date of the report.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"geographic_segment"),(0,n.kt)("td",{parentName:"tr",align:null},"Dictionary of the revenue by geographic segment.")))))}m.isMDXComponent=!0}}]);