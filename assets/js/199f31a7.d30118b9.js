"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[3481],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),p=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,g=c["".concat(u,".").concat(m)]||c[m]||h[m]||r;return a?l.createElement(g,i(i({ref:t},s),{},{components:a})):l.createElement(g,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},138:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return h}});var l=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],o={title:"CIPP - v2.1.0",date:"02/04/2022 12:39:39",tags:["CIPP"],slug:"CIPP/v2-1-0"},u=void 0,p={permalink:"/releases/CIPP/v2-1-0",source:"@site/releases/CIPP/v2-1-0.md",title:"CIPP - v2.1.0",description:"Cuba Libr\xe9",date:"2022-02-04T12:39:39.000Z",formattedDate:"4 February 2022",tags:[{label:"CIPP",permalink:"/releases/tags/cipp"}],truncated:!0,authors:[],frontMatter:{title:"CIPP - v2.1.0",date:"02/04/2022 12:39:39",tags:["CIPP"],slug:"CIPP/v2-1-0"},prevItem:{title:"CIPP - V2.1.1",permalink:"/releases/CIPP/v2-1-1"},nextItem:{title:"CIPP-API - v1.6.0",permalink:"/releases/CIPP-API/v1-6-0"}},s={authorsImageUrls:[]},h=[{value:"New Features",id:"new-features",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Other changes",id:"other-changes",level:2}],c={toc:h};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"version-subtitle"},"Cuba Libr\xe9"),(0,r.kt)("p",null,"Hey everyone,"),(0,r.kt)("p",null,"As CIPP grows we're also available on Discord via ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/cyberdrain"},"https://discord.gg/cyberdrain")),(0,r.kt)("p",null,"Thank you all our contributors and CIPP team that worked on this release. This release is a feature filled release, with some new backend magic to boot! First a quick, but important announcement:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you have setup notifications, Please reperform the setup. Our scheduling engine has had changes and thus requires you to reenter that information.")),(0,r.kt)("p",null,'This release sets the stage for our February release with a bunch of new features, such as "All Tenants" mode in multiple locations, which allows you to create a standard for all tenants, including new ones added. We\'ve also expanded on our templating engine, and Intune apps deployments.'),(0,r.kt)("p",null,"Of course we also have many bug fixes in this release big and small, so check out the changelog!"),(0,r.kt)("p",null,"We especially like to thank our release sponsors, OITVOIP, NinjaOne, and ImmyBot for sponsoring us for this release, as their sponsorship is what makes creating this application possible. We'd also like to welcome Huntress as a new sponsor. :)"),(0,r.kt)("p",null,"The changelog below contains only the most important fixes, for more information, check out the full changelog. Items without a PR reference have been made by direct commits."),(0,r.kt)("h2",{id:"new-features"},"New Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NEW FEATURE: Added default page size for tables by @gavsto in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/692"},"https://github.com/KelvinTegelaar/CIPP/pull/692")),(0,r.kt)("li",{parentName:"ul"},"Individual Domain - MTA-STS support by @johnduprey in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/707"},"https://github.com/KelvinTegelaar/CIPP/pull/707")),(0,r.kt)("li",{parentName:"ul"},"Allow clearing of local cache"),(0,r.kt)("li",{parentName:"ul"},"Added multiple intune default templates."),(0,r.kt)("li",{parentName:"ul"},"Added option to add apps to All Tenants"),(0,r.kt)("li",{parentName:"ul"},"Added option to add Policies to All Tenants"),(0,r.kt)("li",{parentName:"ul"},"Added option to add Standards to All Tenants"),(0,r.kt)("li",{parentName:"ul"},"Created new Scheduler engine"),(0,r.kt)("li",{parentName:"ul"},"Added removal of apps/policies"),(0,r.kt)("li",{parentName:"ul"},"Added all possible Policy Options to edit Intune Policies")),(0,r.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed issue with tenant access check"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue with tenant permissions check"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue with edit user where it returned HTML instead of expected results"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue with standards where it returned HTML"),(0,r.kt)("li",{parentName:"ul"},"Fixed infinite redirect issue when user has no roles"),(0,r.kt)("li",{parentName:"ul"},"Many more, see full changelog.")),(0,r.kt)("h2",{id:"other-changes"},"Other changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changes to make EditTenant frontend work by @AdamWillford in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/657"},"https://github.com/KelvinTegelaar/CIPP/pull/657")),(0,r.kt)("li",{parentName:"ul"},"Update UI on Edit User and Edit Group to match revamped Edit Tenant. by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/660"},"https://github.com/KelvinTegelaar/CIPP/pull/660")),(0,r.kt)("li",{parentName:"ul"},"Individual Domain - CippMasonry and tweaks by @johnduprey in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/661"},"https://github.com/KelvinTegelaar/CIPP/pull/661")),(0,r.kt)("li",{parentName:"ul"},"Don't cancel in progress Build if new one is queued. by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/663"},"https://github.com/KelvinTegelaar/CIPP/pull/663")),(0,r.kt)("li",{parentName:"ul"},"Forgot to save this file - finishes removal of ",(0,r.kt)("inlineCode",{parentName:"li"},"<CAlert>"),". by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/664"},"https://github.com/KelvinTegelaar/CIPP/pull/664")),(0,r.kt)("li",{parentName:"ul"},"Redirect 401 including referrer. by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/665"},"https://github.com/KelvinTegelaar/CIPP/pull/665")),(0,r.kt)("li",{parentName:"ul"},"Add localstorage(clear) and amend results callout by @AdamWillford in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/659"},"https://github.com/KelvinTegelaar/CIPP/pull/659")),(0,r.kt)("li",{parentName:"ul"},"Fix broken link in ViewBEC by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/667"},"https://github.com/KelvinTegelaar/CIPP/pull/667")),(0,r.kt)("li",{parentName:"ul"},"Update package-lock.json (1 high sev sec fix. 1 mod. by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/679"},"https://github.com/KelvinTegelaar/CIPP/pull/679")),(0,r.kt)("li",{parentName:"ul"},"Individual Domain by @johnduprey in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/680"},"https://github.com/KelvinTegelaar/CIPP/pull/680")),(0,r.kt)("li",{parentName:"ul"},"Make all DataTables sortable. Fixes #683. by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/685"},"https://github.com/KelvinTegelaar/CIPP/pull/685")),(0,r.kt)("li",{parentName:"ul"},"Individual Domain tweaks by @johnduprey in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/686"},"https://github.com/KelvinTegelaar/CIPP/pull/686")),(0,r.kt)("li",{parentName:"ul"},"Revert some changes to user edit page and tweak UX. by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/684"},"https://github.com/KelvinTegelaar/CIPP/pull/684")),(0,r.kt)("li",{parentName:"ul"},"Extend TenantSelector for CippPage by @johnduprey in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/690"},"https://github.com/KelvinTegelaar/CIPP/pull/690")),(0,r.kt)("li",{parentName:"ul"},"Improvements to ThemeSwitcher by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/691"},"https://github.com/KelvinTegelaar/CIPP/pull/691")),(0,r.kt)("li",{parentName:"ul"},"Add tenant column to Domains Analyzer if 'All Tenants' is selected. Fixes #687 by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/693"},"https://github.com/KelvinTegelaar/CIPP/pull/693")),(0,r.kt)("li",{parentName:"ul"},"Add conditional highlighting to rows where no MFA at all is configured. Fixes #670. by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/694"},"https://github.com/KelvinTegelaar/CIPP/pull/694")),(0,r.kt)("li",{parentName:"ul"},"Domain tweak / ViewUser bugfix by @johnduprey in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/695"},"https://github.com/KelvinTegelaar/CIPP/pull/695")),(0,r.kt)("li",{parentName:"ul"},"Groups bugfix and cleanup rounded corners by @johnduprey in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/698"},"https://github.com/KelvinTegelaar/CIPP/pull/698")),(0,r.kt)("li",{parentName:"ul"},"Add VS Code extension recommendations file. by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/699"},"https://github.com/KelvinTegelaar/CIPP/pull/699")),(0,r.kt)("li",{parentName:"ul"},"Individual Domain by @johnduprey in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/702"},"https://github.com/KelvinTegelaar/CIPP/pull/702")),(0,r.kt)("li",{parentName:"ul"},"Layout and styling fixes - add license to footer. by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/708"},"https://github.com/KelvinTegelaar/CIPP/pull/708")),(0,r.kt)("li",{parentName:"ul"},"Linting and Security Policy by @homotechsual in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/711"},"https://github.com/KelvinTegelaar/CIPP/pull/711")),(0,r.kt)("li",{parentName:"ul"},"Pushing Dev to Release by @KelvinTegelaar in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/709"},"https://github.com/KelvinTegelaar/CIPP/pull/709"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP/compare/v2.0.1...v2.1.0"},"https://github.com/KelvinTegelaar/CIPP/compare/v2.0.1...v2.1.0")))}m.isMDXComponent=!0}}]);