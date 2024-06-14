"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13717],{3789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(74848),s=n(28453),a=n(94331);const i={title:"cusum",description:"Documentation page for the Cumulative Sum Algorithm (CUSUM) used in the OpenBB Terminal for quantitative analysis. Contains a snippet of the source code, parameters descriptions, and an example of usage.",keywords:["OpenBB Terminal documentation","Cumulative Sum Algorithm","CUSUM","quantitative analysis","parameters description","OpenBB SDK"]},d=void 0,l={id:"sdk/reference/qa/cusum",title:"cusum",description:"Documentation page for the Cumulative Sum Algorithm (CUSUM) used in the OpenBB Terminal for quantitative analysis. Contains a snippet of the source code, parameters descriptions, and an example of usage.",source:"@site/content/sdk/reference/qa/cusum.md",sourceDirName:"sdk/reference/qa",slug:"/sdk/reference/qa/cusum",permalink:"/sdk/reference/qa/cusum",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/qa/cusum.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1718403738e3,frontMatter:{title:"cusum",description:"Documentation page for the Cumulative Sum Algorithm (CUSUM) used in the OpenBB Terminal for quantitative analysis. Contains a snippet of the source code, parameters descriptions, and an example of usage.",keywords:["OpenBB Terminal documentation","Cumulative Sum Algorithm","CUSUM","quantitative analysis","parameters description","OpenBB SDK"]},sidebar:"tutorialSidebar",previous:{title:"cdf",permalink:"/sdk/reference/qa/cdf"},next:{title:"decompose",permalink:"/sdk/reference/qa/decompose"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"qa.cusum - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Plots Cumulative sum algorithm (CUSUM) to detect abrupt changes in data"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L523",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"openbb.qa.cusum(data: pd.DataFrame, target: str, threshold: float = 5, drift: float = 2.1, external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Dataframe"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"target"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Column of data to look at"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"threshold"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Threshold value"}),(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"drift"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Drift parameter"}),(0,r.jsx)(t.td,{children:"2.1"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"external_axes"}),(0,r.jsx)(t.td,{children:"Optional[List[plt.Axes]]"}),(0,r.jsx)(t.td,{children:"External axes (2 axes are expected in the list), by default None"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"This function does not return anything"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\ndf = openbb.stocks.load("AAPL")\nopenbb.qa.cusum(data=df, target="Adj Close")\n'})}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(5260),s=n(74848);function a(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);