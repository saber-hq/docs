---
title: Introduction
position: 1
---

## What is Quarry?

[Quarry Protocol](https://app.quarry.so) is a set of smart contracts that work together to create an open standard for launching liquidity mining & staking campaigns on Solana. The protocol currently offers the following primitives:

1. **Rewarders** are entities which own the underlying reward token (_e.g. SBR/ SLNA_). These are generally other protocol DAOs (_e.g. Saber/ Soluna_) which have a reward token they would like to emit across Quarries to incentivize staking LPs/ staking other tokens.
2. **Quarries** are smart contracts which require a specific token to be staked in them in order to claim the rewards allocated to the Quarry. A Quarry can accept any value that can be represented as a token, including LP token balances, governance stake (veTokens), and borrowing amount.
3. **Gauges** are an integration with [Tribeca Protocol](https://docs.tribeca.so/features/gauges) which allow DAO token lockers to vote on the future emission weight across a Rewarder's Quarries. The share of votes in each Quarry for that Rewarder corresponds to the share of emissions to that Quarry from the Rewarder.

Quarry Protocol is designed with composability in mind, enabling other protocols to easily build on top of it.

**Quarry v2** will include a Bribe market for other protocols to offer incentives in exchange for veToken holders delegating their governance - you can read more in our Roadmap.

Audited source code & a developer SDK are available [on our Github](https://github.com/QuarryProtocol/quarry).

## Disclaimer

All claims, content, designs, algorithms, estimates, roadmaps, specifications, and performance measurements described in this project are done with the author's best effort. It is up to the reader to check and validate their accuracy and truthfulness.
