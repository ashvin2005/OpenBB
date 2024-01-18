"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9186],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return t?n.createElement(f,o(o({ref:r},d),{},{components:t})):n.createElement(f,o({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(39960),a=t(86010),i=t(67294),o=t(16550),l=t(48334);function s(e){let{title:r,url:t,description:s,command:c}=e;const{pathname:d}=(0,o.TH)(),p=d.replace(/\/v\d+/,""),m=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return i.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":p.startsWith("/excel"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:t},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&i.createElement(l.Z,{className:"ml-auto mr-4"})),s?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},77139:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),i=t(26515);const o={},l="equity",s={unversionedId:"platform/reference/equity/index",id:"platform/reference/equity/index",title:"equity",description:"Menus",source:"@site/content/platform/reference/equity/index.mdx",sourceDirName:"platform/reference/equity",slug:"/platform/reference/equity/",permalink:"/platform/reference/equity/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705602981,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sp500_multiples",permalink:"/platform/reference/index/sp500_multiples"},next:{title:"discovery",permalink:"/platform/reference/equity/discovery/"}},c={},d=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],p={toc:d},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"equity"},"equity"),(0,a.kt)("h3",{id:"menus"},"Menus"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"Discovery",description:"undervalued_growth, filings, losers, growth_tech, active, gainers, upcoming_release_days, undervalued_large_caps,...",url:"/platform/reference/equity/discovery",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Ownership",description:"insider_trading, institutional, major_holders, share_statistics",url:"/platform/reference/equity/ownership",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Fundamental",description:"reported_financials, filings, multiples, revenue_per_geography, cash_growth, latest_attributes, dividends,...",url:"/platform/reference/equity/fundamental",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Darkpool",description:"otc",url:"/platform/reference/equity/darkpool",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Price",description:"quote, historical, nbbo, performance",url:"/platform/reference/equity/price",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Calendar",description:"earnings, splits, ipo, dividend",url:"/platform/reference/equity/calendar",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Shorts",description:"short_interest, short_volume, fails_to_deliver",url:"/platform/reference/equity/shorts",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Estimates",description:"consensus, historical, price_target",url:"/platform/reference/equity/estimates",mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Compare",description:"peers",url:"/platform/reference/equity/compare",mdxType:"ReferenceCard"})),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"Market Snapshots",description:"Get a current, complete, market snapshot",url:"/platform/reference/equity/market_snapshots",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Profile",description:"Equity Info",url:"/platform/reference/equity/profile",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Screener",description:"Equity Screen",url:"/platform/reference/equity/screener",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Search",description:"Equity Search",url:"/platform/reference/equity/search",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);