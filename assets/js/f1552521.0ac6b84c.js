"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27305],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(n),u=i,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(k,r(r({ref:e},c),{},{components:n})):a.createElement(k,r({ref:e},c))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(67294),i=n(35742);function l(t){let{title:e}=t;return a.createElement(i.Z,null,a.createElement("title",null,e))}},385:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),l=n(88828);const r={title:"Toolkits",sidebar_position:1,description:"This page describes the toolkit extensios  available for the OpenBB Platform.",keywords:["OpenBB Platform","Python client","Fast API","getting started","extensions","data providers","data extensions","toolkit extensions","toolkits","endpoints","community","technical analysis","quantitative analysis","charting libraries","Plotly","OpenBBFigure","PyWry"]},o=void 0,s={unversionedId:"platform/extensions/toolkit_extensions",id:"platform/extensions/toolkit_extensions",title:"Toolkits",description:"This page describes the toolkit extensios  available for the OpenBB Platform.",source:"@site/content/platform/extensions/toolkit_extensions.md",sourceDirName:"platform/extensions",slug:"/platform/extensions/toolkit_extensions",permalink:"/platform/extensions/toolkit_extensions",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/extensions/toolkit_extensions.md",tags:[],version:"current",lastUpdatedBy:"minhhoang1023",lastUpdatedAt:1705489831,formattedLastUpdatedAt:"Jan 17, 2024",sidebarPosition:1,frontMatter:{title:"Toolkits",sidebar_position:1,description:"This page describes the toolkit extensios  available for the OpenBB Platform.",keywords:["OpenBB Platform","Python client","Fast API","getting started","extensions","data providers","data extensions","toolkit extensions","toolkits","endpoints","community","technical analysis","quantitative analysis","charting libraries","Plotly","OpenBBFigure","PyWry"]},sidebar:"tutorialSidebar",previous:{title:"Data Extensions",permalink:"/platform/extensions/data_extensions"},next:{title:"Overview",permalink:"/platform/usage/"}},p={},c=[{value:"Charting",id:"charting",level:2},{value:"Installation",id:"installation",level:3},{value:"PyWry dependency in Linux",id:"pywry-dependency-in-linux",level:3},{value:"Devtools",id:"devtools",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Econometrics",id:"econometrics",level:2},{value:"Installation",id:"installation-2",level:3},{value:"Quantitative",id:"quantitative",level:2},{value:"Installation",id:"installation-3",level:3},{value:"Technical",id:"technical",level:2},{value:"Installation",id:"installation-4",level:3}],d={toc:c},m="wrapper";function u(t){let{components:e,...n}=t;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{title:"Toolkits - Extensions | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"OpenBB Toolkit Extensions expand the Platform with functions for manipulating data and preparing it for display. The Core Platform installation does not install any toolkit extensions. The table below is the current list of toolkit extensions."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Extension Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Installation Command"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Core/Community"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Router Path"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"openbb-charting"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Rest API charting service and Plotly library."),(0,i.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-charting"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,i.kt)("td",{parentName:"tr",align:"right"},"N/A")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"openbb-devtools"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Aggregates dependencies that facilitate a nice development experience for OpenBB."),(0,i.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-devtools"),(0,i.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,i.kt)("td",{parentName:"tr",align:"right"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"openbb-econometrics"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Econometrics models for the Python interface only."),(0,i.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-econometrics"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,i.kt)("td",{parentName:"tr",align:"right"},"obb.econometrics")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"openbb-quantitative"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Functions for performing quantitative analysis."),(0,i.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-quantitative"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,i.kt)("td",{parentName:"tr",align:"right"},"obb.quantitative")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"openbb-technical"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Functions for performing technical analysis."),(0,i.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-technical"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,i.kt)("td",{parentName:"tr",align:"right"},"obb.technical")))),(0,i.kt)("p",null,"The sections below outline any specific installation considerations for the extension."),(0,i.kt)("h2",{id:"charting"},"Charting"),(0,i.kt)("p",null,"The OpenBB Charting Extension supplies charting infrastructure and services to the OpenBB Platform. Figure objects are served via REST API or Python Client.  It utilizes ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/pywry"},"PyWry")," for handling the display of interactive charts and tables in a separate window, with a Plotly library. The extension framework allows developers to easily insert other Python charting libraries into the router pipeline."),(0,i.kt)("p",null,"Functions with charting enabled return figures to a field (",(0,i.kt)("inlineCode",{parentName:"p"},"chart"),") in the ",(0,i.kt)("inlineCode",{parentName:"p"},"OBBject")," response object. They are displayed with the class method, ",(0,i.kt)("inlineCode",{parentName:"p"},"show()"),". Additional Python libraries are installed with this extension:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"aiohttp"),(0,i.kt)("li",{parentName:"ul"},"nbformat"),(0,i.kt)("li",{parentName:"ul"},"pandas-ta"),(0,i.kt)("li",{parentName:"ul"},"plotly"),(0,i.kt)("li",{parentName:"ul"},"pywry"),(0,i.kt)("li",{parentName:"ul"},"reportlab"),(0,i.kt)("li",{parentName:"ul"},"scipy"),(0,i.kt)("li",{parentName:"ul"},"statsmodels"),(0,i.kt)("li",{parentName:"ul"},"svglib")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To install the extension, run the following command in this folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install openbb-charting\n")),(0,i.kt)("p",null,"To install from source in editable mode, navigate into the folder, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/openbb_platform/extensions/charting"),", and enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install -e .\n")),(0,i.kt)("p",null,"After installation, the Python interface will automatically rebuild on initialization.  This process can also be triggered manually with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import openbb\nopenbb.build()\n")),(0,i.kt)("p",null,"The Python interpreter may require a restart."),(0,i.kt)("h3",{id:"pywry-dependency-in-linux"},"PyWry dependency in Linux"),(0,i.kt)("p",null,"When using Linux distributions, the PyWry dependency requires certain dependencies to be installed first."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Debian-based / Ubuntu / Mint:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install libwebkit2gtk-4.0-dev"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Arch Linux / Manjaro:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo pacman -S webkit2gtk"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fedora:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo dnf install gtk3-devel webkit2gtk3-devel")))),(0,i.kt)("h2",{id:"devtools"},"Devtools"),(0,i.kt)("p",null,"This extension aggregates the dependencies that facilitate a nice development experience\nfor OpenBB. It does not contain any code itself, but rather pulls in the following dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bandit"),(0,i.kt)("li",{parentName:"ul"},"black"),(0,i.kt)("li",{parentName:"ul"},"ipykernel"),(0,i.kt)("li",{parentName:"ul"},"mypy"),(0,i.kt)("li",{parentName:"ul"},"poetry"),(0,i.kt)("li",{parentName:"ul"},"pre-commit"),(0,i.kt)("li",{parentName:"ul"},"pydocstyle"),(0,i.kt)("li",{parentName:"ul"},"pylint"),(0,i.kt)("li",{parentName:"ul"},"pytest"),(0,i.kt)("li",{parentName:"ul"},"pytest-cov"),(0,i.kt)("li",{parentName:"ul"},"ruff"),(0,i.kt)("li",{parentName:"ul"},"tox"),(0,i.kt)("li",{parentName:"ul"},"types-python-dateutil"),(0,i.kt)("li",{parentName:"ul"},"types-toml")),(0,i.kt)("h3",{id:"installation-1"},"Installation"),(0,i.kt)("p",null,"The extension is included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev_install.py")," script."),(0,i.kt)("p",null,"Standalone installation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb-devtools\n")),(0,i.kt)("h2",{id:"econometrics"},"Econometrics"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"openbb-econometrics")," extension installs a new router path (",(0,i.kt)("inlineCode",{parentName:"p"},"obb.econometrics"),") and additional Python libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"scipy"),(0,i.kt)("li",{parentName:"ul"},"statsmodels"),(0,i.kt)("li",{parentName:"ul"},"arch"),(0,i.kt)("li",{parentName:"ul"},"linearmodels")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This extension is not accessible via REST API because ",(0,i.kt)("inlineCode",{parentName:"p"},"statsmodels")," is not serializable.")),(0,i.kt)("h3",{id:"installation-2"},"Installation"),(0,i.kt)("p",null,"Install from PyPI with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb-econometrics\n")),(0,i.kt)("p",null,"To install from source in editable mode, navigate into the folder, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/openbb_platform/extensions/econometrics"),", and enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install -e .\n")),(0,i.kt)("p",null,"After installation, the Python interface will automatically rebuild on initialization."),(0,i.kt)("h2",{id:"quantitative"},"Quantitative"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"openbb-quantitative")," extension installs a new router path (",(0,i.kt)("inlineCode",{parentName:"p"},"obb.quantitative"),") and a few additional Python libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pandas-ta"),(0,i.kt)("li",{parentName:"ul"},"scipy"),(0,i.kt)("li",{parentName:"ul"},"statsmodels")),(0,i.kt)("h3",{id:"installation-3"},"Installation"),(0,i.kt)("p",null,"Install from PyPI with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb-quantitative\n")),(0,i.kt)("p",null,"To install from source in editable mode, navigate into the folder, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/openbb_platform/extensions/quantitative"),", and enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install -e .\n")),(0,i.kt)("p",null,"After installation, the Python interface will automatically rebuild on initialization."),(0,i.kt)("h2",{id:"technical"},"Technical"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"openbb-technical")," extension is for performing technical analysis on time series data. It installs a new router path (",(0,i.kt)("inlineCode",{parentName:"p"},"obb.techincal"),") and some additional Python libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pandas-ta"),(0,i.kt)("li",{parentName:"ul"},"scikit-learn"),(0,i.kt)("li",{parentName:"ul"},"scipy"),(0,i.kt)("li",{parentName:"ul"},"statsmodels")),(0,i.kt)("h3",{id:"installation-4"},"Installation"),(0,i.kt)("p",null,"Install from PyPI with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb-technical\n")),(0,i.kt)("p",null,"To install from source in editable mode, navigate into the folder, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/openbb_platform/extensions/technical"),", and enter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install -e .\n")),(0,i.kt)("p",null,"After installation, the Python interface will automatically rebuild on initialization."))}u.isMDXComponent=!0}}]);