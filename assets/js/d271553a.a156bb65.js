"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[907],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9258:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:2},s="Decimal Wrapped Tokens",p={unversionedId:"building/decimal-wrappers",id:"building/decimal-wrappers",title:"Decimal Wrapped Tokens",description:"A decimal-wrapped token is a token which has been modified to add more decimal places. It exists because the Saber stable swap invariant formula does not adjust for the number of decimal places that the underlying token has.",source:"@site/docs/building/decimal-wrappers.md",sourceDirName:"building",slug:"/building/decimal-wrappers",permalink:"/docs/building/decimal-wrappers",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/building/decimal-wrappers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"The Saber Registry",permalink:"/docs/building/registry"},next:{title:"Tutorial: Perform a Swap",permalink:"/docs/building/swapping"}},c={},u=[{value:"Terminology",id:"terminology",level:2},{value:"Interacting with the Decimal Wrapper",id:"interacting-with-the-decimal-wrapper",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"decimal-wrapped-tokens"},"Decimal Wrapped Tokens"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"decimal-wrapped token")," is a token which has been modified to add more decimal places. It exists because the Saber stable swap invariant formula does not adjust for the number of decimal places that the underlying token has."),(0,i.kt)("p",null,"For example, USDC has 6 decimal places but wDAI has 9 decimal places. Without the decimal wrapper, the stable swap invariant would assume that 1,000 USDC = 1 DAI, which is obviously incorrect."),(0,i.kt)("p",null,"The lack of decimal adjustment was intentional to ship fast with as few edge cases as possible; however, it can cause confusion for developers attempting to integrate tokens. Furthermore, it is possible to acquire decimal-wrapped tokens in one's wallet if the Saber UI was not used to withdraw or swap tokens."),(0,i.kt)("h2",{id:"terminology"},"Terminology"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"underlying")," token is the token that is staked into the decimal wrapper. The ",(0,i.kt)("strong",{parentName:"p"},"wrapper")," token is the decimal wrapped token."),(0,i.kt)("p",null,"Each wrapper token is suffixed with the number of decimal places it has. For example, USDC-9 is the wrapper token of USDC with 9 decimals."),(0,i.kt)("h2",{id:"interacting-with-the-decimal-wrapper"},"Interacting with the Decimal Wrapper"),(0,i.kt)("p",null,"There are four key ",(0,i.kt)("a",{parentName:"p",href:"https://anchor.so/programs/DecZY86MU5Gj7kppfUCEmd4LbXXuyZH1yHaP2NTqdiZB"},"instructions for interacting with decimal-wrapped tokens"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"InitializeWrapper"),": if your token does not yet have a decimal wrapper, you must create a decimal wrapper using this instruction. Make sure to select a mint that is user friendly, as it might end up in your users' wallets!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deposit"),": Deposits underlying tokens for wrapper tokens."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withdraw"),": Burns wrapper tokens to get the underlying tokens."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withdrawAll"),": Burns all wrapper tokens to get the underlying tokens. This is particularly useful for multi-instruction swaps.")),(0,i.kt)("p",null,"One should use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/saber-hq/saber-periphery"},"Saber Periphery")," SDK in order to interact with this program."),(0,i.kt)("p",null,"TODO: add code examples of the ",(0,i.kt)("inlineCode",{parentName:"p"},"saber-periphery"),"."))}m.isMDXComponent=!0}}]);