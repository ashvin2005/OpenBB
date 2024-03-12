"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81453],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,u=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(u,i(i({ref:r},m),{},{components:t})):n.createElement(u,i({ref:r},m))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(39960),o=t(86010),a=t(67294),i=t(16550),c=t(48334);function s(e){let{title:r,url:t,description:s,command:l}=e;const{pathname:m}=(0,i.TH)(),d=m.replace(/\/v\d+/,""),p=!d.includes("/reference")&&!d.includes("/widgets-library/")&&!d.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":d.startsWith("/terminal")||d.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":d.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":d.startsWith("/sdk")||d.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":d.startsWith("/excel"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/pro")||d.startsWith("/excel")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&a.createElement(c.Z,{className:"ml-auto mr-4"})),s?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},33568:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=t(87462),o=(t(67294),t(3905)),a=t(26515);const i={},c="Economy",s={unversionedId:"platform/reference/economy/index",id:"platform/reference/economy/index",title:"Economy",description:"Menus",source:"@site/content/platform/reference/economy/index.mdx",sourceDirName:"platform/reference/economy",slug:"/platform/reference/economy/",permalink:"/platform/reference/economy/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/economy/index.mdx",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"snapshots",permalink:"/platform/reference/currency/snapshots"},next:{title:"Gdp",permalink:"/platform/reference/economy/gdp/"}},l={},m=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],d={toc:m},p="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"economy"},"Economy"),(0,o.kt)("h3",{id:"menus"},"Menus"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Gdp",description:"forecast, real, nominal",url:"/platform/reference/economy/gdp",mdxType:"ReferenceCard"})),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"calendar",description:"Get the upcoming, or historical, economic calendar of global events",url:"/platform/reference/economy/calendar",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"fred series",description:"Get data by series ID from FRED",url:"/platform/reference/economy/fred_series",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"unemployment",description:"Global unemployment data",url:"/platform/reference/economy/unemployment",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"fred regional",description:"Query the Geo Fred API for regional economic data by series group",url:"/platform/reference/economy/fred_regional",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"risk premium",description:"Market Risk Premium by country",url:"/platform/reference/economy/risk_premium",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"composite leading indicator",description:"The composite leading indicator (CLI) is designed to provide early signals of turning points\nin business cycles showing fluctuation of the economic activity around its long term potential level",url:"/platform/reference/economy/composite_leading_indicator",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"money measures",description:"Money Measures (M1/M2 and components)",url:"/platform/reference/economy/money_measures",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"fred search",description:"Search for FRED series or economic releases by ID or string",url:"/platform/reference/economy/fred_search",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"cpi",description:"Consumer Price Index (CPI)",url:"/platform/reference/economy/cpi",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"balance of payments",description:"Balance of Payments Reports",url:"/platform/reference/economy/balance_of_payments",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"short term interest rate",description:"Short-term interest rates are the rates at which short-term borrowings are effected between\nfinancial institutions or the rate at which short-term government paper is issued or traded in the market",url:"/platform/reference/economy/short_term_interest_rate",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"long term interest rate",description:"Long-term interest rates refer to government bonds maturing in ten years",url:"/platform/reference/economy/long_term_interest_rate",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);