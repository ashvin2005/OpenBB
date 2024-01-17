"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50566],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),s=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=s(e.components);return o.createElement(l.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(t),p=n,u=d["".concat(l,".").concat(p)]||d[p]||f[p]||a;return t?o.createElement(u,c(c({ref:r},m),{},{components:t})):o.createElement(u,c({ref:r},m))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var o=t(39960),n=t(86010),a=t(67294),c=t(16550),i=t(48334);function l(e){let{title:r,url:t,description:l,command:s}=e;const{pathname:m}=(0,c.TH)(),d=m.replace(/\/v\d+/,""),f=!d.includes("/reference")&&!d.includes("/widgets-library/")&&!d.includes("/data_models");return a.createElement(o.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":d.startsWith("/terminal")||d.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":d.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":d.startsWith("/sdk")||d.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":d.startsWith("/excel"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/pro")||d.startsWith("/excel")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),f&&a.createElement(i.Z,{className:"ml-auto mr-4"})),l?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},92620:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var o=t(87462),n=(t(67294),t(3905)),a=t(26515);const c={},i="econometrics",l={unversionedId:"platform/reference/econometrics/index",id:"platform/reference/econometrics/index",title:"econometrics",description:"Commands",source:"@site/content/platform/reference/econometrics/index.mdx",sourceDirName:"platform/reference/econometrics",slug:"/platform/reference/econometrics/",permalink:"/platform/reference/econometrics/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/econometrics/index.mdx",tags:[],version:"current",lastUpdatedBy:"minhhoang1023",lastUpdatedAt:1705489831,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cot_search",permalink:"/platform/reference/regulators/cftc/cot_search"},next:{title:"autocorrelation",permalink:"/platform/reference/econometrics/autocorrelation"}},s={},m=[{value:"Commands",id:"commands",level:3}],d={toc:m},f="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(f,(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"econometrics"},"econometrics"),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(a.Z,{title:"Autocorrelation",description:"Perform Durbin-Watson test for autocorrelation",url:"/platform/reference/econometrics/autocorrelation",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Causality",description:"Perform Granger causality test to determine if X 'causes' y",url:"/platform/reference/econometrics/causality",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Cointegration",description:"Show co-integration between two timeseries using the two step Engle-Granger test",url:"/platform/reference/econometrics/cointegration",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Correlation Matrix",description:"Get the correlation matrix of an input dataset",url:"/platform/reference/econometrics/correlation_matrix",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Ols Regression",description:"Perform OLS regression",url:"/platform/reference/econometrics/ols_regression",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Ols Regression Summary",description:"Perform OLS regression",url:"/platform/reference/econometrics/ols_regression_summary",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Panel Between",description:"Perform a Between estimator regression on panel data",url:"/platform/reference/econometrics/panel_between",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Panel First Difference",description:"Perform a first-difference estimate for panel data",url:"/platform/reference/econometrics/panel_first_difference",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Panel Fixed",description:"One- and two-way fixed effects estimator for panel data",url:"/platform/reference/econometrics/panel_fixed",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Panel Fmac",description:"Fama-MacBeth estimator for panel data",url:"/platform/reference/econometrics/panel_fmac",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Panel Pooled",description:"Perform a Pooled coefficient estimator regression on panel data",url:"/platform/reference/econometrics/panel_pooled",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Panel Random Effects",description:"Perform One-way Random Effects model for panel data",url:"/platform/reference/econometrics/panel_random_effects",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Residual Autocorrelation",description:"Perform Breusch-Godfrey Lagrange Multiplier tests for residual autocorrelation",url:"/platform/reference/econometrics/residual_autocorrelation",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(a.Z,{title:"Unit Root",description:"Perform Augmented Dickey-Fuller unit root test",url:"/platform/reference/econometrics/unit_root",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);