"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2950],{3501:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var n=o(7462),a=(o(7294),o(3905)),i=o(214);const s={title:"Dialog.Content"},l=void 0,r={unversionedId:"components/Dialog/DialogContent",id:"components/Dialog/DialogContent",title:"Dialog.Content",description:"A component to show content in a Dialog.",source:"@site/docs/components/Dialog/DialogContent.mdx",sourceDirName:"components/Dialog",slug:"/components/Dialog/DialogContent",permalink:"/react-native-paper/docs/components/Dialog/DialogContent",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/Dialog/DialogContent.mdx",tags:[],version:"current",frontMatter:{title:"Dialog.Content"},sidebar:"components",previous:{title:"Dialog.Actions",permalink:"/react-native-paper/docs/components/Dialog/DialogActions"},next:{title:"Dialog.Icon",permalink:"/react-native-paper/docs/components/Dialog/DialogIcon"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],g={toc:p};function m(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},g,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A component to show content in a Dialog."),(0,a.kt)("div",{class:"screenshots"},(0,a.kt)("figure",null,(0,a.kt)("img",{class:"small",src:"/react-native-paper/screenshots/dialog-content.png"}))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Dialog, Portal, Text } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [visible, setVisible] = React.useState(false);\n\n  const hideDialog = () => setVisible(false);\n\n  return (\n    <Portal>\n      <Dialog visible={visible} onDismiss={hideDialog}>\n        <Dialog.Content>\n          <Text variant=\"bodyMedium\">This is simple dialog</Text>\n        </Dialog.Content>\n      </Dialog>\n    </Portal>\n  );\n};\n\nexport default MyComponent;\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(i.Z,{link:"Dialog/DialogContent",mdxType:"PropTable"}))}m.isMDXComponent=!0}}]);