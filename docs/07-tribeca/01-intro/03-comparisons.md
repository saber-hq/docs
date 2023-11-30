---
title: Comparisons to other governance systems
---

## Comparison to Compound-style balance snapshots

The Compound snapshot-based model is not easy to implement on Solana: it requires balance snapshots to ensure that users do not obtain tokens, vote, then subsequently withdraw tokens. However, Solana accounts have a fixed-size: they cannot store a variable length array of previous balances to figure out how many tokens a user had at a specific block.

There are ways around this, for example a paged account system; however, Solana storage (rent) is very expensive and this would make governance unusable for voters that may not have much SOL.

## Comparison with SPL Governance?

Tribeca differs from the [SPL Governance program](https://github.com/solana-labs/solana-program-library/tree/master/governance) in several ways:

- **Built with Anchor.** Tribeca is pluggable with other Anchor-based projects and tools, allowing for simpler composability.
- **Modularity.** Tribeca is built to be flexible and extensible, splitting out proposals/voting, transaction execution, and staking into three separate programs.
- **Hosted.** The Tribeca DAO program is meant to be deployed as one instance of a program, similar to the [SPL Token Program](https://spl.solana.com/token). It is an open standard that any other project can build upon, without requiring teams to deploy their own DAO or giving custody of user tokens to Tribeca.
- **Simplicity.** Tribeca does as little as possible, giving DAOs the freedom to choose how their governance system operates.

Below is a quote from the [Architecture Overview](https://github.com/solana-labs/solana-program-library/tree/master/governance) of the SPL Governance Readme:

> The program is modular and uses open/close architecture where individual parts of the program's behavior can be customized through external plugins.
> For example the default implementation of the program takes deposits of the governance tokens in exchange for voting power but it can be swapped with a custom program implementation which can implement any custom requirements like token locking, token escrows, NFT voting or multi token governance structures.
> The plugins are ordinary Solana programs and can be written using any supporting technology like Anchor framework for example.

Crucially, it is worth noting that in Tribeca there's no need for a DAO to have to deploy its own instance of the entire protocol, but rather the DAO can edit the Electorate program **in isolation** to implement custom requirements. The govern and smart wallet programs are both **standard programs** for governance processes that **do not change across DAOs.** The aim is to operate similarly to the SPL Token Program, which is a widely trusted frozen standard that others can build on top of. SPL Governance has a default program, but it is not modular: it either requires being forked or being constantly upgraded to fit custom use cases.

Modularity, however, is where Solana's largest benefit due to its stateless program architecture. Solana programs are meant to be deployed as singletons which serve as trusted code, rather than arbitrary code execution which causes most of the hacks on Ethereum.

The Electorate determines what is defined as a vote, what is the requirement to activate a proposal, and is the **only contract that can access user-owned assets.** The govern program is a static standard that handles votes and proposals, then sends passed proposals to the smart wallet. The smart wallet executes passed proposals, and can be programmed upon creation and through multisig actions. **Static Standards are thus the best way to trustlessly provide security for the DAO ecosystem.**

The recommended configuration of Tribeca has a **Locked voter escrow** as the default Electorate. It has parameters, such as min/max stake duration and voting escrow multiplier - which allow users to customize without having to deploy their own instance of the program. For more complex requirements- such as NFT-based voting or linear unlocks- DAO operators can use custom Electorate programs and still guarantee the safety of the static Tribeca Protocol instance it's built on.

There are also a number of cryptoeconomic exploits on the existing default implementation of SPL Governance - such as MEV vote manipulation/ flash loans, and just-in-time voting.

- **Just-in-time voting.** An entity may borrow large amounts of a governance token to vote a minute before a vote expires, then immediately pay them back. We have seen this type of voting in the Serum DAO, one of the earliest SPL Governance DAOs on Solana.
- **MEV vote manipulation/ flash loans.** Colluding validators could be paid by a flash loan protocol to enforce loans of a duration of one block, and due to Solana having a known slot leader order, it is possible for validators to ensure that there are no blocks mined between their slots. Projects such as Jito Labs are already in development to make this possible.

These attacks are not possible within the voting escrow system due to vote weight being a function of lockup duration.

Furthermore, Tribeca possesses a few additional features out of the box:

- **Gauges.** Integrations with [Quarry](https://app.quarry.so/) protocol allow users to vote on relative weights of emission rewards across mining pools.
- **Payments.** Integrations with [Venko](https://venko.app/) allow proposals to issue grants by triggering token streams that are highly configurable (conditional, token cliffs)
- **SAVE-tokens.** Instead of only having the option to issue normal governance tokens, Tribeca allows DAO operators to issue governance tokens that must be staked for a minimum duration. This reduces sell pressure from grants, and aligns SAVE recipients with the DAO.
- **Permalocking.** Tribeca also allows DAOs to issue permalocked tokens, which can never be unstaked since the Tribeca DAO program will automatically refresh the voter escrow to the max lockup period.
