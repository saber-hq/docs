"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[198],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},395:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Ren Bridge",description:"renBTC"},c=void 0,l={unversionedId:"assets/ren-assets",id:"assets/ren-assets",title:"Ren Bridge",description:"renBTC",source:"@site/docs/assets/ren-assets.md",sourceDirName:"assets",slug:"/assets/ren-assets",permalink:"/docs/assets/ren-assets",editUrl:"https://github.com/saber-hq/docs/tree/master/docs/assets/ren-assets.md",tags:[],version:"current",lastUpdatedBy:"Ian Macalinao",lastUpdatedAt:1647537761,formattedLastUpdatedAt:"3/17/2022",frontMatter:{title:"Ren Bridge",description:"renBTC"},sidebar:"docs",previous:{title:"Allbridge Assets",permalink:"/docs/assets/allbridge-assets"}},u={},d=[{value:"About",id:"about",level:2},{value:"Bridging Assets",id:"bridging-assets",level:2}],p={toc:d};function f(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about"},"About"),(0,o.kt)("p",null,"Ren is a token bridging protocol that connects a number of blockchains including Solana. renBTC is Bitcoin bridged from the Bitcoin network. Via Ren:"," "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"RenVM is network powered by decentralized virtual machines. This virtual machine is replicated over thousands of machines that work together to power it, contributing their network bandwidth, their computational power, and their storage capacity. These machines are known as Darknodes. Darknodes earn a share of the volume transacted through RenVM.")," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.renproject.io/darknodes/"},(0,o.kt)("em",{parentName:"a"},"Find out more here"))),(0,o.kt)("h2",{id:"bridging-assets"},"Bridging Assets"),(0,o.kt)("p",null,"This tutorial uses renBTC as an example. The process of bridging is simillar for other assets. First, head to ",(0,o.kt)("a",{parentName:"p",href:"https://bridge.renproject.io"},"Ren's bridge website"),". Then, select Solana as the destination blockchain"," "),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(4836).Z,width:"1144",height:"1088"})),(0,o.kt)("p",null,"Next, connect your Solana wallet where you would like to receive the funds. nd confirm fees, before viewing your gateway address."),(0,o.kt)("p",null,"Send BTC to the deposit address. Then, return to this site and claim your funds by sending a Solana transaction. Make sure to complete this within 24 hours of sending the funds. Now, renBTC will appear in your Solana wallet."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(9222).Z,width:"1008",height:"1420"})))}f.isMDXComponent=!0},9222:function(e,t,n){t.Z=n.p+"assets/images/deposit-3eff5f1ee5ba656e76954c297ab6ae88.png"},4836:function(e,t,n){t.Z=n.p+"assets/images/mint-07411b93e5d7f705082b508748e44f10.png"}}]);