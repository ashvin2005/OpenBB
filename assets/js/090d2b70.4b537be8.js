"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40819],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(a),k=n,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return a?r.createElement(c,i(i({ref:e},m),{},{components:a})):r.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},71491:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"metrics",description:"Learn about key metrics for a given company using the `obb.equity.fundamental.metrics` Python function. This API endpoint provides data such as revenue per share, net income per share, market capitalization, price-to-earnings ratio, and more. Explore the available parameters and returned data to analyze financial performance. Full documentation and usage examples available.",keywords:["key metrics","python function","documentation","API","parameters","returns","data","symbol","period","limit","provider","with_ttm","revenue per share","net income per share","operating cash flow per share","free cash flow per share","cash per share","book value per share","tangible book value per share","shareholders equity per share","interest debt per share","market capitalization","enterprise value","price-to-earnings ratio","price-to-sales ratio","price-to-operating cash flow ratio","price-to-free cash flow ratio","price-to-book ratio","price-to-tangible book ratio","earnings yield","free cash flow yield","debt-to-equity ratio","debt-to-assets ratio","net debt-to-EBITDA ratio","current ratio","interest coverage","income quality","dividend yield","payout ratio","sales general and administrative expenses-to-revenue ratio","research and development expenses-to-revenue ratio","intangibles-to-total assets ratio","capital expenditures-to-operating cash flow ratio","capital expenditures-to-revenue ratio","capital expenditures-to-depreciation ratio","stock-based compensation-to-revenue ratio","Graham number","return on invested capital","return on tangible assets","Graham net-net working capital","working capital","tangible asset value","net current asset value","invested capital","average receivables","average payables","average inventory","days sales outstanding","days payables outstanding","days of inventory on hand","receivables turnover","payables turnover","inventory turnover","return on equity","capital expenditures per share","calendar year"]},i=void 0,o={unversionedId:"excel/reference/equity/fundamental/metrics",id:"excel/reference/equity/fundamental/metrics",title:"metrics",description:"Learn about key metrics for a given company using the `obb.equity.fundamental.metrics` Python function. This API endpoint provides data such as revenue per share, net income per share, market capitalization, price-to-earnings ratio, and more. Explore the available parameters and returned data to analyze financial performance. Full documentation and usage examples available.",source:"@site/content/excel/reference/equity/fundamental/metrics.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/metrics",permalink:"/excel/reference/equity/fundamental/metrics",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/fundamental/metrics.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705199383,formattedLastUpdatedAt:"Jan 14, 2024",frontMatter:{title:"metrics",description:"Learn about key metrics for a given company using the `obb.equity.fundamental.metrics` Python function. This API endpoint provides data such as revenue per share, net income per share, market capitalization, price-to-earnings ratio, and more. Explore the available parameters and returned data to analyze financial performance. Full documentation and usage examples available.",keywords:["key metrics","python function","documentation","API","parameters","returns","data","symbol","period","limit","provider","with_ttm","revenue per share","net income per share","operating cash flow per share","free cash flow per share","cash per share","book value per share","tangible book value per share","shareholders equity per share","interest debt per share","market capitalization","enterprise value","price-to-earnings ratio","price-to-sales ratio","price-to-operating cash flow ratio","price-to-free cash flow ratio","price-to-book ratio","price-to-tangible book ratio","earnings yield","free cash flow yield","debt-to-equity ratio","debt-to-assets ratio","net debt-to-EBITDA ratio","current ratio","interest coverage","income quality","dividend yield","payout ratio","sales general and administrative expenses-to-revenue ratio","research and development expenses-to-revenue ratio","intangibles-to-total assets ratio","capital expenditures-to-operating cash flow ratio","capital expenditures-to-revenue ratio","capital expenditures-to-depreciation ratio","stock-based compensation-to-revenue ratio","Graham number","return on invested capital","return on tangible assets","Graham net-net working capital","working capital","tangible asset value","net current asset value","invested capital","average receivables","average payables","average inventory","days sales outstanding","days payables outstanding","days of inventory on hand","receivables turnover","payables turnover","inventory turnover","return on equity","capital expenditures per share","calendar year"]},sidebar:"tutorialSidebar",previous:{title:"management_compensation",permalink:"/excel/reference/equity/fundamental/management_compensation"},next:{title:"multiples",permalink:"/excel/reference/equity/fundamental/multiples"}},p={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],m={toc:d},s="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Key Metrics. Key metrics for a given company."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.FUNDAMENTAL.METRICS(symbol;[period];[limit];[provider];[with_ttm])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.EQUITY.FUNDAMENTAL.METRICS("AAPL")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Text")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Symbol to get data for.")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"True"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp, intrinio, defaults to fmp."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"with_ttm"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Include trailing twelve months (TTM) data. (provider: fmp)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"market_cap"),(0,n.kt)("td",{parentName:"tr",align:null},"Market capitalization")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pe_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"Price-to-earnings ratio (P/E ratio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"period"),(0,n.kt)("td",{parentName:"tr",align:null},"Period of the data. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"calendar_year"),(0,n.kt)("td",{parentName:"tr",align:null},"Calendar year. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"revenue_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"Revenue per share (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"net_income_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"Net income per share (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operating_cash_flow_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"Operating cash flow per share (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"free_cash_flow_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"Free cash flow per share (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cash_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"Cash per share (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"book_value_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"Book value per share (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tangible_book_value_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"Tangible book value per share (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"shareholders_equity_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"Shareholders equity per share (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interest_debt_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"Interest debt per share (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"enterprise_value"),(0,n.kt)("td",{parentName:"tr",align:null},"Enterprise value (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"price_to_sales_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"Price-to-sales ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pocf_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"Price-to-operating cash flow ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pfcf_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"Price-to-free cash flow ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pb_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"Price-to-book ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ptb_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"Price-to-tangible book ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ev_to_sales"),(0,n.kt)("td",{parentName:"tr",align:null},"Enterprise value-to-sales ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"enterprise_value_over_ebitda"),(0,n.kt)("td",{parentName:"tr",align:null},"Enterprise value-to-EBITDA ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ev_to_operating_cash_flow"),(0,n.kt)("td",{parentName:"tr",align:null},"Enterprise value-to-operating cash flow ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ev_to_free_cash_flow"),(0,n.kt)("td",{parentName:"tr",align:null},"Enterprise value-to-free cash flow ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"earnings_yield"),(0,n.kt)("td",{parentName:"tr",align:null},"Earnings yield (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"free_cash_flow_yield"),(0,n.kt)("td",{parentName:"tr",align:null},"Free cash flow yield (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"debt_to_equity"),(0,n.kt)("td",{parentName:"tr",align:null},"Debt-to-equity ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"debt_to_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"Debt-to-assets ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"net_debt_to_ebitda"),(0,n.kt)("td",{parentName:"tr",align:null},"Net debt-to-EBITDA ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"current_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"Current ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interest_coverage"),(0,n.kt)("td",{parentName:"tr",align:null},"Interest coverage (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"income_quality"),(0,n.kt)("td",{parentName:"tr",align:null},"Income quality (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dividend_yield"),(0,n.kt)("td",{parentName:"tr",align:null},"Dividend yield (provider: fmp, intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"payout_ratio"),(0,n.kt)("td",{parentName:"tr",align:null},"Payout ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sales_general_and_administrative_to_revenue"),(0,n.kt)("td",{parentName:"tr",align:null},"Sales general and administrative expenses-to-revenue ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"research_and_development_to_revenue"),(0,n.kt)("td",{parentName:"tr",align:null},"Research and development expenses-to-revenue ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"intangibles_to_total_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"Intangibles-to-total assets ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"capex_to_operating_cash_flow"),(0,n.kt)("td",{parentName:"tr",align:null},"Capital expenditures-to-operating cash flow ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"capex_to_revenue"),(0,n.kt)("td",{parentName:"tr",align:null},"Capital expenditures-to-revenue ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"capex_to_depreciation"),(0,n.kt)("td",{parentName:"tr",align:null},"Capital expenditures-to-depreciation ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stock_based_compensation_to_revenue"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock-based compensation-to-revenue ratio (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"graham_number"),(0,n.kt)("td",{parentName:"tr",align:null},"Graham number (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"roic"),(0,n.kt)("td",{parentName:"tr",align:null},"Return on invested capital (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"return_on_tangible_assets"),(0,n.kt)("td",{parentName:"tr",align:null},"Return on tangible assets (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"graham_net_net"),(0,n.kt)("td",{parentName:"tr",align:null},"Graham net-net working capital (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"working_capital"),(0,n.kt)("td",{parentName:"tr",align:null},"Working capital (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tangible_asset_value"),(0,n.kt)("td",{parentName:"tr",align:null},"Tangible asset value (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"net_current_asset_value"),(0,n.kt)("td",{parentName:"tr",align:null},"Net current asset value (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"invested_capital"),(0,n.kt)("td",{parentName:"tr",align:null},"Invested capital (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"average_receivables"),(0,n.kt)("td",{parentName:"tr",align:null},"Average receivables (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"average_payables"),(0,n.kt)("td",{parentName:"tr",align:null},"Average payables (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"average_inventory"),(0,n.kt)("td",{parentName:"tr",align:null},"Average inventory (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days_sales_outstanding"),(0,n.kt)("td",{parentName:"tr",align:null},"Days sales outstanding (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days_payables_outstanding"),(0,n.kt)("td",{parentName:"tr",align:null},"Days payables outstanding (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days_of_inventory_on_hand"),(0,n.kt)("td",{parentName:"tr",align:null},"Days of inventory on hand (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"receivables_turnover"),(0,n.kt)("td",{parentName:"tr",align:null},"Receivables turnover (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"payables_turnover"),(0,n.kt)("td",{parentName:"tr",align:null},"Payables turnover (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"inventory_turnover"),(0,n.kt)("td",{parentName:"tr",align:null},"Inventory turnover (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"roe"),(0,n.kt)("td",{parentName:"tr",align:null},"Return on equity (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"capex_per_share"),(0,n.kt)("td",{parentName:"tr",align:null},"Capital expenditures per share (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"beta"),(0,n.kt)("td",{parentName:"tr",align:null},"Beta (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"volume"),(0,n.kt)("td",{parentName:"tr",align:null},"Volume (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fifty_two_week_high"),(0,n.kt)("td",{parentName:"tr",align:null},"52 week high (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fifty_two_week_low"),(0,n.kt)("td",{parentName:"tr",align:null},"52 week low (provider: intrinio)")))))}u.isMDXComponent=!0}}]);