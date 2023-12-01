"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return r?i.createElement(f,a(a({ref:t},d),{},{components:r})):i.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>c});var i=r(39960),n=r(86010),o=r(67294),a=r(16550);function c(e){let{title:t,url:r,description:c,command:l}=e;const{pathname:s}=(0,a.TH)(),d=s.replace(/\/v\d+/,"");return o.createElement(i.Z,{className:(0,n.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),c?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},54753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=r(87462),n=(r(67294),r(3905)),o=r(62872);const a={},c="duediligence",l={unversionedId:"bot/reference/telegram/duediligence/index",id:"bot/reference/telegram/duediligence/index",title:"duediligence",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/duediligence/index.mdx",sourceDirName:"bot/reference/telegram/duediligence",slug:"/bot/reference/telegram/duediligence/",permalink:"/bot/reference/telegram/duediligence/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/duediligence/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1701462427,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"wsb",permalink:"/bot/reference/telegram/discovery/wsb"},next:{title:"ah",permalink:"/bot/reference/telegram/duediligence/ah"}},s={},d=[],m={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"duediligence"},"duediligence"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(o.Z,{title:"ah",description:"This command allows the user to retrieve afterhours data for a given stock ticker. The data retrieved will...",url:"/bot/reference/telegram/duediligence/ah",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"analyst",description:"This command allows the user to retrieve analyst recommendations for a given stock ticker.",url:"/bot/reference/telegram/duediligence/analyst",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"bio_stocks",description:"This command retrieves a stock's company information and displays it to the user. It takes a stock ticker as an...",url:"/bot/reference/telegram/duediligence/bio_stocks",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"customer",description:"This command allows the user to display customers of the company using the given symbol.",url:"/bot/reference/telegram/duediligence/customer",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"divinfo",description:"This command retrieves dividend information for a given stock. The data includes dividend rate, yield, and ex-div...",url:"/bot/reference/telegram/duediligence/divinfo",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"earnings",description:"This command allows the user to retrieve the expected earnings for the given business day. The displayed earnings...",url:"/bot/reference/telegram/duediligence/earnings",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"ermove",description:"This command allows the user to retrieve the implied move for a stock based on the current option prices. The...",url:"/bot/reference/telegram/duediligence/ermove",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"financials",description:"This command will retrieve the financials of the company with the given ticker which includes total assets, cash,...",url:"/bot/reference/telegram/duediligence/financials",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"insiders",description:"This command allows the user to retrieve the 15 most recent insider transactions for a given stock. It will...",url:"/bot/reference/telegram/duediligence/insiders",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"instholdings",description:"This command allows the user to retrieve the top 15 institutional holdings for a given stock. This list is...",url:"/bot/reference/telegram/duediligence/instholdings",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"nexter",description:"This command will retrieve the next earnings date for the given stock ticker symbol.",url:"/bot/reference/telegram/duediligence/nexter",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"pm",description:"This command allows the user to retrieve premarket data for a given stock ticker. It will fetch the latest price,...",url:"/bot/reference/telegram/duediligence/pm",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"pt",description:"This command allows the user to retrieve a chart with price targets for the specified ticker. The chart will...",url:"/bot/reference/telegram/duediligence/pt",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"sec",description:"This command allows the user to retrieve the most recent SEC filings related to the specified ticker symbol. The...",url:"/bot/reference/telegram/duediligence/sec",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"splits",description:"This command retrieves a list of recent stock splits for a given ticker. This command is useful for tracking the...",url:"/bot/reference/telegram/duediligence/splits",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"supplier",description:"This command allows users to retrieve the list of suppliers associated with the company with the given ticker.",url:"/bot/reference/telegram/duediligence/supplier",mdxType:"ReferenceCard"}),(0,n.kt)(o.Z,{title:"ytd",description:"This command allows the user to retrieve the stock's year-to-date performance for a particular ticker symbol. It...",url:"/bot/reference/telegram/duediligence/ytd",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);