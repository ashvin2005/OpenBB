"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39810],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(a),c=r,g=s["".concat(m,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(35742);function l(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},37799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const o={title:"maxdiv",description:"The maxdiv page is a comprehensive guide for maximizing portfolio diversification with parameters like covariance matrix estimation method, smoothing factor for ewma estimators, allocations, return methods, tolerances for nan values, and more. It also includes examples of use.",keywords:["maxdiv","portfolio diversification","covariance matrix","smoothing factor","short allocation","nan fill method","historic period","log returns","return frequency","long allocation"]},i=void 0,m={unversionedId:"terminal/reference/portfolio/po/maxdiv",id:"terminal/reference/portfolio/po/maxdiv",title:"maxdiv",description:"The maxdiv page is a comprehensive guide for maximizing portfolio diversification with parameters like covariance matrix estimation method, smoothing factor for ewma estimators, allocations, return methods, tolerances for nan values, and more. It also includes examples of use.",source:"@site/content/terminal/reference/portfolio/po/maxdiv.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/maxdiv",permalink:"/terminal/reference/portfolio/po/maxdiv",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/maxdiv.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705199383,formattedLastUpdatedAt:"Jan 14, 2024",frontMatter:{title:"maxdiv",description:"The maxdiv page is a comprehensive guide for maximizing portfolio diversification with parameters like covariance matrix estimation method, smoothing factor for ewma estimators, allocations, return methods, tolerances for nan values, and more. It also includes examples of use.",keywords:["maxdiv","portfolio diversification","covariance matrix","smoothing factor","short allocation","nan fill method","historic period","log returns","return frequency","long allocation"]},sidebar:"tutorialSidebar",previous:{title:"maxdecorr",permalink:"/terminal/reference/portfolio/po/maxdecorr"},next:{title:"maxret",permalink:"/terminal/reference/portfolio/po/maxret"}},d={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"portfolio /po/maxdiv - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Maximizes the portfolio's diversification ratio"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"maxdiv [-cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}] [-de SMOOTHING_FACTOR_EWMA] [-vs SHORT_ALLOCATION] [-mt METHOD] [-ct CATEGORIES] [-p PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-v LONG_ALLOCATION] [--name NAME]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"covariance"),(0,r.kt)("td",{parentName:"tr",align:null},"-cv  --covariance"),(0,r.kt)("td",{parentName:"tr",align:null},"Method used to estimate covariance matrix. Possible values are 'hist': historical method 'ewma1': exponential weighted moving average with adjust=True 'ewma2': exponential weighted moving average with adjust=False 'ledoit': Ledoit and Wolf shrinkage method 'oas': oracle shrinkage method 'shrunk': scikit-learn shrunk method 'gl': graphical lasso method 'jlogo': j-logo covariance 'fixed': takes average of eigenvalues above max Marchenko Pastour limit 'spectral': makes zero eigenvalues above max Marchenko Pastour limit 'shrink': Lopez de Prado's book shrinkage method"),(0,r.kt)("td",{parentName:"tr",align:null},"hist"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"hist, ewma1, ewma2, ledoit, oas, shrunk, gl, jlogo, fixed, spectral, shrink")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"smoothing_factor_ewma"),(0,r.kt)("td",{parentName:"tr",align:null},"-de  --d-ewma"),(0,r.kt)("td",{parentName:"tr",align:null},"Smoothing factor for ewma estimators"),(0,r.kt)("td",{parentName:"tr",align:null},"0.94"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"short_allocation"),(0,r.kt)("td",{parentName:"tr",align:null},"-vs  --value-short"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in short positions"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nan_fill_method"),(0,r.kt)("td",{parentName:"tr",align:null},"-mt  --method"),(0,r.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points"),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"linear, time, nearest, zero, slinear, quadratic, cubic, barycentric")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"categories"),(0,r.kt)("td",{parentName:"tr",align:null},"-ct  --categories"),(0,r.kt)("td",{parentName:"tr",align:null},"Show selected categories"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"historic_period"),(0,r.kt)("td",{parentName:"tr",align:null},"-p  --period"),(0,r.kt)("td",{parentName:"tr",align:null},"Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset"),(0,r.kt)("td",{parentName:"tr",align:null},"3y"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 3y, 5y, 10y, ytd, max")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_period"),(0,r.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_period"),(0,r.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,r.kt)("td",{parentName:"tr",align:null},"End date to get yfinance data from. Must be in 'YYYY-MM-DD' format"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,r.kt)("td",{parentName:"tr",align:null},"-lr  --log-returns"),(0,r.kt)("td",{parentName:"tr",align:null},"If use logarithmic or arithmetic returns to calculate returns"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"return_frequency"),(0,r.kt)("td",{parentName:"tr",align:null},"--freq"),(0,r.kt)("td",{parentName:"tr",align:null},"Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns"),(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"d, w, m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_nan"),(0,r.kt)("td",{parentName:"tr",align:null},"-mn  --maxnan"),(0,r.kt)("td",{parentName:"tr",align:null},"Max percentage of nan values accepted per asset to be considered in the optimization process"),(0,r.kt)("td",{parentName:"tr",align:null},"0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold_value"),(0,r.kt)("td",{parentName:"tr",align:null},"-th  --threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher to threshold in absolute value"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"long_allocation"),(0,r.kt)("td",{parentName:"tr",align:null},"-v  --value"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"--name"),(0,r.kt)("td",{parentName:"tr",align:null},"Save portfolio with personalized or default name"),(0,r.kt)("td",{parentName:"tr",align:null},"MAXDIV_0"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"2022 Apr 05, 14:18 (\ud83e\udd8b) /portfolio/po/ $ maxdiv\n\n [3 Years] Display a maximal diversification portfolio\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502 22.62 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502 11.53 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502 12.06 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502 40.01 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502 13.75 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 24.68%\nAnnual (by \u221a252) volatility: 26.16%\nSharpe ratio: 0.9435\n")),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);