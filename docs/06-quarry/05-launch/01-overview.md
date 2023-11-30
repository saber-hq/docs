---
title: Overview
---

**Quarry is designed to be used as a tool that becomes more decentralized over time.** Since the launch of Quarry, every time a new protocol wanted to get listed as a rewarder our team had to **manually support onboarding.** This was a strain on our resources & so we created a onboarding flow that protocols can go through on the website to create their Rewarder & Quarries.

> Once teams are happy with their Quarries they must submit a PR to [our Github registry](https://github.com/QuarryProtocol/rewarder-list/blob/master/src/config/Rewarders.toml) with a config file containing the Rewarder information in order to show up on the official website.

This guide is aimed at **two types of users**:

- **User A:** Protocols that already have a reward token
- **User B:** New protocols that haven't launched their token yet

These users usually fall into **one of three categories**:

1. They are looking to provide rewards to **their own Quarries.**
2. They are looking to provide rewards to **other protocols' existing Quarries.**
3. Both.

> Note: Any SPL token can only have 1 **Primary Quarry** for users to stake into. For example, Saber UST-solUST LP can only be staked into the Saber UST-solUST Primary Quarry. Any other Rewarder can create a **Replica Quarry** for any Primary Quarry and provide their reward token to users staking into the Primary Quarry. There is no limit on how many Replica Quarries may exist on a single Primary Quarry.

These are the most important notes to keep in mind before launching a Quarry:

- In order to create any kind of Quarry (**doesn't matter what category you fall into**) you will need to launch a Rewarder. The Rewarder will automatically create a Mint Wrapper which you can set the metadata of in order to be recognizable. The Mint Wrapper is the actual token minted by the Quarry program and sent to stakers.

- **If you already have a reward token,** you should make the Mint Wrapper token be named: **Your Token Name IOU token** & have a recognizable icon. This also means you will need to fund the **Redeemer** with your underlying token & users will need to accept a second transaction to convert their IOU when claiming. You must be the mint authority of the underlying token. (????)

- **If you have not already launched a reward token, you should make the Mint Wrapper token the official reward token.** In this case **you do not need to fund the Redeemer**. This only applies to User B.
