"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58568],{28673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(74848),r=n(28453),i=n(94331);const s={title:"kc",description:"This documentation page provides detailed information about Keltner Channels, a volatility-based band applied onto an asset's price. These channels aid in trend determination by employing average true range (ATR) or volatility. The page also provides comprehensive instructions about how to use and parameterize the 'kc' tool.",keywords:["Keltner Channels","volatility-based bands","average true range","ATR","trend determination","kc","kc parameters","n_length","n_scalar","s_mamode","n_offset","kc usage"]},d=void 0,o={id:"terminal/reference/etf/ta/kc",title:"kc",description:"This documentation page provides detailed information about Keltner Channels, a volatility-based band applied onto an asset's price. These channels aid in trend determination by employing average true range (ATR) or volatility. The page also provides comprehensive instructions about how to use and parameterize the 'kc' tool.",source:"@site/content/terminal/reference/etf/ta/kc.md",sourceDirName:"terminal/reference/etf/ta",slug:"/terminal/reference/etf/ta/kc",permalink:"/terminal/reference/etf/ta/kc",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/etf/ta/kc.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1718403738e3,frontMatter:{title:"kc",description:"This documentation page provides detailed information about Keltner Channels, a volatility-based band applied onto an asset's price. These channels aid in trend determination by employing average true range (ATR) or volatility. The page also provides comprehensive instructions about how to use and parameterize the 'kc' tool.",keywords:["Keltner Channels","volatility-based bands","average true range","ATR","trend determination","kc","kc parameters","n_length","n_scalar","s_mamode","n_offset","kc usage"]},sidebar:"tutorialSidebar",previous:{title:"hma",permalink:"/terminal/reference/etf/ta/hma"},next:{title:"macd",permalink:"/terminal/reference/etf/ta/macd"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{title:"etf/ta/kc - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsx)(t.p,{children:"Keltner Channels are volatility-based bands that are placed on either side of an asset's price and can aid in determining the direction of a trend.The Keltner channel uses the average true range (ATR) or volatility, with breaks above or below the top and bottom barriers signaling a continuation."}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"kc [-l N_LENGTH] [-s N_SCALAR] [-m {ema,sma,wma,hma,zlma}] [-o N_OFFSET]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_length"}),(0,a.jsx)(t.td,{children:"Window length"}),(0,a.jsx)(t.td,{children:"20"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_scalar"}),(0,a.jsx)(t.td,{children:"scalar"}),(0,a.jsx)(t.td,{children:"2"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"s_mamode"}),(0,a.jsx)(t.td,{children:"mamode"}),(0,a.jsx)(t.td,{children:"ema"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"ema, sma, wma, hma, zlma"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_offset"}),(0,a.jsx)(t.td,{children:"offset"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154311120-a769ee53-901b-401f-907f-cacac43ee9b9.png",alt:"kc"})}),"\n",(0,a.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(5260),r=n(74848);function i(e){let{title:t}=e;return(0,r.jsx)(a.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var a=n(96540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);