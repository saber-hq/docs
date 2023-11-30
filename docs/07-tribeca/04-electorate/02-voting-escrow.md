---
title: The Voting Escrow Locker
---

The Tribeca Voting Escrow is a governance system heavily inspired by the designs of [Compound](https://compound.finance/docs/governance) and [Curve](https://curve.readthedocs.io/dao-vecrv.html) governance.

It consists of two programs:

- govern, the core program of Tribeca
- locked_voter, the voter lockup mechanism

The vote escrow is designed to give power to users and protocols which are economically aligned with the governed protocol long-term. **It prevents large investors who have a small amount of conviction in the long-term value of a project from having a disproportionate amount of voting power compared to smaller investors with a higher degree of conviction in the project.**

The voting escrow system synergizes very well with Solana's fixed-size account model: proposal voting power is determined by the voting power of the escrow at the time of the proposal's execution, meaning that one does not need to snapshot in order to get the "historical balance" of the proposal.

Because the voting escrow locks up tokens, one cannot stake for a specific proposal only to withdraw right after the proposal is passed, unless they stake for the minimum time (which results in their vote being nearly worthless).

There is one disadvantage, however, which is that the fixed-size voting escrow system cannot look at historical balances. This means that one may stake extra governance tokens in order to have power over a proposal. However, we believe this is a non-issue since proposals are often discussed ahead of time before being sent to a DAO for voting.

### Voting Escrow Tokens

Participating in voting escrow governance requires that an account have a balance of vote-escrowed tokens (veTokens or veTOK). veTokens are not SPL tokens: they are non-transferrable, and their balances decay linearly with respect to time. Voting escrow token balances are stored in a per-user Escrow account, and the underlying governance tokens (which we will refer to as TOK) are stored in the locked_voter program.

The only way to obtain veTokens are by locking the underlying governance token. The maximum lock time defaults to five years, but is configurable by the DAO. One veToken locked for the maximum amount of time provides an initial balance of ten veTokens, which again is configurable.

A user’s veToken balance decays linearly as the remaining time until the token unlock decreases. For example, a balance of 4000 TOK locked for one year provides the same amount of veTOK as 2000 TOK locked for two years, or 1000 TOK locked for four years.
