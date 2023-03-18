"use strict";(self.webpackChunkshields_docusaurus_poc=self.webpackChunkshields_docusaurus_poc||[]).push([[87308],{603905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>m});var r=l(667294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,r,o=function(e,t){if(null==e)return{};var l,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var l=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(l),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return l?r.createElement(m,n(n({ref:t},c),{},{components:l})):r.createElement(m,n({ref:t},c))}));function m(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=l.length,n=new Array(a);n[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,n[1]=i;for(var p=2;p<a;p++)n[p]=l[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,l)}g.displayName="MDXCreateElement"},424867:(e,t,l)=>{l.r(t),l.d(t,{contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=l(487462),o=(l(667294),l(603905));const a={},n="Ansible Role",i={type:"api",id:"ansible-role-1",unversionedId:"ansible-role-1",title:"Ansible Role",description:"",slug:"/ansible-role-1",frontMatter:{},api:{parameters:[{name:"roleId",in:"path",required:!0,schema:{type:"string"},example:"3078"},{name:"style",in:"query",required:!1,description:"One of: flat (default), flat-square, plastic, for-the-badge, social",schema:{type:"string"},example:"flat"},{name:"logo",in:"query",required:!1,description:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',schema:{type:"string"},example:"appveyor"},{name:"logoColor",in:"query",required:!1,description:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",schema:{type:"string"},example:"violet"},{name:"label",in:"query",required:!1,description:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',schema:{type:"string"},example:"healthiness"},{name:"labelColor",in:"query",required:!1,description:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',schema:{type:"string"},example:"abcdef"},{name:"color",in:"query",required:!1,description:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',schema:{type:"string"},example:"fedcba"},{name:"cacheSeconds",in:"query",required:!1,description:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',schema:{type:"string"},example:"3600"},{name:"link",in:"query",required:!1,description:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",style:"form",explode:!0,schema:{type:"array",maxItems:2,items:{type:"string"}}}],"x-code-samples":[{lang:"URL",label:"URL",source:"$url"},{lang:"Markdown",label:"Markdown",source:"![Ansible Role]($url)"},{lang:"reStructuredText",label:"rSt",source:".. image:: $url\n:   alt: Ansible Role"},{lang:"AsciiDoc",label:"AsciiDoc",source:"image:$url[Ansible Role]"},{lang:"HTML",label:"HTML",source:'<img alt="Ansible Role" src="$url">'}],description:"Ansible Role",method:"get",path:"/ansible/role/{roleId}",servers:[{url:"https://img.shields.io"}],info:{version:"1.0.0",title:"Other",license:{name:"CC0"}},postman:{name:"Ansible Role",description:{type:"text/plain"},url:{path:["ansible","role",":roleId"],host:["{{baseUrl}}"],query:[{description:{content:"One of: flat (default), flat-square, plastic, for-the-badge, social",type:"text/plain"},key:"style",value:"<string>"},{description:{content:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',type:"text/plain"},key:"logo",value:"<string>"},{description:{content:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",type:"text/plain"},key:"logoColor",value:"<string>"},{description:{content:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',type:"text/plain"},key:"label",value:"<string>"},{description:{content:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',type:"text/plain"},key:"labelColor",value:"<string>"},{description:{content:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',type:"text/plain"},key:"color",value:"<string>"},{description:{content:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',type:"text/plain"},key:"cacheSeconds",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"roleId"}]},method:"GET"}},source:"@site/categories/other.yaml",sourceDirName:".",permalink:"/shields-docusaurus-poc/badges/ansible-role-1",previous:{title:"Ansible Collection",permalink:"/shields-docusaurus-poc/badges/ansible-collection"},next:{title:"AUR maintainer",permalink:"/shields-docusaurus-poc/badges/aur-maintainer"}},s=[],p={toc:s};function c(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ansible-role"},"Ansible Role"),(0,o.kt)("p",null,"Ansible Role"),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"roleId"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 3078"))))),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"style"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"One of: flat (default), flat-square, plastic, for-the-badge, social")),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: flat"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"logo"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or ",(0,o.kt)("a",{href:"https://simpleicons.org/",rel:"noopener noreferrer",target:"_blank"},"simple-icons"),". Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the ",(0,o.kt)("a",{href:"https://github.com/simple-icons/simple-icons/blob/develop/slugs.md",rel:"noopener noreferrer",target:"_blank"},"slugs.md")," file in the simple-icons repository.")),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: appveyor"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"logoColor"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.")),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: violet"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"label"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Override the default left-hand-side text (",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding"},"URL-Encoding")," needed for spaces or special characters!)")),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: healthiness"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"labelColor"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.')),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: abcdef"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"color"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.')),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: fedcba"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"cacheSeconds"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.')),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 3600"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"link"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an ",(0,o.kt)("inlineCode",{parentName:"p"},"<object>")," HTML tag, but not an ",(0,o.kt)("inlineCode",{parentName:"p"},"<img>")," tag or a markup language.")))))))}c.isMDXComponent=!0}}]);