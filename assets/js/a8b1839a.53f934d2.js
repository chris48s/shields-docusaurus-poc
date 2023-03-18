"use strict";(self.webpackChunkshields_docusaurus_poc=self.webpackChunkshields_docusaurus_poc||[]).push([[56649],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(667294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),g=l,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return a?r.createElement(m,n(n({ref:t},p),{},{components:a})):r.createElement(m,n({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,n=new Array(o);n[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,n[1]=i;for(var c=2;c<o;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},536580:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(487462),l=(a(667294),a(603905));const o={},n="Crates.io",i={type:"api",id:"crates-io",unversionedId:"crates-io",title:"Crates.io",description:"",slug:"/crates-io",frontMatter:{},api:{parameters:[{name:"crate",in:"path",required:!0,schema:{type:"string"},example:"rustc-serialize"},{name:"style",in:"query",required:!1,description:"One of: flat (default), flat-square, plastic, for-the-badge, social",schema:{type:"string"},example:"flat"},{name:"logo",in:"query",required:!1,description:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',schema:{type:"string"},example:"appveyor"},{name:"logoColor",in:"query",required:!1,description:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",schema:{type:"string"},example:"violet"},{name:"label",in:"query",required:!1,description:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',schema:{type:"string"},example:"healthiness"},{name:"labelColor",in:"query",required:!1,description:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',schema:{type:"string"},example:"abcdef"},{name:"color",in:"query",required:!1,description:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',schema:{type:"string"},example:"fedcba"},{name:"cacheSeconds",in:"query",required:!1,description:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',schema:{type:"string"},example:"3600"},{name:"link",in:"query",required:!1,description:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",style:"form",explode:!0,schema:{type:"array",maxItems:2,items:{type:"string"}}}],"x-code-samples":[{lang:"URL",label:"URL",source:"$url"},{lang:"Markdown",label:"Markdown",source:"![Crates.io]($url)"},{lang:"reStructuredText",label:"rSt",source:".. image:: $url\n:   alt: Crates.io"},{lang:"AsciiDoc",label:"AsciiDoc",source:"image:$url[Crates.io]"},{lang:"HTML",label:"HTML",source:'<img alt="Crates.io" src="$url">'}],description:"Crates.io",method:"get",path:"/crates/d/{crate}",servers:[{url:"https://img.shields.io"}],info:{version:"1.0.0",title:"Downloads",license:{name:"CC0"}},postman:{name:"Crates.io",description:{type:"text/plain"},url:{path:["crates","d",":crate"],host:["{{baseUrl}}"],query:[{description:{content:"One of: flat (default), flat-square, plastic, for-the-badge, social",type:"text/plain"},key:"style",value:"<string>"},{description:{content:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',type:"text/plain"},key:"logo",value:"<string>"},{description:{content:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",type:"text/plain"},key:"logoColor",value:"<string>"},{description:{content:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',type:"text/plain"},key:"label",value:"<string>"},{description:{content:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',type:"text/plain"},key:"labelColor",value:"<string>"},{description:{content:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',type:"text/plain"},key:"color",value:"<string>"},{description:{content:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',type:"text/plain"},key:"cacheSeconds",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"crate"}]},method:"GET"}},source:"@site/categories/downloads.yaml",sourceDirName:".",permalink:"/shields-docusaurus-poc/badges/crates-io",previous:{title:"Conda",permalink:"/shields-docusaurus-poc/badges/conda"},next:{title:"Crates.io (latest)",permalink:"/shields-docusaurus-poc/badges/crates-io-latest"}},s=[],c={toc:s};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cratesio"},"Crates.io"),(0,l.kt)("p",null,"Crates.io"),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"crate"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: rustc-serialize"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"style"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"One of: flat (default), flat-square, plastic, for-the-badge, social")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: flat"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"logo"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or ",(0,l.kt)("a",{href:"https://simpleicons.org/",rel:"noopener noreferrer",target:"_blank"},"simple-icons"),". Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the ",(0,l.kt)("a",{href:"https://github.com/simple-icons/simple-icons/blob/develop/slugs.md",rel:"noopener noreferrer",target:"_blank"},"slugs.md")," file in the simple-icons repository.")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: appveyor"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"logoColor"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: violet"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"label"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Override the default left-hand-side text (",(0,l.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding"},"URL-Encoding")," needed for spaces or special characters!)")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: healthiness"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"labelColor"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.')),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: abcdef"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"color"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.')),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: fedcba"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"cacheSeconds"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.')),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 3600"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"link"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an ",(0,l.kt)("inlineCode",{parentName:"p"},"<object>")," HTML tag, but not an ",(0,l.kt)("inlineCode",{parentName:"p"},"<img>")," tag or a markup language.")))))))}p.isMDXComponent=!0}}]);