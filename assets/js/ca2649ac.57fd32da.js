"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60033],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(35742);function i(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},8556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),i=r(88828);const o={title:"kurtosis",description:"This page offers comprehensive information on kurtosis - a measure of the 'tailedness' of a probability distribution of a real-valued random variable. Learn about its different measures and how to estimate it from a sample. Try it out with our Python usage guide.",keywords:["kurtosis","probability distribution","real-valued random variable","shape of distribution","theoretical distribution","sample estimation","python usage guide","n_window parameter"]},s=void 0,l={unversionedId:"terminal/reference/economy/qa/kurtosis",id:"terminal/reference/economy/qa/kurtosis",title:"kurtosis",description:"This page offers comprehensive information on kurtosis - a measure of the 'tailedness' of a probability distribution of a real-valued random variable. Learn about its different measures and how to estimate it from a sample. Try it out with our Python usage guide.",source:"@site/content/terminal/reference/economy/qa/kurtosis.md",sourceDirName:"terminal/reference/economy/qa",slug:"/terminal/reference/economy/qa/kurtosis",permalink:"/terminal/reference/economy/qa/kurtosis",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/qa/kurtosis.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"kurtosis",description:"This page offers comprehensive information on kurtosis - a measure of the 'tailedness' of a probability distribution of a real-valued random variable. Learn about its different measures and how to estimate it from a sample. Try it out with our Python usage guide.",keywords:["kurtosis","probability distribution","real-valued random variable","shape of distribution","theoretical distribution","sample estimation","python usage guide","n_window parameter"]},sidebar:"tutorialSidebar",previous:{title:"hist",permalink:"/terminal/reference/economy/qa/hist"},next:{title:"line",permalink:"/terminal/reference/economy/qa/line"}},u={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:m},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"economy /qa/kurtosis - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,'Kurtosis is a measure of the "tailedness" of the probability distribution of a real-valued random variable. Like skewness, kurtosis describes the shape of a probability distribution and there are different ways of quantifying it for a theoretical distribution and corresponding ways of estimating it from a sample from a population. Different measures of kurtosis may have different interpretations.'),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"kurtosis [-w N_WINDOW]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"n_window"),(0,n.kt)("td",{parentName:"tr",align:null},"-w  --window"),(0,n.kt)("td",{parentName:"tr",align:null},"window length"),(0,n.kt)("td",{parentName:"tr",align:null},"14"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154307174-68671146-9551-4c2f-a179-db1d4b20b992.png",alt:"kurtosis"})),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);