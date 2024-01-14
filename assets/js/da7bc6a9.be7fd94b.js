"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50366],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,h=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88828:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(67294),a=t(35742);function o(e){let{title:n}=e;return r.createElement(a.Z,null,r.createElement("title",null,n))}},89094:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=t(87462),a=(t(67294),t(3905)),o=t(88828);const l={title:"donchian",description:"Discover how Donchian Channels, generated by moving average calculations, form an indicator through upper and lower bands around a midrange. Learn how to use the donchian python code and understand the parameters involved.",keywords:["Donchian Channels","moving average calculations","indicator","upper band","lower band","midrange","median band","highest price","lowest price","security","N periods","Donchian Channel","parameters","n_length_upper","n_length_lower","length","usage","donchian"]},i=void 0,c={unversionedId:"terminal/reference/forex/ta/donchian",id:"terminal/reference/forex/ta/donchian",title:"donchian",description:"Discover how Donchian Channels, generated by moving average calculations, form an indicator through upper and lower bands around a midrange. Learn how to use the donchian python code and understand the parameters involved.",source:"@site/content/terminal/reference/forex/ta/donchian.md",sourceDirName:"terminal/reference/forex/ta",slug:"/terminal/reference/forex/ta/donchian",permalink:"/terminal/reference/forex/ta/donchian",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/ta/donchian.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705199383,formattedLastUpdatedAt:"Jan 14, 2024",frontMatter:{title:"donchian",description:"Discover how Donchian Channels, generated by moving average calculations, form an indicator through upper and lower bands around a midrange. Learn how to use the donchian python code and understand the parameters involved.",keywords:["Donchian Channels","moving average calculations","indicator","upper band","lower band","midrange","median band","highest price","lowest price","security","N periods","Donchian Channel","parameters","n_length_upper","n_length_lower","length","usage","donchian"]},sidebar:"tutorialSidebar",previous:{title:"cg",permalink:"/terminal/reference/forex/ta/cg"},next:{title:"ema",permalink:"/terminal/reference/forex/ta/ema"}},d={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p},s="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"forex /ta/donchian - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Donchian Channels are three lines generated by moving average calculations that comprise an indicator formed by upper and lower bands around a midrange or median band. The upper band marks the highest price of a security over N periods while the lower band marks the lowest price of a security over N periods. The area between the upper and lower bands represents the Donchian Channel."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"donchian [-u N_LENGTH_UPPER] [-l N_LENGTH_LOWER]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_length_upper"),(0,a.kt)("td",{parentName:"tr",align:null},"-u  --length_upper"),(0,a.kt)("td",{parentName:"tr",align:null},"length"),(0,a.kt)("td",{parentName:"tr",align:null},"20"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"n_length_lower"),(0,a.kt)("td",{parentName:"tr",align:null},"-l  --length_lower"),(0,a.kt)("td",{parentName:"tr",align:null},"length"),(0,a.kt)("td",{parentName:"tr",align:null},"20"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154310472-6cd5805f-b87f-4668-85a1-3e5dd7267848.png",alt:"donchian"})),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);