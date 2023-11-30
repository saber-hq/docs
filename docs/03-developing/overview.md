---
sidebar_position: 1
---

# Overview

## Protocol

The Saber protocol consists of several programs:

- The [Stable Swap program](https://github.com/saber-hq/stable-swap), which handles creating LP tokens and swapping
- The [Saber Periphery](https://github.com/saber-hq/saber-periphery), which consists of:
  - The [Decimal Wrapper](./decimal-wrappers), which handles adjustments of decimals
  - The [Continuation Router](https://github.com/saber-hq/saber-periphery/tree/master/programs/continuation-router), which routes between different Saber pools and the [Add Decimal](./decimal-wrappers) program atomically in one transaction.
  - The [Lockup](https://github.com/saber-hq/saber-periphery/tree/master/programs/lockup), which controls the tokens released to the Saber team and pre-token investors
  - The [Mint Proxy](https://github.com/saber-hq/saber-periphery/tree/master/programs/mint-proxy), which handles the issuance of new Saber tokens
  - The [Redeemer](https://github.com/saber-hq/saber-periphery/tree/master/programs/redeemer), which allows burning an "IOU" token for a Saber token

## Liquidity Mining

Liquidity mining is handled by the [Quarry protocol](https://quarry.so).

## Governance

Governance is handled by [Tribeca](https://tribeca.so). Documentation on its programs may be found on the [Tribeca documentation site](https://docs.tribeca.so).
