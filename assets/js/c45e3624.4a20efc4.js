"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(35742);function l(e){let{title:t}=e;return a.createElement(i.Z,null,a.createElement("title",null,t))}},20049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),l=n(88828);const r={title:"Installation and Updates",sidebar_position:1,description:"This page provides comprehensive insights about installing and updating the OpenBB Terminal. It discusses system requirements, installation process, common errors and their solutions. Information about updating the OpenBB Terminal through different methods is also covered.",keywords:["OpenBB Terminal installation","Updating OpenBB Terminal","System requirements for OpenBB Terminal","Installation errors with OpenBB Terminal","Python pip installation","Microsoft Visual C++","Homebrew installation","libomp","Conda installation issue"]},o=void 0,s={unversionedId:"terminal/faqs/installation_updates",id:"terminal/faqs/installation_updates",title:"Installation and Updates",description:"This page provides comprehensive insights about installing and updating the OpenBB Terminal. It discusses system requirements, installation process, common errors and their solutions. Information about updating the OpenBB Terminal through different methods is also covered.",source:"@site/content/terminal/faqs/installation_updates.md",sourceDirName:"terminal/faqs",slug:"/terminal/faqs/installation_updates",permalink:"/terminal/faqs/installation_updates",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/faqs/installation_updates.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1701462427,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:1,frontMatter:{title:"Installation and Updates",sidebar_position:1,description:"This page provides comprehensive insights about installing and updating the OpenBB Terminal. It discusses system requirements, installation process, common errors and their solutions. Information about updating the OpenBB Terminal through different methods is also covered.",keywords:["OpenBB Terminal installation","Updating OpenBB Terminal","System requirements for OpenBB Terminal","Installation errors with OpenBB Terminal","Python pip installation","Microsoft Visual C++","Homebrew installation","libomp","Conda installation issue"]},sidebar:"tutorialSidebar",previous:{title:"FAQs",permalink:"/terminal/faqs/"},next:{title:"Launching",permalink:"/terminal/faqs/launching"}},p={},u=[{value:"Installation and Updates",id:"installation-and-updates",level:2},{value:"PyPi Nightly",id:"pypi-nightly",level:3}],m={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{title:"Installation and Updates - Faqs | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,i.kt)("h2",{id:"installation-and-updates"},"Installation and Updates"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How much hard drive space is required?"),(0,i.kt)("p",null,"An installation will use approximately 4-5 GB of space, with additional storage required for optional machine learning models.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"What is the minimum version of Windows or MacOS required to install the OpenBB Terminal?"),(0,i.kt)("p",null,"The OpenBB Terminal installation packages are compatible with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows 10 or later."),(0,i.kt)("li",{parentName:"ul"},"MacOS Monterey or later.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Machines which are not compatible with the installer packages may be able to install from the source code.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How do I update my installation to the latest version?"),(0,i.kt)("p",null,"The terminal is constantly being updated with new features and bug fixes. The process for updating will vary by the installation type:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As of version 2.4.1, the Windows installer has an option for uninstalling the existing prior to updating."),(0,i.kt)("li",{parentName:"ul"},"For other installer versions, uninstall the previous version (uninstall.exe for Windows, delete the Application folder on MacOS); then, download the latest version and reinstall. User settings and data will remain."),(0,i.kt)("li",{parentName:"ul"},"For a ",(0,i.kt)("inlineCode",{parentName:"li"},"pip")," installation, when a new version is published: ",(0,i.kt)("inlineCode",{parentName:"li"},"pip install -U openbb[all]")),(0,i.kt)("li",{parentName:"ul"},"Upgrade a cloned version of the GitHub repo with:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"git fetch\ngit pull\npoetry install -E all\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes:")," If the cloned repository is a fork, pull from: ",(0,i.kt)("inlineCode",{parentName:"p"},"git pull origin main")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"git pull origin develop"),". If there are changes locally to the files that conflict with the incoming changes from GitHub, stash them before pulling from main with ",(0,i.kt)("inlineCode",{parentName:"p"},"git stash"),".")),(0,i.kt)("h3",{id:"pypi-nightly"},"PyPi Nightly"),(0,i.kt)("p",null,"The nightly build can be installed with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb-terminal-nightly[all]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": This version may not be stable and should not be used in a production setting."),(0,i.kt)("details",null,(0,i.kt)("summary",null,'"Microsoft Visual C++ 14.0 or greater is required"'),(0,i.kt)("p",null,"Download and install ",(0,i.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},"C++ Build Tools"),", restart the machine, then try again."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/ceb57be0-6dae-42f2-aca6-bf62ce7d6135",alt:"image"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/f8aef8fc-a080-4164-bd36-460714ec44f3",alt:"image"}))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Error: failed building wheel for bt"),(0,i.kt)("p",null,'There may be an additional message that is printed from this error, stating: "Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools".'),(0,i.kt)("p",null,"Download and install it. ",(0,i.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},"https://visualstudio.microsoft.com/visual-cpp-build-tools/")),(0,i.kt)("p",null,"Mac and Linux users may also encounter a similar error because a C++ compiler is not installed. Install Homebrew:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,i.kt)("p",null,"Then run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"brew install gcc\nbrew install cmake\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Miniconda3 will not install on ARM/Linux Raspberry Pi machines."),(0,i.kt)("p",null,"Refer to this issue on the Conda ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/conda/conda/issues/10723"},"GitHub")," page.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Error: Library not loaded: '/usr/local/opt/libomp/lib/libomp.dylib'"),(0,i.kt)("p",null,"This error is resolved by installing libomp from Homebrew:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"brew install libomp\n"))))}c.isMDXComponent=!0}}]);