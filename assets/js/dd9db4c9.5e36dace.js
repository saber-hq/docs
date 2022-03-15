"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[773],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4637:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={title:"Pricing LP Tokens",sidebar_position:5},c=void 0,p={unversionedId:"developing/pricing-lp-tokens",id:"developing/pricing-lp-tokens",title:"Pricing LP Tokens",description:"Fair Price",source:"@site/docs/developing/pricing-lp-tokens.md",sourceDirName:"developing",slug:"/developing/pricing-lp-tokens",permalink:"/docs/developing/pricing-lp-tokens",editUrl:"https://github.com/saber-hq/docs/tree/master/docs/developing/pricing-lp-tokens.md",tags:[],version:"current",lastUpdatedBy:"Ian Macalinao",lastUpdatedAt:1647307421,formattedLastUpdatedAt:"3/15/2022",sidebarPosition:5,frontMatter:{title:"Pricing LP Tokens",sidebar_position:5},sidebar:"docs",previous:{title:"Tutorial: Perform a Swap",permalink:"/docs/developing/swapping"},next:{title:"Saber Common (JavaScript)",permalink:"/docs/developing/sdks/saber-common"}},u={},s=[{value:"Fair Price",id:"fair-price",level:2},{value:"Virtual Price",id:"virtual-price",level:2},{value:"Calculating liquidation value",id:"calculating-liquidation-value",level:2},{value:"Additional Reading",id:"additional-reading",level:3}],d={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"fair-price"},"Fair Price"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"fair price")," of a Saber LP token is the value of the tokens backing an LP token. For example, if the USDT-USDC pool has 700 USDT and 300 USDC, there are 1,000 circulating LP tokens, and USDT = $1.01 while USDC = $1.00, the fair price is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1.01 * 700 + 1.00 * 300 / 1,000 = $1.007\n")),(0,a.kt)("p",null,"This is useful for calculating how much money one has; however, it is unreliable for calculating value as collateral as this value can easily be manipulated."),(0,a.kt)("h2",{id:"virtual-price"},"Virtual Price"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"virtual price")," of a Saber Stable Swap pool is the theoretical lower bound of the value of tokens if each token was worth 1.00 of the underlying asset. It is useful when understanding LP returns or liquidation value."),(0,a.kt)("p",null,"Virtual price may only increase, and it only increases when swap fees are accrued."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rust implementation: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/stable-swap-math/1.7.0/stable_swap_math/price/struct.SaberSwap.html#method.calculate_virtual_price_of_pool_tokens"},(0,a.kt)("inlineCode",{parentName:"a"},"SaberSwap::calculate_virtual_price_of_pool_tokens"))),(0,a.kt)("li",{parentName:"ul"},"JavaScript implementation: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/saber-hq/saber-common/blob/master/packages/stableswap-sdk/src/calculator/amounts.ts#L15"},(0,a.kt)("inlineCode",{parentName:"a"},"calculateVirtualPrice")))),(0,a.kt)("h2",{id:"calculating-liquidation-value"},"Calculating liquidation value"),(0,a.kt)("p",null,"To use a Saber LP token as collateral, you will need to fetch the prices\nof both of the tokens in the pool and get the min of the two. Then, multiply the number of LP tokens by the ",(0,a.kt)("em",{parentName:"p"},"virtual price"),"."),(0,a.kt)("p",null,"This virtual price is resilient to manipulations of the LP token price."),(0,a.kt)("p",null,"Hence, ",(0,a.kt)("inlineCode",{parentName:"p"},"min_lp_price = min_value * virtual_price"),"."),(0,a.kt)("h3",{id:"additional-reading"},"Additional Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.chain.link/using-chainlink-oracles-to-securely-utilize-curve-lp-pools/"},"Chainlink: Using Chainlink Oracles to Securely Utilize Curve LP Pools"))))}f.isMDXComponent=!0}}]);