"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[683],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=i.createContext({}),u=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return n?i.createElement(m,a(a({ref:e},p),{},{components:n})):i.createElement(m,a({ref:e},p))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2601:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return h}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],l={},s="Tutorial: Providing Liquidity",u={unversionedId:"getting-started/providing-liquidity",id:"getting-started/providing-liquidity",title:"Tutorial: Providing Liquidity",description:"Pools are a way to provide liquidity, or the ability to trade, between tokens on Saber. They allow users to earn trading fees on tokens they're holding.",source:"@site/docs/getting-started/providing-liquidity.md",sourceDirName:"getting-started",slug:"/getting-started/providing-liquidity",permalink:"/docs/getting-started/providing-liquidity",editUrl:"https://github.com/saber-hq/docs/tree/master/docs/getting-started/providing-liquidity.md",tags:[],version:"current",lastUpdatedBy:"Ian Macalinao",lastUpdatedAt:1647307421,formattedLastUpdatedAt:"3/15/2022",frontMatter:{},sidebar:"docs",previous:{title:"Solana Wallets",permalink:"/docs/getting-started/wallets"},next:{title:"Tutorial: Swapping Tokens",permalink:"/docs/getting-started/swapping-tokens"}},p={},d=[{value:"Deposit",id:"deposit",level:3},{value:"Withdraw",id:"withdraw",level:3}],c={toc:d};function h(t){var e=t.components,l=(0,o.Z)(t,a);return(0,r.kt)("wrapper",(0,i.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-providing-liquidity"},"Tutorial: Providing Liquidity"),(0,r.kt)("p",null,"Pools are a way to provide ",(0,r.kt)("em",{parentName:"p"},"liquidity"),", or the ability to trade, between tokens on Saber. They allow users to earn trading fees on tokens they're holding."),(0,r.kt)("h3",{id:"deposit"},"Deposit"),(0,r.kt)("p",null,"Let's say you want to supply to the USDC and USDT pool."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go the the ",(0,r.kt)("strong",{parentName:"li"},"Pools")," tab and select ",(0,r.kt)("strong",{parentName:"li"},"Deposit"),"."),(0,r.kt)("li",{parentName:"ul"},"Enter a quantity of USDT and USDC to swap from.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Because this is a stable pair, you aren't required to deposit both tokens. However, depending on how different the quantity between tokens is, you may have to pay a larger transaction fee. This is to incentivize close-to-equal distribution within the pool.")))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(1569).Z,width:"796",height:"853"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Deposit"),". This will display a breakdown of the transaction you're about to make:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deposit Currencies")," shows the amount of each token you're depositing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"New pool share")," is what your share of the pool will be after the transaction is made")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fees")," is determined by how different the quantity between tokens you're depositing is. This is to incentivize close-to-equal distribution within the pool."))))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(6200).Z,width:"739",height:"919"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Confirm Deposit"),". Depending on what wallet you're using, you'll likely be prompted to confirm the transaction via your wallet's interface."),(0,r.kt)("li",{parentName:"ul"},"The deposit is now complete! On the bottom left, you'll see a notification that contains a link to the transaction on Solana's explorer.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You'll notice that you also now have LP tokens in your wallet that represent your share of the pool.\\")))),(0,r.kt)("h3",{id:"withdraw"},"Withdraw"),(0,r.kt)("p",null,"Let's say you want to withdraw your liquidity from the USDC-USDT pool."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go the the ",(0,r.kt)("strong",{parentName:"li"},"Pools")," tab and select ",(0,r.kt)("strong",{parentName:"li"},"Withdraw"),"."),(0,r.kt)("li",{parentName:"ul"},"By default, you'll be given the option to withdraw using a single token in the pool. You can click on the currently selected token to a different token in the pool.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you are withdrawing a large proportion of the pool, you may want to choose to withdraw a distribution of all tokens in the pool instead. To do this, you can enter ",(0,r.kt)("strong",{parentName:"li"},"Settings")," by clicking on the settings icon in the top right corner. Here, you can switch Withdrawal Currency to ",(0,r.kt)("strong",{parentName:"li"},"All Currencies"),".\\")))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(344).Z,width:"743",height:"454"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enter how much of your liquidity in the pool that you want to withdraw by moving the percentage slider.")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(46).Z,width:"806",height:"873"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once you've entered your desired amount, click the ",(0,r.kt)("strong",{parentName:"li"},"Withdraw")," button. This will show a review screen with the following breakdown:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Withdrawal Currencies")," shows the amount of each token you're withdrawing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"New pool share")," is what your share of the pool will be after the transaction is made"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fees")," is determined by the quantity of token(s) you withdraw relative to the other token in the pool. This is to incentivize close-to-equal distribution within the pool.")))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(5407).Z,width:"730",height:"878"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Confirm Withdrawal"),". Depending on what wallet you're using, you'll likely be prompted to confirm the transaction via your wallet's interface."),(0,r.kt)("li",{parentName:"ul"},"The withdrawal is now complete! On the bottom left, you'll see a notification that contains a link to the transaction on Solana's explorer.")))}h.isMDXComponent=!0},6200:function(t,e,n){e.Z=n.p+"assets/images/confirm-deposit-9d6ec7ed3a4e32974be980685036b767.png"},1569:function(t,e,n){e.Z=n.p+"assets/images/deposit-20cb1c35f69323b8a1eb1e79be5fb4e8.png"},344:function(t,e,n){e.Z=n.p+"assets/images/withdraw-all-settings-45d108cdaa3a8c8de16afb7f32ac8616.png"},5407:function(t,e,n){e.Z=n.p+"assets/images/withdraw-confirm-4c93e920fcef89014b441da2d47f210e.png"},46:function(t,e,n){e.Z=n.p+"assets/images/withdraw-slider-f0c9863e0927b79e7d6519a80870b59c.png"}}]);