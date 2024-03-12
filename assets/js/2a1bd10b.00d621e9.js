"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12104],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||h[f]||n;return r?o.createElement(m,s(s({ref:t},l),{},{components:r})):o.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<n;d++)s[d]=r[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(39960),a=r(86010),n=r(67294),s=r(16550);function i(e){let{title:t,url:r,description:i,command:c}=e;const{pathname:d}=(0,s.TH)(),l=d.replace(/\/v\d+/,"");return n.createElement(o.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:l.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":l.startsWith("/sdk")||l.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":l.startsWith("/bot"),header_docs:!(l.startsWith("/terminal")||l.startsWith("/sdk")||l.startsWith("/platform")||l.startsWith("/bot"))}),to:r},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},55993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=r(87462),a=(r(67294),r(3905)),n=r(62872);const s={},i="short_data",c={unversionedId:"bot/reference/discord/short_data/index",id:"bot/reference/discord/short_data/index",title:"short_data",description:"<ReferenceCard",source:"@site/content/bot/reference/discord/short_data/index.mdx",sourceDirName:"bot/reference/discord/short_data",slug:"/bot/reference/discord/short_data/",permalink:"/bot/reference/discord/short_data/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/short_data/index.mdx",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"technical",permalink:"/bot/reference/discord/screeners/technical"},next:{title:"borrowed",permalink:"/bot/reference/discord/short_data/borrowed"}},d={},l=[],p={toc:l},h="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"short_data"},"short_data"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(n.Z,{title:"borrowed",description:"This command allows the user to view the history of borrowed shares available and fees associated with the stock...",url:"/bot/reference/discord/short_data/borrowed",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"hsi",description:"This command retrieves the top high short interest stocks over a 20% ratio. This information can let an investor...",url:"/bot/reference/discord/short_data/hsi",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"shortrate",description:"This command allows the user to retrieve the Display Short Shares spot borrow rate from Interactive Brokers for...",url:"/bot/reference/discord/short_data/shortrate",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"shortvol",description:"This command allows the user to retrieve a graph of the 30 day history of the short volume versus the total...",url:"/bot/reference/discord/short_data/shortvol",mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"topshortvol",description:"This command allows the user to retrieve the Top 15 Short Interest Stocks per Finra. It's typically measured as a...",url:"/bot/reference/discord/short_data/topshortvol",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);