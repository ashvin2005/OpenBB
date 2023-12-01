"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90651],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=s(a),c=n,k=m["".concat(p,".").concat(c)]||m[c]||h[c]||o;return a?r.createElement(k,i(i({ref:e},d),{},{components:a})):r.createElement(k,i({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[m]="string"==typeof t?t:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(67294),n=a(35742);function o(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},45388:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(88828);const i={title:"Portfolio Optimization",description:"This page provides comprehensive instructions on Portfolio Optimization, ranging from mean-variance optimization to risk parity models and hierarchical clustering models. Detailed Python script examples are provided to guide the user through the optimization process using methods like Risk Parity, applying Hierarchical Risk Parity, and calculating portfolio returns and drawdowns.",keywords:["Portfolio Optimization","mean-variance optimization","risk parity models","hierarchical clustering models","Python scripting","Risk Parity","CVaR","Hierarchical Risk Parity","portfolio returns histogram","portfolio drawdowns"]},l=void 0,p={unversionedId:"sdk/data-available/portfolio/po",id:"sdk/data-available/portfolio/po",title:"Portfolio Optimization",description:"This page provides comprehensive instructions on Portfolio Optimization, ranging from mean-variance optimization to risk parity models and hierarchical clustering models. Detailed Python script examples are provided to guide the user through the optimization process using methods like Risk Parity, applying Hierarchical Risk Parity, and calculating portfolio returns and drawdowns.",source:"@site/content/sdk/data-available/portfolio/po.md",sourceDirName:"sdk/data-available/portfolio",slug:"/sdk/data-available/portfolio/po",permalink:"/sdk/data-available/portfolio/po",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/data-available/portfolio/po.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1701462427,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{title:"Portfolio Optimization",description:"This page provides comprehensive instructions on Portfolio Optimization, ranging from mean-variance optimization to risk parity models and hierarchical clustering models. Detailed Python script examples are provided to guide the user through the optimization process using methods like Risk Parity, applying Hierarchical Risk Parity, and calculating portfolio returns and drawdowns.",keywords:["Portfolio Optimization","mean-variance optimization","risk parity models","hierarchical clustering models","Python scripting","Risk Parity","CVaR","Hierarchical Risk Parity","portfolio returns histogram","portfolio drawdowns"]},sidebar:"tutorialSidebar",previous:{title:"Portfolio",permalink:"/sdk/data-available/portfolio/"},next:{title:"Alternative",permalink:"/sdk/data-available/alternative"}},s={},d=[{value:"How to use",id:"how-to-use",level:2},{value:"OpenBB Parameters Template",id:"openbb-parameters-template",level:3},{value:"OpenBB Portfolio Template",id:"openbb-portfolio-template",level:3},{value:"Performing optimization",id:"performing-optimization",level:3},{value:"Examples",id:"examples",level:2}],m={toc:d},h="wrapper";function c(t){let{components:e,...a}=t;return(0,n.kt)(h,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"Portfolio Optimization - Portfolio - Intros - Usage | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"The Portfolio Optimization menu allows the user to apply advanced optimization techniques to a portfolio of any type and of any size. It does so by introducing a multitude of optimization techniques ranging from ",(0,n.kt)("a",{href:"https://www.investopedia.com/terms/m/meanvariance-analysis.asp",target:"_blank",rel:"noreferrer noopener"},"mean-variance optimization")," to ",(0,n.kt)("a",{href:"https://www.investopedia.com/terms/r/risk-parity.asp",target:"_blank",rel:"noreferrer noopener"},"risk parity models")," and ",(0,n.kt)("a",{href:"https://www.investopedia.com/terms/c/cluster_analysis.asp",target:"_blank",rel:"noreferrer noopener"},"hierarchical clustering models"),". By providing Excel templates, the user can make sense of the vast array of parameters that each command has. E.g. think of the historic period you wish to use or which of the more than 10 risk measures and covariance methods should be used? These are questions the templates make easier to answer."),(0,n.kt)("p",null,"The capabilities of the ",(0,n.kt)("a",{parentName:"p",href:"/terminal/reference/portfolio/po/load"},"Portfolio Optiminzation menu")," from the OpenBB Terminal are wrapped into a powerful SDK, enabling users to work with the data in a flexible environment that can be fully customized to meet the needs of any user. These functionalities allow the user to apply advanced optimization techniques to a portfolio of any type and of any size. It does so by introducing a multitude of optimization techniques ranging from ",(0,n.kt)("a",{href:"https://www.investopedia.com/terms/m/meanvariance-analysis.asp",target:"_blank",rel:"noreferrer noopener"},"mean-variance optimization")," to ",(0,n.kt)("a",{href:"https://www.investopedia.com/terms/r/risk-parity.asp",target:"_blank",rel:"noreferrer noopener"},"risk parity models")," and ",(0,n.kt)("a",{href:"https://www.investopedia.com/terms/c/cluster_analysis.asp",target:"_blank",rel:"noreferrer noopener"},"hierarchical clustering models"),". By providing Excel templates, the user can make sense of the vast array of parameters that each command has. E.g. think of the historic period you wish to use or which of the more than 10 risk measures and covariance methods should be used? These are questions the templates make easier to answer."),(0,n.kt)("h2",{id:"how-to-use"},"How to use"),(0,n.kt)("p",null,"Start a Python script or Notebook file by importing the module:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\n")),(0,n.kt)("p",null,"This menu requires the usage of the Excel templates to work properly. As there is a lot of complexity involved around these techniques, these templates allow the user to understand what values for each parameter are actually used and allow for an easy way to define the allocation."),(0,n.kt)("admonition",{title:"If you wish to load in your own Excel allocation file, please follow the following steps:",type:"note"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Download the Excel file that can be used as a template ",(0,n.kt)("a",{parentName:"li",href:"https://www.dropbox.com/s/wp1lcq86exyngjy/allocation_example.xlsx?dl=0"},"here"),"."),(0,n.kt)("li",{parentName:"ol"},"Move the file inside the ",(0,n.kt)("inlineCode",{parentName:"li"},"portfolio/allocation")," folder within the ",(0,n.kt)("a",{parentName:"li",href:"/terminal/usage/data/custom-data"},"OpenBBUserData")," folder and, optionally, adjust the name to your liking."),(0,n.kt)("li",{parentName:"ol"},"Open the Excel file and remove, edit or add to the values as you desire (e.g. your own allocation). This is the default template that is also loaded in with ",(0,n.kt)("inlineCode",{parentName:"li"},"load --example"),"."),(0,n.kt)("li",{parentName:"ol"},"The file can now be used by following the guide."))),(0,n.kt)("p",null,"Furthermore, given the amount of options you can choose from in each command and giving the complexity of the topic, we also provide a parameter file (both .xlsx and .ini to adjust parameters in a user-friendly way)."),(0,n.kt)("admonition",{title:"If you wish to load in your own Excel or ini parameter file, please follow the following steps:",type:"note"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Download the file that can be used as a template: ",(0,n.kt)("a",{parentName:"li",href:"https://www.dropbox.com/s/qfhd7ntj7mlwsuc/parameters_template.xlsx?dl=0"},"xlsx")," (recommended) or ",(0,n.kt)("a",{parentName:"li",href:"https://www.dropbox.com/s/3ehwg3hiwm89hgo/parameters_template.ini?dl=0"},"ini")," (advanced)."),(0,n.kt)("li",{parentName:"ol"},"Move the file inside the ",(0,n.kt)("inlineCode",{parentName:"li"},"portfolio/optimization")," folder within the ",(0,n.kt)("a",{parentName:"li",href:"/terminal/usage/data/custom-data"},"OpenBBUserData")," folder and, optionally, adjust the name to your liking."),(0,n.kt)("li",{parentName:"ol"},"Open the file and set parameters as you wish."),(0,n.kt)("li",{parentName:"ol"},"Open up the OpenBB Terminal, go to ",(0,n.kt)("inlineCode",{parentName:"li"},"portfolio/po")," and type ",(0,n.kt)("inlineCode",{parentName:"li"},"file --file"),". The file should then be one of the options."))),(0,n.kt)("h3",{id:"openbb-parameters-template"},"OpenBB Parameters Template"),(0,n.kt)("p",null,"This template provides the user with the ability to set define values for each parameter based on the optimization technique that is deployed. E.g. if you select ",(0,n.kt)("inlineCode",{parentName:"p"},"riskparity")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},"technique")," parameter, you will notice that some parameters turn ",(0,n.kt)("span",{style:{color:"#BEBEBE"}},"grey"),". This means that the parameter is irrelevant for the selected method."),(0,n.kt)("p",null,"The OpenBB Terminal does, however, allow the user to run any model despite the ",(0,n.kt)("inlineCode",{parentName:"p"},"technique")," you selected. Therefore, if you are interested in running multiple models, consider removing the value for ",(0,n.kt)("inlineCode",{parentName:"p"},"technique"),". Do note that this makes it more difficult to understand which values are used for which model."),(0,n.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171144692-dd812efd-1e95-4a71-a93f-7ae8a480fe5d.png"},(0,n.kt)("img",{alt:"OpenBB Parameters Template",src:"https://user-images.githubusercontent.com/46355364/171144692-dd812efd-1e95-4a71-a93f-7ae8a480fe5d.png"})),(0,n.kt)("h3",{id:"openbb-portfolio-template"},"OpenBB Portfolio Template"),(0,n.kt)("p",null,"This template hands the user a format to work with it to define the portfolio. Here, categorization is applied based on asset class, sector, industry, country and currency. By using the dropdown menus within this Excel, you are able to apply the proper categorization. This is based on the same methodology as found in other areas of the terminal."),(0,n.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171145061-cd618153-801c-4771-ba57-7ee0ab8c57e8.png"},(0,n.kt)("img",{alt:"OpenBB Portfolio Template",src:"https://user-images.githubusercontent.com/46355364/171145061-cd618153-801c-4771-ba57-7ee0ab8c57e8.png"})),(0,n.kt)("p",null,"You can load in the portfolio template with the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\n# Define your own orderbook path here, current value won't work\norder_book_path = \"allocation_example.xlsx\"\n\n# Read in the file\norder_book = pd.read_excel(order_book_path)\n\n# Adjust the columns accordingly\norder_book_cols = ['Ticker', 'Asset Class', 'Sector', 'Industry', 'Country',\n       'Current Invested Amount', 'Currency']\n\norder_book = order_book[order_book_cols]\n\n# Load in the portfolio\np = openbb.portfolio.po.load(symbols_file_path=order_book_path)\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\n")),(0,n.kt)("h3",{id:"performing-optimization"},"Performing optimization"),(0,n.kt)("p",null,"Based on the parameters and allocation the user has set, the optimization process begins. What optimization technique is ideal depends entirely on the user's risk profile and objectives. As an illustration, ",(0,n.kt)("a",{href:"https://www.investopedia.com/terms/r/risk-parity.asp",target:"_blank",rel:"noreferrer noopener"},"Risk Parity")," is presented below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# Perform calculations\nweights_riskparity, data_returns_riskparity = openbb.portfolio.po.riskparity(p)\n\nweights_riskparity\n")),(0,n.kt)("p",null,"Which returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"Risk Parity"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AAPL"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0462")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AMZN"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.04545")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"APTV"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.03177")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ASML"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.03328")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BABA"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.04192")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GOOGL"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.04758")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HYG"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.13093")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NKE"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.04909")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TIP"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.30826")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TLT"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.21927")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TSM"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.04626")))),(0,n.kt)("p",null,"It is possible to use the commands without loading in the parameters template or by using the parameters template but changing some arguments directly into the terminal. For example, using the same method as described above, the risk measure is changed to ",(0,n.kt)("a",{href:"https://www.investopedia.com/terms/c/conditional_value_at_risk.asp",target:"_blank",rel:"noreferrer noopener"},"Conditional Value at Risk (CVaR)")," and the used historic period is increased to 10 years (keeping all other parameters unchanged):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Perform calculations\nweights_riskparity, data_returns_riskparity = openbb.portfolio.po.riskparity(p, interval="5y", risk_measure="CVaR")\n\nweights_riskparity\n')),(0,n.kt)("p",null,"Which returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"Risk Parity"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AAPL"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.04843")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AMZN"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.04302")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"APTV"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.03907")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ASML"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.03717")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"GOOGL"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.04877")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"HYG"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.14643")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NKE"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.05275")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TIP"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.33264")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TLT"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.20371")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TSM"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.04802")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Starting by loading in the same dataset again with the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\n# Define your own orderbook path here, current value won't work\norder_book_path = \"allocation_example.xlsx\"\n\n# Read in the file\norder_book = pd.read_excel(order_book_path)\n\n# Adjust the columns accordingly\norder_book_cols = ['Ticker', 'Asset Class', 'Sector', 'Industry', 'Country',\n       'Current Invested Amount', 'Currency']\n\norder_book = order_book[order_book_cols]\n\n# Load in the portfolio\nP = openbb.portfolio.po.load(symbols_file_path=order_book_path)\n")),(0,n.kt)("p",null,"Then, the ",(0,n.kt)("a",{href:"https://jpm.pm-research.com/content/42/4/59.short",target:"_blank",rel:"noreferrer noopener"},"Hierarchical Risk Parity")," technique is applied by using the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"riskparity, data_returns_riskparity = openbb.portfolio.po.hrp(p, interval=\"5y\",\n    risk_measure='SLPM',\n    risk_aversion=0.8)\n\nprint(riskparity)\nprint(data_returns_riskparity)\n")),(0,n.kt)("p",null,"This results in a similar result as the following:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"Hierarchical Risk Parity"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"A"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00199")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AAL"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00104")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AAP"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00185")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AAPL"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00184")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ABBV"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0028")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"..."),(0,n.kt)("td",{parentName:"tr",align:"right"},"...")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NOC"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00228")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XOM"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00167")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ZBRA"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00156")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ZION"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0014")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ZTS"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.00225")))),(0,n.kt)("p",null,"It is possible to delve further into these findings with the ",(0,n.kt)("inlineCode",{parentName:"p"},"plot")," functionality for example done by looking at the portfolio's returns ",(0,n.kt)("a",{href:"https://www.investopedia.com/terms/h/histogram.asp",target:"_blank",rel:"noreferrer noopener"},"histogram")," which also includes a variety of risk measures as well as the portfolio's drawdowns."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"openbb.portfolio.po.plot(p, category='SECTOR', chart_type=\"hist\")\n")),(0,n.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171145848-5a3f5333-6b7f-4d7a-a96e-0859adb1ce78.png"},(0,n.kt)("img",{alt:"Portfokio Returns Histogram",src:"https://user-images.githubusercontent.com/46355364/171145848-5a3f5333-6b7f-4d7a-a96e-0859adb1ce78.png"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"openbb.portfolio.po.plot(p, category='SECTOR', chart_type=\"dd\")\n")),(0,n.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/171145983-2d2c1c2e-67d2-4839-b43a-51bd22332de8.png"},(0,n.kt)("img",{alt:"Portfolio Drawdowns",src:"https://user-images.githubusercontent.com/46355364/171145983-2d2c1c2e-67d2-4839-b43a-51bd22332de8.png"})))}c.isMDXComponent=!0}}]);