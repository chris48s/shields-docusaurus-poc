"use strict";(self.webpackChunkshields_docusaurus_poc=self.webpackChunkshields_docusaurus_poc||[]).push([[14505],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||l;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},608809:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(487462),n=(r(667294),r(603905));const l={},o="Scrutinizer coverage (GitLab)",i={type:"api",id:"scrutinizer-coverage-git-lab-2",unversionedId:"scrutinizer-coverage-git-lab-2",title:"Scrutinizer coverage (GitLab)",description:"",slug:"/scrutinizer-coverage-git-lab-2",frontMatter:{},api:{parameters:[{name:"instance",in:"path",required:!0,schema:{type:"string"},example:"propertywindow"},{name:"user",in:"path",required:!0,schema:{type:"string"},example:"propertywindow"},{name:"repo",in:"path",required:!0,schema:{type:"string"},example:"client"},{name:"branch",in:"path",required:!0,schema:{type:"string"},example:"master"},{name:"style",in:"query",required:!1,description:"One of: flat (default), flat-square, plastic, for-the-badge, social",schema:{type:"string"},example:"flat"},{name:"logo",in:"query",required:!1,description:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',schema:{type:"string"},example:"appveyor"},{name:"logoColor",in:"query",required:!1,description:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",schema:{type:"string"},example:"violet"},{name:"label",in:"query",required:!1,description:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',schema:{type:"string"},example:"healthiness"},{name:"labelColor",in:"query",required:!1,description:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',schema:{type:"string"},example:"abcdef"},{name:"color",in:"query",required:!1,description:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',schema:{type:"string"},example:"fedcba"},{name:"cacheSeconds",in:"query",required:!1,description:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',schema:{type:"string"},example:"3600"},{name:"link",in:"query",required:!1,description:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",style:"form",explode:!0,schema:{type:"array",maxItems:2,items:{type:"string"}}}],"x-code-samples":[{lang:"URL",label:"URL",source:"$url"},{lang:"Markdown",label:"Markdown",source:"![Scrutinizer coverage (GitLab)]($url)"},{lang:"reStructuredText",label:"rSt",source:".. image:: $url\n:   alt: Scrutinizer coverage (GitLab)"},{lang:"AsciiDoc",label:"AsciiDoc",source:"image:$url[Scrutinizer coverage (GitLab)]"},{lang:"HTML",label:"HTML",source:'<img alt="Scrutinizer coverage (GitLab)" src="$url">'}],description:"Scrutinizer coverage (GitLab)",method:"get",path:"/scrutinizer/coverage/gl/{instance}/{user}/{repo}/{branch}",servers:[{url:"https://img.shields.io"}],info:{version:"1.0.0",title:"Code Coverage",license:{name:"CC0"}},postman:{name:"Scrutinizer coverage (GitLab)",description:{type:"text/plain"},url:{path:["scrutinizer","coverage","gl",":instance",":user",":repo",":branch"],host:["{{baseUrl}}"],query:[{description:{content:"One of: flat (default), flat-square, plastic, for-the-badge, social",type:"text/plain"},key:"style",value:"<string>"},{description:{content:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',type:"text/plain"},key:"logo",value:"<string>"},{description:{content:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",type:"text/plain"},key:"logoColor",value:"<string>"},{description:{content:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',type:"text/plain"},key:"label",value:"<string>"},{description:{content:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',type:"text/plain"},key:"labelColor",value:"<string>"},{description:{content:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',type:"text/plain"},key:"color",value:"<string>"},{description:{content:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',type:"text/plain"},key:"cacheSeconds",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"instance"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"user"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"repo"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"branch"}]},method:"GET"}},source:"@site/categories/coverage.yaml",sourceDirName:".",permalink:"/shields-docusaurus-poc/badges/scrutinizer-coverage-git-lab-2",previous:{title:"Scrutinizer coverage (GitHub/BitBucket)",permalink:"/shields-docusaurus-poc/badges/scrutinizer-coverage-git-hub-bit-bucket-1"},next:{title:"Scrutinizer coverage (GitLab)",permalink:"/shields-docusaurus-poc/badges/scrutinizer-coverage-git-lab-3"}},s=[],c={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scrutinizer-coverage-gitlab"},"Scrutinizer coverage (GitLab)"),(0,n.kt)("p",null,"Scrutinizer coverage (GitLab)"),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"instance"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: propertywindow"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"user"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: propertywindow"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"repo"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: client"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"branch"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: master"))))),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"style"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"One of: flat (default), flat-square, plastic, for-the-badge, social")),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: flat"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"logo"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or ",(0,n.kt)("a",{href:"https://simpleicons.org/",rel:"noopener noreferrer",target:"_blank"},"simple-icons"),". Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the ",(0,n.kt)("a",{href:"https://github.com/simple-icons/simple-icons/blob/develop/slugs.md",rel:"noopener noreferrer",target:"_blank"},"slugs.md")," file in the simple-icons repository.")),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: appveyor"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"logoColor"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.")),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: violet"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"label"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Override the default left-hand-side text (",(0,n.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding"},"URL-Encoding")," needed for spaces or special characters!)")),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: healthiness"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"labelColor"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.')),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: abcdef"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"color"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.')),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: fedcba"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"cacheSeconds"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.')),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 3600"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"link"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an ",(0,n.kt)("inlineCode",{parentName:"p"},"<object>")," HTML tag, but not an ",(0,n.kt)("inlineCode",{parentName:"p"},"<img>")," tag or a markup language.")))))))}p.isMDXComponent=!0}}]);