"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},33403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),o=n(88828);const i={title:"Platform vs SDK",sidebar_position:1,description:"The OpenBB SDK has evolved to become the OpenBB Platform. This page describes some of the key differences between the legacy version and the new architecture.",keywords:["what's new","v3","legacy","sdk","platform","api","FastAPI"]},l=void 0,s={unversionedId:"platform/faqs/platform_vs_sdk",id:"platform/faqs/platform_vs_sdk",title:"Platform vs SDK",description:"The OpenBB SDK has evolved to become the OpenBB Platform. This page describes some of the key differences between the legacy version and the new architecture.",source:"@site/content/platform/faqs/platform_vs_sdk.md",sourceDirName:"platform/faqs",slug:"/platform/faqs/platform_vs_sdk",permalink:"/platform/faqs/platform_vs_sdk",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/faqs/platform_vs_sdk.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",sidebarPosition:1,frontMatter:{title:"Platform vs SDK",sidebar_position:1,description:"The OpenBB SDK has evolved to become the OpenBB Platform. This page describes some of the key differences between the legacy version and the new architecture.",keywords:["what's new","v3","legacy","sdk","platform","api","FastAPI"]},sidebar:"tutorialSidebar",previous:{title:"FAQs",permalink:"/platform/faqs/"},next:{title:"Data and Data Providers",permalink:"/platform/faqs/data_providers"}},p={},m=[{value:"Terminal Application",id:"terminal-application",level:3},{value:"Extension Framework",id:"extension-framework",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"REST API Compliant",id:"rest-api-compliant",level:3},{value:"Verbose Namespaces",id:"verbose-namespaces",level:3},{value:"Asset Class Names",id:"asset-class-names",level:3},{value:"Source -&gt; Provider",id:"source---provider",level:3},{value:"API Key Management",id:"api-key-management",level:3},{value:"OpenBB Hub Login",id:"openbb-hub-login",level:3},{value:"Function Outputs",id:"function-outputs",level:3},{value:"Jupyter",id:"jupyter",level:3},{value:"Views",id:"views",level:3},{value:"Getting Started",id:"getting-started",level:3}],c={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"What's the Difference Between OpenBB Platform and SDK? - FAQs | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"If you're already an OpenBB user, you may be familiar with some of the legacy pain points. As ",(0,r.kt)("a",{parentName:"p",href:"https://openbb.co/blog/celebrating-the-openbb-platform-v4-beta"},"this")," blog post highlights, there were many challenges with maintaining the existing codebase. We needed to refresh the architecture to make it modular, resilient, and scalable. The core components have been trimmed substantially to be lean and efficient - the number of dependencies has reduced from nearly four-hundred down to about twenty. The result is a much smoother installation procedure, with the tradeoff being some breaking changes for those transitioning from V3 SDK to the V4 Platform. The major differences are described below."),(0,r.kt)("h3",{id:"terminal-application"},"Terminal Application"),(0,r.kt)("p",null,"The OpenBB Terminal is not installed with the Platform. The Terminal will be reimagined with the new extension framework, it won't get left behind for long!"),(0,r.kt)("h3",{id:"extension-framework"},"Extension Framework"),(0,r.kt)("p",null,"The extension framework lets users install or uninstall individual data and toolkit extensions. No more bloated environments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install openbb-yfinance\n\npip uninstall openbb-yfinance\n")),(0,r.kt)("h3",{id:"import-statement"},"Import Statement"),(0,r.kt)("p",null,"Initialize the OpenBB Platform with a shorter statement and reduced import time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\n")),(0,r.kt)("h3",{id:"rest-api-compliant"},"REST API Compliant"),(0,r.kt)("p",null,"The OpenBB Platform is built for REST API deployments, out-of-the-box. Outputs are JSON serializable, and this is a major difference between the SDK and Platform."),(0,r.kt)("p",null,"Start the API on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"uvicorn openbb_core.api.rest_api:app\n")),(0,r.kt)("h3",{id:"verbose-namespaces"},"Verbose Namespaces"),(0,r.kt)("p",null,"After careful consideration, the decision was made to name functions with more verbosity. This adds clarity to the functions and lets the user better understand its purpose. It also improves the performance of AI tooling built on top of the Platform."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.fundamental.employee_count("AAPL")\n')),(0,r.kt)("h3",{id:"asset-class-names"},"Asset Class Names"),(0,r.kt)("p",null,"Some asset classes have been renamed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"stocks -> equity"),(0,r.kt)("li",{parentName:"ul"},"forex -> currency"),(0,r.kt)("li",{parentName:"ul"},"stocks.options -> derivatives.options"),(0,r.kt)("li",{parentName:"ul"},"futures -> derivatives.futures")),(0,r.kt)("h3",{id:"source---provider"},"Source -> Provider"),(0,r.kt)("p",null,"V3 SDK users should note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," parameter is now, ",(0,r.kt)("inlineCode",{parentName:"p"},"provider"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"OpenBB Hub Preferences for default sources do not currently sync with V4 Platform, and some API keys not used in the Terminal application are not able to be saved to the Hub.")),(0,r.kt)("h3",{id:"api-key-management"},"API Key Management"),(0,r.kt)("p",null,"API keys and user preferences are stored in a JSON file - ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.openbb_platform/user_settings.json")," - instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ENV")," file in ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.openbb_sdk/.env"),"."),(0,r.kt)("p",null,"Credentials can be entered directly from the Python interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb import obb\nobb.user.credentials.fmp_api_key="REPLACE_WITH_YOUR_KEY"\n')),(0,r.kt)("h3",{id:"openbb-hub-login"},"OpenBB Hub Login"),(0,r.kt)("p",null,"Login to your OpenBB Hub account with an email/password combo or a revokable Personal Access Token (recommended):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\nobb.account.login()\n")),(0,r.kt)("h3",{id:"function-outputs"},"Function Outputs"),(0,r.kt)("p",null,'The default output format can be selected by the user, and all outputs are Pydantic models. If you are transitioning from V3 SDK and like working with Pandas DataFrames, set the preference to "dataframe" to get a V3-like response.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb import obb\nobb.user.preferences.output_type="dataframe"\ndf = obb.equity.price.historical("AAPL", provider="yfinance")\n')),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"output_type")," is set to, ",(0,r.kt)("inlineCode",{parentName:"p"},"OBBject"),", DataFrames are created from the response object after it is returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb import obb\ndata = obb.equity.price.historical("AAPL", provider="yfinance")\ndf = data.to_df()\n')),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"DataFrames are not JSON serializable. Changing this preference will remove REST API compatibility.")),(0,r.kt)("h3",{id:"jupyter"},"Jupyter"),(0,r.kt)("p",null,"Jupyter does not get installed with the OpenBB Platform. Install from ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," in the environment containing the Platform."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install jupyter-lab\n")),(0,r.kt)("h3",{id:"views"},"Views"),(0,r.kt)("p",null,"Most of the development has been on the core architecture and data providers. Most views from the V3 SDK and Terminal have yet to be ported over to the V4 Platform, although some charts are already available with the ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb-charting")," toolkit extension - which includes PyWry for window creation."),(0,r.kt)("p",null,"Install the charting extension with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install openbb-charting\n")),(0,r.kt)("p",null,"The equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},'openbb.stocks.candle("AAPL")')," is, ",(0,r.kt)("inlineCode",{parentName:"p"},'obb.equity.price.historical("AAPL", chart=True).show()'),"."),(0,r.kt)("p",null,"More views to come soon!"),(0,r.kt)("h3",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/platform/usage"},"usage")," page for examples on getting started using the OpenBB Platform."))}u.isMDXComponent=!0}}]);