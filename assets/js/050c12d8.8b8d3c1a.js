"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[827],{3803:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var o=n(7462),a=(n(7294),n(3905)),s=n(214);const i={title:"RadioButton"},r=void 0,d={unversionedId:"components/RadioButton/RadioButton",id:"components/RadioButton/RadioButton",title:"RadioButton",description:"Radio buttons allow the selection a single option from a set.",source:"@site/docs/components/RadioButton/RadioButton.mdx",sourceDirName:"components/RadioButton",slug:"/components/RadioButton/",permalink:"/react-native-paper/docs/components/RadioButton/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/RadioButton/RadioButton.mdx",tags:[],version:"current",frontMatter:{title:"RadioButton"},sidebar:"components",previous:{title:"ProgressBar",permalink:"/react-native-paper/docs/components/ProgressBar"},next:{title:"RadioButton.Android",permalink:"/react-native-paper/docs/components/RadioButton/RadioButtonAndroid"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],p={toc:u};function l(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Radio buttons allow the selection a single option from a set."),(0,a.kt)("div",{class:"screenshots"},(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/react-native-paper/screenshots/radio-enabled.android.png"}),(0,a.kt)("figcaption",null,"Android (enabled)")),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/react-native-paper/screenshots/radio-disabled.android.png"}),(0,a.kt)("figcaption",null,"Android (disabled)")),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/react-native-paper/screenshots/radio-enabled.ios.png"}),(0,a.kt)("figcaption",null,"iOS (enabled)")),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/react-native-paper/screenshots/radio-disabled.ios.png"}),(0,a.kt)("figcaption",null,"iOS (disabled)"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { View } from 'react-native';\nimport { RadioButton } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [checked, setChecked] = React.useState('first');\n\n  return (\n    <View>\n      <RadioButton\n        value=\"first\"\n        status={ checked === 'first' ? 'checked' : 'unchecked' }\n        onPress={() => setChecked('first')}\n      />\n      <RadioButton\n        value=\"second\"\n        status={ checked === 'second' ? 'checked' : 'unchecked' }\n        onPress={() => setChecked('second')}\n      />\n    </View>\n  );\n};\n\nexport default MyComponent;\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(s.Z,{link:"RadioButton/RadioButton",mdxType:"PropTable"}))}l.isMDXComponent=!0}}]);