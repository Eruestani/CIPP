"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[2264],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),u=s(a),g=r,k=u["".concat(o,".").concat(g)]||u[g]||m[g]||l;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9802:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],d={id:"permissions",title:"Permissions",description:"How to ensure your SAM app for CIPP has the correct permissions.",slug:"/gettingstarted/permissions"},o=void 0,s={unversionedId:"gettingstarted/permissions/permissions",id:"gettingstarted/permissions/permissions",title:"Permissions",description:"How to ensure your SAM app for CIPP has the correct permissions.",source:"@site/docs/user/gettingstarted/permissions/index.md",sourceDirName:"gettingstarted/permissions",slug:"/gettingstarted/permissions",permalink:"/docs/user/gettingstarted/permissions",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/gettingstarted/permissions/index.md",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1665505103,formattedLastUpdatedAt:"11/10/2022",frontMatter:{id:"permissions",title:"Permissions",description:"How to ensure your SAM app for CIPP has the correct permissions.",slug:"/gettingstarted/permissions"},sidebar:"userSidebar",previous:{title:"Prerequisites",permalink:"/docs/user/gettingstarted/prerequisites"},next:{title:"Installation",permalink:"/docs/user/gettingstarted/installation"}},p={},m=[{value:"Manual SAM setup",id:"manual-sam-setup",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Delegated Permissions",id:"delegated-permissions",level:3},{value:"Application Permissions",id:"application-permissions",level:3}],u={toc:m};function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When using the CIPP SAM Wizard, the application and set permissions are created for you. If you have a manual SAM installation you'll need to setup these permissions yourself."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"You may skip this step if you are planning to use the Secure Application Model Wizard within CIPP")),(0,l.kt)("h2",{id:"manual-sam-setup"},"Manual SAM setup"),(0,l.kt)("p",null,"You should grant the following permissions to the secure application model registration, to add permissions follow these instructions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go to the ",(0,l.kt)("a",{parentName:"li",href:"https://portal.azure.com"},"Azure Portal"),"."),(0,l.kt)("li",{parentName:"ul"},"Select ",(0,l.kt)("a",{parentName:"li",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview"},(0,l.kt)("strong",{parentName:"a"},"Azure Active Directory")),", now select ",(0,l.kt)("a",{parentName:"li",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},(0,l.kt)("strong",{parentName:"a"},"App Registrations")),"."),(0,l.kt)("li",{parentName:"ul"},"Find your Secure App Model application. You can search based on the Application ID."),(0,l.kt)("li",{parentName:"ul"},"Go to ",(0,l.kt)("strong",{parentName:"li"},"API Permissions")," and select ",(0,l.kt)("strong",{parentName:"li"},"Add a permission"),"."),(0,l.kt)("li",{parentName:"ul"},'Choose "Microsoft Graph" and "Delegated permission" or "Application Permissions"'),(0,l.kt)("li",{parentName:"ul"},"Add the permission you need"),(0,l.kt)("li",{parentName:"ul"},'Finally, select "Grant Admin Consent" for Company Name.')),(0,l.kt)("h2",{id:"permissions"},"Permissions"),(0,l.kt)("p",null,"For full functionality, CIPP needs the following permissions for the Secure Application Model registration. You can remove any permissions if you don't want the application to be able to use that functionality. This may cause you to see errors in the application."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Duplicate Permissions")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Some permissions may appear duplicated in the Delegated and Application permissions tables below. This is ",(0,l.kt)("em",{parentName:"p"},"by design")," and you do need to add both permissions!"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",{id:"delegated-permissions"},"Delegated Permissions")),(0,l.kt)("p",null,(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"List of ",(0,l.kt)("strong",{parentName:"h5"},"delegated permissions")," used by CIPP:")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("table",{parentName:"div"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API / Permissions name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read applications")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write all applications")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AuditLog.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read audit log data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Channel.Create"),(0,l.kt)("td",{parentName:"tr",align:null},"Create channels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Channel.ReadBasic.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read the names and descriptions of channels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Channel.Delete.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Delete Channels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelMember.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read the members of channels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelMember.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Add and remove members from channels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelMessage.Edit"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit users' channel messages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelMessage.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read users' channel messages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelMessage.Send"),(0,l.kt)("td",{parentName:"tr",align:null},"Send channel messages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelSettings.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read the names, descriptions, and settings of channels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelSettings.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write the names, descriptions, and settings of channels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConsentRequest.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read consent requests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Device.Command"),(0,l.kt)("td",{parentName:"tr",align:null},"Communicate with user devices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Device.Read"),(0,l.kt)("td",{parentName:"tr",align:null},"Read user devices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Device.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read all devices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementApps.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write Microsoft Intune apps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementConfiguration.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write Microsoft Intune Device Configuration and Policies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementManagedDevices.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write Microsoft Intune devices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementRBAC.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write Microsoft Intune RBAC settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementServiceConfig.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write Microsoft Intune configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Directory.AccessAsUser.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Access directory as the signed in user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Domain.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read domain data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write all groups")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GroupMember.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write group memberships")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mail.Send"),(0,l.kt)("td",{parentName:"tr",align:null},"Send mail as a user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mail.Send.Shared"),(0,l.kt)("td",{parentName:"tr",align:null},"Send mail on behalf of others")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Member.Read.Hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"Read hidden memberships")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Organization.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write organization information")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read your organization's policies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy.ReadWrite.ApplicationConfiguration"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write your organization's application configuration policies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy.ReadWrite.AuthenticationFlows"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write authentication flow policies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy.ReadWrite.AuthenticationMethod"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write authentication method policies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy.ReadWrite.Authorization"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write your organization's authorization policy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy.ReadWrite.ConditionalAccess"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write conditional access policy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy.ReadWrite.ConsentRequest"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write consent request policy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy.ReadWrite.DeviceConfiguration"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write your organization's device configuration policies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PrivilegedAccess.Read.AzureResources"),(0,l.kt)("td",{parentName:"tr",align:null},"Read privileged access to Azure resources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PrivilegedAccess.ReadWrite.AzureResources"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write privileged access to Azure resources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profile"),(0,l.kt)("td",{parentName:"tr",align:null},"View users' basic profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Reports.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read all usage reports")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RoleManagement.ReadWrite.Directory"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write directory RBAC settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SecurityActions.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and update your organization's security actions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SecurityEvents.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and update your organization's security events")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SecurityIncident.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read incidents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SecurityIncident.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write to incidents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ServiceHealth.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read service health")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ServiceMessage.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read service announcement messages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SharePointTenantSettings.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and change SharePoint and OneDrive tenant settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sites.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit or delete items in all site collections")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamMember.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Add and remove members from teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamMember.ReadWriteNonOwnerRole.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Add and remove members with non-owner role for all teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsActivity.Read"),(0,l.kt)("td",{parentName:"tr",align:null},"Read users' teamwork activity feed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsActivity.Send"),(0,l.kt)("td",{parentName:"tr",align:null},"Send a teamwork activity as the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsAppInstallation.ReadForChat"),(0,l.kt)("td",{parentName:"tr",align:null},"Read installed Teams apps in chats")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsAppInstallation.ReadForTeam"),(0,l.kt)("td",{parentName:"tr",align:null},"Read installed Teams apps in teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsAppInstallation.ReadForUser"),(0,l.kt)("td",{parentName:"tr",align:null},"Read users' installed Teams apps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsAppInstallation.ReadWriteForChat"),(0,l.kt)("td",{parentName:"tr",align:null},"Manage installed Teams apps in chats")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsAppInstallation.ReadWriteForTeam"),(0,l.kt)("td",{parentName:"tr",align:null},"Manage installed Teams apps in teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsAppInstallation.ReadWriteForUser"),(0,l.kt)("td",{parentName:"tr",align:null},"Manage users' installed Teams apps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsAppInstallation.ReadWriteSelfForChat"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the Teams app to manage itself in chats")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsAppInstallation.ReadWriteSelfForTeam"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the app to manage itself in teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsAppInstallation.ReadWriteSelfForUser"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the Teams app to manage itself for a user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamSettings.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read teams' settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamSettings.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and change teams' settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsTab.Create"),(0,l.kt)("td",{parentName:"tr",align:null},"Create tabs in Microsoft Teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsTab.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read tabs in Microsoft Teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsTab.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write tabs in Microsoft Teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsTab.ReadWriteForChat"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the Teams app to manage all tabs in chats")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsTab.ReadWriteForTeam"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the Teams app to manage all tabs in teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamsTab.ReadWriteForUser"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow the Teams app to manage all tabs for a user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Team.Create"),(0,l.kt)("td",{parentName:"tr",align:null},"Create teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Team.ReadBasic.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read the names and descriptions of teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ThreatAssessment.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write threat assessment requests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UnifiedGroupMember.Read.AsGuest"),(0,l.kt)("td",{parentName:"tr",align:null},"Read unified group memberships as guest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User.ManageIdentities.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Manage user identities")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User.Read"),(0,l.kt)("td",{parentName:"tr",align:null},"Sign in and read user profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write all users' full profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserAuthenticationMethod.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read all users' authentication methods")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserAuthenticationMethod.ReadWrite"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write user authentication methods")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserAuthenticationMethod.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write all users' authentication methods")))))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("h3",{id:"application-permissions"},"Application Permissions")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"List of ",(0,l.kt)("strong",{parentName:"h5"},"application permissions")," used by CIPP:")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("table",{parentName:"div"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API / Permissions name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Channel.Create"),(0,l.kt)("td",{parentName:"tr",align:null},"Create channels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Channel.ReadBasic.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read the names and descriptions of channels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelMember.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read the members of channels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChannelMember.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Add and remove members from channels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Device.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write devices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementApps.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write Microsoft Intune apps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementConfiguration.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write Microsoft Intune Device Configuration and Policies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementManagedDevices.PrivilegedOperations.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Perform user-impacting remote actions on Microsoft Intune devices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementManagedDevices.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read Microsoft Intune devices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementManagedDevices.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write Microsoft Intune devices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementRBAC.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read Microsoft Intune RBAC settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementRBAC.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write Microsoft Intune RBAC settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementServiceConfig.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read Microsoft Intune configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeviceManagementServiceConfig.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write Microsoft Intune configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Directory.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read directory data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group.Create"),(0,l.kt)("td",{parentName:"tr",align:null},"Create groups")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read all groups")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Group.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write all groups")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GroupMember.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write group memberships")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mail.Send"),(0,l.kt)("td",{parentName:"tr",align:null},"Send mail as a user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Organization.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write organization information")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read your organization's policies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy.ReadWrite.AuthenticationFlows"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write authentication flow policies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy.ReadWrite.AuthenticationMethod"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write authentication method policies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy.ReadWrite.ConditionalAccess"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write conditional access policy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Policy.ReadWrite.ConsentRequest"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write consent request policy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PrivilegedAccess.ReadWrite.AzureADGroup"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write privileged access to Azure AD groups")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Reports.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read all usage reports")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RoleManagement.ReadWrite.Directory"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write directory RBAC settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SecurityEvents.Read.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read your organization's security events")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sites.FullControl.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Have full control of all site collections")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Team.ReadBasic.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read the names and descriptions of teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamMember.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Add and remove members from teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TeamMember.ReadWriteNonOwnerRole.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Add and remove members with non-owner role for all teams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write all users' full profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserAuthenticationMethod.ReadWrite.All"),(0,l.kt)("td",{parentName:"tr",align:null},"Read and write all users' authentication methods"))))))))}g.isMDXComponent=!0}}]);