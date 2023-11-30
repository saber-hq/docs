---
title: Quarry Use Case
---

The primary use case for Quarry is to provide **composable cross-protocol yield services**. The simplest example of this is illustrated in how Quarry allows protocols to directly provide additional liquidity mining rewards to LP stakers without having to go through an AMM. Traditionally AMMs require users to stake on their platform & only claim the additional rewards that the AMM **manually** adds to the farming page.

# Why is this valuable?

This means that instead of only being eligible for SBR rewards from staking your Saber LP on Saber - you stake your LP in Quarry and become eligible for all the Rewarder emissions being provided to that Quarry. In practice, these Rewarders are the protocols tied to the underlying tokens which you are providing liquidity for (**e.g. Saber USDC-USDH LP stakers receive Hubble rewards on top of SBR rewards**).

This aligns protocols and liquidity providers, but can be used across any staking situation. For more information on how to add a new Rewarder or launch a Quarry - skip to the last section of the docs.

# Other functions

Quarry also runs [Gauges](https://docs.tribeca.so/features/gauges) alongside Tribeca Protocol, which allow for the Rewarder's emissions to be determined by Tribeca Protocol votes. This means that emissions rates across a Rewarder's Quarries can be determined in a decentralized and permissionless manner.
