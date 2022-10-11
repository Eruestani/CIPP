"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[7086],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3326:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var o,r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=n(5108),l=["components"],u={id:"gdap",title:"GDAP",description:"Using the GDAP migration tool",slug:"/usingcipp/GDAP/migration"},p=void 0,c={unversionedId:"usingcipp/GDAP/gdap",id:"usingcipp/GDAP/gdap",title:"GDAP",description:"Using the GDAP migration tool",source:"@site/docs/user/usingcipp/GDAP/index.md",sourceDirName:"usingcipp/GDAP",slug:"/usingcipp/GDAP/migration",permalink:"/docs/user/usingcipp/GDAP/migration",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/GDAP/index.md",tags:[],version:"current",lastUpdatedBy:"Eruestani",lastUpdatedAt:1665505037,formattedLastUpdatedAt:"11/10/2022",frontMatter:{id:"gdap",title:"GDAP",description:"Using the GDAP migration tool",slug:"/usingcipp/GDAP/migration"},sidebar:"userSidebar",previous:{title:"Updating",permalink:"/docs/user/updating"}},d={},m=[{value:"What is GDAP",id:"what-is-gdap",level:2},{value:"Using the GDAP Wizard",id:"using-the-gdap-wizard",level:2},{value:"Known Issues / Limitations",id:"known-issues--limitations",level:2}],g=(o="NoKnownIssues",function(e){return s.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),h={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A temporary addition to CIPP is the GDAP Migration tool. The GDAP migration tool was created in collabration with Microsoft's GDAP team. Please follow the instructions on this page to the letter to achieve a succesful migration to GDAP."),(0,a.kt)("p",null,"The GDAP migration tool will function until October 31st. Migrations after this date will need to be performed manually."),(0,a.kt)("h2",{id:"what-is-gdap"},"What is GDAP"),(0,a.kt)("p",null,'Accessing tenants as a Microsoft Partner is currently done through "DAP". DAP stands for delegated access permissions. DAP gives you Global Administrator access to all your tenants, but has limitations. Microsoft has decided to make DAP more secure, and also more functional. GDAP allows you to access the tenants according to the role you\'ve set. This mean you are able to give one employee "helpdesk" access, and another employee "security" access.'),(0,a.kt)("p",null,"GDAP requires a mapping between roles and security groups in your partner tenant. CIPP creates these groups and mappings for you."),(0,a.kt)("p",null,"GDAP relationships have a maximum age. Every 2 years(730 days) the relationships will need to be renewed. This currently is a manual action that needs to be performed by the tenant administrator."),(0,a.kt)("p",null,"GDAP will be a requirement from December 1st for Microsoft Partners, and you will not be able to make new DAP relationships from that point forward."),(0,a.kt)("p",null,"After the migration date of October 31st, new GDAP relationships will not be created in an automated fashion, and you must log onto the target tenant itself to accept GDAP invites. This is very time consuming so it's recommended to migrate to GDAP now."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For more information on GDAP, check out Microsoft's own documentation ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/partner-center/gdap-introduction"},"here")))),(0,a.kt)("h2",{id:"using-the-gdap-wizard"},"Using the GDAP Wizard"),(0,a.kt)("p",null,"The GDAP wizard will use the temporary APIs to create a relationship for you, and create the security groups and assign the roles to these groups. You may change the name of the groups after the migration has been performed."),(0,a.kt)("p",null,"CIPP assumes that you will want a relationship of 730 days."),(0,a.kt)("p",null,"Follow the list below before starting the GDAP Wizard. You must execute each of these steps to successfully migrate to GDAP."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You must be a global Admin and in the 'AdminAgents' group to perform this."),(0,a.kt)("li",{parentName:"ul"},"Go to your CIPP instance and click on GDAP -> Migration Wizard. Click the button to enable the migration API."),(0,a.kt)("li",{parentName:"ul"},"Follow the link returned by the application to go to your Secure Application Model app in Azure."),(0,a.kt)("li",{parentName:"ul"},"Click on API Permissions"),(0,a.kt)("li",{parentName:"ul"},'Click on Add and choose "APIs My organization uses"'),(0,a.kt)("li",{parentName:"ul"},'Find "Partner Customer Delegated Administration"'),(0,a.kt)("li",{parentName:"ul"},'Add all permissions under "Delegated" and "Application" and click Add Permissions'),(0,a.kt)("li",{parentName:"ul"},'Click on "Grant Admin Consent for {Organization}".'),(0,a.kt)("li",{parentName:"ul"},"Go back to CIPP and perform all steps in the wizard. It is highly recommended to run the migration for a single tenant first, to prevent duplicate groups.")),(0,a.kt)("p",null,"You can view the status of the GDAP migration in the GDAP Migration Status tab. When the migration has been completed for all your tenants you can move users into the new groups to use GDAP."),(0,a.kt)("p",null,"Please remember to put the CIPP-SAM user in these groups as well. It is not recommended to add all groups to a user."),(0,a.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,a.kt)(g,{mdxType:"NoKnownIssues"}))}f.isMDXComponent=!0}}]);