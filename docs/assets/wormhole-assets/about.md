---
title: About Wormhole
description: All Saber assets with "w" prefixes (e.g. wLUNa, weDAI, etc.)
sidebar_position: 1
---

## About

[Wormhole](https://wormholebridge.com/#/transfer) is a cross chain token bridge that enables many saber pools. Currently, Wormhole allows bridging between a variety of blockchains including Ethereum, Solana, Binance Smart Chain, Terra, and Polygon. For details on how Wormhole works and its security, check out this[ excellent article ](https://medium.com/terra-money/terra-goes-live-on-wormhole-v2-12df49d446d2)by "The Intern".

_At a high level, Wormhole deploys a simple cross-chain attestation model that relies on a group of cross-chain oracles called “Guardians” that operate as a set of node operators with venerated validation track records and strong incentive alignment with the long-term interest of the root chain — Solana._

## How To Send Tokens to Solana

This example is for migrating tokens from the Ethereum blockchain, but the same steps can be applied for any source blockchain. First, navigate to [Wormhole's website](https://wormholebridge.com/#/transfer).

Select your source chain and Solana as the destination, connect your Ethereum wallet, and select which asset you would like to transfer.

In this Case we'll use ETH as an example. Next, connect your Solana wallet. Make sure you have some SOL in your Solana wallet to claim the tokens.

Create the associated token account, and send tokens. Make sure to approve the transactions in your Solana and Ethereum wallets.

Stay on the page and wait for 15 confirmations on the Ethereum network. Then, make sure to redeem your tokens on Solana, confirming a few transactions. Tokens will arrive in your wallet.

## Wormhole Token Abbreviations

The w indicates that the token is wrapped from Wormhole. The optional second letter in the token indicates token origin. So, for example weDAI indicates Wormhole wrapped DAI bridged from Ethereum, while wpDAI indicates Wormhole wrapped DAI bridged from Polygon. A "V1" suffix indicates that the token is a legacy asset from Wormhole V1 and should be [migrated](./#token-migration) to V2

## Token Migration

In order to migrate Wormhole tokens to V2, head to [Wormhole's website](https://wormholebridge.com) and you should be prompted for a migration pool. If this does not appear, the pool may be out of liquidity. In this case, you will need to send tokens back to their original blockchain, before bridging back to Solana. This will give you V2 tokens.

## Verifying Mints

Wormhole has a useful tool to verify the wormhole [token addresses](https://wormholebridge.com/#/token-origin-verifier), where you can copy and paste an address to verify its origin.
