"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[2686],{76367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=r(85893),n=r(11151);const i={title:"System requirements",description:"Ensure you meet the system requirements to sync and run Besu.",sidebar_position:1,tags:["private networks"]},o="System requirements",a={id:"private-networks/get-started/system-requirements",title:"System requirements",description:"Ensure you meet the system requirements to sync and run Besu.",source:"@site/docs/private-networks/get-started/system-requirements.md",sourceDirName:"private-networks/get-started",slug:"/private-networks/get-started/system-requirements",permalink:"/development/private-networks/get-started/system-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/get-started/system-requirements.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1711557763,formattedLastUpdatedAt:"Mar 27, 2024",sidebarPosition:1,frontMatter:{title:"System requirements",description:"Ensure you meet the system requirements to sync and run Besu.",sidebar_position:1,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Get started",permalink:"/development/private-networks/get-started"},next:{title:"Installation options",permalink:"/development/private-networks/get-started/install/"}},l={},d=[{value:"Determining system requirements",id:"determining-system-requirements",level:2},{value:"Java Virtual Machine size",id:"java-virtual-machine-size",level:2},{value:"VM requirements",id:"vm-requirements",level:2},{value:"Disk type",id:"disk-type",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"system-requirements",children:"System requirements"}),"\n",(0,s.jsx)(t.p,{children:"Private network system requirements depend on many factors, including:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Size of the world state for the network."}),"\n",(0,s.jsx)(t.li,{children:"Number of transactions submitted to the network."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/development/public-networks/reference/genesis-items#genesis-block-parameters",children:"Block gas limit"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Number and complexity of ",(0,s.jsx)(t.a,{href:"/development/public-networks/how-to/use-besu-api/json-rpc",children:"JSON-RPC"}),", ",(0,s.jsx)(t.a,{href:"/development/public-networks/how-to/use-besu-api/rpc-pubsub",children:"PubSub"}),", or ",(0,s.jsx)(t.a,{href:"/development/public-networks/how-to/use-besu-api/graphql",children:"GraphQL"})," queries handled by the node."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Participation in private networks is typically restricted in some way, so the volume of traffic is much lower than on Mainnet, resulting in lower system requirements."}),"\n",(0,s.jsx)(t.h2,{id:"determining-system-requirements",children:"Determining system requirements"}),"\n",(0,s.jsxs)(t.p,{children:["To determine system requirements, check CPU and disk space requirements using ",(0,s.jsx)(t.a,{href:"/development/public-networks/how-to/monitor/metrics",children:"Prometheus"}),". Grafana provides a ",(0,s.jsx)(t.a,{href:"https://grafana.com/grafana/dashboards/10273",children:"sample dashboard"})," for Besu."]}),"\n",(0,s.jsx)(t.h2,{id:"java-virtual-machine-size",children:"Java Virtual Machine size"}),"\n",(0,s.jsx)(t.p,{children:"Depending on your environment and network setup, the minimum Java Virtual Machine (JVM) memory requirement for private networks is 4 GB."}),"\n",(0,s.jsx)(t.p,{children:"JVM memory requirements are highest when syncing, but will reduce after the node is synchronized to the chain head. Monitor your system to determine your actual JVM memory needs."}),"\n",(0,s.jsx)(t.h2,{id:"vm-requirements",children:"VM requirements"}),"\n",(0,s.jsxs)(t.p,{children:["If you set up your own VM locally using a VM manager such as ",(0,s.jsx)(t.a,{href:"https://www.oracle.com/virtualization/virtualbox/",children:"VirtualBox"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Ensure you enable Intel Virtualization Technology (VTx) and Virtualization Technology for Directed I/O (VT-d) in the BIOS settings."}),"\n",(0,s.jsx)(t.li,{children:"On Windows, you might need to disable Hyper-V in the Windows Feature list."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"We recommend you create a VM with the following attributes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Memory size: Set to 6 GB (recommended)"}),"\n",(0,s.jsx)(t.li,{children:"Create a virtual hard disk with at least 10 GB (20 GB recommended)"}),"\n",(0,s.jsx)(t.li,{children:"Virtual hard disk file type: VDI (if you need to share it with other apps, use VHD)"}),"\n",(0,s.jsxs)(t.li,{children:['(Optional) You can create a shared directory to copy block files or genesis files from the host computer to the VM. For details on how to create a shared directory, see "Share Folders" in the ',(0,s.jsx)(t.a,{href:"https://docs.oracle.com/en/virtualization/virtualbox/6.1/user/",children:"Oracle VirtualBox documentation"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"disk-type",children:"Disk type"}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.a,{href:"https://cloud.google.com/compute/docs/disks",children:"local SSD storage"})," for high throughput nodes (validators and RPC nodes). Read-only nodes can use a lower performance setup."]}),"\n",(0,s.jsxs)(t.p,{children:["You can use local SSDs through ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/SCSI",children:"SCSI interfaces"}),". For higher performance in production settings, we recommend upgrading to ",(0,s.jsx)(t.a,{href:"https://cloud.google.com/compute/docs/disks/local-ssd#performance",children:"NVMe interfaces"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>o});var s=r(67294);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);