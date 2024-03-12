"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(a),p=n,f=c["".concat(i,".").concat(p)]||c[p]||d[p]||l;return a?r.createElement(f,o(o({ref:t},m),{},{components:a})):r.createElement(f,o({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(35742);function l(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},31792:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),s=a(16550),i=a(91980),u=a(67392),m=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,u]=f({queryString:a,groupId:r}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,m.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),g=(()=>{const e=i??c;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var g=a(72389);const _={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function h(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:m}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),{pathname:p}=(0,s.TH)(),f=e=>{const t=e.currentTarget,a=c.indexOf(t),r=m[a].value;r!==i&&(d(t),u(r))},b=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},m.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:f},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",_.tabItem,o?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&p.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&p.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&p.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&p.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&p.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&p.startsWith("/terminal")})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",_.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},7601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),l=a(88828),o=a(31792),s=a(85162);const i={title:"panel_random_effects",description:"Learn how to perform One-way Random Effects model for panel data using  a Python function. This function takes an input dataset, target column, and exogenous  variables as parameters and returns the fit model.",keywords:["One-way Random Effects model","panel data","perform","Python function"]},u=void 0,m={unversionedId:"platform/reference/econometrics/panel_random_effects",id:"platform/reference/econometrics/panel_random_effects",title:"panel_random_effects",description:"Learn how to perform One-way Random Effects model for panel data using  a Python function. This function takes an input dataset, target column, and exogenous  variables as parameters and returns the fit model.",source:"@site/content/platform/reference/econometrics/panel_random_effects.md",sourceDirName:"platform/reference/econometrics",slug:"/platform/reference/econometrics/panel_random_effects",permalink:"/platform/reference/econometrics/panel_random_effects",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/econometrics/panel_random_effects.md",tags:[],version:"current",lastUpdatedBy:"Pratyush Shukla",lastUpdatedAt:1710270490,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"panel_random_effects",description:"Learn how to perform One-way Random Effects model for panel data using  a Python function. This function takes an input dataset, target column, and exogenous  variables as parameters and returns the fit model.",keywords:["One-way Random Effects model","panel data","perform","Python function"]},sidebar:"tutorialSidebar",previous:{title:"panel_pooled",permalink:"/platform/reference/econometrics/panel_pooled"},next:{title:"residual_autocorrelation",permalink:"/platform/reference/econometrics/residual_autocorrelation"}},c={},d=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],p={toc:d},f="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"econometrics/panel_random_effects - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Perform One-way Random Effects model for panel data."),(0,n.kt)("p",null," One-way Random Effects model to panel data is offering a nuanced approach to analyzing data that spans across both\ntime and entities (such as individuals, companies, countries, etc.). By acknowledging and modeling the random\nvariation that exists within these entities, this method provides insights into the general patterns that\nemerge across the dataset."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\nobb.econometrics.panel_random_effects(y_column='portfolio_value', x_columns=['risk_free_rate'], data=[{'is_multiindex': True, 'multiindex_names': \"['asset_manager', 'time']\", 'asset_manager': 'asset_manager_1', 'time': 0, 'portfolio_value': 100000.0, 'risk_free_rate': 0.02}, {'is_multiindex': True, 'multiindex_names': \"['asset_manager', 'time']\", 'asset_manager': 'asset_manager_1', 'time': 1, 'portfolio_value': 150000.0, 'risk_free_rate': 0.03}, {'is_multiindex': True, 'multiindex_names': \"['asset_manager', 'time']\", 'asset_manager': 'asset_manager_2', 'time': 0, 'portfolio_value': 150000.0, 'risk_free_rate': 0.03}, {'is_multiindex': True, 'multiindex_names': \"['asset_manager', 'time']\", 'asset_manager': 'asset_manager_2', 'time': 1, 'portfolio_value': 133333.33, 'risk_free_rate': 0.03}, {'is_multiindex': True, 'multiindex_names': \"['asset_manager', 'time']\", 'asset_manager': 'asset_manager_3', 'time': 0, 'portfolio_value': 133333.33, 'risk_free_rate': 0.03}, {'is_multiindex': True, 'multiindex_names': \"['asset_manager', 'time']\", 'asset_manager': 'asset_manager_3', 'time': 1, 'portfolio_value': 125000.0, 'risk_free_rate': 0.03}, {'is_multiindex': True, 'multiindex_names': \"['asset_manager', 'time']\", 'asset_manager': 'asset_manager_4', 'time': 0, 'portfolio_value': 125000.0, 'risk_free_rate': 0.03}, {'is_multiindex': True, 'multiindex_names': \"['asset_manager', 'time']\", 'asset_manager': 'asset_manager_4', 'time': 1, 'portfolio_value': 120000.0, 'risk_free_rate': 0.02}, {'is_multiindex': True, 'multiindex_names': \"['asset_manager', 'time']\", 'asset_manager': 'asset_manager_5', 'time': 0, 'portfolio_value': 120000.0, 'risk_free_rate': 0.02}, {'is_multiindex': True, 'multiindex_names': \"['asset_manager', 'time']\", 'asset_manager': 'asset_manager_5', 'time': 1, 'portfolio_value': 116666.67, 'risk_free_rate': 0.02}])\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"standard",label:"standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"List","[Data]"),(0,n.kt)("td",{parentName:"tr",align:null},"Input dataset."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"y_column"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Target column."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x_columns"),(0,n.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,n.kt)("td",{parentName:"tr",align:null},"List of columns to use as exogenous variables."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : Dict\n        OBBject with the fit model returned\n")))}b.isMDXComponent=!0}}]);