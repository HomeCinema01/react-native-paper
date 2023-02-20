"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2453],{3113:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=o(7462),n=(o(7294),o(3905)),r=o(214);const l={title:"Portal"},s=void 0,p={unversionedId:"components/Portal/Portal",id:"components/Portal/Portal",title:"Portal",description:"Portal allows rendering a component at a different place in the parent tree.",source:"@site/docs/components/Portal/Portal.mdx",sourceDirName:"components/Portal",slug:"/components/Portal/",permalink:"/react-native-paper/docs/components/Portal/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/Portal/Portal.mdx",tags:[],version:"current",frontMatter:{title:"Portal"},sidebar:"components",previous:{title:"Modal",permalink:"/react-native-paper/docs/components/Modal"},next:{title:"Portal.Host",permalink:"/react-native-paper/docs/components/Portal/PortalHost"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],d={toc:c};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Portal allows rendering a component at a different place in the parent tree.\nYou can use it to render content which should appear above other elements, similar to ",(0,n.kt)("inlineCode",{parentName:"p"},"Modal"),".\nIt requires a ",(0,n.kt)("a",{parentName:"p",href:"portal-host.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Portal.Host"))," component to be rendered somewhere in the parent tree.\nNote that if you're using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Provider")," component, this already includes a ",(0,n.kt)("inlineCode",{parentName:"p"},"Portal.Host"),"."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Portal, Text } from 'react-native-paper';\n\nconst MyComponent = () => (\n  <Portal>\n    <Text>This is rendered at a different place</Text>\n  </Portal>\n);\n\nexport default MyComponent;\n")),(0,n.kt)("h2",{id:"props"},"Props"),(0,n.kt)(r.Z,{link:"Portal/Portal",mdxType:"PropTable"}))}m.isMDXComponent=!0}}]);