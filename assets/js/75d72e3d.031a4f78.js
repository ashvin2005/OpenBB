"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61242],{87559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(74848),o=t(28453),s=t(94331);const i={title:"skew",description:"Understand how to calculate portfolio and benchmark skewness with the OpenBBTerminal. Explore source code examples demonstrating how to harness Python for financial metric calculations.",keywords:["portfolio skewness","benchmark skewness","OpenBB finance","financial metrics","portfolio metrics","Python financial analysis","skew function","OpenBBTerminal examples"]},a=void 0,l={id:"sdk/reference/portfolio/metric/skew",title:"skew",description:"Understand how to calculate portfolio and benchmark skewness with the OpenBBTerminal. Explore source code examples demonstrating how to harness Python for financial metric calculations.",source:"@site/content/sdk/reference/portfolio/metric/skew.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/skew",permalink:"/sdk/reference/portfolio/metric/skew",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/metric/skew.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1718403738e3,frontMatter:{title:"skew",description:"Understand how to calculate portfolio and benchmark skewness with the OpenBBTerminal. Explore source code examples demonstrating how to harness Python for financial metric calculations.",keywords:["portfolio skewness","benchmark skewness","OpenBB finance","financial metrics","portfolio metrics","Python financial analysis","skew function","OpenBBTerminal examples"]},sidebar:"tutorialSidebar",previous:{title:"sharpe",permalink:"/sdk/reference/portfolio/metric/sharpe"},next:{title:"sortino",permalink:"/sdk/reference/portfolio/metric/sortino"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"portfolio.metric.skew - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(n.p,{children:"Get skewness for portfolio and benchmark selected"}),"\n",(0,r.jsxs)(n.p,{children:["Source Code: [",(0,r.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L987",children:"link"}),"]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"openbb.portfolio.metric.skew(portfolio_engine: portfolio_engine.PortfolioEngine)\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:"This function does not take any parameters."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pd.DataFrame"}),(0,r.jsx)(n.td,{children:"DataFrame with skewness for portfolio and benchmark for different periods"})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.skew(p)\n'})}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(5260),o=t(74848);function s(e){let{title:n}=e;return(0,o.jsx)(r.A,{children:(0,o.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);