"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7817],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),d=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(u,".").concat(c)]||m[c]||p[c]||l;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},e)}},31792:(t,e,a)=>{a.d(e,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),u=a(91980),d=a(67392),s=a(50012);function m(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function p(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??m(a);return function(t){const e=(0,d.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function k(t){let{queryString:e=!1,groupId:a}=t;const n=(0,o.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function b(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=p(t),[i,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[u,d]=k({queryString:a,groupId:n}),[m,b]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),g=(()=>{const t=u??m;return c({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);o(t),d(t),b(t)}),[d,b,l]),tabValues:l}}var g=a(72389);const h={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function N(t){let{className:e,block:a,selectedValue:u,selectValue:d,tabValues:s}=t;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),{pathname:c}=(0,o.TH)(),k=t=>{const e=t.currentTarget,a=m.indexOf(e),n=s[a].value;n!==u&&(p(e),d(n))},b=t=>{let e=null;switch(t.key){case"Enter":k(t);break;case"ArrowRight":{const a=m.indexOf(t.currentTarget)+1;e=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(t.currentTarget)-1;e=m[a]??m[m.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},s.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===e?0:-1,"aria-selected":u===e,key:e,ref:t=>m.push(t),onKeyDown:b,onClick:k},i,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",h.tabItem,i?.className,{"border-b-2 pointer-events-none":u===e,"border-b-2 text-[#669dcb] border-[#669dcb]":u===e&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==e&&c.startsWith("/terminal")})}),a??e)})))}function y(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function f(t){const e=b(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(N,(0,n.Z)({},t,e)),r.createElement(y,(0,n.Z)({},t,e)))}function v(t){const e=(0,g.Z)();return r.createElement(f,(0,n.Z)({key:String(e)},t))}},80052:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(31792),i=a(85162);const o={title:"Equity NBBO",description:"Equity NBBO"},u=void 0,d={unversionedId:"platform/data_models/EquityNBBO",id:"platform/data_models/EquityNBBO",title:"Equity NBBO",description:"Equity NBBO",source:"@site/content/platform/data_models/EquityNBBO.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/EquityNBBO",permalink:"/platform/data_models/EquityNBBO",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/EquityNBBO.md",tags:[],version:"current",lastUpdatedBy:"minhhoang1023",lastUpdatedAt:1705489831,formattedLastUpdatedAt:"Jan 17, 2024",frontMatter:{title:"Equity NBBO",description:"Equity NBBO"},sidebar:"tutorialSidebar",previous:{title:"Equity Losers",permalink:"/platform/data_models/EquityLosers"},next:{title:"Equity Ownership",permalink:"/platform/data_models/EquityOwnership"}},s={},m=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}],p={toc:m},c="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,r.kt)("h3",{id:"class-names"},"Class names"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters class"),(0,r.kt)("th",{parentName:"tr",align:null},"Data class"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EquityNBBO")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EquityNBBOQueryParams")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EquityNBBOData"))))),(0,r.kt)("h3",{id:"import-statement"},"Import Statement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_core.provider.standard_models.equity_nbbo import (\nEquityNBBOData,\nEquityNBBOQueryParams,\n)\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['polygon']"),(0,r.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'polygon' if there is no default."),(0,r.kt)("td",{parentName:"tr",align:null},'"polygon"'),(0,r.kt)("td",{parentName:"tr",align:null},"True"))))),(0,r.kt)(i.Z,{value:"polygon",label:"polygon",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['polygon']"),(0,r.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'polygon' if there is no default."),(0,r.kt)("td",{parentName:"tr",align:null},'"polygon"'),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of data entries to return. Up to ten million records will be returned. Pagination occurs in groups of 50,000. Remaining limit values will always return 50,000 more records unless it is the last page. High volume tickers will require multiple max requests for a single day's NBBO records. Expect stocks, like SPY, to approach 1GB in size, per day, as a raw CSV. Splitting large requests into chunks is recommended for full-day requests of high-volume symbols."),(0,r.kt)("td",{parentName:"tr",align:null},"50000"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"A specific date to get data for. Use bracketed the timestamp parameters to specify exact time ranges."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp_lt"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[datetime, str]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null),"            Query by datetime, less than. Either a date with the format YYYY-MM-DD or a TZ-aware timestamp string,",(0,r.kt)("br",null),"            YYYY-MM-DDTH:M:S.000000000-04:00\". Include all nanoseconds and the 'T' between the day and hour.",(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp_gt"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[datetime, str]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null),"            Query by datetime, greater than. Either a date with the format YYYY-MM-DD or a TZ-aware timestamp string,",(0,r.kt)("br",null),"            YYYY-MM-DDTH:M:S.000000000-04:00\". Include all nanoseconds and the 'T' between the day and hour.",(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp_lte"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[datetime, str]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null),"            Query by datetime, less than or equal to.",(0,r.kt)("br",null),"            Either a date with the format YYYY-MM-DD or a TZ-aware timestamp string,",(0,r.kt)("br",null),"            YYYY-MM-DDTH:M:S.000000000-04:00\". Include all nanoseconds and the 'T' between the day and hour.",(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp_gte"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[datetime, str]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null),"            Query by datetime, greater than or equal to.",(0,r.kt)("br",null),"            Either a date with the format YYYY-MM-DD or a TZ-aware timestamp string,",(0,r.kt)("br",null),"            YYYY-MM-DDTH:M:S.000000000-04:00\". Include all nanoseconds and the 'T' between the day and hour.",(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ask_exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The exchange ID for the ask.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ask"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The last ask price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ask_size"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null),"        The ask size. This represents the number of round lot orders at the given ask price.",(0,r.kt)("br",null),"        The normal round lot size is 100 shares.",(0,r.kt)("br",null),"        An ask size of 2 means there are 200 shares available to purchase at the given ask price.",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bid_size"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The bid size in round lots.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bid"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The last bid price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bid_exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The exchange ID for the bid."))))),(0,r.kt)(i.Z,{value:"polygon",label:"polygon",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ask_exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The exchange ID for the ask.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ask"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The last ask price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ask_size"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null),"        The ask size. This represents the number of round lot orders at the given ask price.",(0,r.kt)("br",null),"        The normal round lot size is 100 shares.",(0,r.kt)("br",null),"        An ask size of 2 means there are 200 shares available to purchase at the given ask price.",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bid_size"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The bid size in round lots.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bid"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The last bid price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bid_exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The exchange ID for the bid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tape"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The exchange tape.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conditions"),(0,r.kt)("td",{parentName:"tr",align:null},"Union[str, List","[int]",", List","[str]","]"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of condition codes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"indicators"),(0,r.kt)("td",{parentName:"tr",align:null},"List"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of indicator codes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sequence_num"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null),"            The sequence number represents the sequence in which message events happened.",(0,r.kt)("br",null),"            These are increasing and unique per ticker symbol, but will not always be sequential",(0,r.kt)("br",null),"            (e.g., 1, 2, 6, 9, 10, 11)",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"participant_timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null),"            The nanosecond accuracy Participant/Exchange Unix Timestamp.",(0,r.kt)("br",null),"            This is the timestamp of when the quote was actually generated at the exchange.",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sip_timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null),"            The nanosecond accuracy SIP Unix Timestamp.",(0,r.kt)("br",null),"            This is the timestamp of when the SIP received this quote from the exchange which produced it.",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trf_timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null),"            The nanosecond accuracy TRF (Trade Reporting Facility) Unix Timestamp.",(0,r.kt)("br",null),"            This is the timestamp of when the trade reporting facility received this quote.",(0,r.kt)("br",null))))))))}k.isMDXComponent=!0}}]);