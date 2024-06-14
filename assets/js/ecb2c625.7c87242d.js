"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58547],{43369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var s=r(74848),n=r(28453),a=r(94331),i=r(18228),o=r(19365);const d={title:"autoces",description:"An in-depth look into OpenBB's autoces module that performs Automatic Complex Exponential Smoothing on time series, particularly useful for stock market prediction. It provides functionality for data forecasting and visualization.",keywords:["forecasting","autoces","exponential smoothing","stock market prediction","timeseries analysis","data visualization"]},l=void 0,c={id:"sdk/reference/forecast/autoces",title:"autoces",description:"An in-depth look into OpenBB's autoces module that performs Automatic Complex Exponential Smoothing on time series, particularly useful for stock market prediction. It provides functionality for data forecasting and visualization.",source:"@site/content/sdk/reference/forecast/autoces.md",sourceDirName:"sdk/reference/forecast",slug:"/sdk/reference/forecast/autoces",permalink:"/sdk/reference/forecast/autoces",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forecast/autoces.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1718403738e3,frontMatter:{title:"autoces",description:"An in-depth look into OpenBB's autoces module that performs Automatic Complex Exponential Smoothing on time series, particularly useful for stock market prediction. It provides functionality for data forecasting and visualization.",keywords:["forecasting","autoces","exponential smoothing","stock market prediction","timeseries analysis","data visualization"]},sidebar:"tutorialSidebar",previous:{title:"autoarima",permalink:"/sdk/reference/forecast/autoarima"},next:{title:"autoets",permalink:"/sdk/reference/forecast/autoets"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"forecast.autoces - Reference | OpenBB SDK Docs"}),"\n","\n",(0,s.jsxs)(i.A,{children:[(0,s.jsxs)(o.A,{value:"model",label:"Model",default:!0,children:[(0,s.jsx)(t.p,{children:"Performs Automatic Complex Exponential Smoothing forecasting"}),(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/autoces_model.py#L28",children:"link"}),"]"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'openbb.forecast.autoces(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", seasonal_periods: int = 7, n_predict: int = 5, start_window: float = 0.85, forecast_horizon: int = 5)\n'})}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data"}),(0,s.jsx)(t.td,{children:"Union[pd.Series, np.ndarray]"}),(0,s.jsx)(t.td,{children:"Input data."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"target_column"}),(0,s.jsx)(t.td,{children:"Optional[str]:"}),(0,s.jsx)(t.td,{children:'Target column to forecast. Defaults to "close".'}),(0,s.jsx)(t.td,{children:"close"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"seasonal_periods"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsxs)(t.td,{children:["Number of seasonal periods in a year (7 for daily data)",(0,s.jsx)("br",{}),"If not set, inferred from frequency of the series."]}),(0,s.jsx)(t.td,{children:"7"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"n_predict"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of days to forecast"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"start_window"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Size of sliding window from start of timeseries and onwards"}),(0,s.jsx)(t.td,{children:"0.85"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"forecast_horizon"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of days to forecast when backtesting and retraining historical"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Tuple[List[TimeSeries], List[TimeSeries], List[TimeSeries], Optional[float], StatsForecast]"}),(0,s.jsxs)(t.td,{children:["Adjusted Data series,",(0,s.jsx)("br",{}),"List of historical fcast values,",(0,s.jsx)("br",{}),"List of predicted fcast values,",(0,s.jsx)("br",{}),"Optional[float] - precision,",(0,s.jsx)("br",{}),"Fit CES model object."]})]})})]}),(0,s.jsx)(t.hr,{})]}),(0,s.jsxs)(o.A,{value:"view",label:"Chart",children:[(0,s.jsx)(t.p,{children:"Display Automatic Complex Exponential Smoothing Model"}),(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/autoces_view.py#L20",children:"link"}),"]"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'openbb.forecast.autoces_chart(data: Union[pd.DataFrame, pd.Series], target_column: str = "close", dataset_name: str = "", seasonal_periods: int = 7, n_predict: int = 5, start_window: float = 0.85, forecast_horizon: int = 5, export: str = "", residuals: bool = False, forecast_only: bool = False, start_date: Optional[datetime.datetime] = None, end_date: Optional[datetime.datetime] = None, naive: bool = False, export_pred_raw: bool = False, external_axes: Optional[List[axes]] = None)\n'})}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data"}),(0,s.jsx)(t.td,{children:"Union[pd.Series, np.array]"}),(0,s.jsx)(t.td,{children:"Data to forecast"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dataset_name str"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"The name of the ticker to be predicted"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"target_column"}),(0,s.jsx)(t.td,{children:"Optional[str]:"}),(0,s.jsx)(t.td,{children:'Target column to forecast. Defaults to "close".'}),(0,s.jsx)(t.td,{children:"close"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"seasonal_periods"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsxs)(t.td,{children:["Number of seasonal periods in a year",(0,s.jsx)("br",{}),"If not set, inferred from frequency of the series."]}),(0,s.jsx)(t.td,{children:"7"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"n_predict"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of days to forecast"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"start_window"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Size of sliding window from start of timeseries and onwards"}),(0,s.jsx)(t.td,{children:"0.85"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"forecast_horizon"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of days to forecast when backtesting and retraining historical"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"export"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Format to export data"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"residuals"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Whether to show residuals for the model. Defaults to False."}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"forecast_only"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Whether to only show dates in the forecasting range. Defaults to False."}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"start_date"}),(0,s.jsx)(t.td,{children:"Optional[datetime]"}),(0,s.jsx)(t.td,{children:"The starting date to perform analysis, data before this is trimmed. Defaults to None."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"end_date"}),(0,s.jsx)(t.td,{children:"Optional[datetime]"}),(0,s.jsx)(t.td,{children:"The ending date to perform analysis, data after this is trimmed. Defaults to None."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"naive"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsxs)(t.td,{children:["Whether to show the naive baseline. This just assumes the closing price will be the same",(0,s.jsx)("br",{}),"as the previous day's closing price. Defaults to False."]}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"external_axes"}),(0,s.jsx)(t.td,{children:"Optional[List[plt.axes]]"}),(0,s.jsx)(t.td,{children:"External axes to plot on"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,s.jsx)(t.p,{children:"This function does not return anything"}),(0,s.jsx)(t.hr,{})]})]})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var s=r(5260),n=r(74848);function a(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var s=r(96540),n=r(34164),a=r(23104),i=r(56347),o=r(205),d=r(57485),l=r(31682),c=r(89466);function h(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}function u(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=u(e),[i,d]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[l,h]=f({queryString:r,groupId:n}),[p,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),m=(()=>{const e=l??p;return x({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{m&&d(m)}),[m]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:s,selectValue:o,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:h}=(0,i.zy)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),n=d[r].value;n!==s&&(c(t),o(n))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:x,onClick:u,...a,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,a?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function w(e){const t=(0,j.A)();return(0,b.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var s=r(96540);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);