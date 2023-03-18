"use strict";(self.webpackChunkshields_docusaurus_poc=self.webpackChunkshields_docusaurus_poc||[]).push([[91674],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var o=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),g=n,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return a?o.createElement(h,l(l({ref:t},p),{},{components:a})):o.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},549381:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=a(487462),n=(a(667294),a(603905));const r={},l="Azure DevOps coverage (branch)",i={type:"api",id:"azure-dev-ops-coverage-branch",unversionedId:"azure-dev-ops-coverage-branch",title:"Azure DevOps coverage (branch)",description:"",slug:"/azure-dev-ops-coverage-branch",frontMatter:{},api:{description:'\n<p>\n  To obtain your own badge, you need to get 3 pieces of information:\n  <code>ORGANIZATION</code>, <code>PROJECT</code> and <code>DEFINITION_ID</code>.\n</p>\n<p>\n  First, you need to select your build definition and look at the url:\n</p>\n<img\n  src="https://user-images.githubusercontent.com/3749820/47259976-e2d9ec80-d4b2-11e8-92cc-7c81089a7a2c.png"\n  alt="ORGANIZATION is after the dev.azure.com part, PROJECT is right after that, DEFINITION_ID is at the end after the id= part." />\n<p>\n  Your badge will then have the form:\n  <code>https://img.shields.io/azure-devops/coverage/ORGANIZATION/PROJECT/DEFINITION_ID.svg</code>.\n</p>\n<p>\n  Optionally, you can specify a named branch:\n  <code>https://img.shields.io/azure-devops/coverage/ORGANIZATION/PROJECT/DEFINITION_ID/NAMED_BRANCH.svg</code>.\n</p>\n',parameters:[{name:"organization",in:"path",required:!0,schema:{type:"string"},example:"swellaby"},{name:"project",in:"path",required:!0,schema:{type:"string"},example:"opensource"},{name:"definitionId",in:"path",required:!0,schema:{type:"string"},example:"25"},{name:"branch",in:"path",required:!0,schema:{type:"string"},example:"master"},{name:"style",in:"query",required:!1,description:"One of: flat (default), flat-square, plastic, for-the-badge, social",schema:{type:"string"},example:"flat"},{name:"logo",in:"query",required:!1,description:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',schema:{type:"string"},example:"appveyor"},{name:"logoColor",in:"query",required:!1,description:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",schema:{type:"string"},example:"violet"},{name:"label",in:"query",required:!1,description:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',schema:{type:"string"},example:"healthiness"},{name:"labelColor",in:"query",required:!1,description:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',schema:{type:"string"},example:"abcdef"},{name:"color",in:"query",required:!1,description:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',schema:{type:"string"},example:"fedcba"},{name:"cacheSeconds",in:"query",required:!1,description:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',schema:{type:"string"},example:"3600"},{name:"link",in:"query",required:!1,description:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",style:"form",explode:!0,schema:{type:"array",maxItems:2,items:{type:"string"}}}],"x-code-samples":[{lang:"URL",label:"URL",source:"$url"},{lang:"Markdown",label:"Markdown",source:"![Azure DevOps coverage (branch)]($url)"},{lang:"reStructuredText",label:"rSt",source:".. image:: $url\n:   alt: Azure DevOps coverage (branch)"},{lang:"AsciiDoc",label:"AsciiDoc",source:"image:$url[Azure DevOps coverage (branch)]"},{lang:"HTML",label:"HTML",source:'<img alt="Azure DevOps coverage (branch)" src="$url">'}],method:"get",path:"/azure-devops/coverage/{organization}/{project}/{definitionId}/{branch}",servers:[{url:"https://img.shields.io"}],info:{version:"1.0.0",title:"Code Coverage",license:{name:"CC0"}},postman:{name:"Azure DevOps coverage (branch)",description:{content:'\n<p>\n  To obtain your own badge, you need to get 3 pieces of information:\n  <code>ORGANIZATION</code>, <code>PROJECT</code> and <code>DEFINITION_ID</code>.\n</p>\n<p>\n  First, you need to select your build definition and look at the url:\n</p>\n<img\n  src="https://user-images.githubusercontent.com/3749820/47259976-e2d9ec80-d4b2-11e8-92cc-7c81089a7a2c.png"\n  alt="ORGANIZATION is after the dev.azure.com part, PROJECT is right after that, DEFINITION_ID is at the end after the id= part." />\n<p>\n  Your badge will then have the form:\n  <code>https://img.shields.io/azure-devops/coverage/ORGANIZATION/PROJECT/DEFINITION_ID.svg</code>.\n</p>\n<p>\n  Optionally, you can specify a named branch:\n  <code>https://img.shields.io/azure-devops/coverage/ORGANIZATION/PROJECT/DEFINITION_ID/NAMED_BRANCH.svg</code>.\n</p>\n',type:"text/plain"},url:{path:["azure-devops","coverage",":organization",":project",":definitionId",":branch"],host:["{{baseUrl}}"],query:[{description:{content:"One of: flat (default), flat-square, plastic, for-the-badge, social",type:"text/plain"},key:"style",value:"<string>"},{description:{content:'One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',type:"text/plain"},key:"logo",value:"<string>"},{description:{content:"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.",type:"text/plain"},key:"logoColor",value:"<string>"},{description:{content:'Override the default left-hand-side text (<a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">URL-Encoding</a> needed for spaces or special characters!)',type:"text/plain"},key:"label",value:"<string>"},{description:{content:'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.',type:"text/plain"},key:"labelColor",value:"<string>"},{description:{content:'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.',type:"text/plain"},key:"color",value:"<string>"},{description:{content:'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.',type:"text/plain"},key:"cacheSeconds",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"},{description:{content:"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an `<object>` HTML tag, but not an `<img>` tag or a markup language.",type:"text/plain"},key:"link",value:"<string>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"organization"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"project"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"definitionId"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"branch"}]},method:"GET"}},source:"@site/categories/coverage.yaml",sourceDirName:".",permalink:"/shields-docusaurus-poc/badges/azure-dev-ops-coverage-branch",previous:{title:"Azure DevOps coverage",permalink:"/shields-docusaurus-poc/badges/azure-dev-ops-coverage"},next:{title:"Codacy coverage",permalink:"/shields-docusaurus-poc/badges/codacy-coverage"}},s=[],c={toc:s};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"azure-devops-coverage-branch"},"Azure DevOps coverage (branch)"),(0,n.kt)("p",null,"To obtain your own badge, you need to get 3 pieces of information:",(0,n.kt)("code",null,"ORGANIZATION"),", ",(0,n.kt)("code",null,"PROJECT")," and ",(0,n.kt)("code",null,"DEFINITION_ID"),"."),(0,n.kt)("p",null,"First, you need to select your build definition and look at the url:"),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/3749820/47259976-e2d9ec80-d4b2-11e8-92cc-7c81089a7a2c.png",alt:"ORGANIZATION is after the dev.azure.com part, PROJECT is right after that, DEFINITION_ID is at the end after the id= part."}),(0,n.kt)("p",null,"Your badge will then have the form:",(0,n.kt)("code",null,"https://img.shields.io/azure-devops/coverage/ORGANIZATION/PROJECT/DEFINITION_ID.svg"),"."),(0,n.kt)("p",null,"Optionally, you can specify a named branch:",(0,n.kt)("code",null,"https://img.shields.io/azure-devops/coverage/ORGANIZATION/PROJECT/DEFINITION_ID/NAMED_BRANCH.svg"),"."),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"organization"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: swellaby"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"project"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: opensource"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"definitionId"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 25"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"branch"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: master"))))),(0,n.kt)("table",{style:{display:"table",width:"100%"}},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"style"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"One of: flat (default), flat-square, plastic, for-the-badge, social")),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: flat"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"logo"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"One of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or ",(0,n.kt)("a",{href:"https://simpleicons.org/",rel:"noopener noreferrer",target:"_blank"},"simple-icons"),". Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the ",(0,n.kt)("a",{href:"https://github.com/simple-icons/simple-icons/blob/develop/slugs.md",rel:"noopener noreferrer",target:"_blank"},"slugs.md")," file in the simple-icons repository.")),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: appveyor"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"logoColor"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"The color of the logo (hex, rgb, rgba, hsl, hsla and css named colors supported). Supported for named logos and Shields logos but not for custom logos. For multicolor Shields logos, the corresponding named logo will be used and colored.")),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: violet"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"label"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Override the default left-hand-side text (",(0,n.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding"},"URL-Encoding")," needed for spaces or special characters!)")),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: healthiness"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"labelColor"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,'Background color of the left part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorA" is also supported.')),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: abcdef"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"color"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,'Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported). The legacy name "colorB" is also supported.')),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: fedcba"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"cacheSeconds"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,'HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored). The legacy name "maxAge" is also supported.')),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},"Example: 3600"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("code",null,"link"),(0,n.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,n.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,n.kt)("p",null,"Specify what clicking on the left/right of a badge should do. Note that this only works when integrating your badge in an ",(0,n.kt)("inlineCode",{parentName:"p"},"<object>")," HTML tag, but not an ",(0,n.kt)("inlineCode",{parentName:"p"},"<img>")," tag or a markup language.")))))))}p.isMDXComponent=!0}}]);