---
title: Gauges
---

## Overview

Quarry Gauges allow voting escrows to allocate the rewards of a set of liquidity mining pools ([Quarries](https://quarry.so)).

Each voter specifies a _weight_ to allocate to each pool. A user's voting power is converted 1:1 to Quarry rewards share, based on the weights that the user provided.

For example: if a user has 10,000 veTOK and allocates 50% weight to farming USDC-USDT LP and 50% to USDC-CASH LP, the resulting quarry weights would be 5,000 to USDC-USDT LP and 5,000 to USDC-CASH LP.

The source code for the gauge system [is available on GitHub here.](https://github.com/QuarryProtocol/gauge)

### Epochs

Voting for gauge weights occurs in _epochs_. An epoch is a period of time in which users may vote for the proportions of rewards allocated to each liquidity mining pool. At the end of each epoch, the next epoch may be triggered by anyone, setting the reward weights of each pool to whatever was voted for.

By default, epochs occur once per week.

## Mechanics

### Allocating Weights

To allocate your escrow weights to various pools, call the following instructions:

- `create_gauge_voter` -- creates the **GaugeVoter**, which holds the total amount of voting power that a voter has
- For each gauge, `create_gauge_vote` -- creates a **GaugeVote**, which stores the weight a voter has allocated to each gauge.

Then, for each gauge, call `gauge_set_vote` to set the weights of each gauge.

### Committing Votes

Once you have allocated weights, you must commit them for each epoch. To do so, call:

- `prepare_epoch_gauge_voter` -- locks in votes for the current epoch to commit to the gauge.
- For each gauge, `gauge_commit_vote` -- commits the votes to the gauge.

### Undoing Votes

If you have committed the votes, you may retract them at any time before the epoch expires. To do so, call:

- For each gauge, `gauge_revert_vote` -- reverts the committed votes from the gauge.
- `reset_epoch_gauge_voter` -- resets the epoch gauge voter to use the latest vote weights and vote power.
