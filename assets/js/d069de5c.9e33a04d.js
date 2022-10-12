"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[9620],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9770:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var a,i=n(7462),r=n(3366),o=(n(7294),n(3905)),s=n(5108),l=["components"],c={id:"notifications",title:"Notifications",description:"View and amend notifications for your CIPP App",slug:"/usingcipp/settings/notifications"},p=void 0,d={unversionedId:"usingcipp/settings/notifications",id:"usingcipp/settings/notifications",title:"Notifications",description:"View and amend notifications for your CIPP App",source:"@site/docs/user/usingcipp/settings/notifications.mdx",sourceDirName:"usingcipp/settings",slug:"/usingcipp/settings/notifications",permalink:"/docs/user/usingcipp/settings/notifications",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/settings/notifications.mdx",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1665505103,formattedLastUpdatedAt:"11/10/2022",frontMatter:{id:"notifications",title:"Notifications",description:"View and amend notifications for your CIPP App",slug:"/usingcipp/settings/notifications"},sidebar:"userSidebar",previous:{title:"Backend Access",permalink:"/docs/user/usingcipp/settings/backendaccess"},next:{title:"Maintenance",permalink:"/docs/user/usingcipp/settings/maintenance"}},m={},u=[{value:"Available CIPP Alerts",id:"available-cipp-alerts",level:2},{value:"Sending Methods",id:"sending-methods",level:2},{value:"E-mail",id:"e-mail",level:3},{value:"Webhook",id:"webhook",level:3},{value:"Known Issues / Limitations",id:"known-issues--limitations",level:2}],f=(a="OtherIssues",function(e){return s.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),k={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Configure notifications from CIPP."),(0,o.kt)("p",null,"CIPP provides alert notifications for Tenants and CIPP actions, sent as one combined table in an email or webhook body."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../tenantadministration/alerts"},"Tenant Alerts")," create notifications regarding changes within a tenant. See that help\npage for more information on managing those alerts."),(0,o.kt)("li",{parentName:"ul"},"CIPP Alerts relate to changes initiated via the CIPP platform.")),(0,o.kt)("h2",{id:"available-cipp-alerts"},"Available CIPP Alerts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New Accounts created via CIPP"),(0,o.kt)("li",{parentName:"ul"},"Removed Accounts via CIPP"),(0,o.kt)("li",{parentName:"ul"},"New Applications added via CIPP"),(0,o.kt)("li",{parentName:"ul"},"New Policies added via CIPP"),(0,o.kt)("li",{parentName:"ul"},"New Standards added via CIPP"),(0,o.kt)("li",{parentName:"ul"},"Removed Standards via CIPP"),(0,o.kt)("li",{parentName:"ul"},"Token Refresh Events")),(0,o.kt)("h2",{id:"sending-methods"},"Sending Methods"),(0,o.kt)("h3",{id:"e-mail"},"E-mail"),(0,o.kt)("p",null,"Enter a single email address (example: ",(0,o.kt)("inlineCode",{parentName:"p"},"psmith@example.com"),").  Email sends from the partner tenant Office 365 account\nused to generate CIPP application keys. The account must have at least an ",(0,o.kt)("em",{parentName:"p"},"Exchange Online Plan 1")," license assigned."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Sent Items")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Notification emails ",(0,o.kt)("strong",{parentName:"p"},"do not save")," to the CIPP account's ",(0,o.kt)("em",{parentName:"p"},"Sent Items")," folder."))),(0,o.kt)("h3",{id:"webhook"},"Webhook"),(0,o.kt)("p",null,"Enter a webhook url. Data is formatted based on the receiving server:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Service"),(0,o.kt)("th",{parentName:"tr",align:null},"Format"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"webhook.office.com")),(0,o.kt)("td",{parentName:"tr",align:null},"A basic HTML formatted table.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"slack.com")),(0,o.kt)("td",{parentName:"tr",align:null},"A separate markdown-formatted message for each alert.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"discord.com")),(0,o.kt)("td",{parentName:"tr",align:null},"A basic HTML formatted table.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"All other services"),(0,o.kt)("td",{parentName:"tr",align:null},"JSON array of data values.")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Custom Webhook Formatting")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Need something different for your webhook? Can you write PowerShell? Submit a PR on this repo:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP-API/tree/dev/Scheduler_CIPPNotifications"},"CIPP-API\\Scheduler_CIPPNotifications"),"."),(0,o.kt)("p",{parentName:"div"},"Can't code? Join us on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/cyberdrain"},"Discord")," and ask! ",(0,o.kt)("em",{parentName:"p"},"(Beer-based bribery has worked before ",(0,o.kt)("span",{parentName:"em",role:"img","aria-label":"beer mug"},"\ud83c\udf7a"),")")))),(0,o.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Only one email recipient can be specified at this time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"invalid_grant"),", Conditional Access, and other access failure errors when reading for Tenant Alerts will trigger an alert notification on each scan.")),(0,o.kt)(f,{mdxType:"OtherIssues"}))}g.isMDXComponent=!0}}]);