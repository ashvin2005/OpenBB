"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(35742);function l(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},48633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(88828);const i={title:"Developer Issues",sidebar_position:6,description:"This page helps with frequently asked questions regarding debugging, GitHub pull requests, and common error resolutions. The guide includes steps on how to launch in debug mode, switching branches, handling missing dependencies like wheel, dealing with .whl files, understanding JSONDecodeError, correcting line break errors, and using VS Code terminal.",keywords:["debug mode","GitHub pull requests","error resolutions","missing dependencies","wheel",".whl file errors","JSONDecodeError","line break errors","VS Code terminal","poetry","conda","pip"]},o=void 0,s={unversionedId:"terminal/faqs/developer_issues",id:"terminal/faqs/developer_issues",title:"Developer Issues",description:"This page helps with frequently asked questions regarding debugging, GitHub pull requests, and common error resolutions. The guide includes steps on how to launch in debug mode, switching branches, handling missing dependencies like wheel, dealing with .whl files, understanding JSONDecodeError, correcting line break errors, and using VS Code terminal.",source:"@site/content/terminal/faqs/developer_issues.md",sourceDirName:"terminal/faqs",slug:"/terminal/faqs/developer_issues",permalink:"/terminal/faqs/developer_issues",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/faqs/developer_issues.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",sidebarPosition:6,frontMatter:{title:"Developer Issues",sidebar_position:6,description:"This page helps with frequently asked questions regarding debugging, GitHub pull requests, and common error resolutions. The guide includes steps on how to launch in debug mode, switching branches, handling missing dependencies like wheel, dealing with .whl files, understanding JSONDecodeError, correcting line break errors, and using VS Code terminal.",keywords:["debug mode","GitHub pull requests","error resolutions","missing dependencies","wheel",".whl file errors","JSONDecodeError","line break errors","VS Code terminal","poetry","conda","pip"]},sidebar:"tutorialSidebar",previous:{title:"Bugs, Support, and Feedback",permalink:"/terminal/faqs/bugs_support_feedback"},next:{title:"OpenBB Terminal Features",permalink:"/terminal/reference/"}},u={},p=[],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"Developer Issues - Faqs | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How do I launch in debug mode?"),(0,r.kt)("p",null,"When installed from source, the OpenBB Terminal can be launched in debug mode.  Launch the Terminal using the syntax below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"python terminal.py --debug\n")),(0,r.kt)("p",null,"Operate the Terminal normally, and errors will trigger an interrupt which prints the traceback with the error.  Charts and tables will also include a developer tools button, located at the top-left of the window, for identifying issues specific to the PyWry interactive window.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What branch on GitHub should pull requests be submitted to?"),(0,r.kt)("p",null,"Pull requests submitted to the Main branch will not be merged, please create branches from the ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," branch."),(0,r.kt)("p",null,"To switch to the develop branch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"git checkout develop\n")),(0,r.kt)("p",null,"Branches must also follow the naming convention:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/feature/name_your_branch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For developing functionality."))),(0,r.kt)("li",{parentName:"ul"},"/hotfix/name_your_patch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For bug patches."))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,'Error: "git pull" fails because of a hot fix: cannot lock ref'),(0,r.kt)("p",null,"If the error message looks something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cannot lock ref: 'refs/remotes/origin/hotfix' exists; cannot create\n")),(0,r.kt)("p",null,"Try:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"git remote prune origin\ngit pull\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What does it mean if it says wheel is missing?"),(0,r.kt)("p",null,"If you receive any notifications regarding ",(0,r.kt)("inlineCode",{parentName:"p"},"wheel")," missing, this could be due to this dependency missing."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"conda install -c conda-forge wheel")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install wheel"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Why do these .whl files not exist?"),(0,r.kt)("p",null,"If you get errors about .whl files not existing (usually on Windows) you have to reinitialize the following folder.\nJust removing the 'artifacts' folder could also be enough:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Platform"),(0,r.kt)("th",{parentName:"tr",align:null},"Location"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},'"~/.cache/pypoetry"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mac"),(0,r.kt)("td",{parentName:"tr",align:null},'"~/Library/Caches/pypoetry"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows"),(0,r.kt)("td",{parentName:"tr",align:null},'"%localappdata%/pypoetry/cache"')))),(0,r.kt)("p",null,"When you try to add a package to Poetry it is possible that it causes a similar issue. Here you can remove the\n'artifacts' folder again to reinitialize Poetry."),(0,r.kt)("p",null,"If you run into trouble with Poetry, and the advice above did not help, your best bet is to try"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"poetry update --lock")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conda deactivate")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"conda activate obb"),", then try again"),(0,r.kt)("li",{parentName:"ul"},"Track down the offensive package and purge it from your anaconda ",(0,r.kt)("inlineCode",{parentName:"li"},"<environment_name>")," folder, then try again")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Platform"),(0,r.kt)("th",{parentName:"tr",align:null},"Location"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linux/Mac"),(0,r.kt)("td",{parentName:"tr",align:null},"~/anaconda3/envs, or , ~/opt/anaconda3/envs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows"),(0,r.kt)("td",{parentName:"tr",align:null},"%userprofile%/anaconda3/envs")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Completely nuke your conda environment folder and make a new environment from scratch"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conda deactivate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conda env remove -n obb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conda clean -a")),(0,r.kt)("li",{parentName:"ul"},"Make a new environment and install dependencies again."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reboot your computer and try again")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submit a ticket on GitHub")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What does the JSONDecodeError mean during poetry install?"),(0,r.kt)("p",null,"Sometimes poetry can throw a ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONDecodeError")," on random packages while running ",(0,r.kt)("inlineCode",{parentName:"p"},"poetry install"),". This can be observed on macOS 10.14+ running python 3.8+. This is because of the use of an experimental installer that can be switched off to avoid the mentioned error. Run the code below as advised ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/python-poetry/poetry/issues/4210"},"here")," and it should fix the installation process."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"poetry config experimental.new-installer false\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Commands that may help you in case of an error:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"python -m pip install --upgrade pip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"poetry update --lock")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"poetry install")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How do I deal with errors regarding CRLF?"),(0,r.kt)("p",null,"When trying to commit code changes, pylint will prevent you from doing so if your line break settings are set to\nCRLF (default for Windows).\nThis is because the entire package uses LF (default for Linux/Mac), and it is therefore\nimportant that you change this setting to LF ",(0,r.kt)("em",{parentName:"p"},"before")," you make any changes to the code."),(0,r.kt)("p",null,"It is possible that CRLF automatically turns back on, you can correct this with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global core.autocrlf false\n")),(0,r.kt)("p",null,"In case you already made coding adjustments, you have to reset your cache, and the changes you made to the code with\nthe following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git rm --cached -r .\ngit reset --hard\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Why can't I run OpenBB via the VS Code integrated terminal?"),(0,r.kt)("p",null,"This occurs when VS Code terminal python version/path is different from the terminal version."),(0,r.kt)("p",null,"To fix it add this to vscode JSON settings (",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/54582361/vscode-terminal-shows-incorrect-python-version-and-path-launching-terminal-from"},"ref"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'    "terminal.integrated.inheritEnv": false,\n'))))}m.isMDXComponent=!0}}]);