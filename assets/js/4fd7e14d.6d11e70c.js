"use strict";(self.webpackChunkshields_docusaurus_poc=self.webpackChunkshields_docusaurus_poc||[]).push([[104],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=i,g=u["".concat(a,".").concat(b)]||u[b]||d[b]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=b;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},41632:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var n=r(87462),i=(r(67294),r(3905));const l={},o="Bitbucket Pipelines",s={type:"api",id:"bitbucket-pipelines",unversionedId:"bitbucket-pipelines",title:"Bitbucket Pipelines",description:"",slug:"/bitbucket-pipelines",frontMatter:{},api:{parameters:[{name:"user",in:"path",required:!0,description:"User",schema:{type:"string"}},{name:"repo",in:"path",required:!0,description:"Repo",schema:{type:"string"}},{name:"logo",in:"query",required:!1,description:'Insert one of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',schema:{type:"string"}},{name:"logoColor",in:"query",required:!1,description:"Logo Color",schema:{type:"string"}}],"x-code-samples":[{lang:"URL",label:"URL",source:"$url"},{lang:"Markdown",label:"Markdown",source:"![Bitbucket Pipelines]($url)"},{lang:"reStructuredText",label:"rSt",source:".. image:: $url\n:   alt: Bitbucket Pipelines"},{lang:"AsciiDoc",label:"AsciiDoc",source:"image:$url[Bitbucket Pipelines]"},{lang:"HTML",label:"HTML",source:'<img alt="Bitbucket Pipelines" src="$url">'}],description:"Bitbucket Pipelines",method:"get",path:"/bitbucket/pipelines/{user}/{repo}",servers:[{url:"https://img.shields.io"}],info:{version:"1.0.0",title:"Build",license:{name:"CC0"}},postman:{name:"Bitbucket Pipelines",description:{type:"text/plain"},url:{path:["bitbucket","pipelines",":user",":repo"],host:["{{baseUrl}}"],query:[{description:{content:'Insert one of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or <a href="https://simpleicons.org/" rel="noopener noreferrer" target="_blank">simple-icons</a>. Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the <a href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md" rel="noopener noreferrer" target="_blank">slugs.md</a> file in the simple-icons repository.',type:"text/plain"},key:"logo",value:"<string>"},{description:{content:"Logo Color",type:"text/plain"},key:"logoColor",value:"<string>"}],variable:[{description:{content:"(Required) User",type:"text/plain"},type:"any",value:"<string>",key:"user"},{description:{content:"(Required) Repo",type:"text/plain"},type:"any",value:"<string>",key:"repo"}]},method:"GET"}},source:"@site/categories/2build.json",sourceDirName:".",permalink:"/badges/bitbucket-pipelines",previous:{title:"Endpoint Badge",permalink:"/badges/endpoint-badge"},next:{title:"Bitbucket Pipelines with branch",permalink:"/badges/bitbucket-pipelines-with-branch"}},a=[],p={toc:a};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,i.kt)("p",null,"Bitbucket Pipelines"),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"user"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"User")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"repo"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Repo")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"logo"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Insert one of the named logos (bitcoin, dependabot, gitlab, npm, paypal, serverfault, stackexchange, superuser, telegram, travis) or ",(0,i.kt)("a",{href:"https://simpleicons.org/",rel:"noopener noreferrer",target:"_blank"},"simple-icons"),". Simple-icons are referenced using icon slugs which can be found on the simple-icons site or in the ",(0,i.kt)("a",{href:"https://github.com/simple-icons/simple-icons/blob/develop/slugs.md",rel:"noopener noreferrer",target:"_blank"},"slugs.md")," file in the simple-icons repository.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"logoColor"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"Logo Color")))))))}c.isMDXComponent=!0}}]);