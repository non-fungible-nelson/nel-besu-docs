"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[34409],{26926:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(85893),o=r(11151);const s={sidebar_position:1},t="Use a profile",l={id:"public-networks/how-to/use-configuration-file/profile",title:"Use a profile",description:"To help you get started quickly, Besu provides pre-configured profiles containing custom settings",source:"@site/docs/public-networks/how-to/use-configuration-file/profile.md",sourceDirName:"public-networks/how-to/use-configuration-file",slug:"/public-networks/how-to/use-configuration-file/profile",permalink:"/development/public-networks/how-to/use-configuration-file/profile",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/use-configuration-file/profile.md",tags:[],version:"current",lastUpdatedAt:1711557763,formattedLastUpdatedAt:"Mar 27, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"publicDocSidebar",previous:{title:"Use a configuration file",permalink:"/development/public-networks/how-to/use-configuration-file/"},next:{title:"Create and send transactions",permalink:"/development/public-networks/how-to/send-transactions"}},a={},c=[{value:"Minimalist staker profile",id:"minimalist-staker-profile",level:2},{value:"Staker profile",id:"staker-profile",level:2},{value:"Enterprise/Private profile",id:"enterpriseprivate-profile",level:2}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"use-a-profile",children:"Use a profile"}),"\n",(0,n.jsxs)(i.p,{children:["To help you get started quickly, Besu provides pre-configured profiles containing custom settings\nfor some common use cases.\nYou can load these profiles using the ",(0,n.jsx)(i.a,{href:"/development/public-networks/reference/cli/options#profile",children:(0,n.jsx)(i.code,{children:"--profile"})})," CLI option.\nFor example:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"besu --config-file=config.toml --profile=staker\n"})}),"\n",(0,n.jsxs)(i.p,{children:["In this example, ",(0,n.jsx)(i.code,{children:"config.toml"})," is the user-provided ",(0,n.jsx)(i.a,{href:"/development/public-networks/how-to/use-configuration-file/",children:"configuration file"}),", and ",(0,n.jsx)(i.code,{children:"staker"})," is\nthe pre-configured profile containing custom settings."]}),"\n",(0,n.jsxs)(i.p,{children:["Any configuration options explicitly set in the configuration file or command line will overwrite\nthe same options set in the profile.\nSee the ",(0,n.jsx)(i.a,{href:"/development/public-networks/how-to/use-configuration-file/#configuration-order-of-precedence",children:"configuration order of precedence"})," for more information."]}),"\n",(0,n.jsx)(i.p,{children:"You can use the following profiles:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#minimalist-staker-profile",children:"Minimalist staker profile"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#staker-profile",children:"Staker profile"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#enterpriseprivate-profile",children:"Enterprise/Private profile"})}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"minimalist-staker-profile",children:"Minimalist staker profile"}),"\n",(0,n.jsxs)(i.p,{children:["For stakers who want to maximize their hardware value but don't want to serve full sets of data to\ntheir peers, Besu provides a minimalist staker profile.\nSee the\n",(0,n.jsx)(i.a,{href:"https://github.com/hyperledger/besu/blob/8b64023a121ea996ef60e4b7e2299c5807683f90/config/src/main/resources/profiles/minimalist-staker.toml",children:"minimalist staker profile on GitHub"}),"\nfor the custom settings."]}),"\n",(0,n.jsxs)(i.p,{children:["To use the minimalist staker profile, run Besu with\n",(0,n.jsx)(i.a,{href:"/development/public-networks/reference/cli/options#profile",children:(0,n.jsx)(i.code,{children:"--profile"})})," set to ",(0,n.jsx)(i.code,{children:"minimalist_staker"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"besu --profile=minimalist_staker\n"})}),"\n",(0,n.jsx)(i.h2,{id:"staker-profile",children:"Staker profile"}),"\n",(0,n.jsxs)(i.p,{children:["For stakers who want to maximize their hardware value and also want to serve full sets of data to\ntheir peers, Besu providers a staker profile.\nSee the\n",(0,n.jsx)(i.a,{href:"https://github.com/hyperledger/besu/blob/8b64023a121ea996ef60e4b7e2299c5807683f90/config/src/main/resources/profiles/staker.toml",children:"staker profile on GitHub"}),"\nfor the custom settings."]}),"\n",(0,n.jsxs)(i.p,{children:["To use the staker profile, run Besu with ",(0,n.jsx)(i.a,{href:"/development/public-networks/reference/cli/options#profile",children:(0,n.jsx)(i.code,{children:"--profile"})})," set to ",(0,n.jsx)(i.code,{children:"staker"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"besu --profile=staker\n"})}),"\n",(0,n.jsx)(i.h2,{id:"enterpriseprivate-profile",children:"Enterprise/Private profile"}),"\n",(0,n.jsxs)(i.p,{children:["For private network operators who want to minimize confusion by setting sensible defaults, Besu\nprovides an enterprise/private profile.\nThis profile is designed to handle specific use cases for private network operators.\nSee the\n",(0,n.jsx)(i.a,{href:"https://github.com/hyperledger/besu/blob/8b64023a121ea996ef60e4b7e2299c5807683f90/config/src/main/resources/profiles/enterprise-private.toml",children:"enterprise/private profile on GitHub"}),"\nfor the custom settings."]}),"\n",(0,n.jsxs)(i.p,{children:["To use the enterprise/private profile, run Besu with\n",(0,n.jsx)(i.a,{href:"/development/public-networks/reference/cli/options#profile",children:(0,n.jsx)(i.code,{children:"--profile"})})," set to ",(0,n.jsx)(i.code,{children:"enterprise"})," or ",(0,n.jsx)(i.code,{children:"private"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"besu --profile=enterprise\n"})}),"\n",(0,n.jsx)(i.p,{children:"or"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"besu --profile=private\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"enterprise"})," and ",(0,n.jsx)(i.code,{children:"private"})," are aliases for the same profile."]})})]})}function d(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,i,r)=>{r.d(i,{Z:()=>l,a:()=>t});var n=r(67294);const o={},s=n.createContext(o);function t(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);