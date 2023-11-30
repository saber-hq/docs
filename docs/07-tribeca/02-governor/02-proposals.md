---
title: Proposals
---

A Proposal allows members of the DAO to interact with the blockchain. E.g., A proposal can trigger a variety of Transactions on the blockchain which can do any of the following:

- Sign memos, attesting a message on the blockchain forever;
- Create and manage payment streams for grants;
- Issue or mint new tokens;
- Change emissions rate for liquidity mining;
- Edit parameters to governance program.

Proposals may be voted on by locked voters. Proposals which pass the DAO vote are queued and executed in a Goki Smart Wallet. In other words, votes are defined by the electorate, but managed by the governor.

The proposal's activator must hold more veTOK than the current proposal threshold, which is also called the activation vote #`governor.params.proposal_activation_min_votes`. The proposal's instructions must also fit within a single transaction.

## Lifecycle

### Draft

Anyone can create a proposal on Tribeca. When a governance proposal is created, it is considered a "draft" and enters a review period, after which voting weights are recorded and voting begins.

### Active

Each DAO has requirements for who can activate proposals; a common way is to require the user to have a minimum amount of tokens. An activated proposal is one that is surfaced to the community to put up for voting.

### Outcome: Succeeded, Defeated

Voting lasts for a configurable period. If a majority, and at least quorum votes are cast for the proposal, it is queued in a Smart Wallet for execution by the other signers of the multisig.

### Executed

Once the transaction is queued in a Smart Wallet, the other signers on the Smart Wallet may execute the transaction. We suggest the following structure for the Smart Wallet:

- 2-of-3
- Signers:
  - Tribeca Governor
  - 1-of-n Smart Wallet Owner Invoker of trusted parties that will execute a proposal without frontrunning. This can be composed of the "core team" of the protocol.
  - 4-of-7 Emergency DAO Smart Wallet that can quickly execute a proposal in case of emergency. This should be composed of trusted community members that will not collude.
