"use strict";(self.webpackChunkshields_docusaurus_poc=self.webpackChunkshields_docusaurus_poc||[]).push([[47365],{603905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(667294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),g=l,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||n;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},726054:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var r=a(487462),l=(a(667294),a(603905));const n={},o="Arch Linux package",i={type:"api",id:"arch-linux-package",unversionedId:"arch-linux-package",title:"Arch Linux package",description:"",slug:"/arch-linux-package",frontMatter:{},api:{parameters:[{name:"repository",in:"path",required:!0,schema:{type:"string"},example:"core"},{name:"architecture",in:"path",required:!0,schema:{type:"string"},example:"x86_64"},{name:"packageName",in:"path",required:!0,schema:{type:"string"},example:"pacman"},{name:"style",in:"query",required:!1,description:"One of: flat (default), flat-square, plastic, for-the-badge, social",schema:{type:"string"},example:"flat"},{name:"logo",in:"query",required:!1,description:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',schema:{type:"string"},example:"appveyor"},{name:"logoColor",in:"query",required:!1,description:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",schema:{type:"string"},example:"violet"},{name:"label",in:"query",required:!1,description:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',schema:{type:"string"},example:"healthiness"},{name:"labelColor",in:"query",required:!1,description:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',schema:{type:"string"},example:"abcdef"},{name:"color",in:"query",required:!1,description:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',schema:{type:"string"},example:"fedcba"},{name:"cacheSeconds",in:"query",required:!1,description:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',schema:{type:"string"},example:"3600"},{name:"link",in:"query",required:!1,description:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",style:"form",explode:!0,schema:{type:"array",maxItems:2,items:{type:"string"}}}],"x-code-samples":[{lang:"URL",label:"URL",source:"$url"},{lang:"Markdown",label:"Markdown",source:"![Arch Linux package]($url)"},{lang:"reStructuredText",label:"rSt",source:".. image:: $url\n:   alt: Arch Linux package"},{lang:"AsciiDoc",label:"AsciiDoc",source:"image:$url[Arch Linux package]"},{lang:"HTML",label:"HTML",source:'<img alt="Arch Linux package" src="$url">'}],description:"Arch Linux package",method:"get",path:"/archlinux/v/{repository}/{architecture}/{packageName}",servers:[{url:"https://img.shields.io"}],info:{version:"1.0.0",title:"Version",license:{name:"CC0"}},postman:{name:"Arch Linux package",description:{type:"text/plain"},url:{path:["archlinux","v",":repository",":architecture",":packageName"],host:["{{baseUrl}}"],query:[{description:{content:"One of: flat (default), flat-square, plastic, for-the-badge, social",type:"text/plain"},key:"style",value:"<string>"},{description:{content:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',type:"text/plain"},key:"logo",value:"<string>"},{description:{content:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",type:"text/plain"},key:"logoColor",value:"<string>"},{description:{content:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',type:"text/plain"},key:"label",value:"<string>"},{description:{content:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',type:"text/plain"},key:"labelColor",value:"<string>"},{description:{content:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',type:"text/plain"},key:"color",value:"<string>"},{description:{content:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',type:"text/plain"},key:"cacheSeconds",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"repository"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"architecture"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"packageName"}]},method:"GET"}},source:"@site/categories/version.yaml",sourceDirName:".",permalink:"/shields-docusaurus-poc/badges/arch-linux-package",previous:{title:"Mozilla Add-on",permalink:"/shields-docusaurus-poc/badges/mozilla-add-on-4"},next:{title:"AUR version",permalink:"/shields-docusaurus-poc/badges/aur-version"}},s=[],p={toc:s};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"arch-linux-package"},"Arch Linux package"),(0,l.kt)("p",null,"Arch Linux package"),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"repository"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: core"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"architecture"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: x86_64"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"packageName"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: pacman"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"style"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"One of: flat (default), flat-square, plastic, for-the-badge, social")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: flat"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"logo"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or ",(0,l.kt)("a",{href:"https://simpleicons.org/",rel:"noopener noreferrer",target:"_blank"},"simple-icons"),". Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the ",(0,l.kt)("a",{href:"https://github.com/simple-icons/simple-icons/blob/develop/slugs.md",rel:"noopener noreferrer",target:"_blank"},"slugs.md")," file in the simple-icons repository.")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: appveyor"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"logoColor"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: violet"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"label"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Override the default left-hand-side text (",(0,l.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding"},"URL-Encoding")," needed for spaces or special characters!)")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: healthiness"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"labelColor"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.')),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: abcdef"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"color"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.')),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: fedcba"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"cacheSeconds"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.')),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 3600"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"link"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an ",(0,l.kt)("inlineCode",{parentName:"p"},"<object>")," HTML tag, but not an ",(0,l.kt)("inlineCode",{parentName:"p"},"<img>")," tag or a markup language.")))))))}c.isMDXComponent=!0}}]);