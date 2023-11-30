---
title: Overview
---

A **Governor** represents a collection of votes on proposals, and determines which proposals may be executed.

The Governor **does not** have custody of user-supplied assets: its only purpose is to create a standard interface for governance. This is an intentional design to allow the Governor to be composable with other systems. The electorate program which has custody of user-supplied assets, is the account which controls the Governor.

The Governor also **does not** have the authority to execute proposals: it instead queues them for execution by a Smart Wallet. The Smart Wallet's owners handle the execution, so governance cannot execute.

Governors are owned by the [Govern program](https://crates.io/crates/govern). Its program upgrade keys are currently managed by the Tribeca Alliance; however, it may be locked once Anchor is more stable. The Govern program is intended to be thought of in the same way as the [SPL Token program](https://spl.solana.com/token): it is a standard interface for voting and will eventually be frozen.

## Parameters

Governors are provisioned with _parameters_. The DAO may vote to modify these parameters in the future.

### Voting Delay

The number of seconds to wait before voting on a proposal may begin. This value is added to the `created_at` timestamp of a proposal to determine a proposal's earliest activation time.

### Voting Period

The duration of voting on a proposal, in seconds.

### Quorum Votes

The required minimum number of votes for a proposal to make the voting proceeding valid.

### Timelock Delay

Time delay in seconds from which a proposal's transaction can be executed after it has been queued. This parameter denotes the least amount of notice possible for a governance action.

## Electorate

The **Electorate** is an account which controls the Governor. It can perform two actions:

- **Activate proposals**, which moves proposals to a state where they can be voted on
- **Set votes**, which logs the number of votes a voter has made on a proposal, and which side of the vote that voter is on

Electorates may be user-defined programs, since they perform signed cross-program invocations on the Govern program. One example of an Electorate is a [Voting Escrow Locker](../electorate/voting-escrow).

## The Trinity

The **Tribeca Trinity** refers to the three components of the Tribeca governance system: the Governor, the [Goki Smart Wallet](../goki/smart-wallet), and Electorate. These are three separate programs that may be owned and governed by three separate parties.

The Trinity is one system existing in three substantial parts. This system distributes the risk of failure across several components, maximizing flexibility and permitting upgradeability while minimizing smart contract risk.

### Analogs to Compound

The three components of Tribeca are analogous to the three components of [Compound's governance system](https://compound.finance/docs/governance):

- Governor = Compound's Governor
- Smart Wallet = Compound's Timelock
- Electorate = Compound's COMP token
