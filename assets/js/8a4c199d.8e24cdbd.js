"use strict";(self.webpackChunkshields_docusaurus_poc=self.webpackChunkshields_docusaurus_poc||[]).push([[3507],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return r?a.createElement(g,n(n({ref:t},c),{},{components:r})):a.createElement(g,n({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,n=new Array(l);n[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,n[1]=i;for(var p=2;p<l;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},362254:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(487462),o=(r(667294),r(603905));const l={},n="Chromium HSTS preload",i={type:"api",id:"chromium-hsts-preload",unversionedId:"chromium-hsts-preload",title:"Chromium HSTS preload",description:"",slug:"/chromium-hsts-preload",frontMatter:{},api:{description:'\n<p>\n  <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">\n  <code>Strict-Transport-Security</code> is an HTTP response header</a> that signals that browsers should\n  only access the site using HTTPS.\n</p>\n<p>\n  For a higher level of security, it\'s possible for a domain owner to\n  <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security#Preloading_Strict_Transport_Security">preload\n  this behavior into participating web browsers</a>. Chromium maintains the <a href="https://www.chromium.org/hsts">HSTS preload list</a>, which\n  is the de facto standard that has been adopted by several browsers. This service checks a domain\'s status in that list.\n</p>\n',parameters:[{name:"domain",in:"path",required:!0,schema:{type:"string"},example:"github.com"},{name:"style",in:"query",required:!1,description:"One of: flat (default), flat-square, plastic, for-the-badge, social",schema:{type:"string"},example:"flat"},{name:"logo",in:"query",required:!1,description:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',schema:{type:"string"},example:"appveyor"},{name:"logoColor",in:"query",required:!1,description:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",schema:{type:"string"},example:"violet"},{name:"label",in:"query",required:!1,description:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',schema:{type:"string"},example:"healthiness"},{name:"labelColor",in:"query",required:!1,description:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',schema:{type:"string"},example:"abcdef"},{name:"color",in:"query",required:!1,description:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',schema:{type:"string"},example:"fedcba"},{name:"cacheSeconds",in:"query",required:!1,description:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',schema:{type:"string"},example:"3600"},{name:"link",in:"query",required:!1,description:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",style:"form",explode:!0,schema:{type:"array",maxItems:2,items:{type:"string"}}}],"x-code-samples":[{lang:"URL",label:"URL",source:"$url"},{lang:"Markdown",label:"Markdown",source:"![Chromium HSTS preload]($url)"},{lang:"reStructuredText",label:"rSt",source:".. image:: $url\n:   alt: Chromium HSTS preload"},{lang:"AsciiDoc",label:"AsciiDoc",source:"image:$url[Chromium HSTS preload]"},{lang:"HTML",label:"HTML",source:'<img alt="Chromium HSTS preload" src="$url">'}],method:"get",path:"/hsts/preload/{domain}",servers:[{url:"https://img.shields.io"}],info:{version:"1.0.0",title:"Monitoring",license:{name:"CC0"}},postman:{name:"Chromium HSTS preload",description:{content:'\n<p>\n  <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">\n  <code>Strict-Transport-Security</code> is an HTTP response header</a> that signals that browsers should\n  only access the site using HTTPS.\n</p>\n<p>\n  For a higher level of security, it\'s possible for a domain owner to\n  <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security#Preloading_Strict_Transport_Security">preload\n  this behavior into participating web browsers</a>. Chromium maintains the <a href="https://www.chromium.org/hsts">HSTS preload list</a>, which\n  is the de facto standard that has been adopted by several browsers. This service checks a domain\'s status in that list.\n</p>\n',type:"text/plain"},url:{path:["hsts","preload",":domain"],host:["{{baseUrl}}"],query:[{description:{content:"One of: flat (default), flat-square, plastic, for-the-badge, social",type:"text/plain"},key:"style",value:"<string>"},{description:{content:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',type:"text/plain"},key:"logo",value:"<string>"},{description:{content:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",type:"text/plain"},key:"logoColor",value:"<string>"},{description:{content:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',type:"text/plain"},key:"label",value:"<string>"},{description:{content:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',type:"text/plain"},key:"labelColor",value:"<string>"},{description:{content:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',type:"text/plain"},key:"color",value:"<string>"},{description:{content:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',type:"text/plain"},key:"cacheSeconds",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"domain"}]},method:"GET"}},source:"@site/categories/monitoring.yaml",sourceDirName:".",permalink:"/shields-docusaurus-poc/badges/chromium-hsts-preload",previous:{title:"Weblate component license",permalink:"/shields-docusaurus-poc/badges/weblate-component-license"},next:{title:"Mozilla HTTP Observatory Grade",permalink:"/shields-docusaurus-poc/badges/mozilla-http-observatory-grade"}},s=[],p={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chromium-hsts-preload"},"Chromium HSTS preload"),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security"},(0,o.kt)("code",null,"Strict-Transport-Security")," is an HTTP response header")," that signals that browsers should only access the site using HTTPS."),(0,o.kt)("p",null,"For a higher level of security, it's possible for a domain owner to",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security#Preloading_Strict_Transport_Security"},"preload this behavior into participating web browsers"),". Chromium maintains the ",(0,o.kt)("a",{href:"https://www.chromium.org/hsts"},"HSTS preload list"),", which is the de facto standard that has been adopted by several browsers. This service checks a domain's status in that list."),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"domain"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: github.com"))))),(0,o.kt)("table",{style:{display:"table",width:"100%"}},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"style"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"One of: flat (default), flat-square, plastic, for-the-badge, social")),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: flat"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"logo"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or ",(0,o.kt)("a",{href:"https://simpleicons.org/",rel:"noopener noreferrer",target:"_blank"},"simple-icons"),". Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the ",(0,o.kt)("a",{href:"https://github.com/simple-icons/simple-icons/blob/develop/slugs.md",rel:"noopener noreferrer",target:"_blank"},"slugs.md")," file in the simple-icons repository.")),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: appveyor"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"logoColor"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.")),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: violet"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"label"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Override the default left-hand-side text (",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding"},"URL-Encoding")," needed for spaces or special characters!)")),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: healthiness"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"labelColor"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.')),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: abcdef"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"color"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.')),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: fedcba"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"cacheSeconds"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.')),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 3600"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("code",null,"link"),(0,o.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,o.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,o.kt)("p",null,"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an ",(0,o.kt)("inlineCode",{parentName:"p"},"<object>")," HTML tag, but not an ",(0,o.kt)("inlineCode",{parentName:"p"},"<img>")," tag or a markup language.")))))))}c.isMDXComponent=!0}}]);