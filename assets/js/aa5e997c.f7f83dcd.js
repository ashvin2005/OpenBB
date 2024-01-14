"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69448],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(39960),a=t(86010),o=t(67294),i=t(16550),c=t(48334);function l(e){let{title:r,url:t,description:l,command:d}=e;const{pathname:s}=(0,i.TH)(),m=s.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&o.createElement(c.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},1825:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const i={},c="calendar",l={unversionedId:"excel/reference/equity/calendar/index",id:"excel/reference/equity/calendar/index",title:"calendar",description:"Commands",source:"@site/content/excel/reference/equity/calendar/index.mdx",sourceDirName:"excel/reference/equity/calendar",slug:"/excel/reference/equity/calendar/",permalink:"/excel/reference/equity/calendar/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/calendar/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705199383,formattedLastUpdatedAt:"Jan 14, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"quote",permalink:"/excel/reference/equity/price/quote"},next:{title:"dividend",permalink:"/excel/reference/equity/calendar/dividend"}},d={},s=[{value:"Commands",id:"commands",level:3}],m={toc:s},p="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"calendar"},"calendar"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"earnings",description:"Upcoming and Historical earnings calendar.",url:"calendar/earnings",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"splits",description:"Calendar Splits. Show Stock Split Calendar.",url:"calendar/splits",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"ipo",description:"Upcoming and Historical IPO Calendar.",url:"calendar/ipo",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"dividend",description:"Upcoming and Historical Dividend Calendar.",url:"calendar/dividend",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);