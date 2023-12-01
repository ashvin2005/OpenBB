"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,p=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(p,i(i({ref:t},s),{},{components:r})):n.createElement(p,i({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(39960),a=r(86010),o=r(67294),i=r(16550),d=r(48334);function l(e){let{title:t,url:r,description:l,command:c}=e;const{pathname:s}=(0,i.TH)(),u=s.replace(/\/v\d+/,""),m=!u.includes("/reference")&&!u.includes("/widgets-library/")&&!u.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":u.startsWith("/terminal")||u.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":u.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":u.startsWith("/sdk")||u.startsWith("/platform"),header_docs:!(u.startsWith("/terminal")||u.startsWith("/pro")||u.startsWith("/sdk")||u.startsWith("/platform")||u.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),m&&o.createElement(d.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},36689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),o=r(26515);const i={},d="Mutual Funds",l={unversionedId:"terminal/reference/funds/index",id:"terminal/reference/funds/index",title:"Mutual Funds",description:"Commands",source:"@site/content/terminal/reference/funds/index.mdx",sourceDirName:"terminal/reference/funds",slug:"/terminal/reference/funds/",permalink:"/terminal/reference/funds/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/funds/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1701462427,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"quote",permalink:"/terminal/reference/forex/quote"},next:{title:"alswe",permalink:"/terminal/reference/funds/alswe"}},c={},s=[{value:"Commands",id:"commands",level:3}],u={toc:s},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mutual-funds"},"Mutual Funds"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Alswe",description:"Show allocation of a swedish fund. To get a list of available funds, check the file `avanza_fund_ID.csv`.",url:"/terminal/reference/funds/alswe",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Carbon",description:"Show funds carbon metrcis.",url:"/terminal/reference/funds/carbon",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Country",description:"Set a country for funds.",url:"/terminal/reference/funds/country",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Exclusion",description:"Show funds exclsuion policy.",url:"/terminal/reference/funds/exclusion",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Holdings",description:"Show funds holdings.",url:"/terminal/reference/funds/holdings",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Infoswe",description:"Show fund info of a swedish fund. To get a list of available funds, check the file `avanza_fund_ID.csv`.",url:"/terminal/reference/funds/infoswe",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Load",description:"Load the fund to perform analysis on.",url:"/terminal/reference/funds/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Plot",description:"Plot historical data.",url:"/terminal/reference/funds/plot",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Search",description:"Search mutual funds in selected country",url:"/terminal/reference/funds/search",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Sector",description:"Show funds, index, category sector breakdown.",url:"/terminal/reference/funds/sector",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);