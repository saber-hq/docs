---
title: The Goki Smart Wallet
---

## Overview

The Goki Smart Wallet is a programmable multisig wallet. The program is based on [Serum's multisig implementation](https://docs.projectserum.com/guides/multisig).

The Goki Team also maintains a hosted wallet management interface at [https://goki.so](https://goki.so).

## Signing

The Goki Smart Wallet is a _m-of-n multisig_: out of the _n_ owners of the wallet, _m_ of them must approve a transaction to have the wallet sign it. Owners may be defined upfront, and the owners of the wallet may elect to modify the signers in the future.

_Note: if the owner set is modified, all previous unexecuted transactions are invalidated._

The primary account **cannot** hold SOL, as its account holds data. You must use a derived subaccount (described in the next section) in order to transact SOL.

### Subaccounts

Goki wallets have two types of subaccounts: derived accounts and owner-invoker accounts.

**Derived accounts** are accounts which require the Smart Wallet transaction to be signed off by members of the multisig according to the same rules as signing from the primary account. Only one derived account may sign a transaction at a time.

**Owner-invoker** accounts are accounts which do not require approval from all owners of the multisig: any owner of the wallet may instantly invoke a transaction as any owner-invoker address. This is particularly useful for running cranks and other activities which you would want to avoid any account arbitrarily executing. For example, the recommended Tribeca DAO configuration uses this for executing passed proposals.

Each wallet may have up to `u64::MAX` (or `2^64`) subaccounts of each of these types: subaccounts are associated with an _index_, similar to a Ledger.
