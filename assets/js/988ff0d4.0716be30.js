"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87528],{45271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var n=r(74848),s=r(28453),i=r(94331),a=r(18228),o=r(19365);const c={title:"hist_ce",description:"This page describes two main functionalities of the OpenBBFinance documentation: 'hist_ce' function for getting historical prices for a specific stock option and 'hist_ce_chart' function for displaying the same historical stock data in charts. Both functions come with detailed explanations of their parameters and expected returns.",keywords:["OpenBBFinance documentation","stock options","historical prices","chart visualization","hist_ce function","hist_ce_chart function","stock data"]},l=void 0,d={id:"sdk/reference/stocks/options/hist_ce",title:"hist_ce",description:"This page describes two main functionalities of the OpenBBFinance documentation: 'hist_ce' function for getting historical prices for a specific stock option and 'hist_ce_chart' function for displaying the same historical stock data in charts. Both functions come with detailed explanations of their parameters and expected returns.",source:"@site/content/sdk/reference/stocks/options/hist_ce.md",sourceDirName:"sdk/reference/stocks/options",slug:"/sdk/reference/stocks/options/hist_ce",permalink:"/sdk/reference/stocks/options/hist_ce",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/options/hist_ce.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1718403738e3,frontMatter:{title:"hist_ce",description:"This page describes two main functionalities of the OpenBBFinance documentation: 'hist_ce' function for getting historical prices for a specific stock option and 'hist_ce_chart' function for displaying the same historical stock data in charts. Both functions come with detailed explanations of their parameters and expected returns.",keywords:["OpenBBFinance documentation","stock options","historical prices","chart visualization","hist_ce function","hist_ce_chart function","stock data"]},sidebar:"tutorialSidebar",previous:{title:"hist",permalink:"/sdk/reference/stocks/options/hist"},next:{title:"info",permalink:"/sdk/reference/stocks/options/info"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"stocks.options.hist_ce - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(a.A,{children:[(0,n.jsxs)(o.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(t.p,{children:"Historic prices for a specific option [chartexchange]"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/chartexchange_model.py#L19",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.stocks.options.hist_ce(symbol: str = "GME", date: str = "2021-02-05", call: bool = True, price: Union[str, int, float] = "90")\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Ticker symbol to get historical data from"}),(0,n.jsx)(t.td,{children:"GME"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Date as a string YYYYMMDD"}),(0,n.jsx)(t.td,{children:"2021-02-05"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"call"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to show a call or a put"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"Union[str, Union[int, float]]"}),(0,n.jsx)(t.td,{children:"Strike price for a specific option"}),(0,n.jsx)(t.td,{children:"90"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.Dataframe"}),(0,n.jsx)(t.td,{children:"Historic information for an option"})]})})]}),(0,n.jsx)(t.hr,{})]}),(0,n.jsxs)(o.A,{value:"view",label:"Chart",children:[(0,n.jsx)(t.p,{children:"Return raw stock data[chartexchange]"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/chartexchange_view.py#L59",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.stocks.options.hist_ce_chart(symbol: str = "GME", expiry: str = "2021-02-05", call: bool = True, price: float = 90, limit: int = 10, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Ticker symbol for the given option"}),(0,n.jsx)(t.td,{children:"GME"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expiry"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:'The expiry of expiration, format "YYYY-MM-DD", i.e. 2010-12-31.'}),(0,n.jsx)(t.td,{children:"2021-02-05"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"call"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether the underlying asset should be a call or a put"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The strike of the expiration"}),(0,n.jsx)(t.td,{children:"90"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of rows to show"}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"export"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Export data as CSV, JSON, XLSX"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"external_axes"}),(0,n.jsx)(t.td,{children:"Optional[List[plt.Axes]]"}),(0,n.jsx)(t.td,{children:"External axes (1 axis is expected in the list), by default None"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(t.p,{children:"This function does not return anything"}),(0,n.jsx)(t.hr,{})]})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(96540),s=r(34164),i=r(23104),a=r(56347),o=r(205),c=r(57485),l=r(31682),d=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[a,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,h]=x({queryString:r,groupId:s}),[f,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),b=(()=>{const e=l??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),{pathname:h}=(0,a.zy)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),s=c[r].value;s!==n&&(d(t),o(s))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:p,onClick:u,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,m.jsx)(v,{...e,...t}),(0,m.jsx)(g,{...e,...t})]})}function k(e){const t=(0,j.A)();return(0,m.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);