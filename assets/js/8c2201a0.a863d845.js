"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},21220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(88828);const l={title:"General Operation",sidebar_position:3,description:"Learn how to overcome system-related issues by enabling the 'developer mode' on Windows and MacOS. Get answers for queries and potential issues. Here, you'll also get to know how to run applications that do not meet the system's security policy, allow apps through firewall and get tips on portfolio management.",keywords:["developer mode","overcome system-related issues","Windows","MacOS","run applications","system's security policy","allow apps through firewall","Portfolio management","Settings","FAQ"]},i=void 0,s={unversionedId:"terminal/faqs/general_operation",id:"terminal/faqs/general_operation",title:"General Operation",description:"Learn how to overcome system-related issues by enabling the 'developer mode' on Windows and MacOS. Get answers for queries and potential issues. Here, you'll also get to know how to run applications that do not meet the system's security policy, allow apps through firewall and get tips on portfolio management.",source:"@site/content/terminal/faqs/general_operation.md",sourceDirName:"terminal/faqs",slug:"/terminal/faqs/general_operation",permalink:"/terminal/faqs/general_operation",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/faqs/general_operation.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705602981,formattedLastUpdatedAt:"Jan 18, 2024",sidebarPosition:3,frontMatter:{title:"General Operation",sidebar_position:3,description:"Learn how to overcome system-related issues by enabling the 'developer mode' on Windows and MacOS. Get answers for queries and potential issues. Here, you'll also get to know how to run applications that do not meet the system's security policy, allow apps through firewall and get tips on portfolio management.",keywords:["developer mode","overcome system-related issues","Windows","MacOS","run applications","system's security policy","allow apps through firewall","Portfolio management","Settings","FAQ"]},sidebar:"tutorialSidebar",previous:{title:"Launching",permalink:"/terminal/faqs/launching"},next:{title:"Data and Sources",permalink:"/terminal/faqs/data_sources"}},p={},u=[],m={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"General Operation - Faqs | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,'Both Windows and MacOS provide a "developer mode", and enabling it may help to overcome system-related issues.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MacOS"),': Go to the System Settings, and under the "Privacy and Security" tab, scroll to the bottom and select the option to "Allow applications downloaded from App Store and identified developers". Then, scroll up to click on, "Developer Tools", and add ',(0,r.kt)("inlineCode",{parentName:"p"},"Terminal.app")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Visual Studio Code")," (or the preferred code editor) to the list of applications allowed to run software locally that does not meet the system's security policy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows"),': Go to the Control Panel, and under the "Privacy & Security" tab, click on, "For developers". Under this menu, turn "Developer Mode" on.'),(0,r.kt)("p",null,'From the Windows Security menu, click on the Firewall & Network Protection tab, then click on "Allow an app through firewall". If the applications below are not allowed to communicate through Windows Defender Firewall, change the settings to allow.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BranchCache"),(0,r.kt)("li",{parentName:"ul"},"Hyper-V"),(0,r.kt)("li",{parentName:"ul"},"VcXsrv"),(0,r.kt)("li",{parentName:"ul"},"Windows Terminal")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Why does a specific menu or command not exist?"),(0,r.kt)("p",null,"It could be that you are running an outdated version in which the menu or command is not yet available. Please check the ",(0,r.kt)("a",{parentName:"p",href:"/terminal/installation"},"installation guide")," to download the most recent release."),(0,r.kt)("p",null,"Do note that it is also possible that the menu or command has been deprecated. If this is oversight, please reach out to us ",(0,r.kt)("a",{parentName:"p",href:"https://openbb.co/support"},"here"),".")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Charts do not display on Linux/WSL or Docker installation."),(0,r.kt)("p",null,"Check that X-11, or similar, is installed, open, and configured. Follow the instructions pertaining to the system here: ",(0,r.kt)("a",{parentName:"p",href:"/terminal/installation/docker"},"/terminal/installation/docker"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How do I retrieve more results than is returned by default?"),(0,r.kt)("p",null,"Most functions will have either, ",(0,r.kt)("inlineCode",{parentName:"p"},"--start")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--end")," flags, or a ",(0,r.kt)("inlineCode",{parentName:"p"},"--limit")," argument. Print the help dialogue for any command by attaching, ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-h"),".")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Does the portfolio menu allow for dividends, interest, or other distributions?"),(0,r.kt)("p",null,"Currently, this is only possible by manually updating the portfolio file.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Why does my Portfolio file fail to load?"),(0,r.kt)("p",null,"This can be the result of a formatting error, check the file in a simple text editor to observe any abnormalities in the formatting; or, it could be a bug - check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues"},"GitHub issues page")," for similar errors."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check that all the necessary column titles are present."),(0,r.kt)("li",{parentName:"ul"},"Inspect the file to see if cells left blank have been filled unintentionally with 0 or NaN values."),(0,r.kt)("li",{parentName:"ul"},"A particular asset may not be able to load data. Check for valid historical data from the Stocks menu."),(0,r.kt)("li",{parentName:"ul"},"Format ticker symbols according to yFinance naming convention."),(0,r.kt)("li",{parentName:"ul"},"All dates must be entered as YYYY-MM-DD."),(0,r.kt)("li",{parentName:"ul"},"Transactions dated for today will fail to load historical data."),(0,r.kt)("li",{parentName:"ul"},"MacOS users should attempt to avoid using the Numbers application as it has a habit of changing the formatting while saving.")),(0,r.kt)("p",null,"Files can be formatted as either ",(0,r.kt)("inlineCode",{parentName:"p"},".csv")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".xlsx")," files, and the required column headers are:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[Date,Type,Ticker,Side,Price,Quantity,Fees,Investment,Currency,Sector,Industry,Country,Region]")),(0,r.kt)("p",null,"See the guide ",(0,r.kt)("a",{parentName:"p",href:"/sdk/data-available/portfolio/introduction"},"here")," for more information.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How do I change the chart styles?"),(0,r.kt)("p",null,"See the guide ",(0,r.kt)("a",{parentName:"p",href:"/terminal/usage/overview/customizing-the-terminal"},"here"),".  The theme can be toggled between light and dark mode, directly on the individual chart.  See the ",(0,r.kt)("a",{parentName:"p",href:"/terminal/usage/basics#charts"},"Terminal Basics page")," for more information on working with the charts.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can I change the colors of the text in the Terminal?"),(0,r.kt)("p",null,"Yes, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"colors")," command under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/settings")," menu: ",(0,r.kt)("a",{parentName:"p",href:"/terminal/usage/overview/customizing-the-terminal"},"/terminal/usage/overview/customizing-the-terminal"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"After setting the preset in the stocks screener, nothing happens."),(0,r.kt)("p",null,"Print the current screen again with by entering, ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),". Does the name of the selected preset display? With a preset loaded, run the screener by entering one of the commands below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Financial"),(0,r.kt)("li",{parentName:"ul"},"Ownership"),(0,r.kt)("li",{parentName:"ul"},"Overview"),(0,r.kt)("li",{parentName:"ul"},"Performance"),(0,r.kt)("li",{parentName:"ul"},"Technical"),(0,r.kt)("li",{parentName:"ul"},"Valuation"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Forecast functions say to enter a valid data set"),(0,r.kt)("p",null,"Because an unlimited number of data sets can be loaded into the Forecast menu, each function requires defining the specific data set to be used. Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--dataset")," argument to the command, along with the name of the desired data set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"rnn -d SPY\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How do I find stocks from India, or another country?"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," command from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/stocks")," menu.  Refer to the menu's introduction guide ",(0,r.kt)("a",{parentName:"p",href:"/terminal/menus/stocks#search"},"here"),"."),(0,r.kt)("p",null,"As an example, try this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"search --country india --exchange-country india --limit 1000\n"))))}c.isMDXComponent=!0}}]);