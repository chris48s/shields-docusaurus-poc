"use strict";(self.webpackChunkshields_docusaurus_poc=self.webpackChunkshields_docusaurus_poc||[]).push([[19628],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(667294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=l,m=d["".concat(s,".").concat(u)]||d[u]||g[u]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},102738:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(487462),l=(n(667294),n(603905));const r={},o="Conan Center",i={type:"api",id:"conan-center",unversionedId:"conan-center",title:"Conan Center",description:"",slug:"/conan-center",frontMatter:{},api:{parameters:[{name:"packageName",in:"path",required:!0,schema:{type:"string"},example:"boost"},{name:"style",in:"query",required:!1,description:"One of: flat (default), flat-square, plastic, for-the-badge, social",schema:{type:"string"},example:"flat"},{name:"logo",in:"query",required:!1,description:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',schema:{type:"string"},example:"appveyor"},{name:"logoColor",in:"query",required:!1,description:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",schema:{type:"string"},example:"violet"},{name:"label",in:"query",required:!1,description:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',schema:{type:"string"},example:"healthiness"},{name:"labelColor",in:"query",required:!1,description:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',schema:{type:"string"},example:"abcdef"},{name:"color",in:"query",required:!1,description:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',schema:{type:"string"},example:"fedcba"},{name:"cacheSeconds",in:"query",required:!1,description:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',schema:{type:"string"},example:"3600"},{name:"link",in:"query",required:!1,description:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",style:"form",explode:!0,schema:{type:"array",maxItems:2,items:{type:"string"}}}],"x-code-samples":[{lang:"URL",label:"URL",source:"$url"},{lang:"Markdown",label:"Markdown",source:"![Conan Center]($url)"},{lang:"reStructuredText",label:"rSt",source:".. image:: $url\n:   alt: Conan Center"},{lang:"AsciiDoc",label:"AsciiDoc",source:"image:$url[Conan Center]"},{lang:"HTML",label:"HTML",source:'<img alt="Conan Center" src="$url">'}],description:"Conan Center",method:"get",path:"/conan/v/{packageName}",servers:[{url:"https://img.shields.io"}],info:{version:"1.0.0",title:"Version",license:{name:"CC0"}},postman:{name:"Conan Center",description:{type:"text/plain"},url:{path:["conan","v",":packageName"],host:["{{baseUrl}}"],query:[{description:{content:"One of: flat (default), flat-square, plastic, for-the-badge, social",type:"text/plain"},key:"style",value:"<string>"},{description:{content:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',type:"text/plain"},key:"logo",value:"<string>"},{description:{content:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",type:"text/plain"},key:"logoColor",value:"<string>"},{description:{content:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',type:"text/plain"},key:"label",value:"<string>"},{description:{content:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',type:"text/plain"},key:"labelColor",value:"<string>"},{description:{content:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',type:"text/plain"},key:"color",value:"<string>"},{description:{content:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',type:"text/plain"},key:"cacheSeconds",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"packageName"}]},method:"GET"}},source:"@site/categories/version.yaml",sourceDirName:".",permalink:"/shields-docusaurus-poc/badges/conan-center",previous:{title:"Cocoapods",permalink:"/shields-docusaurus-poc/badges/cocoapods-1"},next:{title:"Conda",permalink:"/shields-docusaurus-poc/badges/conda-2"}},s=[],p={toc:s};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"conan-center"},"Conan Center"),(0,l.kt)("p",null,"Conan Center"),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"packageName"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: boost"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"style"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"One of: flat (default), flat-square, plastic, for-the-badge, social")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: flat"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"logo"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or ",(0,l.kt)("a",{href:"https://simpleicons.org/",rel:"noopener noreferrer",target:"_blank"},"simple-icons"),". Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the ",(0,l.kt)("a",{href:"https://github.com/simple-icons/simple-icons/blob/develop/slugs.md",rel:"noopener noreferrer",target:"_blank"},"slugs.md")," file in the simple-icons repository.")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: appveyor"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"logoColor"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: violet"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"label"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Override the default left-hand-side text (",(0,l.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding"},"URL-Encoding")," needed for spaces or special characters!)")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: healthiness"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"labelColor"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.')),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: abcdef"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"color"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.')),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: fedcba"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"cacheSeconds"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.')),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 3600"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"link"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an ",(0,l.kt)("inlineCode",{parentName:"p"},"<object>")," HTML tag, but not an ",(0,l.kt)("inlineCode",{parentName:"p"},"<img>")," tag or a markup language.")))))))}c.isMDXComponent=!0}}]);