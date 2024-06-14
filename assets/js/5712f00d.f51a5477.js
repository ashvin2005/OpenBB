"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89200],{52019:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var n=a(74848),r=a(28453),i=a(94331);const d={title:"zlma",description:"Zero lag exponential moving average (ZLEMA) indicator documentation. Learn how to use and implement the ZLEMA in your data studies with its parameters and usage. Devised by John Ehlers and Ric Way, ZLEMA aids in providing a de-lagged calculation of data.",keywords:["zlma","zero lag exponential moving average","John Ehlers","Ric Way","EMA","de-lagged data","moving average"]},s=void 0,o={id:"terminal/reference/etf/ta/zlma",title:"zlma",description:"Zero lag exponential moving average (ZLEMA) indicator documentation. Learn how to use and implement the ZLEMA in your data studies with its parameters and usage. Devised by John Ehlers and Ric Way, ZLEMA aids in providing a de-lagged calculation of data.",source:"@site/content/terminal/reference/etf/ta/zlma.md",sourceDirName:"terminal/reference/etf/ta",slug:"/terminal/reference/etf/ta/zlma",permalink:"/terminal/reference/etf/ta/zlma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/etf/ta/zlma.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1718403738e3,frontMatter:{title:"zlma",description:"Zero lag exponential moving average (ZLEMA) indicator documentation. Learn how to use and implement the ZLEMA in your data studies with its parameters and usage. Devised by John Ehlers and Ric Way, ZLEMA aids in providing a de-lagged calculation of data.",keywords:["zlma","zero lag exponential moving average","John Ehlers","Ric Way","EMA","de-lagged data","moving average"]},sidebar:"tutorialSidebar",previous:{title:"wma",permalink:"/terminal/reference/etf/ta/wma"},next:{title:"weights",permalink:"/terminal/reference/etf/weights"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"etf/ta/zlma - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:'The zero lag exponential moving average (ZLEMA) indicator was created by John Ehlers and Ric Way. The idea is do a regular exponential moving average (EMA) calculation but on a de-lagged data instead of doing it on the regular data. Data is de-lagged by removing the data from "lag" days ago thus removing (or attempting to) the cumulative effect of the moving average.'}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"zlma [-l N_LENGTH] [-o N_OFFSET]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_length"}),(0,n.jsx)(t.td,{children:"Window lengths. Multiple values indicated as comma separated values."}),(0,n.jsx)(t.td,{children:"20"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_offset"}),(0,n.jsx)(t.td,{children:"offset"}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154312786-bc60268b-9da9-4fd9-bed6-fc95f5560075.png",alt:"zlma"})}),"\n",(0,n.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(5260),r=a(74848);function i(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,a)=>{a.d(t,{R:()=>d,x:()=>s});var n=a(96540);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);