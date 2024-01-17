"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),p=o,u=f["".concat(d,".").concat(p)]||f[p]||m[p]||a;return r?n.createElement(u,i(i({ref:t},s),{},{components:r})):n.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(39960),o=r(86010),a=r(67294),i=r(16550),c=r(48334);function d(e){let{title:t,url:r,description:d,command:l}=e;const{pathname:s}=(0,i.TH)(),f=s.replace(/\/v\d+/,""),m=!f.includes("/reference")&&!f.includes("/widgets-library/")&&!f.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":f.startsWith("/terminal")||f.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":f.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":f.startsWith("/sdk")||f.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":f.startsWith("/excel"),header_docs:!(f.startsWith("/terminal")||f.startsWith("/pro")||f.startsWith("/excel")||f.startsWith("/sdk")||f.startsWith("/platform")||f.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),m&&a.createElement(c.Z,{className:"ml-auto mr-4"})),d?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},d):null)}},72149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=r(87462),o=(r(67294),r(3905)),a=r(26515);const i={},c="etf",d={unversionedId:"excel/reference/etf/index",id:"excel/reference/etf/index",title:"etf",description:"Commands",source:"@site/content/excel/reference/etf/index.mdx",sourceDirName:"excel/reference/etf",slug:"/excel/reference/etf/",permalink:"/excel/reference/etf/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/etf/index.mdx",tags:[],version:"current",lastUpdatedBy:"minhhoang1023",lastUpdatedAt:1705489831,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sofr",permalink:"/excel/reference/fixedincome/sofr"},next:{title:"countries",permalink:"/excel/reference/etf/countries"}},l={},s=[{value:"Commands",id:"commands",level:3}],f={toc:s},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"etf"},"etf"),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"search",description:"Search for ETFs. An empty query returns the full list of ETFs from the provider.",url:"etf/search",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"sectors",description:"ETF Sector weighting.",url:"etf/sectors",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"holdings_performance",description:"Get the ETF holdings performance.",url:"etf/holdings_performance",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"price_performance",description:"Price performance as a return, over different periods.",url:"etf/price_performance",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"holdings_date",description:"Get the holdings filing date for an individual ETF.",url:"etf/holdings_date",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"holdings",description:"Get the holdings for an individual ETF.",url:"etf/holdings",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"info",description:"ETF Information Overview.",url:"etf/info",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"countries",description:"ETF Country weighting.",url:"etf/countries",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);