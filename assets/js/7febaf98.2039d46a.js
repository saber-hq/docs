"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return g}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),l=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),d=l(a),g=r,b=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return a?n.createElement(b,o(o({ref:e},m),{},{components:a})):n.createElement(b,o({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},777:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return m},toc:function(){return c},default:function(){return g}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={title:"Saber Common (JavaScript)",sidebar_position:6},p="Saber Common",l={unversionedId:"developing/sdks/saber-common",id:"developing/sdks/saber-common",title:"Saber Common (JavaScript)",description:"GitHub: saber-hq/saber-common",source:"@site/docs/developing/sdks/saber-common.md",sourceDirName:"developing/sdks",slug:"/developing/sdks/saber-common",permalink:"/docs/developing/sdks/saber-common",editUrl:"https://github.com/saber-hq/docs/tree/master/docs/developing/sdks/saber-common.md",tags:[],version:"current",lastUpdatedBy:"Ian Macalinao",lastUpdatedAt:1647307421,formattedLastUpdatedAt:"3/15/2022",sidebarPosition:6,frontMatter:{title:"Saber Common (JavaScript)",sidebar_position:6},sidebar:"docs",previous:{title:"Pricing LP Tokens",permalink:"/docs/developing/pricing-lp-tokens"},next:{title:"Stable Swap (Rust)",permalink:"/docs/developing/sdks/stable-swap"}},m={},c=[{value:"Overview",id:"overview",level:2}],d={toc:c};function g(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"saber-common"},"Saber Common"),(0,i.kt)("p",null,"GitHub: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/saber-hq/saber-common"},(0,i.kt)("inlineCode",{parentName:"a"},"saber-hq/saber-common"))),(0,i.kt)("p",null,"This repository is a monorepo containing several Solana utilities and the Saber StableSwap SDK."),(0,i.kt)("p",null,"Automatically generated TypeScript documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://saber-hq.github.io/saber-common/"},"on GitHub pages"),"."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Package"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"@saberhq/anchor-contrib")),(0,i.kt)("td",{parentName:"tr",align:"left"},"TypeScript client for Anchor programs"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@saberhq/anchor-contrib"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@saberhq/anchor-contrib.svg",alt:"npm"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"@saberhq/chai-solana")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Chai test helpers"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@saberhq/chai-solana"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@saberhq/chai-solana.svg",alt:"npm"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"@saberhq/eslint-config")),(0,i.kt)("td",{parentName:"tr",align:"left"},"ESLint config for TypeScript projects"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@saberhq/eslint-config"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@saberhq/eslint-config.svg",alt:"npm"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"@saberhq/eslint-config-react")),(0,i.kt)("td",{parentName:"tr",align:"left"},"ESLint config for React projects"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@saberhq/eslint-config-react"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@saberhq/eslint-config-react.svg",alt:"npm"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"@saberhq/solana-contrib")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Solana TypeScript utilities"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@saberhq/solana-contrib"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@saberhq/solana-contrib.svg",alt:"npm"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"@saberhq/stableswap-sdk")),(0,i.kt)("td",{parentName:"tr",align:"left"},"StableSwap SDK"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@saberhq/stableswap-sdk"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@saberhq/stableswap-sdk.svg",alt:"npm"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"@saberhq/token-utils")),(0,i.kt)("td",{parentName:"tr",align:"left"},"SPL Token arithmetic and types"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@saberhq/token-utils"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@saberhq/token-utils.svg",alt:"npm"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"@saberhq/tsconfig")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Saber recommended TypeScript configurations"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@saberhq/tsconfig"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@saberhq/tsconfig.svg",alt:"npm"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"@saberhq/use-solana")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Solana React library"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@saberhq/use-solana"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@saberhq/use-solana.svg",alt:"npm"})))))))}g.isMDXComponent=!0}}]);