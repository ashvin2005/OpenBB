"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56280],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=i(a),s=r,g=u["".concat(c,".").concat(s)]||u[s]||m[s]||l;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=s;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[u]="string"==typeof e?e:r,o[1]=d;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},36567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={title:"calendar",description:"The Economic Calendar provides information on economic events and data. Use the OBB Python function `obb.economy.calendar()` to retrieve economic calendar data. The function accepts parameters such as start date, end date, provider, country, importance, and group. It returns a list of economic calendar data, including the date, event, reference, source, actual value, previous value, consensus value, and forecast value. The data can be filtered by provider such as FMP, Nasdaq, or Trading Economics.",keywords:["economic calendar","python obb.economy.calendar","parameters","start date","end date","provider","country","importance","group","returns","data","date","event","reference","source","source url","actual","previous","consensus","forecast","url","currency","unit","change","change percent","updated at","created at","description"]},o=void 0,d={unversionedId:"excel/reference/economy/calendar",id:"excel/reference/economy/calendar",title:"calendar",description:"The Economic Calendar provides information on economic events and data. Use the OBB Python function `obb.economy.calendar()` to retrieve economic calendar data. The function accepts parameters such as start date, end date, provider, country, importance, and group. It returns a list of economic calendar data, including the date, event, reference, source, actual value, previous value, consensus value, and forecast value. The data can be filtered by provider such as FMP, Nasdaq, or Trading Economics.",source:"@site/content/excel/reference/economy/calendar.md",sourceDirName:"excel/reference/economy",slug:"/excel/reference/economy/calendar",permalink:"/excel/reference/economy/calendar",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/economy/calendar.md",tags:[],version:"current",lastUpdatedBy:"minhhoang1023",lastUpdatedAt:1705489831,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"calendar",description:"The Economic Calendar provides information on economic events and data. Use the OBB Python function `obb.economy.calendar()` to retrieve economic calendar data. The function accepts parameters such as start date, end date, provider, country, importance, and group. It returns a list of economic calendar data, including the date, event, reference, source, actual value, previous value, consensus value, and forecast value. The data can be filtered by provider such as FMP, Nasdaq, or Trading Economics.",keywords:["economic calendar","python obb.economy.calendar","parameters","start date","end date","provider","country","importance","group","returns","data","date","event","reference","source","source url","actual","previous","consensus","forecast","url","currency","unit","change","change percent","updated at","created at","description"]},sidebar:"tutorialSidebar",previous:{title:"real",permalink:"/excel/reference/economy/gdp/real"},next:{title:"cpi",permalink:"/excel/reference/economy/cpi"}},c={},i=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],p={toc:i},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Economic Calendar."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.ECONOMY.CALENDAR([start_date];[end_date];[provider];[country];[importance];[group])\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.ECONOMY.CALENDAR()\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"End date of the data, in YYYY-MM-DD format."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Options: fmp, tradingeconomics, defaults to fmp."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"Country of the event (provider: tradingeconomics)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"importance"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Importance of the event. (provider: tradingeconomics)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Grouping of events (provider: tradingeconomics)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"return-data"},"Return Data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"Country of event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"Event name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reference"),(0,r.kt)("td",{parentName:"tr",align:null},"Abbreviated period for which released data refers to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"Source of the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceurl"),(0,r.kt)("td",{parentName:"tr",align:null},"Source URL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actual"),(0,r.kt)("td",{parentName:"tr",align:null},"Latest released value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"previous"),(0,r.kt)("td",{parentName:"tr",align:null},"Value for the previous period after the revision (if revision is applicable).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consensus"),(0,r.kt)("td",{parentName:"tr",align:null},"Average forecast among a representative group of economists.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forecast"),(0,r.kt)("td",{parentName:"tr",align:null},"Trading Economics projections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"Trading Economics URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"importance"),(0,r.kt)("td",{parentName:"tr",align:null},"Importance of the event. 1-Low, 2-Medium, 3-High")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currency"),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unit"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit of the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change"),(0,r.kt)("td",{parentName:"tr",align:null},"Value change since previous. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"change_percent"),(0,r.kt)("td",{parentName:"tr",align:null},"Percentage change since previous. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"updated_at"),(0,r.kt)("td",{parentName:"tr",align:null},"Last updated timestamp. (provider: fmp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created_at"),(0,r.kt)("td",{parentName:"tr",align:null},"Created at timestamp. (provider: fmp)")))))}m.isMDXComponent=!0}}]);