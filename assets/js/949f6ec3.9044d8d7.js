"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},77908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const i={title:"cdf",description:"This page provides documentation about the 'cdf' command in Python, which is a cumulative distribution function without any parameters. Examples of usage and export of dataframe data to csv, json, or xlsx file are given.",keywords:["cdf","cumulative distribution function","parameterless command","export dataframe","csv","json","xlsx","help"]},c=void 0,l={unversionedId:"terminal/reference/economy/qa/cdf",id:"terminal/reference/economy/qa/cdf",title:"cdf",description:"This page provides documentation about the 'cdf' command in Python, which is a cumulative distribution function without any parameters. Examples of usage and export of dataframe data to csv, json, or xlsx file are given.",source:"@site/content/terminal/reference/economy/qa/cdf.md",sourceDirName:"terminal/reference/economy/qa",slug:"/terminal/reference/economy/qa/cdf",permalink:"/terminal/reference/economy/qa/cdf",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/qa/cdf.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1701462427,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"cdf",description:"This page provides documentation about the 'cdf' command in Python, which is a cumulative distribution function without any parameters. Examples of usage and export of dataframe data to csv, json, or xlsx file are given.",keywords:["cdf","cumulative distribution function","parameterless command","export dataframe","csv","json","xlsx","help"]},sidebar:"tutorialSidebar",previous:{title:"bw",permalink:"/terminal/reference/economy/qa/bw"},next:{title:"cusum",permalink:"/terminal/reference/economy/qa/cusum"}},s={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"economy /qa/cdf - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Cumulative distribution function"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"cdf\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This command has no parameters"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"optional arguments:\n  --export {csv,json,xlsx}\n                        Export dataframe data to csv,json,xlsx file (default: )\n  -h, --help            show this help message (default: False)\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154306055-cb3bb1ef-0e61-40c9-bf51-d095bed8dc1b.png",alt:"cdf"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);