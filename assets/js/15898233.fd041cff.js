"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(35742);function r(e){let{title:t}=e;return a.createElement(i.Z,null,a.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(15569);function r(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[r,o]=(0,a.useState)(!0);return a.createElement("div",{style:{textAlign:"center"}},a.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},a.createElement("p",null,n),a.createElement("div",{style:{transform:"scale(0.7)"}},a.createElement(i.Toggle,{isOn:r,handleChange:()=>o(!r)}))),r&&a.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},a.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},12874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(88828),o=n(20630);const s={title:"Widgets",sidebar_position:0,description:"The page contains detailed information about the interactive elements and functionalities of OpenBB Terminal Pro widgets. From grouping mechanisms to settings, these widgets offer an interactive dashboard experience for users to track and analyze their investments and data. The widgets support both raw data and chart interpretations for data visualization.",keywords:["Widgets","Upper Tab","Interactive elements","Additional information","Symbol","Group","Staleness Indicator","Chat with Widget","Grouping Mechanism","Settings","Close","Content","Raw Data","Charts","Interactive dashboard","Investment positions"]},l=void 0,d={unversionedId:"pro/widgets/index",id:"pro/widgets/index",title:"Widgets",description:"The page contains detailed information about the interactive elements and functionalities of OpenBB Terminal Pro widgets. From grouping mechanisms to settings, these widgets offer an interactive dashboard experience for users to track and analyze their investments and data. The widgets support both raw data and chart interpretations for data visualization.",source:"@site/content/pro/widgets/index.md",sourceDirName:"pro/widgets",slug:"/pro/widgets/",permalink:"/pro/widgets/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/widgets/index.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",sidebarPosition:0,frontMatter:{title:"Widgets",sidebar_position:0,description:"The page contains detailed information about the interactive elements and functionalities of OpenBB Terminal Pro widgets. From grouping mechanisms to settings, these widgets offer an interactive dashboard experience for users to track and analyze their investments and data. The widgets support both raw data and chart interpretations for data visualization.",keywords:["Widgets","Upper Tab","Interactive elements","Additional information","Symbol","Group","Staleness Indicator","Chat with Widget","Grouping Mechanism","Settings","Close","Content","Raw Data","Charts","Interactive dashboard","Investment positions"]},sidebar:"tutorialSidebar",previous:{title:"Integrate your own backend",permalink:"/pro/main-menu/data-connectors/integrate-your-own-backend"},next:{title:"Tabular data",permalink:"/pro/widgets/tabular-data/"}},c={},p=[{value:"Upper Tab",id:"upper-tab",level:2},{value:"Left Side",id:"left-side",level:3},{value:"Title",id:"title",level:4},{value:"Symbol",id:"symbol",level:4},{value:"Group",id:"group",level:4},{value:"Right Side",id:"right-side",level:3},{value:"Staleness Indicator",id:"staleness-indicator",level:4},{value:"Chat with Widget",id:"chat-with-widget",level:4},{value:"Grouping Mechanism",id:"grouping-mechanism",level:4},{value:"Settings",id:"settings",level:4},{value:"Close",id:"close",level:4},{value:"Content",id:"content",level:2},{value:"Raw Data",id:"raw-data",level:4},{value:"Charts",id:"charts",level:4}],u={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{title:"Widgets | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,i.kt)(o.Z,{youtubeLink:"https://www.youtube.com/embed/_kg8bCTNM14?si=OLAa1ehCEm57SFjd",videoLegend:"Short introduction to widgets",mdxType:"TutorialVideo"}),(0,i.kt)("h2",{id:"upper-tab"},"Upper Tab"),(0,i.kt)("img",{className:"pro-border-gradient",width:"800",alt:"Widget-rev",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/97943512-5488-4e94-8a06-b59ec6e51e4c"}),(0,i.kt)("p",null,"The upper tab houses all the interactive elements and additional information related to the widget's content."),(0,i.kt)("h3",{id:"left-side"},"Left Side"),(0,i.kt)("h4",{id:"title"},"Title"),(0,i.kt)("p",null,"The title identifies the widget and is used when adding the same widget to another dashboard via advanced search."),(0,i.kt)("h4",{id:"symbol"},"Symbol"),(0,i.kt)("p",null,"Some widgets are associated with a symbol. Changing this symbol updates the table content to reflect the new symbol."),(0,i.kt)("h4",{id:"group"},"Group"),(0,i.kt)("p",null,"The group (if any) that the widget belongs to. If multiple widgets belong to the same group, updating the symbol in one will automatically update the symbol in the others."),(0,i.kt)("h3",{id:"right-side"},"Right Side"),(0,i.kt)("h4",{id:"staleness-indicator"},"Staleness Indicator"),(0,i.kt)("p",null,"This indicator shows the freshness of the data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Green - updated within the last 30 seconds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Yellow - updated between 30 seconds and 5 minutes ago")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Red - updated over 5 minutes ago"))),(0,i.kt)("h4",{id:"chat-with-widget"},"Chat with Widget"),(0,i.kt)("p",null,"Our proprietary generative AI feature allows you to interact with the widget. Ask it to summarize its contents or explain how its data could impact your investment positions."),(0,i.kt)("h4",{id:"grouping-mechanism"},"Grouping Mechanism"),(0,i.kt)("p",null,"This feature allows you to group widgets together. When widgets are grouped, they share a color and number. You can see which dashboards have which groupings by looking at the text below the dashboard title in the sidebar."),(0,i.kt)("h4",{id:"settings"},"Settings"),(0,i.kt)("img",{className:"pro-border-gradient",width:"800",alt:"Widget settings",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/aaef053c-dacb-4f92-af02-583b4924a546"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings - View the data source and select or hide columns."),(0,i.kt)("li",{parentName:"ul"},"Share - Share this widget with your team."),(0,i.kt)("li",{parentName:"ul"},"Duplicate - Create a copy of this widget on the same dashboard."),(0,i.kt)("li",{parentName:"ul"},"Export - Export data in various formats, such as csv, xlsx, png, or jpeg."),(0,i.kt)("li",{parentName:"ul"},"Maximize - View the widget in full-screen mode."),(0,i.kt)("li",{parentName:"ul"},"Copy to - Copy the widget to a different dashboard.")),(0,i.kt)("h4",{id:"close"},"Close"),(0,i.kt)("p",null,"This option removes the widget from the dashboard."),(0,i.kt)("h2",{id:"content"},"Content"),(0,i.kt)("p",null,"OpenBB widgets support two main types of content:"),(0,i.kt)("h4",{id:"raw-data"},"Raw Data"),(0,i.kt)("p",null,"Displayed in a table format. This is powerful as it allows to leverage the charting from raw data capabilities of the application."),(0,i.kt)("img",{className:"pro-border-gradient",width:"800",alt:"dividend",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/a71c683a-92df-4e5b-9ce3-1f8a91b9dcfc"}),(0,i.kt)("h4",{id:"charts"},"Charts"),(0,i.kt)("p",null,"Visual representations of data, including line charts, bar charts, pie charts, and other custom charts. Some examples below,"),(0,i.kt)("img",{className:"pro-border-gradient",width:"800",alt:"newswidget",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/5ada7e7f-c619-46fb-850f-006c6e0d0cd2"}),(0,i.kt)("img",{className:"pro-border-gradient",width:"800",alt:"widget-revbiz",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/bbc0b737-ce03-4241-acaa-ad6b71c2a5ba"}))}m.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var a,i=(a=n(67294))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return i.createElement("label",{"data-testid":"Toggle-label",className:"switch"},i.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),i.createElement("span",{className:"slider round"}))}}}]);