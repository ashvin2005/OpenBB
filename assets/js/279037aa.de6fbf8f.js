"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3977],{52742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(74848),o=n(28453),s=n(94331);const i={title:"unitroot",description:"This page provides comprehensive instructions and usage examples for the unitroot tool. Unitroot, used for unit root test and stationarity, offers multiple regression methods including c, ct, ctt, and nc.",keywords:["unitroot","unit root test","stationarity","ADF","KPSS","regression","programming"]},c=void 0,a={id:"terminal/reference/crypto/qa/unitroot",title:"unitroot",description:"This page provides comprehensive instructions and usage examples for the unitroot tool. Unitroot, used for unit root test and stationarity, offers multiple regression methods including c, ct, ctt, and nc.",source:"@site/content/terminal/reference/crypto/qa/unitroot.md",sourceDirName:"terminal/reference/crypto/qa",slug:"/terminal/reference/crypto/qa/unitroot",permalink:"/terminal/reference/crypto/qa/unitroot",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/qa/unitroot.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1718403738e3,frontMatter:{title:"unitroot",description:"This page provides comprehensive instructions and usage examples for the unitroot tool. Unitroot, used for unit root test and stationarity, offers multiple regression methods including c, ct, ctt, and nc.",keywords:["unitroot","unit root test","stationarity","ADF","KPSS","regression","programming"]},sidebar:"tutorialSidebar",previous:{title:"summary",permalink:"/terminal/reference/crypto/qa/summary"},next:{title:"ad",permalink:"/terminal/reference/crypto/ta/ad"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"crypto/qa/unitroot - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Unit root test / stationarity (ADF, KPSS)"}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"unitroot [-r {c,ct,ctt,nc}] [-k {c,ct}]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fuller_reg"}),(0,r.jsx)(t.td,{children:"Type of regression. Can be \u2018c\u2019,\u2019ct\u2019,\u2019ctt\u2019,\u2019nc\u2019 'c' - Constant and t - trend order"}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"c, ct, ctt, nc"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kpss_reg"}),(0,r.jsx)(t.td,{children:"Type of regression. Can be \u2018c\u2019,\u2019ct'"}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"c, ct"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 11:16 (\ud83e\udd8b) /stocks/qa/ $ unitroot\n         Unit Root Calculation\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503                \u2503 ADF        \u2503 KPSS   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 Test Statistic \u2502 -28.9536   \u2502 0.2928 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 P-Value        \u2502 0.0000     \u2502 0.1000 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 NLags          \u2502 0.0000     \u2502 3      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Nobs           \u2502 759.0000   \u2502        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ICBest         \u2502 -3339.2013 \u2502        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(5260),o=n(74848);function s(e){let{title:t}=e;return(0,o.jsx)(r.A,{children:(0,o.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);