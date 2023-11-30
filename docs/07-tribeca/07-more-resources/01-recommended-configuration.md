---
title: Recommended Configuration
---

The recommended configuration for a Locked Voter Tribeca DAO consists of a [Smart Wallet](../goki/smart-wallet) with three signers:

1. The **Governor**, which is the governance account owned by the `govern` program
2. The **Executive Council**, which is a group of trusted individuals specified in a Smart Wallet which sign via an [Owner Invoker](../goki/smart-wallet#subaccounts)
3. The **Emergency Multisig**, which is a group of well-known individuals that may override governance in the event of emergency

The three signers operate in a system of checks and balances: the governor creates proposals, the Executive Council executes them, and the Emergency Multisig acts as dispute resolution for when things are unclear.

The [Tribeca interface](https://tribeca.so) is currently built for DAOs that follow the recommended configuration; however, we plan on adding support for a more generic governance system in the future.

### Electorate

The recommended configuration has an `electorate` which is a voter escrow locker.

### Executive Council

The Executive Council is implemented as an m-of-n multisig; that is, m of n multisig members must vote in order to add or remove others from the council.

Executive Council members may execute proposals after they have been approved by governance and have surpassed the timelock.
