---
title: Overview
---

The **Electorate** program creates an account which controls the Governor. It can perform two actions:

- **Activate proposals,** which moves proposals to a state where they can be voted on
- **Set votes,** which logs the number of votes a voter has made on a proposal, and which side of the vote that voter is on

Electorates may be user-defined programs, since they perform signed cross-program invocations on the Govern program. One example of an Electorate is a Voting Escrow Locker. Another Electorate may be a modified Voting Escrow Locker - such as one where tokens unlock linearly instead of all at once. The Electorate may also be modified to allow a custom voting solution, such as by granting governance power for owning/depositing NFTs.
