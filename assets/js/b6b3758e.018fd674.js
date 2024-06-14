"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86035],{22630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var i=n(74848),s=n(28453),r=n(94331);const c={title:"add",description:"This page demonstrates how to use the 'add' function to input a projected stock price and its chance of occurrence into a data set. The tutorial is detailed and includes examples for easy comprehension.",keywords:["Stock Market","Stock Pricing","Stock Options","Pricing Projection","Options Pricing","Price Addition"]},o=void 0,d={id:"terminal/reference/stocks/options/pricing/add",title:"add",description:"This page demonstrates how to use the 'add' function to input a projected stock price and its chance of occurrence into a data set. The tutorial is detailed and includes examples for easy comprehension.",source:"@site/content/terminal/reference/stocks/options/pricing/add.md",sourceDirName:"terminal/reference/stocks/options/pricing",slug:"/terminal/reference/stocks/options/pricing/add",permalink:"/terminal/reference/stocks/options/pricing/add",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/pricing/add.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1718403738e3,frontMatter:{title:"add",description:"This page demonstrates how to use the 'add' function to input a projected stock price and its chance of occurrence into a data set. The tutorial is detailed and includes examples for easy comprehension.",keywords:["Stock Market","Stock Pricing","Stock Options","Pricing Projection","Options Pricing","Price Addition"]},sidebar:"tutorialSidebar",previous:{title:"plot",permalink:"/terminal/reference/stocks/options/plot"},next:{title:"rmv",permalink:"/terminal/reference/stocks/options/pricing/rmv"}},a={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"stocks/pricing/add /options - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(t.p,{children:"Adds a price to the list"}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"add -p PRICE -c CHANCE\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"price"}),(0,i.jsx)(t.td,{children:"Projected price of the stock at the expiration date"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"chance"}),(0,i.jsx)(t.td,{children:"Chance that the stock is at a given projected price"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 09:42 (\ud83e\udd8b) /stocks/options/pricing/ $ add -p 175 -c 0.5\n\n2022 Feb 16, 09:43 (\ud83e\udd8b) /stocks/options/pricing/ $ add -p 165 -c 0.5\n\n2022 Feb 16, 09:43 (\ud83e\udd8b) /stocks/options/pricing/ $ show\nEstimated price(s) of AAPL at 2022-05-20\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Price  \u2503 Chance \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 165.00 \u2502 0.50   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 175.00 \u2502 0.50   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(5260),s=n(74848);function r(e){let{title:t}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);