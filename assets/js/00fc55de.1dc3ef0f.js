"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5971],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,u=p["".concat(s,".").concat(f)]||p[f]||m[f]||n;return r?o.createElement(u,l(l({ref:t},d),{},{components:r})):o.createElement(u,l({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<n;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(39960),a=r(86010),n=r(67294),l=r(16550);function i(e){let{title:t,url:r,description:i,command:s}=e;const{pathname:c}=(0,l.TH)(),d=c.replace(/\/v\d+/,"");return n.createElement(o.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},98818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=r(87462),a=(r(67294),r(3905)),n=r(62872);const l={},i="darkpool",s={unversionedId:"bot/reference/telegram/darkpool/index",id:"bot/reference/telegram/darkpool/index",title:"darkpool",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/darkpool/index.mdx",sourceDirName:"bot/reference/telegram/darkpool",slug:"/bot/reference/telegram/darkpool/",permalink:"/bot/reference/telegram/darkpool/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/darkpool/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705602981,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tvl",permalink:"/bot/reference/telegram/crypto/tvl"},next:{title:"allblocks",permalink:"/bot/reference/telegram/darkpool/allblocks"}},c={},d=[],p={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"darkpool"},"darkpool"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(n.Z,{title:"allblocks",description:"The command allows the user to retrieve the last 15 block trades of a given security. This command will provide a...",url:"/bot/reference/telegram/darkpool/allblocks",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"alldp",description:"This command allows the user to retrieve the last 15 darkpool trades for the specified stock ticker. A darkpool...",url:"/bot/reference/telegram/darkpool/alldp",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"allprints",description:"This command retrieves the Last 15 Combination of Dark Pool and Blocks for a given ticker symbol. This can be...",url:"/bot/reference/telegram/darkpool/allprints",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"bigprintsdp",description:"This command will retrieve the largest combination of dark pool and block trades over a specified amount of days....",url:"/bot/reference/telegram/darkpool/bigprintsdp",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"levels",description:"This command allows the user to retrieve the Biggest Levels for All Prints over the last x days for the given...",url:"/bot/reference/telegram/darkpool/levels",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"sectors",description:"This command allows the user to retrieve a summary of all prints by % of MarketCap by Sector over the last x...",url:"/bot/reference/telegram/darkpool/sectors",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"summary",description:"This command retrieves a summary of all the prints by percentage of MarketCap over the last x days, sorted by...",url:"/bot/reference/telegram/darkpool/summary",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"topsum",description:"This command allows the user to retrieve total block and dark pool data summary. It sums all darkpool prints and...",url:"/bot/reference/telegram/darkpool/topsum",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);