"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45611],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},5288:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const i={title:"lcsc",description:"This is a documentation page for the 'lcsc' function which displays Luna circulating supply changes. The function sources its data from Smartstake.io. Instructions are provided on obtaining the required key token from Smartstake.io alongside usage and parameters information.",keywords:["lcsc","Luna circulating supply","Smartstake.io","key token","Inspect tool","Fetch/XHR tab","listData","history","dayCount","URL extraction","parameters","range"]},l=void 0,c={unversionedId:"terminal/reference/crypto/defi/lcsc",id:"terminal/reference/crypto/defi/lcsc",title:"lcsc",description:"This is a documentation page for the 'lcsc' function which displays Luna circulating supply changes. The function sources its data from Smartstake.io. Instructions are provided on obtaining the required key token from Smartstake.io alongside usage and parameters information.",source:"@site/content/terminal/reference/crypto/defi/lcsc.md",sourceDirName:"terminal/reference/crypto/defi",slug:"/terminal/reference/crypto/defi/lcsc",permalink:"/terminal/reference/crypto/defi/lcsc",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/defi/lcsc.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1701462427,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"lcsc",description:"This is a documentation page for the 'lcsc' function which displays Luna circulating supply changes. The function sources its data from Smartstake.io. Instructions are provided on obtaining the required key token from Smartstake.io alongside usage and parameters information.",keywords:["lcsc","Luna circulating supply","Smartstake.io","key token","Inspect tool","Fetch/XHR tab","listData","history","dayCount","URL extraction","parameters","range"]},sidebar:"tutorialSidebar",previous:{title:"gdapps",permalink:"/terminal/reference/crypto/defi/gdapps"},next:{title:"ldapps",permalink:"/terminal/reference/crypto/defi/ldapps"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"crypto /defi/lcsc - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display Luna circulating supply changes stats. ","[Source: Smartstake.io]"," Follow these steps to get the key token: 1. Head to ",(0,a.kt)("a",{parentName:"p",href:"https://terra.smartstake.io/"},"https://terra.smartstake.io/")," 2. Right click on your browser and choose Inspect 3. Select Network tab (by clicking on the expand button next to Source tab) 4. Go to Fetch/XHR tab, and refresh the page 5. Get the option looks similar to the following: ",(0,a.kt)("inlineCode",{parentName:"p"},"listData?type=history&dayCount=30")," 6. Extract the key and token out of the URL"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"lcsc [-d DAYS]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"days"),(0,a.kt)("td",{parentName:"tr",align:null},"-d  --days"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of days to display. Default: 30 days"),(0,a.kt)("td",{parentName:"tr",align:null},"30"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"range(1, 1000)")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);