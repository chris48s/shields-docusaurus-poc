"use strict";(self.webpackChunkshields_docusaurus_poc=self.webpackChunkshields_docusaurus_poc||[]).push([[841],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,l=function(e,t){if(null==e)return{};var r,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),g=l,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||n;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,a=new Array(n);a[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<n;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},33324:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var o=r(87462),l=(r(67294),r(3905));const n={},a="Localizely overall progress",i={type:"api",id:"localizely-overall-progress",unversionedId:"localizely-overall-progress",title:"Localizely overall progress",description:"",slug:"/localizely-overall-progress",frontMatter:{},api:{description:'The <b>read-only</b> API token from the Localizely account is required to fetch necessary data.<br/><br/><b>Note: Do not use the default API token as it grants full read-write permissions to your projects. You will expose your project and allow malicious users to modify the translations at will.<br/>Instead, create a new one with only read permission.</b><br/><br/>You can find more details regarding API tokens under <a href="https://app.localizely.com/account" target="_blank">My profile</a> page.',parameters:[{name:"projectId",in:"path",required:!0,description:"Project ID",schema:{type:"string"},example:"5cc34208-0418-40b1-8353-acc70c95f802"},{name:"token",in:"query",required:!0,description:"Token",schema:{type:"string"},example:"0f4d5e31a44f48dcbab966c52cfb0a67c5f1982186c14b85ab389a031dbc225a"},{name:"logo",in:"query",required:!1,description:'Insert one of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',schema:{type:"string"}},{name:"logoColor",in:"query",required:!1,description:"Logo Color",schema:{type:"string"}}],"x-code-samples":[{lang:"URL",label:"URL",source:"$url"},{lang:"Markdown",label:"Markdown",source:"![Localizely overall progress]($url)"},{lang:"reStructuredText",label:"rSt",source:".. image:: $url\n:   alt: Localizely overall progress"},{lang:"AsciiDoc",label:"AsciiDoc",source:"image:$url[Localizely overall progress]"},{lang:"HTML",label:"HTML",source:'<img alt="Localizely overall progress" src="$url">'}],method:"get",path:"/localizely/progress/{projectId}",servers:[{url:"https://img.shields.io"}],info:{version:"1.0.0",title:"Other",license:{name:"CC0"}},postman:{name:"Localizely overall progress",description:{content:'The <b>read-only</b> API token from the Localizely account is required to fetch necessary data.<br/><br/><b>Note: Do not use the default API token as it grants full read-write permissions to your projects. You will expose your project and allow malicious users to modify the translations at will.<br/>Instead, create a new one with only read permission.</b><br/><br/>You can find more details regarding API tokens under <a href="https://app.localizely.com/account" target="_blank">My profile</a> page.',type:"text/plain"},url:{path:["localizely","progress",":projectId"],host:["{{baseUrl}}"],query:[{description:{content:"(Required) Token",type:"text/plain"},key:"token",value:"<string>"},{description:{content:'Insert one of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',type:"text/plain"},key:"logo",value:"<string>"},{description:{content:"Logo Color",type:"text/plain"},key:"logoColor",value:"<string>"}],variable:[{description:{content:"(Required) Project ID",type:"text/plain"},type:"any",value:"<string>",key:"projectId"}]},method:"GET"}},source:"@site/categories/4other.json",sourceDirName:".",permalink:"/shields-docusaurus-poc/badges/localizely-overall-progress",previous:{title:"Coveralls",permalink:"/shields-docusaurus-poc/badges/coveralls"},next:{title:"NPM Version",permalink:"/shields-docusaurus-poc/badges/npm-version"}},s=[],c={toc:s};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"localizely-overall-progress"},"Localizely overall progress"),(0,l.kt)("p",null,"The ",(0,l.kt)("b",null,"read-only")," API token from the Localizely account is required to fetch necessary data.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("b",null,"Note: Do not use the default API token as it grants full read-write permissions to your projects. You will expose your project and allow malicious users to modify the translations at will.",(0,l.kt)("br",null),"Instead, create a new one with only read permission."),(0,l.kt)("br",null),(0,l.kt)("br",null),"You can find more details regarding API tokens under ",(0,l.kt)("a",{href:"https://app.localizely.com/account",target:"_blank"},"My profile")," page."),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"projectId"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Project ID")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 5cc34208-0418-40b1-8353-acc70c95f802"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"token"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Token")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 0f4d5e31a44f48dcbab966c52cfb0a67c5f1982186c14b85ab389a031dbc225a"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"logo"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Insert one of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or ",(0,l.kt)("a",{href:"https://simpleicons.org/",rel:"noopener noreferrer",target:"_blank"},"simple-icons"),". Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the ",(0,l.kt)("a",{href:"https://github.com/simple-icons/simple-icons/blob/develop/slugs.md",rel:"noopener noreferrer",target:"_blank"},"slugs.md")," file in the simple-icons repository.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"logoColor"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Logo Color")))))))}p.isMDXComponent=!0}}]);