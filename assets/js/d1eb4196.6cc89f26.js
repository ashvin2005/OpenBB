"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16941],{3905:(t,e,a)=>{a.d(e,{Zo:()=>g,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),d=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},g=function(t){var e=d(t.components);return r.createElement(m.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,g=p(t,["components","mdxType","originalType","parentName"]),o=d(a),s=n,N=o["".concat(m,".").concat(s)]||o[s]||k[s]||i;return a?r.createElement(N,l(l({ref:e},g),{},{components:a})):r.createElement(N,l({ref:e},g))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=s;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[o]="string"==typeof t?t:n,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(67294),n=a(35742);function i(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},50240:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>m,toc:()=>g});var r=a(87462),n=(a(67294),a(3905)),i=a(88828);const l={title:"Forex",description:"This guide introduces the Forex (FX) menu, in the OpenBB Terminal, and provides examples for use.  Features in this menu include historical prices and forward rates.  It also provides entry points to the QA, TA, and Forecast menus.",keywords:["Forex","currency trading","currency pairs","USD/EUR","JPY/GBP","quote","candle","forward rates","fwd","technical analysis","forecasting","Oanda","historical data","real-time currency exchange","terminal","quantitative analysis","seasonality"]},p=void 0,m={unversionedId:"terminal/menus/forex",id:"terminal/menus/forex",title:"Forex",description:"This guide introduces the Forex (FX) menu, in the OpenBB Terminal, and provides examples for use.  Features in this menu include historical prices and forward rates.  It also provides entry points to the QA, TA, and Forecast menus.",source:"@site/content/terminal/menus/forex.md",sourceDirName:"terminal/menus",slug:"/terminal/menus/forex",permalink:"/terminal/menus/forex",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/forex.md",tags:[],version:"current",lastUpdatedBy:"minhhoang1023",lastUpdatedAt:1705489831,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"Forex",description:"This guide introduces the Forex (FX) menu, in the OpenBB Terminal, and provides examples for use.  Features in this menu include historical prices and forward rates.  It also provides entry points to the QA, TA, and Forecast menus.",keywords:["Forex","currency trading","currency pairs","USD/EUR","JPY/GBP","quote","candle","forward rates","fwd","technical analysis","forecasting","Oanda","historical data","real-time currency exchange","terminal","quantitative analysis","seasonality"]},sidebar:"tutorialSidebar",previous:{title:"Forecast",permalink:"/terminal/menus/forecast"},next:{title:"Futures",permalink:"/terminal/menus/futures"}},d={},g=[{value:"Usage",id:"usage",level:2},{value:"Load",id:"load",level:3},{value:"Quote",id:"quote",level:3},{value:"FWD",id:"fwd",level:3}],o={toc:g},k="wrapper";function s(t){let{components:e,...a}=t;return(0,n.kt)(k,(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"Forex - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"The Forex menu includes features for historical prices, forward rates, and real-time exchange rates.  It also provides entry points to the ",(0,n.kt)("a",{parentName:"p",href:"/terminal/menus/common/ta"},(0,n.kt)("inlineCode",{parentName:"a"},"/ta/")),", ",(0,n.kt)("a",{parentName:"p",href:"/terminal/menus/common/qa"},(0,n.kt)("inlineCode",{parentName:"a"},"/qa")),", and ",(0,n.kt)("a",{parentName:"p",href:"/terminal/menus/forecast"},(0,n.kt)("inlineCode",{parentName:"a"},"/forecast"))," menus."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The Forex menu is entered by typing ",(0,n.kt)("inlineCode",{parentName:"p"},"forex"),", from the Main menu, or with the absolute path:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/forex\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/83356fc6-9966-4da3-9bed-64ae7e42ecd0",alt:"Screenshot 2023-11-03 at 12 26 41\u202fPM"})),(0,n.kt)("h3",{id:"load"},"Load"),(0,n.kt)("p",null,'The first step will be to load a pair of currencies.  The pairs are entered as a six-letter symbol, with the former of the pair being "from".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"load JPYUSD\n")),(0,n.kt)("p",null,"Inversely:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"load USDJPY\n")),(0,n.kt)("h3",{id:"quote"},"Quote"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"quote")," from YahooFinance displays the last price and a timestamp when it was refreshed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/forex/load JPYUSD/quote\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"Quote for JPY/USD\n\nLast refreshed : 2023-11-03 19:30:00\nLast value     : 0.006694381590932608\n")),(0,n.kt)("p",null,"From AlphaVantage, a table is returned that includes a bid and ask."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"quote --source AlphaVantage\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Realtime Currency Exchange Rate"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"From_Currency Code"),(0,n.kt)("td",{parentName:"tr",align:"left"},"JPY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"From_Currency Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Japanese Yen")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"To_Currency Code"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"To_Currency Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"United States Dollar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Exchange Rate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.00669000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Last Refreshed"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-03 19:34:01")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Time Zone"),(0,n.kt)("td",{parentName:"tr",align:"left"},"UTC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Bid Price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.00668900")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Ask Price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"0.00669000")))),(0,n.kt)("h3",{id:"fwd"},"FWD"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"fwd")," command gets a table with the term structure of a currency pair."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/forex/load USDJPY/fwd\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Expiration"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Ask"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Bid"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Mid"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Points"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Overnight"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.397"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.368"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.383"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Tomorrow Next"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.397"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.368"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.382"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-2.33")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Spot Next"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.397"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.368"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.382"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-2.325")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"One Week"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.395"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.366"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.381"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-16.315")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Two Weeks"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.394"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.365"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.379"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-32.59")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Three Weeks"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.392"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.363"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.378"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-48.89")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"One Month"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.39"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.361"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.375"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-70.1505")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Two Months"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.381"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.352"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.367"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-155.31")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Three Months"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.375"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.346"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.36"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-222.871")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Four Months"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.368"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.339"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.353"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-290.68")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Five Months"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.36"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.331"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.346"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-365.94")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Six Months"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.354"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.325"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.339"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-431.97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Seven Months"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.347"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.318"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.332"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-500.22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Eight Months"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.34"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.311"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.326"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-567.58")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Nine Months"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.334"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.305"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.319"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-630.18")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Ten Months"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.327"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.298"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.313"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-697.4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Eleven Months"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.322"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.293"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.307"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-753.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"One Year"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.316"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.287"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.301"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-812.9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Two Years"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.256"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.227"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.242"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-1408.19")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Three Years"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.204"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.173"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.188"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-1943.13")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Four Years"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.158"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.127"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.142"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-2401.05")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Five Years"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.108"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.077"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.092"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-2904.72")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Six Years"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.08"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.048"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.064"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-3185.9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Seven Years"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.047"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.014"),(0,n.kt)("td",{parentName:"tr",align:"right"},"149.03"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-3522.5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Ten Years"),(0,n.kt)("td",{parentName:"tr",align:"right"},"148.948"),(0,n.kt)("td",{parentName:"tr",align:"right"},"148.912"),(0,n.kt)("td",{parentName:"tr",align:"right"},"148.93"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-4527.5")))))}s.isMDXComponent=!0}}]);