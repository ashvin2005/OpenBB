"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11031],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>g});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),p=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(r),c=n,g=u["".concat(d,".").concat(c)]||u[c]||s[c]||l;return r?a.createElement(g,i(i({ref:e},m),{},{components:r})):a.createElement(g,i({ref:e},m))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},13584:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"holdings",description:"Learn how to get the holdings data for an individual ETF using the `obb.etf.holdings` method. Understand the parameters like symbol, provider, date, and CIK. Explore the returns, results, warnings, chart, and metadata. Dive into the data fields like symbol, name, LEI, title, CUSIP, ISIN, balance, units, currency, value, weight, payoff profile, asset category, issuer category, country, and more.",keywords:["ETF holdings","individual ETF holdings","holdings data for ETF","symbol","provider","date","CIK","returns","results","warnings","chart","metadata","data","name","LEI","title","CUSIP","ISIN","balance","units","currency","value","weight","payoff profile","asset category","issuer category","country","is restricted","fair value level","is cash collateral","is non-cash collateral","is loan by fund","acceptance datetime"]},i=void 0,o={unversionedId:"excel/reference/etf/holdings",id:"excel/reference/etf/holdings",title:"holdings",description:"Learn how to get the holdings data for an individual ETF using the `obb.etf.holdings` method. Understand the parameters like symbol, provider, date, and CIK. Explore the returns, results, warnings, chart, and metadata. Dive into the data fields like symbol, name, LEI, title, CUSIP, ISIN, balance, units, currency, value, weight, payoff profile, asset category, issuer category, country, and more.",source:"@site/content/excel/reference/etf/holdings.md",sourceDirName:"excel/reference/etf",slug:"/excel/reference/etf/holdings",permalink:"/excel/reference/etf/holdings",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/etf/holdings.md",tags:[],version:"current",lastUpdatedBy:"minhhoang1023",lastUpdatedAt:1705489831,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"holdings",description:"Learn how to get the holdings data for an individual ETF using the `obb.etf.holdings` method. Understand the parameters like symbol, provider, date, and CIK. Explore the returns, results, warnings, chart, and metadata. Dive into the data fields like symbol, name, LEI, title, CUSIP, ISIN, balance, units, currency, value, weight, payoff profile, asset category, issuer category, country, and more.",keywords:["ETF holdings","individual ETF holdings","holdings data for ETF","symbol","provider","date","CIK","returns","results","warnings","chart","metadata","data","name","LEI","title","CUSIP","ISIN","balance","units","currency","value","weight","payoff profile","asset category","issuer category","country","is restricted","fair value level","is cash collateral","is non-cash collateral","is loan by fund","acceptance datetime"]},sidebar:"tutorialSidebar",previous:{title:"countries",permalink:"/excel/reference/etf/countries"},next:{title:"holdings_date",permalink:"/excel/reference/etf/holdings_date"}},d={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],m={toc:p},u="wrapper";function s(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Get the holdings for an individual ETF."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.ETF.HOLDINGS(symbol;[provider];[date];[cik];[use_cache])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},'=OBB.ETF.HOLDINGS("SPY")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"symbol")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Text")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Symbol to get data for. (ETF)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"True"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp, sec, defaults to fmp."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"A specific date to get data for. This needs to be ",(0,n.kt)("em",{parentName:"td"},"exactly")," the date of the filing. Use the holdings_date command/endpoint to find available filing dates for the ETF. (provider: fmp); A specific date to get data for.  The date represents the period ending.  The date entered will return the closest filing. (provider: sec)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cik"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"The CIK of the filing entity. Overrides symbol. (provider: fmp)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"use_cache"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether or not to use cache for the request. (provider: sec)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data. (ETF)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the ETF holding.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lei"),(0,n.kt)("td",{parentName:"tr",align:null},"The LEI of the holding. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"title"),(0,n.kt)("td",{parentName:"tr",align:null},"The title of the holding. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cusip"),(0,n.kt)("td",{parentName:"tr",align:null},"The CUSIP of the holding. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isin"),(0,n.kt)("td",{parentName:"tr",align:null},"The ISIN of the holding. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"balance"),(0,n.kt)("td",{parentName:"tr",align:null},"The balance of the holding. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"units"),(0,n.kt)("td",{parentName:"tr",align:null},"The units of the holding. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency"),(0,n.kt)("td",{parentName:"tr",align:null},"The currency of the holding. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},"The value of the holding in USD. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"weight"),(0,n.kt)("td",{parentName:"tr",align:null},"The weight of the holding in ETF in %. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"payoff_profile"),(0,n.kt)("td",{parentName:"tr",align:null},"The payoff profile of the holding. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"asset_category"),(0,n.kt)("td",{parentName:"tr",align:null},"The asset category of the holding. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"issuer_category"),(0,n.kt)("td",{parentName:"tr",align:null},"The issuer category of the holding. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"country"),(0,n.kt)("td",{parentName:"tr",align:null},"The country of the holding. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_restricted"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the holding is restricted. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fair_value_level"),(0,n.kt)("td",{parentName:"tr",align:null},"The fair value level of the holding. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_cash_collateral"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the holding is cash collateral. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_non_cash_collateral"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the holding is non-cash collateral. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_loan_by_fund"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether the holding is loan by fund. (provider: fmp, sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cik"),(0,n.kt)("td",{parentName:"tr",align:null},"The CIK of the filing. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"acceptance_datetime"),(0,n.kt)("td",{parentName:"tr",align:null},"The acceptance datetime of the filing. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"other_id"),(0,n.kt)("td",{parentName:"tr",align:null},"Internal identifier for the holding. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loan_value"),(0,n.kt)("td",{parentName:"tr",align:null},"The loan value of the holding. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"issuer_conditional"),(0,n.kt)("td",{parentName:"tr",align:null},"The issuer conditions of the holding. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"asset_conditional"),(0,n.kt)("td",{parentName:"tr",align:null},"The asset conditions of the holding. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"maturity_date"),(0,n.kt)("td",{parentName:"tr",align:null},"The maturity date of the debt security. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"coupon_kind"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of coupon for the debt security. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rate_type"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of rate for the debt security, floating or fixed. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"annualized_return"),(0,n.kt)("td",{parentName:"tr",align:null},"The annualized return on the debt security. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_default"),(0,n.kt)("td",{parentName:"tr",align:null},"If the debt security is defaulted. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"in_arrears"),(0,n.kt)("td",{parentName:"tr",align:null},"If the debt security is in arrears. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_paid_kind"),(0,n.kt)("td",{parentName:"tr",align:null},"If the debt security payments are are paid in kind. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"derivative_category"),(0,n.kt)("td",{parentName:"tr",align:null},"The derivative category of the holding. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"counterparty"),(0,n.kt)("td",{parentName:"tr",align:null},"The counterparty of the derivative. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"underlying_name"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the underlying asset associated with the derivative. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"option_type"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of option. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"derivative_payoff"),(0,n.kt)("td",{parentName:"tr",align:null},"The payoff profile of the derivative. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"expiry_date"),(0,n.kt)("td",{parentName:"tr",align:null},"The expiry or termination date of the derivative. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exercise_price"),(0,n.kt)("td",{parentName:"tr",align:null},"The exercise price of the option. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exercise_currency"),(0,n.kt)("td",{parentName:"tr",align:null},"The currency of the option exercise price. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"shares_per_contract"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of shares per contract. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"delta"),(0,n.kt)("td",{parentName:"tr",align:null},"The delta of the option. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rate_type_rec"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of rate for reveivable portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"receive_currency"),(0,n.kt)("td",{parentName:"tr",align:null},"The receive currency of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"upfront_receive"),(0,n.kt)("td",{parentName:"tr",align:null},"The upfront amount received of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"floating_rate_index_rec"),(0,n.kt)("td",{parentName:"tr",align:null},"The floating rate index for reveivable portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"floating_rate_spread_rec"),(0,n.kt)("td",{parentName:"tr",align:null},"The floating rate spread for reveivable portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rate_tenor_rec"),(0,n.kt)("td",{parentName:"tr",align:null},"The rate tenor for reveivable portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rate_tenor_unit_rec"),(0,n.kt)("td",{parentName:"tr",align:null},"The rate tenor unit for reveivable portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reset_date_rec"),(0,n.kt)("td",{parentName:"tr",align:null},"The reset date for reveivable portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reset_date_unit_rec"),(0,n.kt)("td",{parentName:"tr",align:null},"The reset date unit for reveivable portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rate_type_pmnt"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of rate for payment portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"payment_currency"),(0,n.kt)("td",{parentName:"tr",align:null},"The payment currency of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"upfront_payment"),(0,n.kt)("td",{parentName:"tr",align:null},"The upfront amount received of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"floating_rate_index_pmnt"),(0,n.kt)("td",{parentName:"tr",align:null},"The floating rate index for payment portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"floating_rate_spread_pmnt"),(0,n.kt)("td",{parentName:"tr",align:null},"The floating rate spread for payment portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rate_tenor_pmnt"),(0,n.kt)("td",{parentName:"tr",align:null},"The rate tenor for payment portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rate_tenor_unit_pmnt"),(0,n.kt)("td",{parentName:"tr",align:null},"The rate tenor unit for payment portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reset_date_pmnt"),(0,n.kt)("td",{parentName:"tr",align:null},"The reset date for payment portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reset_date_unit_pmnt"),(0,n.kt)("td",{parentName:"tr",align:null},"The reset date unit for payment portion of the swap. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"repo_type"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of repo. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_cleared"),(0,n.kt)("td",{parentName:"tr",align:null},"If the repo is cleared. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_tri_party"),(0,n.kt)("td",{parentName:"tr",align:null},"If the repo is tri party. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"principal_amount"),(0,n.kt)("td",{parentName:"tr",align:null},"The principal amount of the repo. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"principal_currency"),(0,n.kt)("td",{parentName:"tr",align:null},"The currency of the principal amount. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"collateral_type"),(0,n.kt)("td",{parentName:"tr",align:null},"The collateral type of the repo. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"collateral_amount"),(0,n.kt)("td",{parentName:"tr",align:null},"The collateral amount of the repo. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"collateral_currency"),(0,n.kt)("td",{parentName:"tr",align:null},"The currency of the collateral amount. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exchange_currency"),(0,n.kt)("td",{parentName:"tr",align:null},"The currency of the exchange rate. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exchange_rate"),(0,n.kt)("td",{parentName:"tr",align:null},"The exchange rate. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency_sold"),(0,n.kt)("td",{parentName:"tr",align:null},"The currency sold in a Forward Derivative. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency_amount_sold"),(0,n.kt)("td",{parentName:"tr",align:null},"The amount of currency sold in a Forward Derivative. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency_bought"),(0,n.kt)("td",{parentName:"tr",align:null},"The currency bought in a Forward Derivative. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency_amount_bought"),(0,n.kt)("td",{parentName:"tr",align:null},"The amount of currency bought in a Forward Derivative. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"notional_amount"),(0,n.kt)("td",{parentName:"tr",align:null},"The notional amount of the derivative. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"notional_currency"),(0,n.kt)("td",{parentName:"tr",align:null},"The currency of the derivative's notional amount. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"unrealized_gain"),(0,n.kt)("td",{parentName:"tr",align:null},"The unrealized gain or loss on the derivative. (provider: sec)")))))}s.isMDXComponent=!0}}]);