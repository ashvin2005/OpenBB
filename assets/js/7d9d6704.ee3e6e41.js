"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89564],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(35742);function i(e){let{title:t}=e;return o.createElement(r.Z,null,o.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(15569);function i(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[i,a]=(0,o.useState)(!0);return o.createElement("div",{style:{textAlign:"center"}},o.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},o.createElement("p",null,n),o.createElement("div",{style:{transform:"scale(0.7)"}},o.createElement(r.Toggle,{isOn:i,handleChange:()=>a(!i)}))),i&&o.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},o.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},23656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905)),i=n(88828),a=n(20630);const l={title:"Copilot",sidebar_position:7,description:"Learn how to use OpenBB Copilot to interact with the OpenBB Terminal Pro, execute basic commands, and customize your dashboard.",keywords:["OpenBB Copilot","voice command","change theme mode","load templates","TSLA","Natural language processing","Large language model","OpenAI"]},c=void 0,s={unversionedId:"pro/copilot",id:"pro/copilot",title:"Copilot",description:"Learn how to use OpenBB Copilot to interact with the OpenBB Terminal Pro, execute basic commands, and customize your dashboard.",source:"@site/content/pro/copilot.md",sourceDirName:"pro",slug:"/pro/copilot",permalink:"/pro/copilot",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/copilot.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705199383,formattedLastUpdatedAt:"Jan 14, 2024",sidebarPosition:7,frontMatter:{title:"Copilot",sidebar_position:7,description:"Learn how to use OpenBB Copilot to interact with the OpenBB Terminal Pro, execute basic commands, and customize your dashboard.",keywords:["OpenBB Copilot","voice command","change theme mode","load templates","TSLA","Natural language processing","Large language model","OpenAI"]},sidebar:"tutorialSidebar",previous:{title:"Advanced Search",permalink:"/pro/advanced-search"},next:{title:"Widgets Library",permalink:"/pro/widgets-library/"}},d={},p=[],u={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Copilot | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,r.kt)(a.Z,{youtubeLink:"https://www.youtube.com/embed/ZdIZ4dOG9tE?si=dKAanLAC84eVKcyD",videoLegend:"Short introduction to copilot",mdxType:"TutorialVideo"}),(0,r.kt)("p",null,"OpenBB copilot is your companion to interact with the OpenBB Terminal Pro."),(0,r.kt)("img",{className:"pro-border-gradient",width:"3701",alt:"COPILOT- New",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/1c2d892e-03b7-4db8-9e8c-6fb1ab8512a1"}),(0,r.kt)("p",null,"To initiate a dialogue with the OpenBB Copilot, simply click on the icon located at the top left of your screen. You have the option to input your request either through typing or voice command."),(0,r.kt)("p",null,'The scope of your request can range from basic commands such as "change theme mode to light", to more intricate requests like "load my equity template with TSLA" or "Add insider trading and ownership widgets to this dashboard".'))}h.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var o,r=(o=n(67294))&&"object"==typeof o&&"default"in o?o.default:o;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return r.createElement("label",{"data-testid":"Toggle-label",className:"switch"},r.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),r.createElement("span",{className:"slider round"}))}}}]);