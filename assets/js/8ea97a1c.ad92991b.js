"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58408],{8943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var r=n(74848),s=n(28453),i=n(94331);const d={title:"twitter",description:"This page explains how to set a Twitter API key in OpenBB Terminal, including a detailed explanation of parameters and example code. Learn how to use OpenBB to interact with Twitter's API.",keywords:["Twitter API","API key","Coding examples","Jupyter notebook","openbb keys twitter","Environment variables","API secret","API token","persist","show_output"]},l=void 0,a={id:"sdk/reference/keys/twitter",title:"twitter",description:"This page explains how to set a Twitter API key in OpenBB Terminal, including a detailed explanation of parameters and example code. Learn how to use OpenBB to interact with Twitter's API.",source:"@site/content/sdk/reference/keys/twitter.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/twitter",permalink:"/sdk/reference/keys/twitter",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/keys/twitter.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1718403738e3,frontMatter:{title:"twitter",description:"This page explains how to set a Twitter API key in OpenBB Terminal, including a detailed explanation of parameters and example code. Learn how to use OpenBB to interact with Twitter's API.",keywords:["Twitter API","API key","Coding examples","Jupyter notebook","openbb keys twitter","Environment variables","API secret","API token","persist","show_output"]},sidebar:"tutorialSidebar",previous:{title:"tradier",permalink:"/sdk/reference/keys/tradier"},next:{title:"walert",permalink:"/sdk/reference/keys/walert"}},c={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"keys.twitter - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Set Twitter key"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1132",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"openbb.keys.twitter(key: str, secret: str, access_token: str, persist: bool = False, show_output: bool = False)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"API key"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"secret"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"API secret"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"access_token"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"API token"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"persist"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsxs)(t.td,{children:["If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.",(0,r.jsx)("br",{}),"If True, api key change will be global, i.e. it will affect terminal environment variables.",(0,r.jsx)("br",{}),"By default, False."]}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"show_output"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Display status string or not. By default, False."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Status of key set"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nopenbb.keys.twitter(\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'key="example_key",\n        secret="example_secret",\n        access_token="example_access_token"\n    )\n'})}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);