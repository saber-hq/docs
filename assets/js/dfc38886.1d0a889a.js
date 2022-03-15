"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[120],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,b=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},593:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return f}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_position:1},l="Introduction",p={unversionedId:"about/intro",id:"about/intro",title:"Introduction",description:"What is Saber?",source:"@site/docs/about/intro.md",sourceDirName:"about",slug:"/about/intro",permalink:"/docs/about/intro",editUrl:"https://github.com/saber-hq/docs/tree/master/docs/about/intro.md",tags:[],version:"current",lastUpdatedBy:"Ian Macalinao",lastUpdatedAt:1647307421,formattedLastUpdatedAt:"3/15/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",next:{title:"How Saber Works",permalink:"/docs/about/how-it-works"}},c={},u=[{value:"What is Saber?",id:"what-is-saber",level:2},{value:"Asset Types",id:"asset-types",level:2},{value:"Getting Listed",id:"getting-listed",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h2",{id:"what-is-saber"},"What is Saber?"),(0,i.kt)("p",null,"Saber is an automated market maker and liquidity pool on ",(0,i.kt)("a",{parentName:"p",href:"https://solana.com"},"Solana")," designed for extremely efficient trading between similarly priced (pegged) assets, without an opportunity cost."),(0,i.kt)("p",null,"This trading activity results in fees for providers of liquidity, resulting in a safer, lower-risk staking opportunity representing real world transaction volume."),(0,i.kt)("p",null,"For more information about why Saber is useful, see: ",(0,i.kt)("a",{parentName:"p",href:"./why-saber"},"Why Saber?")),(0,i.kt)("h2",{id:"asset-types"},"Asset Types"),(0,i.kt)("p",null,"Saber generally allows for trading between assets that mean revert in price. There are several assets that Saber specializes in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"USD Stablecoins.")," There are hundreds of dollar-based stablecoins in existence, ranging from dollar-backed stablecoins like ",(0,i.kt)("a",{parentName:"li",href:"https://www.circle.com/en/usdc"},"USDC")," and ",(0,i.kt)("a",{parentName:"li",href:"https://tether.to/"},"Tether"),", decentralized stablecoins such as ",(0,i.kt)("a",{parentName:"li",href:"https://terra.money/"},"UST"),", and native Solana stablecoins such as ",(0,i.kt)("a",{parentName:"li",href:"https://cashio.app"},"Cashio"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bridged assets.")," There are a large number of bridges that lead to Solana, and Saber is the primary liquidity source to exchange between the different bridged assets. One example is the ",(0,i.kt)("a",{parentName:"li",href:"https://app.saber.so/#/pools/btc/deposit"},"renBTC-BTC")," pool, which allows swapping between the ",(0,i.kt)("a",{parentName:"li",href:"https://renproject.io/"},"Ren")," and ",(0,i.kt)("a",{parentName:"li",href:"https://ftx.com"},"FTX")," versions of Bitcoin. Many stablecoins are also bridged assets; Saber is the primary way for Solana users to navigate between different chains."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Staking derivatives.")," Saber is the largest venue for trading SOL staking derivatives such as ",(0,i.kt)("a",{parentName:"li",href:"https://marinade.io"},"Marinade SOL")," and ",(0,i.kt)("a",{parentName:"li",href:"https://lido.fi"},"Lido SOL"),".")),(0,i.kt)("h2",{id:"getting-listed"},"Getting Listed"),(0,i.kt)("p",null,"If you are building an asset that you think belongs on Saber, please email ",(0,i.kt)("a",{parentName:"p",href:"mailto:team@saber.so"},"team@saber.so"),"."))}f.isMDXComponent=!0}}]);