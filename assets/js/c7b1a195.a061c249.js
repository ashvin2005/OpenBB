"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71017],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),s=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(f,o(o({ref:e},c),{},{components:r})):a.createElement(f,o({ref:e},c))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[d]="string"==typeof t?t:n,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(t,e,r)=>{r.d(e,{Z:()=>o});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:r,className:o}=t;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},e)}},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var a=r(67294),n=r(35742);function l(t){let{title:e}=t;return a.createElement(n.Z,null,a.createElement("title",null,e))}},31792:(t,e,r)=>{r.d(e,{Z:()=>v});var a=r(87462),n=r(67294),l=r(86010),o=r(12466),u=r(16550),i=r(91980),s=r(67392),c=r(50012);function d(t){return function(t){return n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:r,attributes:a,default:n}}=t;return{value:e,label:r,attributes:a,default:n}}))}function p(t){const{values:e,children:r}=t;return(0,n.useMemo)((()=>{const t=e??d(r);return function(t){const e=(0,s.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,r])}function m(t){let{value:e,tabValues:r}=t;return r.some((t=>t.value===e))}function f(t){let{queryString:e=!1,groupId:r}=t;const a=(0,u.k6)(),l=function(t){let{queryString:e=!1,groupId:r}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,i._X)(l),(0,n.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(a.location.search);e.set(l,t),a.replace({...a.location,search:e.toString()})}),[l,a])]}function b(t){const{defaultValue:e,queryString:r=!1,groupId:a}=t,l=p(t),[o,u]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:r}=t;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=r.find((t=>t.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[i,s]=f({queryString:r,groupId:a}),[d,b]=function(t){let{groupId:e}=t;const r=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((t=>{r&&l.set(t)}),[r,l])]}({groupId:a}),k=(()=>{const t=i??d;return m({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((t=>{if(!m({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);u(t),s(t),b(t)}),[s,b,l]),tabValues:l}}var k=r(72389);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function h(t){let{className:e,block:r,selectedValue:i,selectValue:s,tabValues:c}=t;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),{pathname:m}=(0,u.TH)(),f=t=>{const e=t.currentTarget,r=d.indexOf(e),a=c[r].value;a!==i&&(p(e),s(a))},b=t=>{let e=null;switch(t.key){case"Enter":f(t);break;case"ArrowRight":{const r=d.indexOf(t.currentTarget)+1;e=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(t.currentTarget)-1;e=d[r]??d[d.length-1];break}}e?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},c.map((t=>{let{value:e,label:r,attributes:o}=t;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:t=>d.push(t),onKeyDown:b,onClick:f},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",g.tabItem,o?.className,{"border-b-2 pointer-events-none":i===e,"border-b-2 text-[#669dcb] border-[#669dcb]":i===e&&m.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===e&&m.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==e&&m.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===e&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==e&&m.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==e&&m.startsWith("/terminal")})}),r??e)})))}function y(t){let{lazy:e,children:r,selectedValue:a}=t;if(r=Array.isArray(r)?r:[r],e){const t=r.find((t=>t.props.value===a));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function N(t){const e=b(t);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(h,(0,a.Z)({},t,e)),n.createElement(y,(0,a.Z)({},t,e)))}function v(t){const e=(0,k.Z)();return n.createElement(N,(0,a.Z)({key:String(e)},t))}},55486:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),l=r(88828),o=r(31792),u=r(85162);const i={title:"unitroot",description:"This documentation provides in-depth information on how to calculate unit root test statistics, using the OpenBB software. This includes source code, parameter details, and return values for both model and chart functions.",keywords:["quantitative analysis","unit root test","ADF test","KPSS test","regression"]},s=void 0,c={unversionedId:"sdk/reference/qa/unitroot",id:"sdk/reference/qa/unitroot",title:"unitroot",description:"This documentation provides in-depth information on how to calculate unit root test statistics, using the OpenBB software. This includes source code, parameter details, and return values for both model and chart functions.",source:"@site/content/sdk/reference/qa/unitroot.md",sourceDirName:"sdk/reference/qa",slug:"/sdk/reference/qa/unitroot",permalink:"/sdk/reference/qa/unitroot",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/qa/unitroot.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"unitroot",description:"This documentation provides in-depth information on how to calculate unit root test statistics, using the OpenBB software. This includes source code, parameter details, and return values for both model and chart functions.",keywords:["quantitative analysis","unit root test","ADF test","KPSS test","regression"]},sidebar:"tutorialSidebar",previous:{title:"summary",permalink:"/sdk/reference/qa/summary"},next:{title:"var",permalink:"/sdk/reference/qa/var"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],m={toc:p},f="wrapper";function b(t){let{components:e,...r}=t;return(0,n.kt)(f,(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"qa.unitroot - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Calculate test statistics for unit roots"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L137"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.qa.unitroot(data: pd.DataFrame, fuller_reg: str = "c", kpss_reg: str = "c")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"DataFrame of target variable"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fuller_reg"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of regression of ADF test. Can be \u2018c\u2019,\u2019ct\u2019,\u2019ctt\u2019,\u2019nc\u2019 'c' - Constant and t - trend order"),(0,n.kt)("td",{parentName:"tr",align:null},"c"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kpss_reg"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of regression for KPSS test.  Can be \u2018c\u2019,\u2019ct'"),(0,n.kt)("td",{parentName:"tr",align:null},"c"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"Dataframe with results of ADF test and KPSS test")))),(0,n.kt)("hr",null)),(0,n.kt)(u.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,n.kt)("p",null,"Prints table showing unit root test calculations"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L783"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.qa.unitroot_chart(data: pd.DataFrame, target: str, fuller_reg: str = "c", kpss_reg: str = "c", export: str = "", sheet_name: Optional[str] = None)\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Column of data to look at"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fuller_reg"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of regression of ADF test. Can be \u2018c\u2019,\u2019ct\u2019,\u2019ctt\u2019,\u2019nc\u2019 'c' - Constant and t - trend order"),(0,n.kt)("td",{parentName:"tr",align:null},"c"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kpss_reg"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of regression for KPSS test. Can be \u2018c\u2019,\u2019ct'"),(0,n.kt)("td",{parentName:"tr",align:null},"c"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"export"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Format for exporting data"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"This function does not return anything"),(0,n.kt)("hr",null))))}b.isMDXComponent=!0}}]);