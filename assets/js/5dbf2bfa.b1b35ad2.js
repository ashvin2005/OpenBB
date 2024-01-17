"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78920],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,u=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return r?o.createElement(u,c(c({ref:t},l),{},{components:r})):o.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:n,c[1]=a;for(var d=2;d<i;d++)c[d]=r[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(39960),n=r(86010),i=r(67294),c=r(16550);function a(e){let{title:t,url:r,description:a,command:s}=e;const{pathname:d}=(0,c.TH)(),l=d.replace(/\/v\d+/,"");return i.createElement(o.Z,{className:(0,n.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk")||l.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),a?i.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},a):null)}},28901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905)),i=r(62872);const c={},a="crypto",s={unversionedId:"bot/reference/discord/crypto/index",id:"bot/reference/discord/crypto/index",title:"crypto",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/crypto/index.mdx",sourceDirName:"bot/reference/discord/crypto",slug:"/bot/reference/discord/crypto/",permalink:"/bot/reference/discord/crypto/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/crypto/index.mdx",tags:[],version:"current",lastUpdatedBy:"minhhoang1023",lastUpdatedAt:1705489831,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cw",permalink:"/bot/reference/discord/charts/cw"},next:{title:"bigprints",permalink:"/bot/reference/discord/crypto/bigprints"}},d={},l=[],p={toc:l},f="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"crypto"},"crypto"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"defi",description:"chart table",url:"/bot/reference/discord/crypto/defi",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"bigprints",description:"This command allows the user to retrieve the last 15 large prints for a given cryptocurrency pair. The command...",url:"/bot/reference/discord/crypto/bigprints",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"bio",description:"This command allows the user to retrieve fundamental information about a crypto, such as its current price,...",url:"/bot/reference/discord/crypto/bio",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"compfees",description:"This command allows users to retrieve the Protocol fees over time for the given project.",url:"/bot/reference/discord/crypto/compfees",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"fees",description:"This will provide the user with the fee rate of the top crypto protocols on a specified date, allowing the user...",url:"/bot/reference/discord/crypto/fees",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"ir",description:"This command allows the user to retrieve the issuance rate of the top crypto protocols. The issuance rate is the...",url:"/bot/reference/discord/crypto/ir",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"prints",description:"This command allows the user to retrieve the Last 15 Crypto Prints over the last 24 hours for the specified coin....",url:"/bot/reference/discord/crypto/prints",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"top",description:"This command will retrieve the top cryptocurrencies, ranked by market capitalization, allowing the user to...",url:"/bot/reference/discord/crypto/top",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"tvl",description:"This command allows users to retrieve historical TVL (Total Value Locked) data for any given protocol. It...",url:"/bot/reference/discord/crypto/tvl",mdxType:"ReferenceCard"})))}m.isMDXComponent=!0}}]);