"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2589],{4772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905)),i=t(214);const s={title:"AnimatedFAB"},r=void 0,l={unversionedId:"components/AnimatedFAB",id:"components/AnimatedFAB",title:"AnimatedFAB",description:"An animated, extending horizontally floating action button represents the primary action in an application.",source:"@site/docs/components/AnimatedFAB.mdx",sourceDirName:"components",slug:"/components/AnimatedFAB",permalink:"/react-native-paper/docs/components/AnimatedFAB",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/AnimatedFAB.mdx",tags:[],version:"current",frontMatter:{title:"AnimatedFAB"},sidebar:"components",previous:{title:"ActivityIndicator",permalink:"/react-native-paper/docs/components/ActivityIndicator"},next:{title:"Appbar",permalink:"/react-native-paper/docs/components/Appbar/"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An animated, extending horizontally floating action button represents the primary action in an application."),(0,o.kt)("div",{class:"screenshots"},(0,o.kt)("img",{class:"small",src:"/react-native-paper/screenshots/animated-fab.gif"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport {\n  StyleProp,\n  ViewStyle,\n  Animated,\n  StyleSheet,\n  Platform,\n  ScrollView,\n  Text,\n  SafeAreaView,\n  I18nManager,\n} from 'react-native';\nimport { AnimatedFAB } from 'react-native-paper';\n\nconst MyComponent = ({\n  animatedValue,\n  visible,\n  extended,\n  label,\n  animateFrom,\n  style,\n  iconMode,\n}) => {\n  const [isExtended, setIsExtended] = React.useState(true);\n\n  const isIOS = Platform.OS === 'ios';\n\n  const onScroll = ({ nativeEvent }) => {\n    const currentScrollPosition =\n      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;\n\n    setIsExtended(currentScrollPosition <= 0);\n  };\n\n  const fabStyle = { [animateFrom]: 16 };\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <ScrollView onScroll={onScroll}>\n        {[...new Array(100).keys()].map((_, i) => (\n          <Text>{i}</Text>\n        ))}\n      </ScrollView>\n      <AnimatedFAB\n        icon={'plus'}\n        label={'Label'}\n        extended={isExtended}\n        onPress={() => console.log('Pressed')}\n        visible={visible}\n        animateFrom={'right'}\n        iconMode={'static'}\n        style={[styles.fabStyle, style, fabStyle]}\n      />\n    </SafeAreaView>\n  );\n};\n\nexport default MyComponent;\n\nconst styles = StyleSheet.create({\n  container: {\n    flexGrow: 1,\n  },\n  fabStyle: {\n    bottom: 16,\n    right: 16,\n    position: 'absolute',\n  },\n});\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)(i.Z,{link:"FAB/AnimatedFAB",mdxType:"PropTable"}))}m.isMDXComponent=!0}}]);