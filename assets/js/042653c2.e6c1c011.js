"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5181],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),p=d(a),u=n,g=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return a?r.createElement(g,o(o({ref:e},m),{},{components:a})):r.createElement(g,o({ref:e},m))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(67294),n=a(35742);function i(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},89961:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),i=a(88828);const o={title:"Economy",description:"This documentation page provides detailed information about OpenBB Terminal's Economy Menu. This includes overviews of broad market and country-specific data, querying from databases such as FRED and OECD, and insightful comparisons using stored datasets. A must-read for those to get the most out of macroeconomic data querying.",keywords:["Macroeconomic data","Federal Reserve of St. Louis","FRED","OECD","EconDB","API key","Economy menu","Broad market","Country performance","Databases","Stored datasets","Market data","Economic calendar","Time series data","US Treasury rates","Gross Domestic Product (GDP)","Government debt-to-GDP ratios","Harmonized CPI","Confidence in government surveys","USD Liquidity Index","US Dollar Liquidity Index","Global indices"]},l=void 0,s={unversionedId:"terminal/menus/economy",id:"terminal/menus/economy",title:"Economy",description:"This documentation page provides detailed information about OpenBB Terminal's Economy Menu. This includes overviews of broad market and country-specific data, querying from databases such as FRED and OECD, and insightful comparisons using stored datasets. A must-read for those to get the most out of macroeconomic data querying.",source:"@site/content/terminal/menus/economy.md",sourceDirName:"terminal/menus",slug:"/terminal/menus/economy",permalink:"/terminal/menus/economy",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/economy.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705199383,formattedLastUpdatedAt:"Jan 14, 2024",frontMatter:{title:"Economy",description:"This documentation page provides detailed information about OpenBB Terminal's Economy Menu. This includes overviews of broad market and country-specific data, querying from databases such as FRED and OECD, and insightful comparisons using stored datasets. A must-read for those to get the most out of macroeconomic data querying.",keywords:["Macroeconomic data","Federal Reserve of St. Louis","FRED","OECD","EconDB","API key","Economy menu","Broad market","Country performance","Databases","Stored datasets","Market data","Economic calendar","Time series data","US Treasury rates","Gross Domestic Product (GDP)","Government debt-to-GDP ratios","Harmonized CPI","Confidence in government surveys","USD Liquidity Index","US Dollar Liquidity Index","Global indices"]},sidebar:"tutorialSidebar",previous:{title:"Econometrics",permalink:"/terminal/menus/econometrics"},next:{title:"ETF",permalink:"/terminal/menus/etf"}},d={},m=[{value:"The Economy Menu",id:"the-economy-menu",level:2},{value:"Broad Market",id:"broad-market",level:3},{value:"Country Performance",id:"country-performance",level:3},{value:"Databases",id:"databases",level:3},{value:"Stored Datasets",id:"stored-datasets",level:3},{value:"Examples",id:"examples",level:2},{value:"events",id:"events",level:3},{value:"overview",id:"overview",level:3},{value:"debt",id:"debt",level:3},{value:"usdli",id:"usdli",level:3},{value:"valuation",id:"valuation",level:3},{value:"index",id:"index",level:3},{value:"fred",id:"fred",level:3},{value:"plot",id:"plot",level:3}],p={toc:m},c="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"Economy - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"/economy")," menu provides methods for querying macroeconomic data sets from sources like FRED, OECD, and EconDB.  To get the most out of this menu, sign up for a free API key from the ",(0,n.kt)("a",{parentName:"p",href:"https://fred.stlouisfed.org/"},"Federal Reserve of St. Louis"),", and enter it into the OpenBB Terminal from the ",(0,n.kt)("a",{parentName:"p",href:"/terminal/usage/data/api-keys"},(0,n.kt)("inlineCode",{parentName:"a"},"/keys")," menu"),"."),(0,n.kt)("h2",{id:"the-economy-menu"},"The Economy Menu"),(0,n.kt)("p",null,"The menu is divided into four general sections:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Broad market"),": General headline statistics from the markets today."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Country performance"),": Country-specific data published by the OECD."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Databases"),": Query time series."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Stored datasets"),": Compare and chart multiple time series together.")),(0,n.kt)("p",null,"Each command is listed below, with a short description."),(0,n.kt)("h3",{id:"broad-market"},"Broad Market"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Function Key"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"overview"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Market overview of either indices, bonds or currencies.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"futures"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Futures and commodities overview.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"map"),(0,n.kt)("td",{parentName:"tr",align:"right"},"S&P 500 heat map.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bigmac"),(0,n.kt)("td",{parentName:"tr",align:"right"},"The Economist's Big Mac Index.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"events"),(0,n.kt)("td",{parentName:"tr",align:"right"},"The economic calendar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"edebt"),(0,n.kt)("td",{parentName:"tr",align:"right"},"External debt statitistics for various countries.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"valuation"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Valuation of sectors, industries, and countries for US-listed stocks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"performance"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Performance of sectors, industry, and countries for US-listed stocks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"usdli"),(0,n.kt)("td",{parentName:"tr",align:"right"},"USD Liquidity Index")))),(0,n.kt)("h3",{id:"country-performance"},"Country Performance"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Function Key"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"gdp"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Nominal Gross Domestic Product (GDP).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rgdp"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Real Gross Domestic Product (GDP).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fgdp"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Forecasts of nominal and real Gross Domestic Product (GDP).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"debt"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Government debt-to-GDP ratios.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpi"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Harmonized CPI.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ccpi"),(0,n.kt)("td",{parentName:"tr",align:"right"},"CPI Components.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"balance"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Government tax revenues.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"spending"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Government spending.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"trust"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Confidence in government surveys.")))),(0,n.kt)("h3",{id:"databases"},"Databases"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Function Key"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"macro"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Time series data by country and indicator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"treasury"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Historical US Treasury rates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fred"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Query the FRED.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"index"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Historical daily time series for most major global indices.")))),(0,n.kt)("h3",{id:"stored-datasets"},"Stored Datasets"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Function Key"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"eval"),(0,n.kt)("td",{parentName:"tr",align:"right"},"A method for performing basic ",(0,n.kt)("inlineCode",{parentName:"td"},"eval")," operations on a time series.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"plot"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Plot multiple time series together.")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"This section will demonstrate some basic operations within the menu."),(0,n.kt)("h3",{id:"events"},"events"),(0,n.kt)("p",null,"A morning ritual might begin with checking the economic calendar for the day's - or week's - events.  The ",(0,n.kt)("inlineCode",{parentName:"p"},"events")," command can browse the calendar by country and date.  By default, the current day for all countries will display in a table."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/economy/events\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/236106887-07732390-bee3-44e0-a69f-a71c8ee90a8e.png",alt:"Economic Calendar"})),(0,n.kt)("p",null,"To select a specific country, attach ",(0,n.kt)("inlineCode",{parentName:"p"},"--countries")," to the command, then press the space bar.  Use the up or down arrow keys to browse the choices."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/236106932-473c0f02-af80-49a6-bdb3-548ac1e689fa.png",alt:"Economic Calendar Countries"})),(0,n.kt)("h3",{id:"overview"},"overview"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"overview")," fetches the headline levels and rates from the Wall Street Journal.  Choose from of the categories by attaching the ",(0,n.kt)("inlineCode",{parentName:"p"},"-t")," argument to the command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/economy/overview -t usbonds\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/236106975-961d7163-2ac8-4e05-b8df-34f2cf4908e7.png",alt:"Overview"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"Rate (%)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Yld (%)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Yld Chg (%)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30-Year Bond"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.625"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.686"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.028")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10-Year Note"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.343"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.085")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"7-Year Note"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.323"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.122")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5-Year Note"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.305"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.162")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3-Year Note"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.75"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.513"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.18")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2-Year Note"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.875"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.838"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.144")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1-Year Bill"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.665"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"6-Month Bill"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.98"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.005")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3-Month Bill"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.212"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.064")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1-Month Bill"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"4.452"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.114")))),(0,n.kt)("h3",{id:"debt"},"debt"),(0,n.kt)("p",null,"Compare debt-to-GDP ratios between groups of countries by entering them as a comma-separated list."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/economy/debt -c australia,norway,united_states,italy,japan\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/236107021-231e7472-10a0-4208-a92e-fe56c81076c0.png",alt:"Debt-to-GDP"})),(0,n.kt)("h3",{id:"usdli"},"usdli"),(0,n.kt)("p",null,"Compare the US Dollar Liquidity Index against a selection of indices published to FRED."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/economy/usdli -o WILLSMLCAP\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/1a2abf90-aa81-4d02-a77a-c913bfef14d7",alt:"USD Liquidity Index"})),(0,n.kt)("p",null,"The indices available to overlay are displayed in a table by adding, ",(0,n.kt)("inlineCode",{parentName:"p"},"--show"),", to the command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/economy/usdli --show\n")),(0,n.kt)("h3",{id:"valuation"},"valuation"),(0,n.kt)("p",null,"Get valuations of industries and sectors for the US equity universe.  Select the focus by using the, ",(0,n.kt)("inlineCode",{parentName:"p"},"-g")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--group"),"), parameter."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/0793bd01-95b9-46f3-90b5-5c4af851283f",alt:"Valuation By Industry"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"valuation --group consumer_cyclical\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/53e670fc-34cd-444f-9aa9-79fe5714e786",alt:"Consumer Cyclical Valuations"})),(0,n.kt)("h3",{id:"index"},"index"),(0,n.kt)("p",null,"Major global indices are curated under the ",(0,n.kt)("inlineCode",{parentName:"p"},"index")," command.  Adding ",(0,n.kt)("inlineCode",{parentName:"p"},"--show")," to the command will display a table with the list."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"index --show\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/236107143-a3e260e0-9530-4448-a552-12b46ae0aa72.png",alt:"Curated Index List"})),(0,n.kt)("p",null,"The cumulative returns of an index is displayed instead of the levels by attaching ",(0,n.kt)("inlineCode",{parentName:"p"},"-r")," to the command. Multiple indices can be queried simultaneously."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"index sp500,sp400,sp600 --start 2023-01-01 -r\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/236107229-410673db-e1ce-4e93-9e96-7821328e04dd.png",alt:"Indices"})),(0,n.kt)("h3",{id:"fred"},"fred"),(0,n.kt)("p",null,"To lookup FRED series by keywords attach, ",(0,n.kt)("inlineCode",{parentName:"p"},"-q"),", to the ",(0,n.kt)("inlineCode",{parentName:"p"},"fred")," command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"fred -q PCE\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/236107269-8f126f17-3da7-4bb3-8acb-35f3ad783f84.png",alt:"Fred Series"})),(0,n.kt)("h3",{id:"plot"},"plot"),(0,n.kt)("p",null,"After requesting a time series, it gets populated under ",(0,n.kt)("inlineCode",{parentName:"p"},"Stored datasets"),".  Plot them together, on a shared or separate y-axis, by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"plot")," command."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/236107312-95ed4b92-e418-444c-b436-f45a1fc0a75d.png",alt:"Multi-Axis Plots"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"plot --y1 PCE --y2 sp500\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/236107339-46037f4b-bc4f-458c-9f17-55a4cc6a61bc.png",alt:"Plot Multiple Time Series"})))}u.isMDXComponent=!0}}]);