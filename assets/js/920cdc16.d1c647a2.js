"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36587],{40531:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(74848),i=t(28453),s=t(94331);const o={title:"ef",description:"Detailed instructions on using the 'ef' function in portfolio optimization. This function plots random portfolios based on their risk and returns, providing visualization of the efficient frontier. It includes parameters for risk measures, nan filling methods, financial dataset periods, return calculations, and outlier handling.",keywords:["ef function","portfolio risk and return","efficient frontier","portfolio optimization","risk measures","random portfolios","CVaR","EVaR","Maximum Drawdown","Mean Absolute Deviation","nan_fill_method","financial dataset","yfinance data","risk-free rate","logarithmic returns","return frequency","outlier threshold","simulation parameters"]},d=void 0,a={id:"terminal/reference/portfolio/po/ef",title:"ef",description:"Detailed instructions on using the 'ef' function in portfolio optimization. This function plots random portfolios based on their risk and returns, providing visualization of the efficient frontier. It includes parameters for risk measures, nan filling methods, financial dataset periods, return calculations, and outlier handling.",source:"@site/content/terminal/reference/portfolio/po/ef.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/ef",permalink:"/terminal/reference/portfolio/po/ef",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/ef.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1718403738e3,frontMatter:{title:"ef",description:"Detailed instructions on using the 'ef' function in portfolio optimization. This function plots random portfolios based on their risk and returns, providing visualization of the efficient frontier. It includes parameters for risk measures, nan filling methods, financial dataset periods, return calculations, and outlier handling.",keywords:["ef function","portfolio risk and return","efficient frontier","portfolio optimization","risk measures","random portfolios","CVaR","EVaR","Maximum Drawdown","Mean Absolute Deviation","nan_fill_method","financial dataset","yfinance data","risk-free rate","logarithmic returns","return frequency","outlier threshold","simulation parameters"]},sidebar:"tutorialSidebar",previous:{title:"dividend",permalink:"/terminal/reference/portfolio/po/dividend"},next:{title:"equal",permalink:"/terminal/reference/portfolio/po/equal"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"portfolio/po/ef - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(r.p,{children:"This function plots random portfolios based on their risk and returns and shows the efficient frontier."}),"\n",(0,n.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"ef [-vs SHORT_ALLOCATION] [-n AMOUNT_PORTFOLIOS] [-se RANDOM_SEED] [-t] [--no_plot] [-rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}] [-mt METHOD] [-p PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-v LONG_ALLOCATION]\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"}),(0,n.jsx)(r.th,{children:"Choices"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"short_allocation"}),(0,n.jsx)(r.td,{children:"Amount to allocate to portfolio in short positions"}),(0,n.jsx)(r.td,{children:"0.0"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"amount_portfolios"}),(0,n.jsx)(r.td,{children:"Number of portfolios to simulate"}),(0,n.jsx)(r.td,{children:"100"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"random_seed"}),(0,n.jsx)(r.td,{children:"Seed used to generate random portfolios"}),(0,n.jsx)(r.td,{children:"123"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"tangency"}),(0,n.jsx)(r.td,{children:"Adds the optimal line with the risk-free asset"}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"plot_tickers"}),(0,n.jsx)(r.td,{children:"Whether or not to plot the tickers for the assets provided"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"risk_measure"}),(0,n.jsx)(r.td,{children:"Risk measure used to optimize the portfolio. Possible values are: 'MV' : Variance 'MAD' : Mean Absolute Deviation 'MSV' : Semi Variance (Variance of negative returns) 'FLPM' : First Lower Partial Moment 'SLPM' : Second Lower Partial Moment 'CVaR' : Conditional Value at Risk 'EVaR' : Entropic Value at Risk 'WR' : Worst Realization 'ADD' : Average Drawdown of uncompounded returns 'UCI' : Ulcer Index of uncompounded returns 'CDaR' : Conditional Drawdown at Risk of uncompounded returns 'EDaR' : Entropic Drawdown at Risk of uncompounded returns 'MDD' : Maximum Drawdown of uncompounded returns"}),(0,n.jsx)(r.td,{children:"MV"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"MV, MAD, MSV, FLPM, SLPM, CVaR, EVaR, WR, ADD, UCI, CDaR, EDaR, MDD"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"nan_fill_method"}),(0,n.jsx)(r.td,{children:"Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points"}),(0,n.jsx)(r.td,{children:"time"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"linear, time, nearest, zero, slinear, quadratic, cubic, barycentric"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"historic_period"}),(0,n.jsx)(r.td,{children:"Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset"}),(0,n.jsx)(r.td,{children:"3y"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"start_period"}),(0,n.jsx)(r.td,{children:"Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"end_period"}),(0,n.jsx)(r.td,{children:"End date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"log_returns"}),(0,n.jsx)(r.td,{children:"If use logarithmic or arithmetic returns to calculate returns"}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"return_frequency"}),(0,n.jsx)(r.td,{children:"Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns"}),(0,n.jsx)(r.td,{children:"d"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"d, w, m"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"max_nan"}),(0,n.jsx)(r.td,{children:"Max percentage of nan values accepted per asset to be considered in the optimization process"}),(0,n.jsx)(r.td,{children:"0.05"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"threshold_value"}),(0,n.jsx)(r.td,{children:"Value used to replace outliers that are higher to threshold in absolute value"}),(0,n.jsx)(r.td,{children:"0.3"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"risk_free"}),(0,n.jsx)(r.td,{children:"Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual"}),(0,n.jsx)(r.td,{children:"0.02924"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"significance_level"}),(0,n.jsx)(r.td,{children:"Significance level of CVaR, EVaR, CDaR and EDaR"}),(0,n.jsx)(r.td,{children:"0.05"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"long_allocation"}),(0,n.jsx)(r.td,{children:"Amount to allocate to portfolio"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"2022 Apr 05, 15:03 (\ud83e\udd8b) /portfolio/po/ $ ef\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://user-images.githubusercontent.com/61527316/161860003-e8b8ae93-ce8c-4e06-bad2-59c100f09325.png",alt:"Frontier"})}),"\n",(0,n.jsx)(r.hr,{})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(5260),i=t(74848);function s(e){let{title:r}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>d});var n=t(96540);const i={},s=n.createContext(i);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);