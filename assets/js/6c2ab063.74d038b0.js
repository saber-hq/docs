"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[813],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3818:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return h}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:3},l="Why Saber?",c={unversionedId:"about/why-saber",id:"about/why-saber",title:"Why Saber?",description:"It is a misconception that Saber is competing with general AMMs and orderbooks. They are not the same and go after different markets.",source:"@site/docs/about/why-saber.md",sourceDirName:"about",slug:"/about/why-saber",permalink:"/docs/about/why-saber",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/about/why-saber.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"How Saber Works",permalink:"/docs/about/how-it-works"},next:{title:"Solana Wallets",permalink:"/docs/getting-started/wallets"}},p={},u=[{value:"Zero Impermanent Loss",id:"zero-impermanent-loss",level:2},{value:"Zero Opportunity Cost",id:"zero-opportunity-cost",level:2}],d={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why-saber"},"Why Saber?"),(0,a.kt)("p",null,"It is a misconception that Saber is competing with general AMMs and orderbooks. They are not the same and go after different markets."),(0,a.kt)("p",null,"Saber is meant to be a place for low risk staking on large transaction volume. It encourages high volume by having the best pricing for swaps (encouraging arbitrage bots to trade), and it is extremely composable with other DeFi applications on Solana, reducing the opportunity cost for the otherwise low yields."),(0,a.kt)("h2",{id:"zero-impermanent-loss"},"Zero Impermanent Loss"),(0,a.kt)("p",null,"Saber's StableSwap algorithm makes the assumption that assets in a pair will converge to the same price. As such, it does not have impermanent loss in the way that constant product AMMs do."),(0,a.kt)("p",null,'Note that there is still a risk of prices diverging from equilibrium: if one asset in the pool "de-pegs" (that is, drops or skyrockets in price permanently), a liquidity provider will experience impermanent loss. One should take care to research the underlying assets they are investing in.'),(0,a.kt)("h2",{id:"zero-opportunity-cost"},"Zero Opportunity Cost"),(0,a.kt)("p",null,"There is an age-old debate of whether or not automated market makers are more efficient in providing liquidity than orderbooks."),(0,a.kt)("p",null,"There are two properties to measure the efficiency of liquidity: spread and depth. Spread refers to the difference between the bid (selling) price and the ask (buying) price, and depth refers to the total amount of volume that can be moved for a particular percentage of price decrease."),(0,a.kt)("p",null,"Constant product market makers like Uniswap V2 are very inefficient in liquidity provision, as they spread liquidity out over a large curve. For example: if $1,000,000 is allocated to the USDT-USDC pair evently, swapping 10,000 USDT to USDC results in a new price of $1.04 USDC."),(0,a.kt)("p",null,"Saber is different. The algorithm knows that USDT and USDC should be the same price, so you can expect a virtually zero change in price. As a result, liquidity providers are able to charge higher fees and more profit."),(0,a.kt)("p",null,"However, the efficiency of Saber liquidity does not stop here: Saber LP tokens themselves are able to be used in all sorts of places ranging from lending markets (see ",(0,a.kt)("a",{parentName:"p",href:"https://port.finance"},"Port"),") to collateralizing other stablecoins (see ",(0,a.kt)("a",{parentName:"p",href:"https://cashio.app"},"Cashio"),'). This allows for Saber to be much more composable than orderbooks, as orderbook positions cannot directly be used as assets within other protocols. This greatly reduces (and in the long run, eliminates) the opportunity cost of deploying capital, providing a passive "risk-free" rate of return to the decentralized financial ecosystem.'))}h.isMDXComponent=!0}}]);