"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[864],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return b}});var r=a(7294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,s=function(t,e){if(null==t)return{};var a,r,s={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var i=r.createContext({}),o=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},c=function(t){var e=o(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,s=t.mdxType,n=t.originalType,i=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=o(a),b=s,h=d["".concat(i,".").concat(b)]||d[b]||m[b]||n;return a?r.createElement(h,p(p({ref:e},c),{},{components:a})):r.createElement(h,p({ref:e},c))}));function b(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var n=a.length,p=new Array(n);p[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:s,p[1]=l;for(var o=2;o<n;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9040:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return o},assets:function(){return c},toc:function(){return m},default:function(){return b}});var r=a(7462),s=a(3366),n=(a(7294),a(3905)),p=["components"],l={title:"Stable Swap (Rust)",sidebar_position:7},i="Saber Stable Swap SDK",o={unversionedId:"developing/sdks/stable-swap",id:"developing/sdks/stable-swap",title:"Stable Swap (Rust)",description:"License",source:"@site/docs/developing/sdks/stable-swap.md",sourceDirName:"developing/sdks",slug:"/developing/sdks/stable-swap",permalink:"/docs/developing/sdks/stable-swap",editUrl:"https://github.com/saber-hq/docs/tree/master/docs/developing/sdks/stable-swap.md",tags:[],version:"current",lastUpdatedBy:"Ian Macalinao",lastUpdatedAt:1646170692,formattedLastUpdatedAt:"3/1/2022",sidebarPosition:7,frontMatter:{title:"Stable Swap (Rust)",sidebar_position:7},sidebar:"docs",previous:{title:"Saber Common (JavaScript)",permalink:"/docs/developing/sdks/saber-common"},next:{title:"Integrating with Saber as a Bridge",permalink:"/docs/integrations/bridge"}},c={},m=[{value:"Rust Crates",id:"rust-crates",level:2},{value:"JavaScript/Web3.js",id:"javascriptweb3js",level:2},{value:"Audit",id:"audit",level:2},{value:"Developing",id:"developing",level:2},{value:"Tests",id:"tests",level:3},{value:"Archive",id:"archive",level:2},{value:"License",id:"license",level:2}],d={toc:m};function b(t){var e=t.components,a=(0,s.Z)(t,p);return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"saber-stable-swap-sdk"},"Saber Stable Swap SDK"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/saber-hq/stable-swap/blob/master/LICENSE"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/l/stable-swap-anchor",alt:"License"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/saber-hq/stable-swap/actions/workflows/program.yml?query=branch%3Amaster"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/workflow/status/saber-hq/stable-swap/Program/master",alt:"Build Status"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/saber-hq/stable-swap/graphs/contributors"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/contributors/saber-hq/stable-swap",alt:"Contributors"}))),(0,n.kt)("p",null,"GitHub: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/saber-hq/stable-swap"},(0,n.kt)("inlineCode",{parentName:"a"},"saber-hq/stable-swap"))),(0,n.kt)("p",null,"The Saber Stable Swap repository holds the Rust code for Saber, in addition to several libraries."),(0,n.kt)("h2",{id:"rust-crates"},"Rust Crates"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Package"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Docs"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"stable-swap")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Saber StableSwap program."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://crates.io/crates/stable-swap"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stable-swap",alt:"crates"}))),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.rs/stable-swap"},(0,n.kt)("img",{parentName:"a",src:"https://docs.rs/stable-swap/badge.svg",alt:"Docs.rs"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"stable-swap-anchor")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Anchor bindings for the StableSwap Rust client."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://crates.io/crates/stable-swap-anchor"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stable-swap-anchor",alt:"Crates.io"}))),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.rs/stable-swap-anchor"},(0,n.kt)("img",{parentName:"a",src:"https://docs.rs/stable-swap-anchor/badge.svg",alt:"Docs.rs"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"stable-swap-client")),(0,n.kt)("td",{parentName:"tr",align:"left"},"StableSwap Rust client."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://crates.io/crates/stable-swap-client"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stable-swap-client",alt:"crates"}))),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.rs/stable-swap-client"},(0,n.kt)("img",{parentName:"a",src:"https://docs.rs/stable-swap-client/badge.svg",alt:"Docs.rs"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"stable-swap-fuzz")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fuzz tests for the Saber StableSwap program."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://crates.io/crates/stable-swap-fuzz"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stable-swap-fuzz",alt:"crates"}))),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.rs/stable-swap-fuzz"},(0,n.kt)("img",{parentName:"a",src:"https://docs.rs/stable-swap-fuzz/badge.svg",alt:"Docs.rs"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"stable-swap-math")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Calculations for the StableSwap invariant"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://crates.io/crates/stable-swap-math"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stable-swap-math",alt:"crates"}))),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.rs/stable-swap-math"},(0,n.kt)("img",{parentName:"a",src:"https://docs.rs/stable-swap-math/badge.svg",alt:"Docs.rs"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"stable-swap-sim")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Simulations of the StableSwap invariant compared to Curve's reference implementation"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://crates.io/crates/stable-swap-sim"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stable-swap-sim",alt:"crates"}))),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.rs/stable-swap-sim"},(0,n.kt)("img",{parentName:"a",src:"https://docs.rs/stable-swap-sim/badge.svg",alt:"Docs.rs"})))))),(0,n.kt)("h2",{id:"javascriptweb3js"},"JavaScript/Web3.js"),(0,n.kt)("p",null,"To use StableSwap with your frontend or Node.js project, use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/saber-hq/saber-common/tree/master/packages/stableswap-sdk"},"the JavaScript SDK.")),(0,n.kt)("h2",{id:"audit"},"Audit"),(0,n.kt)("p",null,"Saber's ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/saber-hq/stable-swap/tree/master/stable-swap-program"},"stable-swap-program")," has been audited by ",(0,n.kt)("a",{parentName:"p",href:"https://www.bramah.systems/"},"Bramah Systems"),". View the audit report ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/saber-hq/stable-swap/blob/master/audit/bramah-systems.pdf"},"here"),"."),(0,n.kt)("h2",{id:"developing"},"Developing"),(0,n.kt)("h3",{id:"tests"},"Tests"),(0,n.kt)("p",null,"To run the tests, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./stable-swap-program/do.sh e2e-test\n")),(0,n.kt)("h2",{id:"archive"},"Archive"),(0,n.kt)("p",null,"The original Saber StableSwap program can be found on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/saber-hq/stable-swap/tree/archive"},"archive branch"),"."),(0,n.kt)("h2",{id:"license"},"License"),(0,n.kt)("p",null,"Saber StableSwap is licensed under the Apache License, Version 2.0."))}b.isMDXComponent=!0}}]);