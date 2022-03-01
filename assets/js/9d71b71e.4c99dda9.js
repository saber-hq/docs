"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[422],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6515:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],p={sidebar_position:1},l="Overview",s={unversionedId:"developing/overview",id:"developing/overview",title:"Overview",description:"Protocol",source:"@site/docs/developing/overview.md",sourceDirName:"developing",slug:"/developing/overview",permalink:"/docs/developing/overview",editUrl:"https://github.com/saber-hq/docs/tree/master/docs/developing/overview.md",tags:[],version:"current",lastUpdatedBy:"Ian Macalinao",lastUpdatedAt:1646170692,formattedLastUpdatedAt:"3/1/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Tutorial: Yield Farming",permalink:"/docs/getting-started/yield-farming"},next:{title:"The Saber Registry",permalink:"/docs/developing/registry"}},c={},u=[{value:"Protocol",id:"protocol",level:2},{value:"Liquidity Mining",id:"liquidity-mining",level:2},{value:"Governance",id:"governance",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("h2",{id:"protocol"},"Protocol"),(0,i.kt)("p",null,"The Saber protocol consists of several programs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/saber-hq/stable-swap"},"Stable Swap program"),", which handles creating LP tokens and swapping"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/saber-hq/saber-periphery"},"Saber Periphery"),", which consists of:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"./decimal-wrappers"},"Decimal Wrapper"),", which handles adjustments of decimals"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/saber-hq/saber-periphery/tree/master/programs/continuation-router"},"Continuation Router"),", which routes between different Saber pools and the ",(0,i.kt)("a",{parentName:"li",href:"./decimal-wrappers"},"Add Decimal")," program atomically in one transaction."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/saber-hq/saber-periphery/tree/master/programs/lockup"},"Lockup"),", which controls the tokens released to the Saber team and pre-token investors"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/saber-hq/saber-periphery/tree/master/programs/mint-proxy"},"Mint Proxy"),", which handles the issuance of new Saber tokens"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/saber-hq/saber-periphery/tree/master/programs/redeemer"},"Redeemer"),', which allows burning an "IOU" token for a Saber token')))),(0,i.kt)("h2",{id:"liquidity-mining"},"Liquidity Mining"),(0,i.kt)("p",null,"Liquidity mining is handled by the ",(0,i.kt)("a",{parentName:"p",href:"https://quarry.so"},"Quarry protocol"),"."),(0,i.kt)("h2",{id:"governance"},"Governance"),(0,i.kt)("p",null,"Governance is handled by ",(0,i.kt)("a",{parentName:"p",href:"https://tribeca.so"},"Tribeca"),". Documentation on its programs may be found on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.tribeca.so"},"Tribeca documentation site"),"."))}d.isMDXComponent=!0}}]);