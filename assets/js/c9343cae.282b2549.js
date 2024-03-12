"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),d=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(a.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),u=n,m=p["".concat(a,".").concat(u)]||p[u]||f[u]||i;return r?o.createElement(m,c(c({ref:t},l),{},{components:r})):o.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=u;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[p]="string"==typeof e?e:n,c[1]=s;for(var d=2;d<i;d++)c[d]=r[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(39960),n=r(86010),i=r(67294),c=r(16550);function s(e){let{title:t,url:r,description:s,command:a}=e;const{pathname:d}=(0,c.TH)(),l=d.replace(/\/v\d+/,"");return i.createElement(o.Z,{className:(0,n.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk")||l.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),s?i.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},s):null)}},70616:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var o=r(87462),n=(r(67294),r(3905)),i=r(62872);const c={},s="OpenBB Discord Reference",a={unversionedId:"bot/reference/discord/index",id:"bot/reference/discord/index",title:"OpenBB Discord Reference",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/index.mdx",sourceDirName:"bot/reference/discord",slug:"/bot/reference/discord/",permalink:"/bot/reference/discord/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/index.mdx",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Server",permalink:"/bot/usage/customizing/server"},next:{title:"alerts",permalink:"/bot/reference/discord/alerts/"}},d={},l=[],p={toc:l},f="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"openbb-discord-reference"},"OpenBB Discord Reference"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"alerts",description:"create delete list update",url:"/bot/reference/discord/alerts",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"autopost",description:"add list remove",url:"/bot/reference/discord/autopost",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"charts",description:"c15m c3m c5m cc cd chart chartfib chartsr cm cw",url:"/bot/reference/discord/charts",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"crypto",description:"bigprints bio compfees fees ir prints top tvl chart table",url:"/bot/reference/discord/crypto",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"darkpool",description:"allblocks alldp allprints bigprints levels sectors summary topsum",url:"/bot/reference/discord/darkpool",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"discovery",description:"arktrades contracts fgindex halts holidays house ipolist senate splits trendingst wsb",url:"/bot/reference/discord/discovery",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"duedilligence",description:"ah analyst bio customer divinfo earnings ermove est financials insiders instholdings nexter pm pt sec splits supplier ytd",url:"/bot/reference/discord/duedilligence",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"economy",description:"calendar commodities currencies fedrates glbonds indices revrepo usbonds yieldcurve",url:"/bot/reference/discord/economy",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"etf",description:"holdings tops",url:"/bot/reference/discord/etf",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"flow",description:"bigflow day opening prem sectors sumday sumexp summary sumtop sumweek unu weekly",url:"/bot/reference/discord/flow",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"fun",description:"8ball flip urban",url:"/bot/reference/discord/fun",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"general",description:"futures heatchart heatmap markets news quote ta watchlist",url:"/bot/reference/discord/general",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"government",description:"contracts house senate",url:"/bot/reference/discord/government",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"info",description:"about serverid stats support",url:"/bot/reference/discord/info",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"nft",description:"chart collection top",url:"/bot/reference/discord/nft",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"options",description:"chains equitypc gamma highiv hist indexpc info itm maxpain oi oichart smile stats topoi topoichange topstrikevol topvol topvoletf unu uoastock vol vsurf",url:"/bot/reference/discord/options",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"pop",description:"1d 1hr",url:"/bot/reference/discord/pop",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"screeners",description:"ah ah_all all pm pm_all technical",url:"/bot/reference/discord/screeners",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"short_data",description:"borrowed hsi shortrate shortvol topshortvol",url:"/bot/reference/discord/short_data",mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);