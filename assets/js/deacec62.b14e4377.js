"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65238],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),g=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=g(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=g(a),k=n,c=d["".concat(p,".").concat(k)]||d[k]||s[k]||i;return a?r.createElement(c,l(l({ref:e},m),{},{components:a})):r.createElement(c,l({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:n,l[1]=o;for(var g=2;g<i;g++)l[g]=a[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(67294),n=a(35742);function i(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},23988:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),i=a(88828);const l={title:"ETF",description:"This documentation page provides a comprehensive guide on how to use the ETF module of the OpenBB Terminal SDK for programmatic access. It covers a list of functions within the ETF module, how to import the SDK, how to print contents of the SDK, how to use the ETF module in various situations such as getting list of ETF categories, getting ETF tickers, comparing performance metrics, getting the holdings of a specific ETF, performing ETF screening, and retrieving current top gainers, losers, and volume for ETFs.",keywords:["OpenBB Terminal SDK","ETF module","programmatic access","import SDK","perform ETF screening","get ETF holdings","compare performance metrics","retrieve top gainers and losers","retrieve top volume for ETFs"]},o=void 0,p={unversionedId:"sdk/data-available/etf",id:"sdk/data-available/etf",title:"ETF",description:"This documentation page provides a comprehensive guide on how to use the ETF module of the OpenBB Terminal SDK for programmatic access. It covers a list of functions within the ETF module, how to import the SDK, how to print contents of the SDK, how to use the ETF module in various situations such as getting list of ETF categories, getting ETF tickers, comparing performance metrics, getting the holdings of a specific ETF, performing ETF screening, and retrieving current top gainers, losers, and volume for ETFs.",source:"@site/content/sdk/data-available/etf.md",sourceDirName:"sdk/data-available",slug:"/sdk/data-available/etf",permalink:"/sdk/data-available/etf",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/etf.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"ETF",description:"This documentation page provides a comprehensive guide on how to use the ETF module of the OpenBB Terminal SDK for programmatic access. It covers a list of functions within the ETF module, how to import the SDK, how to print contents of the SDK, how to use the ETF module in various situations such as getting list of ETF categories, getting ETF tickers, comparing performance metrics, getting the holdings of a specific ETF, performing ETF screening, and retrieving current top gainers, losers, and volume for ETFs.",keywords:["OpenBB Terminal SDK","ETF module","programmatic access","import SDK","perform ETF screening","get ETF holdings","compare performance metrics","retrieve top gainers and losers","retrieve top volume for ETFs"]},sidebar:"tutorialSidebar",previous:{title:"Economy",permalink:"/sdk/data-available/economy"},next:{title:"Fixed Income",permalink:"/sdk/data-available/fixedincome"}},g={},m=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"etf_by_category",id:"etf_by_category",level:3},{value:"ETF Tickers",id:"etf-tickers",level:3},{value:"Performance Metrics",id:"performance-metrics",level:3},{value:"Holdings",id:"holdings",level:3},{value:"Disc",id:"disc",level:3}],d={toc:m},s="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"ETF - Intros - Usage | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"The ETF module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering ",(0,n.kt)("inlineCode",{parentName:"p"},"."),", after, ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb.etf"),"\n\u200b"),(0,n.kt)("h2",{id:"how-to-use"},"How to Use"),(0,n.kt)("p",null,"\u200bThe examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:\n\u200b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nimport pandas as pd\n")),(0,n.kt)("p",null,"\u200bBelow is a brief description of each function within the ETF module:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.candle"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Chart OHLC + Volume + Moving Averages")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.disc"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Sub-Module"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Best/Worst/Highest Volume ETFs Today")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.etf_by_category"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Lookup by Category")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.etf_by_name"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Lookup by Name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.holdings"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Holdings and Weights")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.ld"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Lookup by Description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.load"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Get Historical Price Data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.ln"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Lookup by Name (More Details Than ",(0,n.kt)("inlineCode",{parentName:"td"},"by_name"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.news"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"News Headlines for a Ticker")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.overview"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Basic Statistics for an ETF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.scr"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Sub-Module"),(0,n.kt)("td",{parentName:"tr",align:"right"},"ETF Screener")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.summary"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Text Description and Summary of an ETF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.symbols"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Dictionary"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Dictionary of {Ticker:Name}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.etf.weights"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Table or Pie Graph of Sector Weightings")))),(0,n.kt)("p",null,"Alternatively you can print the contents of the ETF SDK with:\n\u200b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.etf)\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h3",{id:"etf_by_category"},"etf_by_category"),(0,n.kt)("p",null,"\u200b\nETFs are categorized into different buckets. Use the code block below as a way to generate a list of all categories:\n\u200b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"etf_list = pd.DataFrame.from_dict(openbb.etf.etf_by_category(''))\ncategories = list(etf_list['category'].drop_duplicates())\ncategories = pd.DataFrame(categories[1::], columns = ['Type'])\n\ncategories.head(6)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Financials")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Emerging Markets")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Industrials")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Factors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Utilities")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Bonds")))),(0,n.kt)("p",null,"\u200bReplacing the empty category in the syntax above will return the ETFs within that category:\n\u200b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"etf_category = pd.DataFrame.from_dict(openbb.etf.etf_by_category('Emerging Markets'))\netf_category.head(2)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"symbol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"currency"),(0,n.kt)("th",{parentName:"tr",align:"left"},"summary"),(0,n.kt)("th",{parentName:"tr",align:"left"},"category_group"),(0,n.kt)("th",{parentName:"tr",align:"left"},"category"),(0,n.kt)("th",{parentName:"tr",align:"left"},"family"),(0,n.kt)("th",{parentName:"tr",align:"left"},"exchange"),(0,n.kt)("th",{parentName:"tr",align:"left"},"market"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AAXJ"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iShares MSCI All Country Asia ex Japan ETF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The investment seeks to track the investment results of the MSCI AC Asia ex Japan Index."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Equities"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Emerging Markets"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BlackRock Asset Management"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NMS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"us_market")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fund will invest at least 90% of its assets in the component securities of the index and in investments that have economic characteristics that are substantially identical to the component securities of the index. The index is a free float-adjusted market capitalization index designed to measure equity market performance of securities from the following 11 developed and emerging market countries or regions: China, Hong Kong, India, Indonesia, Malaysia, Pakistan, the Philippines, Singapore, South Korea, Taiwan and Thailand."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"JHEM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"John Hancock Multifactor Emerging Markets ETF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The investment seeks to provide investment results that closely correspond, before fees and expenses, to the performance of the John Hancock Dimensional Emerging Markets Index (the index)."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Equities"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Emerging Markets"),(0,n.kt)("td",{parentName:"tr",align:"left"},"John Hancock"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PCX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"us_market")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"The fund normally invests at least 80% of its net assets (plus any borrowings for investment purposes) in securities included in the index, in depositary receipts representing securities included in the index, and in underlying stocks in respect of depositary receipts included in the index. The index is designed to comprise a subset of securities associated with emerging markets, which may include frontier markets (emerging markets in an earlier stage of development)."),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("p",null,"\u200b"),(0,n.kt)("h3",{id:"etf-tickers"},"ETF Tickers"),(0,n.kt)("p",null,"A list of all tickers in the specific category can be generated from the index of the above DataFrame, ",(0,n.kt)("inlineCode",{parentName:"p"},"etf_category"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"symbols = etf_category.index.to_list()\n")),(0,n.kt)("h3",{id:"performance-metrics"},"Performance Metrics"),(0,n.kt)("p",null,"This list of tickers can then be used for comparison analysis, or portfolio optimization. For example, comparing the performance metrics of the Emerging Market category:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"performance = openbb.stocks.ca.screener(similar = symbols, data_type = 'performance')\nperformance = performance.sort_values(by=['3M'], ascending=False)\nperformance.head(5)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,n.kt)("th",{parentName:"tr",align:"right"},"1W"),(0,n.kt)("th",{parentName:"tr",align:"right"},"1M"),(0,n.kt)("th",{parentName:"tr",align:"right"},"3M"),(0,n.kt)("th",{parentName:"tr",align:"right"},"6M"),(0,n.kt)("th",{parentName:"tr",align:"right"},"1Y"),(0,n.kt)("th",{parentName:"tr",align:"right"},"YTD"),(0,n.kt)("th",{parentName:"tr",align:"right"},"1W Volatility"),(0,n.kt)("th",{parentName:"tr",align:"right"},"1M Volatility"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Recom"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Avg Volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Rel Volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Price"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Change"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Volume"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CHB"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0301"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.015"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.1123"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0086"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.132"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.1277"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0105"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0048"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"},"1130"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.04"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0123"),(0,n.kt)("td",{parentName:"tr",align:"right"},"21")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"INCO"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0193"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0716"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.1092"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.1543"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.2706"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.3171"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0066"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0049"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"},"17810"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"59.77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0073"),(0,n.kt)("td",{parentName:"tr",align:"right"},"14060")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GLIN"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0251"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0733"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.1083"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.221"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.2704"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.3319"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0105"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0079"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"},"20360"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.89"),(0,n.kt)("td",{parentName:"tr",align:"right"},"43.5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0133"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8833")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ILF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0497"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0631"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.1032"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.062"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.3082"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.2768"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0141"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0135"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.18e+06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.16"),(0,n.kt)("td",{parentName:"tr",align:"right"},"29.23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0215"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1237337")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SMIN"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0174"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0573"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0914"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.2128"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.2848"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.3447"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0078"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0074"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"right"},"99980"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.61"),(0,n.kt)("td",{parentName:"tr",align:"right"},"69.6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0053"),(0,n.kt)("td",{parentName:"tr",align:"right"},"272774")))),(0,n.kt)("h3",{id:"holdings"},"Holdings"),(0,n.kt)("p",null,"To peer into the holdings of a specific ETF:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"holdings = openbb.etf.holdings('DIA').reset_index()\nholdings.head(5)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Symbol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"% Of Etf"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Shares"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"UNH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"UnitedHealth Group Incorporated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10.09%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5985297")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Goldman Sachs Group, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"7.51%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5985297")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Home Depot, Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"6.03%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5985297")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AMGN"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Amgen Inc."),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.61%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5985297")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MCD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"McDonald's Corporation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.35%"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5985297")))),(0,n.kt)("h3",{id:"disc"},"Disc"),(0,n.kt)("p",null,"The current top gainers, losers, and volume for ETFs is returned with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.etf.disc.mover(sort_type = 'decliners')\n\nopenbb.etf.disc.mover(sort_type = 'gainers')\n\nopenbb.etf.disc.mover(sort_type = 'active')\n")),(0,n.kt)("p",null,"With no ",(0,n.kt)("inlineCode",{parentName:"p"},"sort_type")," chosen, it will default to ",(0,n.kt)("inlineCode",{parentName:"p"},"gainers"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"movers = openbb.etf.disc.mover()\nmovers.head(5)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"Price"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Chg"),(0,n.kt)("th",{parentName:"tr",align:"right"},"%Chg"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Vol"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily Semiconductor Bear 3X Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"35.3101"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.3101"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.34"),(0,n.kt)("td",{parentName:"tr",align:"left"},"24.5M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ProShares UltraShort Bloomberg Natural Gas"),(0,n.kt)("td",{parentName:"tr",align:"right"},"18.09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.19"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.04"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4.4M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MicroSectors FANG & Innovation -3x Inverse Leveraged ETN"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28.98"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.83"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.74"),(0,n.kt)("td",{parentName:"tr",align:"left"},"160.1K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily Dow Jones Internet Bear 3X Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32.14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.91"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"554.2K")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Direxion Daily S&P 500 High Beta Bear 3X Shares"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.4652"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.3752"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2M")))))}k.isMDXComponent=!0}}]);