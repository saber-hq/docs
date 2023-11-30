---
title: Programs
---

## Deployment

At the time of writing, all programs are currently owned by the [Tribeca DAO Smart Wallet.](https://goki.so/#/wallets/8hhpP2LkodJoyM28H39G6tt5w9YhbScdjR1c4aarcBX3/inbox)

There is currently a plan to migrate the program ownership to the Saber DAO.

The Smart Wallet currently has no timelock: we plan on adding this in once more serious users start launching their DAOs on the platform and after [Goki](https://goki.so) exits private beta.

All programs are deployed on `mainnet-beta` and `devnet` and are verified on [the Anchor verified build system](https://anchor.projectserum.com/).

## Tribeca

### `govern`

[![Crates.io](https://img.shields.io/crates/v/govern)](https://crates.io/crates/govern)
[![Docs.rs](https://docs.rs/govern/badge.svg)](https://docs.rs/govern)

Address: [Govz1VyoyLD5BL6CSCxUJLVLsQHRwjfFj1prNsdNg5Jw](https://explorer.solana.com/address/Govz1VyoyLD5BL6CSCxUJLVLsQHRwjfFj1prNsdNg5Jw)

The `govern` program handles proposals, voting, and queueing of transactions into a [Smart Wallet](../goki/smart-wallet).

### `locked-voter`

[![Crates.io](https://img.shields.io/crates/v/locked-voter)](https://crates.io/crates/locked-voter)
[![Docs.rs](https://docs.rs/locked-voter/badge.svg)](https://docs.rs/locked-voter)

Address: [LocktDzaV1W2Bm9DeZeiyz4J9zs4fRqNiYqQyracRXw](https://explorer.solana.com/address/LocktDzaV1W2Bm9DeZeiyz4J9zs4fRqNiYqQyracRXw)

The `locked-voter` program locks up governance tokens for a user-provided duration in exchange for increased voting power.

## Goki

### `smart-wallet`

[![Crates.io](https://img.shields.io/crates/v/smart-wallet)](https://crates.io/crates/smart-wallet) [![Docs.rs](https://docs.rs/smart-wallet/badge.svg)](https://docs.rs/smart-wallet)

Address: [GokivDYuQXPZCWRkwMhdH2h91KpDQXBEmpgBgs55bnpH](https://explorer.solana.com/address/GokivDYuQXPZCWRkwMhdH2h91KpDQXBEmpgBgs55bnpH)

The `smart-wallet` program is a multisig Solana wallet with Timelock capabilities.
