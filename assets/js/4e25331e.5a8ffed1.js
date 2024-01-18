"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(35742);function l(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},33224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const i={title:"news",description:"This page provides usage details for a news aggregation code from CryptoPanic, involving handy functions such as data filtering, sorting, region based displaying and more. Learn how to get the crypto news you need quickly and efficiently.",keywords:["cryptopanic","crypto news","news aggregation","data filtering","region based","sorted data","bullish news","bearish news","crypto media","cryptocurrency"]},o=void 0,s={unversionedId:"terminal/reference/crypto/ov/news",id:"terminal/reference/crypto/ov/news",title:"news",description:"This page provides usage details for a news aggregation code from CryptoPanic, involving handy functions such as data filtering, sorting, region based displaying and more. Learn how to get the crypto news you need quickly and efficiently.",source:"@site/content/terminal/reference/crypto/ov/news.md",sourceDirName:"terminal/reference/crypto/ov",slug:"/terminal/reference/crypto/ov/news",permalink:"/terminal/reference/crypto/ov/news",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/ov/news.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705602981,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{title:"news",description:"This page provides usage details for a news aggregation code from CryptoPanic, involving handy functions such as data filtering, sorting, region based displaying and more. Learn how to get the crypto news you need quickly and efficiently.",keywords:["cryptopanic","crypto news","news aggregation","data filtering","region based","sorted data","bullish news","bearish news","crypto media","cryptocurrency"]},sidebar:"tutorialSidebar",previous:{title:"markets",permalink:"/terminal/reference/crypto/ov/markets"},next:{title:"pairs",permalink:"/terminal/reference/crypto/ov/pairs"}},p={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"crypto /ov/news - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display recent news from CryptoPanic aggregator platform. ","[Source: https://cryptopanic.com/]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"news [-l LIMIT] [-k {news,media}] [--filter {rising,hot,bullish,bearish,important,saved,lol}] [-r {en,de,es,fr,nl,it,pt,ru}] [-s {published_at,domain,title,negative_votes,positive_votes}] [--reverse] [-u]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,a.kt)("td",{parentName:"tr",align:null},"display N number records"),(0,a.kt)("td",{parentName:"tr",align:null},"20"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kind"),(0,a.kt)("td",{parentName:"tr",align:null},"-k  --kind"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter by category of news. Available values: news or media."),(0,a.kt)("td",{parentName:"tr",align:null},"news"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"news, media")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filter"),(0,a.kt)("td",{parentName:"tr",align:null},"--filter"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter by kind of news. One from list: rising"),(0,a.kt)("td",{parentName:"tr",align:null},"hot"),(0,a.kt)("td",{parentName:"tr",align:null},"bullish"),(0,a.kt)("td",{parentName:"tr",align:null},"bearish")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"region"),(0,a.kt)("td",{parentName:"tr",align:null},"-r  --region"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch), es (Espa\xf1ol), fr (Fran\xe7ais), it (Italiano), pt (Portugu\xeas), ru (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)"),(0,a.kt)("td",{parentName:"tr",align:null},"en"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"en, de, es, fr, nl, it, pt, ru")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sortby"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --sortby"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort by given column. Default: published_at"),(0,a.kt)("td",{parentName:"tr",align:null},"published_at"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"published_at, domain, title, negative_votes, positive_votes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"--reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"urls"),(0,a.kt)("td",{parentName:"tr",align:null},"-u  --urls"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to show urls column."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);