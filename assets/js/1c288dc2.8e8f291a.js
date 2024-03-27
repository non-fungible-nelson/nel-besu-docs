"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[25046],{7427:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var s=i(85893),t=i(11151);const n={title:"Plugin API interfaces",sidebar_position:4,description:"Plugin interfaces",tags:["private networks"]},l="Plugin API interfaces",o={id:"private-networks/reference/plugin-api-interfaces",title:"Plugin API interfaces",description:"Plugin interfaces",source:"@site/versioned_docs/version-24.3.0/private-networks/reference/plugin-api-interfaces.md",sourceDirName:"private-networks/reference",slug:"/private-networks/reference/plugin-api-interfaces",permalink:"/private-networks/reference/plugin-api-interfaces",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.3.0/private-networks/reference/plugin-api-interfaces.md",tags:[{label:"private networks",permalink:"/tags/private-networks"}],version:"24.3.0",lastUpdatedAt:1711557763,formattedLastUpdatedAt:"Mar 27, 2024",sidebarPosition:4,frontMatter:{title:"Plugin API interfaces",sidebar_position:4,description:"Plugin interfaces",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Accounts for testing",permalink:"/private-networks/reference/accounts-for-testing"}},d={},c=[{value:"Core plugin classes",id:"core-plugin-classes",level:2},{value:"Plugin services",id:"plugin-services",level:2}];function a(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"plugin-api-interfaces",children:"Plugin API interfaces"}),"\n",(0,s.jsxs)(r.p,{children:["API interfaces in Hyperledger Besu allow users to ",(0,s.jsx)(r.a,{href:"/private-networks/concepts/plugins",children:"build plugins"})," to extend Besu functionality."]}),"\n",(0,s.jsxs)(r.p,{children:["For more information about the available interfaces, see the ",(0,s.jsx)(r.a,{href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/index.html",children:"Plugin API Javadoc"}),"."]}),"\n",(0,s.jsx)(r.admonition,{title:"Javadoc issue",type:"note",children:(0,s.jsx)(r.p,{children:"The plugin API documentation is currently not being updated. We're working on a fix, but in the meantime, some links are temporarily pointing to wiki.hyperledger.org."})}),"\n",(0,s.jsx)(r.h2,{id:"core-plugin-classes",children:"Core plugin classes"}),"\n",(0,s.jsx)(r.p,{children:"The following table lists the interfaces providing core plugin classes."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Interface"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://wiki.hyperledger.org/display/BESU/BesuContext",children:(0,s.jsx)(r.strong,{children:"BesuContext"})})}),(0,s.jsx)(r.td,{children:"Allows plugins to access Besu services."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/BesuPlugin.html",children:(0,s.jsx)(r.strong,{children:"BesuPlugin"})})}),(0,s.jsx)(r.td,{children:"Used to manage the plugin lifecycle."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"plugin-services",children:"Plugin services"}),"\n",(0,s.jsx)(r.p,{children:"The following table lists interfaces providing services you can retrieve."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Interface"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/BesuEvents.html",children:(0,s.jsx)(r.strong,{children:"BesuEvents"})})}),(0,s.jsx)(r.td,{children:"Allows plugins to attach to events during Besu operation."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/BesuConfiguration.html",children:(0,s.jsx)(r.strong,{children:"BesuConfiguration"})})}),(0,s.jsx)(r.td,{children:"Provides file system locations of Besu's storage."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/query/IbftQueryService.html",children:(0,s.jsx)(r.strong,{children:"IbftQueryService"})})}),(0,s.jsx)(r.td,{children:"Allows query of the IBFT 2.0 aspects of the blockchain."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/metrics/MetricCategoryRegistry.html",children:(0,s.jsx)(r.strong,{children:"MetricCategoryRegistry"})})}),(0,s.jsx)(r.td,{children:"Adds a new metrics category to the CLI."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/MetricsSystem.html",children:(0,s.jsx)(r.strong,{children:"MetricsSystem"})})}),(0,s.jsx)(r.td,{children:"Register metrics with the Prometheus endpoint."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/query/PoaQueryService.html",children:(0,s.jsx)(r.strong,{children:"PoaQueryService"})})}),(0,s.jsx)(r.td,{children:"Query the current state of Clique and IBFT 2.0 consensus protocols."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/PicoCLIOptions.html",children:(0,s.jsx)(r.strong,{children:"PicoCLIOptions"})})}),(0,s.jsx)(r.td,{children:"Adds CLI commands to the Besu command line."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/SecurityModuleService.html",children:(0,s.jsx)(r.strong,{children:"SecurityModuleService"})})}),(0,s.jsx)(r.td,{children:"Allows plugins to register a security module."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://javadoc.io/doc/org.hyperledger.besu/plugin-api/latest/org/hyperledger/besu/plugin/services/StorageService.html",children:(0,s.jsx)(r.strong,{children:"StorageService"})})}),(0,s.jsx)(r.td,{children:"Allows plugins to register as a storage engine. For example, to connect to a hardware security module (HSM)."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://wiki.hyperledger.org/display/BESU/PermissioningService",children:(0,s.jsx)(r.strong,{children:"PermissioningService"})})}),(0,s.jsx)(r.td,{children:"Allows for fine grain control of node connection and node messaging permissioning."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://wiki.hyperledger.org/display/BESU/PrivacyPluginService",children:(0,s.jsx)(r.strong,{children:"PrivacyPluginService"})})}),(0,s.jsxs)(r.td,{children:["Provides a way to define how ",(0,s.jsx)(r.a,{href:"/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transactions"})," are created, and what private genesis to use."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://wiki.hyperledger.org/display/BESU/RpcEndpointService",children:(0,s.jsx)(r.strong,{children:"RpcEndpointService"})})}),(0,s.jsx)(r.td,{children:"Register custom RPC endpoints."})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["To use the interfaces in your plugin, ensure the ",(0,s.jsx)(r.a,{href:"https://github.com/ConsenSys/PluginsAPIDemo/blob/957628b3c6f533f3c3f405e2a17e369cd1f02c31/build.gradle",children:"Gradle build file"})," contains the ",(0,s.jsx)(r.code,{children:"https://hyperledger.jfrog.io/hyperledger/besu-maven"})," repository and the ",(0,s.jsx)(r.code,{children:"plugin-api"})," dependency."]}),"\n",(0,s.jsxs)(r.admonition,{title:"Known issue",type:"warning",children:[(0,s.jsxs)(r.p,{children:["As indicated in ",(0,s.jsx)(r.a,{href:"https://github.com/hyperledger/besu-docs/issues/406",children:"issue #406"}),", plugins may need to access the parsed command line during registration, but the command line is not yet initialized at this stage."]}),(0,s.jsxs)(r.p,{children:["It's in our roadmap to improve lifecycle steps and provide additional visibility for some data. A workaround is to create a supplier during the ",(0,s.jsx)(r.code,{children:"register"})," step and store it in memory."]}),(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"start"})," step can be ignored and your plugin module will be instantiated when the command line interface is parsed and available."]})]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,r,i)=>{i.d(r,{Z:()=>o,a:()=>l});var s=i(67294);const t={},n=s.createContext(t);function l(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);