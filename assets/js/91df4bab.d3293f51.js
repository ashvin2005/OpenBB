"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10883],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,u=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(u,i(i({ref:t},d),{},{components:r})):n.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(39960),o=r(86010),a=r(67294),i=r(16550);function c(e){let{title:t,url:r,description:c,command:s}=e;const{pathname:l}=(0,i.TH)(),d=l.replace(/\/v\d+/,"");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),a.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),c?a.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},77535:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(62872);const i={},c="nft",s={unversionedId:"bot/reference/discord/nft/index",id:"bot/reference/discord/nft/index",title:"nft",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/nft/index.mdx",sourceDirName:"bot/reference/discord/nft",slug:"/bot/reference/discord/nft/",permalink:"/bot/reference/discord/nft/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/nft/index.mdx",tags:[],version:"current",lastUpdatedBy:"minhhoang1023",lastUpdatedAt:1705489831,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"support",permalink:"/bot/reference/discord/info/support"},next:{title:"chart",permalink:"/bot/reference/discord/nft/chart"}},l={},d=[],f={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nft"},"nft"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"chart",description:"This command allows the user to retrieve the NFT Collection Data related to the specified slug. The chart will...",url:"/bot/reference/discord/nft/chart",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"collection",description:"This command retrieves a collection of Non-Fungible Token (NFT) data associated with the specified slug. It...",url:"/bot/reference/discord/nft/collection",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"top",description:"This command allows users to retrieve the top NFT collections from Ethereum. It provides a list of the most...",url:"/bot/reference/discord/nft/top",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);