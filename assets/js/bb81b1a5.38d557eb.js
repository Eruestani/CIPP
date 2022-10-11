"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[5655],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6781:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"faq",title:"Frequently Asked Questions",description:"Frequently asked questions regarding CIPP.",slug:"/faq"},s=void 0,u={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"Frequently asked questions regarding CIPP.",source:"@site/docs/general/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/general/faq",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/general/faq.md",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1664882815,formattedLastUpdatedAt:"04/10/2022",frontMatter:{id:"faq",title:"Frequently Asked Questions",description:"Frequently asked questions regarding CIPP.",slug:"/faq"}},p={},c=[{value:"Why can&#39;t I install CIPP using the &quot;Deploy to Azure&quot; button?",id:"deploy-to-azure",level:2},{value:"Why can&#39;t I get details for a particular tenant / any tenants?",id:"specific-tenant-issues",level:2},{value:"I&#39;m trying to redeploy or move my CIPP installation and it&#39;s not working. Something about a GitHub token.",id:"github-token",level:2},{value:"Can I lock down my instance of CIPP further?",id:"lockdown",level:2},{value:"Can I add Conditional Access to my CIPP App?",id:"conditional-access",level:2},{value:"My tenant requires admin approval for user apps, how do I do this for CIPP?",id:"admin-approval",level:2},{value:"How much does CIPP cost to run?",id:"cost",level:2},{value:"I&#39;m getting a 500 error in CIPP, what&#39;s going on?",id:"500-error",level:2},{value:"I&#39;m getting a 400 error in CIPP, what&#39;s going on?",id:"400-error",level:2},{value:"I&#39;m getting an error that &quot;you must use multi-factor authentication to access&quot; what&#39;s going on?",id:"mfa-error",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On this page you can find a list of frequently asked questions about the CyberDrain Improved Partner Portal (CIPP). If you're having specific issues with CIPP please also check the ",(0,a.kt)("a",{parentName:"p",href:"/troubleshooting"},"Troubleshooting")," page."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"deploy-to-azure"},'Why can\'t I install CIPP using the "Deploy to Azure" button?')),(0,a.kt)("p",null,"If you're experiencing issues with installation please report these in ",(0,a.kt)("inlineCode",{parentName:"p"},"#cipp-issues")," on the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/cyberdrain"},"CIPP Discord"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"specific-tenant-issues"},"Why can't I get details for a particular tenant / any tenants?")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You have a guest account in a tenant that has the same User Principal Name (UPN) as you used to generate your tokens."),(0,a.kt)("li",{parentName:"ol"},"Conditional access is blocking the correct functioning of the tokens - check your CA policies and also make sure you're not geo-blocking the function app's location."),(0,a.kt)("li",{parentName:"ol"},"You can't use third party MFA on the account used to generate Secure Application Model (SAM) tokens.")),(0,a.kt)("p",null,"If your entire tenant list doesn't load, there is a big chance there is something wrong with your token configuration. Check the ",(0,a.kt)("a",{parentName:"p",href:"/troubleshooting"},"troubleshooting")," page for more information. If you are missing your own tenant, make sure you enable the flag to manage this tenant.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"github-token"},"I'm trying to redeploy or move my CIPP installation and it's not working. Something about a GitHub token.")),(0,a.kt)("p",null,"If you installed CIPP before the release of version 2, you deployed the ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," branch of your CIPP repository fork. From version 2 if you want to redeploy using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/user/gettingstarted/installation"},"click-to-deploy installation")," you must ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch"},"rename the ",(0,a.kt)("inlineCode",{parentName:"a"},"master")," branch to ",(0,a.kt)("inlineCode",{parentName:"a"},"main"))," and then redeploy.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"lockdown"},"Can I lock down my instance of CIPP further?")),(0,a.kt)("p",null,"To protect CIPP as a private resource, that's only reachable over a Virtual Private Network (VPN) or IP allowlisting you can use Private Endpoint Connections."),(0,a.kt)("p",null,"To enable Private Endpoints you must already have an Azure VNet available, and understand how VNets work."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to CIPP"),(0,a.kt)("li",{parentName:"ol"},"Go to Settings"),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Backend")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Go to role management")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Private Endpoints")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Add")),(0,a.kt)("li",{parentName:"ol"},"Setup your VNet information")),(0,a.kt)("p",null,"CIPP is now no longer available publicly over the internet.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"conditional-access"},"Can I add Conditional Access to my CIPP App?")),(0,a.kt)("p",null,"To add Conditional Access to CIPP, follow the below steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to your ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies"},"Conditional Access Policies"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select which users to apply the policy to, default suggestion is ",(0,a.kt)("em",{parentName:"p"},'"All Users"'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Azure Static Web Apps"),' as the included app under "Cloud Apps or actions"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure any condition you want. For example Trusted Locations, specific IPs, specific platforms.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"At Access Controls you must enable ",(0,a.kt)("em",{parentName:"p"},"Grant, with MFA access"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Save")))),(0,a.kt)("p",null,"Your app is now protected with Conditional Access.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"admin-approval"},"My tenant requires admin approval for user apps, how do I do this for CIPP?")),(0,a.kt)("p",null,"If your Azure Tenant requires admin approval for user apps, add consent by following the below steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps"},"Azure Enterprise Applications")),(0,a.kt)("li",{parentName:"ol"},"Find ",(0,a.kt)("em",{parentName:"li"},"Azure Static Websites")),(0,a.kt)("li",{parentName:"ol"},"Grant Admin Consent for all")),(0,a.kt)("p",null,"This permits users the ability to grant consent when access CIPP now.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"cost"},"How much does CIPP cost to run?")),(0,a.kt)("p",null,"Assuming you're running on the click-to-deploy configuration and average usage patterns it should cost $15 - $20 or \xa317 - \xa322 per month. You can check the costs, and estimated costs, for the resource group on the Azure Portal."),(0,a.kt)("p",null,"Please note it is your responsibility to ensure you are keeping an eye on costs within your instances.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"500-error"},"I'm getting a 500 error in CIPP, what's going on?")),(0,a.kt)("p",null,"A 500 error is a generic server error. In CIPP this can hide many different issues. It could mean:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You don't have valid licensing for the feature you're trying to use."),(0,a.kt)("li",{parentName:"ul"},"The CIPP-API function app isn't responding correctly, is starting up or is down.")),(0,a.kt)("p",null,"If you're still having issues, after checking licensing and that your function app is running correctly, please report them in ",(0,a.kt)("inlineCode",{parentName:"p"},"#cipp-issues")," on the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/cyberdrain"},"CIPP Discord"),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"400-error"},"I'm getting a 400 error in CIPP, what's going on?")),(0,a.kt)("p",null,"A 400 error is a generic access error. In CIPP this can hide many different issues. It could mean:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You have issues with your tokens. Check the ",(0,a.kt)("a",{parentName:"li",href:"/docs/general/troubleshooting/"},"troubleshooting")," page for more information."),(0,a.kt)("li",{parentName:"ul"},"You're trying to access a page that requires a specific role."),(0,a.kt)("li",{parentName:"ul"},"You're trying to access a page that doesn't exist."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h2",{id:"mfa-error"},"I'm getting an error that \"you must use multi-factor authentication to access\" what's going on?")),(0,a.kt)("p",null,"Typically this error means you're using tokens that don't have a \"strong auth claim\" or similar. This could be because you're using non-Azure AD MFA or you didn't complete MFA when creating your tokens for one or more of the authentication steps. Make sure you're using a supported MFA method and that you've completed the MFA steps when creating your tokens."),(0,a.kt)("p",null,"Check the ",(0,a.kt)("a",{parentName:"p",href:"/docs/general/troubleshooting/#multi-factor-authentication-troubleshooting"},"MFA Troubleshooting")," section in the Troubleshooting page for more information.")))}m.isMDXComponent=!0}}]);