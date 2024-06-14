"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83028],{22914:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=t(74848),a=t(28453),s=t(94331),o=t(18228),i=t(19365);const l={title:"PERFORMANCE",description:"Learn how to calculate the price performance return for a symbol over different time periods using the OBB.equity.price.performance function. Retrieve data such as one-day return, week to date return, one-week return, month to date return, and more. Understand the parameters, returns, and data structure of the function.",keywords:["price performance","return","symbol","data","provider","chart","metadata","one-day return","week to date return","one-week return","month to date return","one-month return","quarter to date return","three-month return","six-month return","year to date return","one-year return","three-year return","five-year return","ten-year return","max return","time series","ticker symbol"]},d=void 0,c={id:"excel/reference/equity/price/performance",title:"PERFORMANCE",description:"Learn how to calculate the price performance return for a symbol over different time periods using the OBB.equity.price.performance function. Retrieve data such as one-day return, week to date return, one-week return, month to date return, and more. Understand the parameters, returns, and data structure of the function.",source:"@site/content/excel/reference/equity/price/performance.md",sourceDirName:"excel/reference/equity/price",slug:"/excel/reference/equity/price/performance",permalink:"/excel/reference/equity/price/performance",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/price/performance.md",tags:[],version:"current",frontMatter:{title:"PERFORMANCE",description:"Learn how to calculate the price performance return for a symbol over different time periods using the OBB.equity.price.performance function. Retrieve data such as one-day return, week to date return, one-week return, month to date return, and more. Understand the parameters, returns, and data structure of the function.",keywords:["price performance","return","symbol","data","provider","chart","metadata","one-day return","week to date return","one-week return","month to date return","one-month return","quarter to date return","three-month return","six-month return","year to date return","one-year return","three-year return","five-year return","ten-year return","max return","time series","ticker symbol"]},sidebar:"tutorialSidebar",previous:{title:"HISTORICAL",permalink:"/excel/reference/equity/price/historical"},next:{title:"QUOTE",permalink:"/excel/reference/equity/price/quote"}},u={},h=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"EQUITY.PRICE.PERFORMANCE | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(r.p,{children:"Get price performance data for a given stock. This includes price changes for different time periods."}),"\n",(0,n.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-excel",children:"=OBB.EQUITY.PRICE.PERFORMANCE(symbol)\n"})}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-excel",children:'=OBB.EQUITY.PRICE.PERFORMANCE("AAPL")\n'})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Required"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"symbol"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Text"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Symbol to get data for. Multiple comma separated items allowed."})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"True"})})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n","\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(o.A,{children:(0,n.jsx)(i.A,{value:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"The ticker symbol."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_day"}),(0,n.jsx)(r.td,{children:"One-day return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"wtd"}),(0,n.jsx)(r.td,{children:"Week to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_week"}),(0,n.jsx)(r.td,{children:"One-week return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"mtd"}),(0,n.jsx)(r.td,{children:"Month to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_month"}),(0,n.jsx)(r.td,{children:"One-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"qtd"}),(0,n.jsx)(r.td,{children:"Quarter to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_month"}),(0,n.jsx)(r.td,{children:"Three-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"six_month"}),(0,n.jsx)(r.td,{children:"Six-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ytd"}),(0,n.jsx)(r.td,{children:"Year to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_year"}),(0,n.jsx)(r.td,{children:"One-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"two_year"}),(0,n.jsx)(r.td,{children:"Two-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_year"}),(0,n.jsx)(r.td,{children:"Three-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"four_year"}),(0,n.jsx)(r.td,{children:"Four-year"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"five_year"}),(0,n.jsx)(r.td,{children:"Five-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ten_year"}),(0,n.jsx)(r.td,{children:"Ten-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"max"}),(0,n.jsx)(r.td,{children:"Return from the beginning of the time series."})]})]})]})})})]})}function m(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(5260),a=t(74848);function s(e){let{title:r}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(96540),a=t(34164),s=t(23104),o=t(56347),i=t(205),l=t(57485),d=t(31682),c=t(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function x(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[d,u]=m({queryString:t,groupId:a}),[f,p]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,c.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=d??f;return x({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var p=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function y(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:u}=(0,o.zy)(),h=e=>{const r=e.currentTarget,t=d.indexOf(r),a=l[t].value;a!==n&&(c(r),i(a))},x=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;r=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=d[t]??d[d.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>d.push(e),onKeyDown:x,onClick:h,...s,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,s?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function g(e){const r=f(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,j.jsx)(y,{...e,...r}),(0,j.jsx)(v,{...e,...r})]})}function w(e){const r=(0,p.A)();return(0,j.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var n=t(96540);const a={},s=n.createContext(a);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);