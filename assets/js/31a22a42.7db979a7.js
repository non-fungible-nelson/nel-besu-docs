"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[86657],{14581:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=i(85893),r=i(11151);const t={title:"Clique",description:"Hyperledger Besu Clique Proof-of-Authority (PoA) consensus protocol implementation",sidebar_position:4,path:"blob/master/config/src/main/resources/",source:"rinkeby.json",tags:["private networks"]},o="Configure Clique consensus",c={id:"private-networks/how-to/configure/consensus/clique",title:"Clique",description:"Hyperledger Besu Clique Proof-of-Authority (PoA) consensus protocol implementation",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/configure/consensus/clique.md",sourceDirName:"private-networks/how-to/configure/consensus",slug:"/private-networks/how-to/configure/consensus/clique",permalink:"/23.4.1/private-networks/how-to/configure/consensus/clique",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/configure/consensus/clique.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1711557763,formattedLastUpdatedAt:"Mar 27, 2024",sidebarPosition:4,frontMatter:{title:"Clique",description:"Hyperledger Besu Clique Proof-of-Authority (PoA) consensus protocol implementation",sidebar_position:4,path:"blob/master/config/src/main/resources/",source:"rinkeby.json",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"IBFT 2.0",permalink:"/23.4.1/private-networks/how-to/configure/consensus/ibft"},next:{title:"Add and remove validators without voting",permalink:"/23.4.1/private-networks/how-to/configure/consensus/add-validators-without-voting"}},l={},d=[{value:"Genesis file",id:"genesis-file",level:2},{value:"Extra data",id:"extra-data",level:3},{value:"One initial signer",id:"one-initial-signer",level:3},{value:"Two initial signers",id:"two-initial-signers",level:3},{value:"Post-Merge configuration",id:"post-merge-configuration",level:3},{value:"Connect to a Clique network",id:"connect-to-a-clique-network",level:2},{value:"Add and remove signers",id:"add-and-remove-signers",level:2},{value:"Add a signer",id:"add-a-signer",level:3},{value:"Remove a signer",id:"remove-a-signer",level:3},{value:"Epoch transition",id:"epoch-transition",level:3},{value:"Limitations",id:"limitations",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configure-clique-consensus",children:"Configure Clique consensus"}),"\n",(0,s.jsxs)(n.p,{children:["Besu implements the ",(0,s.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-225",children:"Clique"})," proof of authority (PoA) ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/consensus/",children:"consensus protocol"}),". Private networks can use Clique."]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"Clique is not suitable for production environments. Use only in development environments."})}),"\n",(0,s.jsxs)(n.p,{children:["In Clique networks, approved accounts, known as signers, validate transactions and blocks. Signers take turns to create the next block. Existing signers propose and vote to ",(0,s.jsx)(n.a,{href:"#add-and-remove-signers",children:"add or remove signers"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/tutorials/clique",children:"create a private network using Clique"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"genesis-file",children:"Genesis file"}),"\n",(0,s.jsxs)(n.p,{children:["To use Clique in a private network, Besu requires a Clique ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/concepts/genesis-file",children:"genesis file"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"A Clique genesis file defines properties specific to Clique."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="Example Clique genesis file"',children:'{\n  "config": {\n    "chainId": 1981,\n    "berlinBlock": 0,\n    "clique": {\n      "blockperiodseconds": 15,\n      "epochlength": 30000\n    }\n  },\n  "coinbase": "0x0000000000000000000000000000000000000000",\n  "difficulty": "0x1",\n  "extraData": "0x000000000000000000000000000000000000000000000000000000000000000001a54556254bfa3db2daa7673435ec63649925c50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n  "gasLimit": "0x1fffffffffffff",\n  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n  "nonce": "0x0",\n  "timestamp": "0x5c51a607",\n  "alloc": {},\n  "number": "0x0",\n  "gasUsed": "0x0",\n  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"The properties specific to Clique are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"blockperiodseconds"})," - The block time, in seconds."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"epochlength"})," - The number of blocks after which to reset all votes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"extraData"})," - ",(0,s.jsx)(n.a,{href:"#extra-data",children:"Extra data"})," including the initial signers."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"extra-data",children:"Extra data"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"extraData"})," property consists of:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"0x prefix."}),"\n",(0,s.jsx)(n.li,{children:"32 bytes of vanity data."}),"\n",(0,s.jsx)(n.li,{children:"A list of initial signer addresses (at least one initial signer is required). 20 bytes for each signer."}),"\n",(0,s.jsx)(n.li,{children:"65 bytes for the proposer signature. In the genesis block there is no initial proposer, so the proposer signature is all zeros."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"one-initial-signer",children:"One initial signer"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"One Initial Signer",src:i(68942).Z+"",width:"1376",height:"586"})}),"\n",(0,s.jsx)(n.h3,{id:"two-initial-signers",children:"Two initial signers"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Two Initial Signers",src:i(95717).Z+"",width:"1376",height:"678"})}),"\n",(0,s.jsx)(n.h3,{id:"post-merge-configuration",children:"Post-Merge configuration"}),"\n",(0,s.jsxs)(n.p,{children:["After ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/concepts/the-merge",children:"The Merge"}),", the following block fields are modified or deprecated. Their fields ",(0,s.jsx)(n.strong,{children:"must"})," contain only the constant values from the following chart."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Constant value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ommersHash"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"= Keccak256(RLP([]))"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"difficulty"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0"})}),(0,s.jsxs)(n.td,{children:["Replaced with ",(0,s.jsx)(n.code,{children:"prevrandao"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"mixHash"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0x0000000000000000000000000000000000000000000000000000000000000000"})}),(0,s.jsxs)(n.td,{children:["Replaced with ",(0,s.jsx)(n.code,{children:"prevrandao"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"nonce"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0x0000000000000000"})}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ommers"})})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RLP([]) = 0xc0"})})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, ",(0,s.jsx)(n.a,{href:"#extra-data",children:(0,s.jsx)(n.code,{children:"extraData"})})," is limited to 32 bytes of vanity data after The Merge."]}),"\n",(0,s.jsx)(n.h2,{id:"connect-to-a-clique-network",children:"Connect to a Clique network"}),"\n",(0,s.jsxs)(n.p,{children:["To start a node on a Clique private network, use the ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#genesis-file",children:(0,s.jsx)(n.code,{children:"--genesis-file"})})," option to specify the custom genesis file."]}),"\n",(0,s.jsx)(n.h2,{id:"add-and-remove-signers",children:"Add and remove signers"}),"\n",(0,s.jsxs)(n.p,{children:["Existing signers propose and vote to add or remove validators using the Clique JSON-RPC API methods. Enable the HTTP interface with ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#rpc-http-enabled",children:(0,s.jsx)(n.code,{children:"--rpc-http-enabled"})})," or the WebSocket interface with ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#rpc-ws-enabled",children:(0,s.jsx)(n.code,{children:"--rpc-ws-enabled"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The Clique API methods are disabled by default. To enable them, specify the ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#rpc-http-api",children:(0,s.jsx)(n.code,{children:"--rpc-http-api"})})," or ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#rpc-ws-api",children:(0,s.jsx)(n.code,{children:"--rpc-ws-api"})})," option and include ",(0,s.jsx)(n.code,{children:"CLIQUE"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The methods to add or remove signers are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/reference/api/#clique_propose",children:(0,s.jsx)(n.code,{children:"clique_propose"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/reference/api/#clique_getsigners",children:(0,s.jsx)(n.code,{children:"clique_getSigners"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/reference/api/#clique_discard",children:(0,s.jsx)(n.code,{children:"clique_discard"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To view signer metrics for a specified block range, call ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/reference/api/#clique_getsignermetrics",children:(0,s.jsx)(n.code,{children:"clique_getSignerMetrics"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"add-a-signer",children:"Add a signer"}),"\n",(0,s.jsxs)(n.p,{children:["To propose adding a signer to a Clique network, call ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/reference/api/#clique_propose",children:(0,s.jsx)(n.code,{children:"clique_propose"})}),", specifying the address of the proposed signer and ",(0,s.jsx)(n.code,{children:"true"}),". A majority of signers must execute the call."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="JSON-RPC clique_propose request example"',children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"clique_propose","params":["0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73", true], "id":1}\' <JSON-RPC-endpoint:port>\n'})}),"\n",(0,s.jsx)(n.p,{children:"When the signer creates the next block, the signer adds a vote to the block for the proposed signer."}),"\n",(0,s.jsx)(n.p,{children:"When more than 50% of the existing signers propose adding the signer, with their votes distributed in blocks, the signer can begin signing blocks."}),"\n",(0,s.jsxs)(n.p,{children:["To return a list of signers and confirm the addition of a proposed signer, call ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/reference/api/#clique_getsigners",children:(0,s.jsx)(n.code,{children:"clique_getSigners"})}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="JSON-RPC clique_getSigners request example"',children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"clique_getSigners","params":["latest"], "id":1}\' <JSON-RPC-endpoint:port>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To discard your proposal after confirming the addition of a signer, call ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/reference/api/#clique_discard",children:(0,s.jsx)(n.code,{children:"clique_discard"})})," specifying the address of the proposed signer."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="JSON-RPC clique_discard request example"',children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"clique_discard","params":["0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73"], "id":1}\' <JSON-RPC-endpoint:port>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"remove-a-signer",children:"Remove a signer"}),"\n",(0,s.jsxs)(n.p,{children:["The process for removing a signer from a Clique network is the same as ",(0,s.jsx)(n.a,{href:"#add-a-signer",children:"adding a signer"}),", except you specify ",(0,s.jsx)(n.code,{children:"false"})," as the second parameter of ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/reference/api/#clique_propose",children:(0,s.jsx)(n.code,{children:"clique_propose"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"epoch-transition",children:"Epoch transition"}),"\n",(0,s.jsx)(n.p,{children:"At each epoch transition, Clique discards all pending votes collected from received blocks. Existing proposals remain in effect and signers re-add their vote the next time they create a block."}),"\n",(0,s.jsxs)(n.p,{children:["Define the number of blocks between epoch transitions in the ",(0,s.jsx)(n.a,{href:"#genesis-file",children:"Clique genesis file"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsx)(n.p,{children:"In Clique, blocks created by in-turn validators are published immediately. Out-of-turn validators create blocks that are published after a short delay. In-turn blocks have a higher difficulty than out-of-turn blocks, which allows small forks to resolve to the chain with more in-turn blocks."}),"\n",(0,s.jsx)(n.p,{children:"However, when the out-of-turn delay is shorter than the block propagation delay, out-of-turn blocks may be published before in-turn blocks. This may cause large, irresolvable forks in a network."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["We recommend using a more updated consensus protocol such as ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0"})," or ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/consensus/qbft",children:"QBFT"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"*[vanity data]: Signers can include anything they like as vanity data."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},68942:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/CliqueOneIntialSigner-3b59001d390fc935c2852c8506507a5a.png"},95717:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/CliqueTwoIntialSigners-a347015db38fec2d68ff5e188b66deaa.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>o});var s=i(67294);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);