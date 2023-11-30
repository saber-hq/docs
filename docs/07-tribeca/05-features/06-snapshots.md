---
title: Snapshots
---

**GitHub:** [saber-hq/snapshots](https://github.com/saber-hq/snapshots)

**snapshots** is an extension of Tribeca's vote escrow system which allows computing future and historical vote escrow balances.

It was originally built to support a fee distribution mechanism, but it is simple enough to be used for any use case requiring balance history.

## Motivation

There are several instances in which one may want to use an instantaneous snapshot of all vote escrow balances, for example:

- **Fee distribution.** One may want to send protocol revenue to veToken holders.
- **Airdrops.** One may want to send tokens to holders of a veToken.

## Mechanism

veToken balances are recorded for every `period`. A period is recorded for every 3 days.

There are two accounts that are used to compute historical balances:

- [LockerHistory], which stores the total number of veTokens for each period, and
- [EscrowHistory], which stores the veTokens in each Escrow per period.

Any time someone refreshes and/or modifies their vote escrow, they should refresh their [EscrowHistory] accounts.

## Program Addresses

- **[snapshots]:** [StakeSSzfxn391k3LvdKbZP5WVwWd6AsY1DNiXHjQfK](https://anchor.so/programs/StakeSSzfxn391k3LvdKbZP5WVwWd6AsY1DNiXHjQfK)
