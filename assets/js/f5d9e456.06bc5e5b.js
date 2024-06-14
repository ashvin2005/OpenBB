"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99139],{53902:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=i(74848),t=i(28453),o=i(94331);const a={title:"Installation and Updates",sidebar_position:1,description:"This page provides detailed instructions for the installation and updating processes for software, addressing frequently encountered installation issues. These instructions include resolving Microsoft Visual C++ 14.0 dependencies, benefits of using Miniconda for package management, methods to update installations, and solutions for other common installation errors.",keywords:["Installation","Updates","Microsoft Visual C++ 14.0","Miniconda","pip install","PyPi Nightly","C++ Build Tools","Homebrew","bt wheel build failure","ARM/Linux Raspberry Pi machines"]},l=void 0,r={id:"sdk/faqs/installation_updates",title:"Installation and Updates",description:"This page provides detailed instructions for the installation and updating processes for software, addressing frequently encountered installation issues. These instructions include resolving Microsoft Visual C++ 14.0 dependencies, benefits of using Miniconda for package management, methods to update installations, and solutions for other common installation errors.",source:"@site/content/sdk/faqs/installation_updates.md",sourceDirName:"sdk/faqs",slug:"/sdk/faqs/installation_updates",permalink:"/sdk/faqs/installation_updates",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/faqs/installation_updates.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1718403738e3,sidebarPosition:1,frontMatter:{title:"Installation and Updates",sidebar_position:1,description:"This page provides detailed instructions for the installation and updating processes for software, addressing frequently encountered installation issues. These instructions include resolving Microsoft Visual C++ 14.0 dependencies, benefits of using Miniconda for package management, methods to update installations, and solutions for other common installation errors.",keywords:["Installation","Updates","Microsoft Visual C++ 14.0","Miniconda","pip install","PyPi Nightly","C++ Build Tools","Homebrew","bt wheel build failure","ARM/Linux Raspberry Pi machines"]},sidebar:"tutorialSidebar",previous:{title:"FAQs",permalink:"/sdk/faqs/"},next:{title:"Import Errors",permalink:"/sdk/faqs/import_errors"}},d={},c=[{value:"PyPi Nightly",id:"pypi-nightly",level:3}];function u(e){const s={a:"a",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"Installation and Updates - Faqs | OpenBB SDK Docs"}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:'"Microsoft Visual C++ 14.0 or greater is required"'}),(0,n.jsxs)(s.p,{children:["Download and install ",(0,n.jsx)(s.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"C++ Build Tools"}),", restart the machine, then try again."]}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/ceb57be0-6dae-42f2-aca6-bf62ce7d6135",alt:"image"})}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/f8aef8fc-a080-4164-bd36-460714ec44f3",alt:"image"})})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Do I have to use Miniconda?"}),(0,n.jsxs)(s.p,{children:["There are certain dependencies which are sourced exclusively from the ",(0,n.jsx)(s.code,{children:"conda-forge"})," directory. Other virtual environment managers, such a ",(0,n.jsx)(s.code,{children:"venv"}),", may not solve the environment properly, resulting in failed package installations or incorrect builds. We highly recommend using Miniconda as the Python virtual environment manager for installing the OpenBB SDK."]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"How do I update my installation to the latest version?"}),(0,n.jsx)(s.p,{children:"The code is constantly being updated with new features and bug fixes. The process for updating will vary by the installation type:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["For a ",(0,n.jsx)(s.code,{children:"pip"})," installation, when a new version is published: ",(0,n.jsx)(s.code,{children:"pip install -U openbb[all]"})]}),"\n",(0,n.jsx)(s.li,{children:"Upgrade a cloned version of the GitHub repo with:"}),"\n"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-console",children:"git fetch\ngit pull\npoetry install -E all\n"})}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Notes:"})," If the cloned repository is a fork, pull from: ",(0,n.jsx)(s.code,{children:"git pull origin main"}),", or, ",(0,n.jsx)(s.code,{children:"git pull origin develop"}),". If there are changes locally to the files that conflict with the incoming changes from GitHub, stash them before pulling from main with ",(0,n.jsx)(s.code,{children:"git stash"}),"."]})]}),"\n",(0,n.jsx)(s.h3,{id:"pypi-nightly",children:"PyPi Nightly"}),"\n",(0,n.jsx)(s.p,{children:"The nightly build can be installed with:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-console",children:"pip install openbb-terminal-nightly[all]\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note"}),": This version may not be stable and should not be used in a production setting."]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:'"Microsoft Visual C++ 14.0 or greater is required"'}),(0,n.jsxs)(s.p,{children:["Download and install ",(0,n.jsx)(s.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"C++ Build Tools"}),", restart the machine, then try again."]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Error: failed building wheel for bt"}),(0,n.jsx)(s.p,{children:'There may be an additional message that is printed from this error, stating: "Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools".'}),(0,n.jsxs)(s.p,{children:["Download and install it. ",(0,n.jsx)(s.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"})]}),(0,n.jsx)(s.p,{children:"Mac and Linux users may also encounter a similar error because a C++ compiler is not installed. Install Homebrew:"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-console",children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),(0,n.jsx)(s.p,{children:"Then run:"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-console",children:"brew install gcc\nbrew install cmake\n"})}),(0,n.jsx)(s.p,{children:"Additionally, Mac users should install Rosetta:"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-console",children:"softwareupdate --install-rosetta\n"})})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Miniconda3 will not install on ARM/Linux Raspberry Pi machines."}),(0,n.jsxs)(s.p,{children:["Refer to this issue on the Conda ",(0,n.jsx)(s.a,{href:"https://github.com/conda/conda/issues/10723",children:"GitHub"})," page."]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Error: Library not loaded: '/usr/local/opt/libomp/lib/libomp.dylib'"}),(0,n.jsx)(s.p,{children:"This error is resolved by installing libomp from Homebrew:"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-console",children:"brew install libomp\n"})})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},94331:(e,s,i)=>{i.d(s,{A:()=>o});i(96540);var n=i(5260),t=i(74848);function o(e){let{title:s}=e;return(0,t.jsx)(n.A,{children:(0,t.jsx)("title",{children:s})})}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>l});var n=i(96540);const t={},o=n.createContext(t);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);