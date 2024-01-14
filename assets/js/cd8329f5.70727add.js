"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91269],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(o),u=r,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return o?n.createElement(f,l(l({ref:t},m),{},{components:o})):n.createElement(f,l({ref:t},m))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},88828:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(67294),r=o(35742);function a(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},9669:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=o(87462),r=(o(67294),o(3905)),a=o(88828);const l={title:"Telegram",sidebar_position:2,description:"A complete guide on how to use the OpenBB Telegram Bot for stock and crypto market exploration. Learn how to use slash commands, including /cd, /c3m, /flow, and /c for market insights.",keywords:["Telegram","/cd command","/c3m command","/flow command","/c command","OpenBB Telegram Bot","stock ticker","crypto symbol","market exploration","using bots","Telegram commands"]},i=void 0,c={unversionedId:"bot/usage/telegram",id:"bot/usage/telegram",title:"Telegram",description:"A complete guide on how to use the OpenBB Telegram Bot for stock and crypto market exploration. Learn how to use slash commands, including /cd, /c3m, /flow, and /c for market insights.",source:"@site/content/bot/usage/telegram.md",sourceDirName:"bot/usage",slug:"/bot/usage/telegram",permalink:"/bot/usage/telegram",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/usage/telegram.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705199383,formattedLastUpdatedAt:"Jan 14, 2024",sidebarPosition:2,frontMatter:{title:"Telegram",sidebar_position:2,description:"A complete guide on how to use the OpenBB Telegram Bot for stock and crypto market exploration. Learn how to use slash commands, including /cd, /c3m, /flow, and /c for market insights.",keywords:["Telegram","/cd command","/c3m command","/flow command","/c command","OpenBB Telegram Bot","stock ticker","crypto symbol","market exploration","using bots","Telegram commands"]},sidebar:"tutorialSidebar",previous:{title:"Discord",permalink:"/bot/usage/discord"},next:{title:"Customization",permalink:"/bot/usage/customizing/"}},s={},m=[],p={toc:m},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{title:"Telegram - Usage | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Now that you have added the bot to your Telegram server you can get started with running commands."),(0,r.kt)("p",null,"To use it, you need to type slash commands in the chat. A slash command starts with a / followed by a keyword and an optional argument. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"/cd AAPL")," will show you the daily chart for Apple stock."),(0,r.kt)("div",{className:"flex justify-center h-full w-[800px] rounded-r-[4px]"},(0,r.kt)("img",{className:"h-full object-cover",alt:"gif describing step",src:"https://openbb-assets.s3.amazonaws.com/docs/bot_docs/telegram-gif.gif"})),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How do I select commands instead of typing?"),"If you are On mobile press and hold to select the command.",(0,r.kt)("p",null,"On desktop press ",(0,r.kt)("inlineCode",{parentName:"p"},"tab")," to select the command.")),(0,r.kt)("p",null,"To see all the available commands, you can type ",(0,r.kt)("inlineCode",{parentName:"p"},"/help")," in the chat. This will show you a list of commands and their descriptions. You can also tap on any command to use it directly. Some of the most popular commands are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/cd AMD")," Shows the daily chart for a given stock ticker."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/c3m AMD")," Shows the 3-month chart for a given stock ticker."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/flow AMD")," Shows the recent options flow for the given stock ticker."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/c DOGE")," Shows a chart for the crypto symbol provided.")),(0,r.kt)("p",null,"That's it! You're ready to use OpenBB Telegram Bot and explore the markets. Have fun!"),(0,r.kt)("p",null,"Check out the Reference section for more commands or type ",(0,r.kt)("inlineCode",{parentName:"p"},"/help")," in your chat to see what else we can do!"))}u.isMDXComponent=!0}}]);