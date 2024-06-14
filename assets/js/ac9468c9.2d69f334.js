"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87078],{61513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(74848),r=t(28453),o=t(94331);const a={title:"Deprecating Endpoints",sidebar_position:11,description:"This guide provides detailed instructions on how to deprecate an endpoint in the OpenBB Platform.",keywords:["OpenBB community","OpenBB Platform","Custom commands","API","Python Interface","Deprecation","Deprecated"]},d=void 0,s={id:"platform/developer_guide/deprecating_endpoints",title:"Deprecating Endpoints",description:"This guide provides detailed instructions on how to deprecate an endpoint in the OpenBB Platform.",source:"@site/content/platform/developer_guide/deprecating_endpoints.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/deprecating_endpoints",permalink:"/platform/developer_guide/deprecating_endpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/developer_guide/deprecating_endpoints.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1718403738e3,sidebarPosition:11,frontMatter:{title:"Deprecating Endpoints",sidebar_position:11,description:"This guide provides detailed instructions on how to deprecate an endpoint in the OpenBB Platform.",keywords:["OpenBB community","OpenBB Platform","Custom commands","API","Python Interface","Deprecation","Deprecated"]},sidebar:"tutorialSidebar",previous:{title:"GitHub",permalink:"/platform/developer_guide/github"},next:{title:"Tests",permalink:"/platform/developer_guide/tests"}},p={},c=[{value:"Deprecating an endpoint",id:"deprecating-an-endpoint",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{title:"Deprecating Endpoints - How-To | OpenBB Platform Docs"}),"\n",(0,i.jsx)(n.p,{children:"Deprecating commands is essential to maintaining the OpenBB Platform. This guide outlines the process for deprecating an endpoint."}),"\n",(0,i.jsx)(n.h2,{id:"deprecating-an-endpoint",children:"Deprecating an endpoint"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the new endpoint that will replace the deprecated one."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the deprecation warning"}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.strong,{children:"router"})," where the endpoint to be deprecated exists. Set the ",(0,i.jsx)(n.code,{children:"deprecated"})," flag to ",(0,i.jsx)(n.code,{children:"True"})," and add ",(0,i.jsx)(n.code,{children:"deprecation=OpenBBDeprecationWarning(\u2026)"})," argument to the decorator. Refer to the example below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'\nfrom openbb_core.app.deprecation import OpenBBDeprecationWarning\n\n    @router.command(\n        model="MarketIndices",\n        deprecated=True,\n        deprecation=OpenBBDeprecationWarning(\n            message="This endpoint is deprecated; use `/index/price/historical` instead.",\n            since=(4, 1),\n            expected_removal=(4, 5),\n        ),\n    )\n    async def market(\n        cc: CommandContext,\n        provider_choices: ProviderChoices,\n        standard_params: StandardParams,\n        extra_params: ExtraParams,\n    ) -> OBBject:\n        """Historical Market Indices."""\n    return await OBBject.from_query(Query(**locals()))\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Get approval from a OpenBB Platform maintainer: We will help you determine the appropriate version for the deprecation warning, and communicate the change(s) to the relevant personnel that might depend on the endpoint you are deprecating."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Remove as we say - the endpoint will be removed in the version specified in the deprecation warning."}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(5260),r=t(74848);function o(e){let{title:n}=e;return(0,r.jsx)(i.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var i=t(96540);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);