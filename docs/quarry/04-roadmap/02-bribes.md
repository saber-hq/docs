---
title: Bribe Program Deep Dive
---

Gauges reflect governance power, but there is an indirect loop where users must purchase illiquid veTOK in order to participate in governance. What has been observed is that unless the user is a protocol - it is very likely that they will prefer to sell TOK rewards instead of locking TOK for more governance. **The lack of built-in incentives for veTOK locking means governance is largely ignored by normal users of protocols & instead the value is benefitting mostly other protocols.** We believe there is value that can be unlocked where protocols continue to gain value from the governance system - but so will passive DAO members.

> **Bribes** allow governors to extract the value from their illiquid veTOK by renting their vote to protocols whose TVL depends on how votes (**and therefore future rewards**) are distributed across different Quarries via Gauges.

Some protocols are engineering systems to directly pay platform fees to veTOK lockers - **and this will be preserved with the integration of Bribes.** Bribes will only allow users to gain **additional** yield, and allows protocols to rent discounted governance power in order to indirectly purchase future liquidity.

---

## Background

In early 2021, the Quarry Team released Gauges: allocation of liquidity mining rewards determined by veToken (veTOK) holders. This was launched very soon after Tribeca, which created the initial concept of vote escrows on Solana.

### veTokens: DAO membership with long-term incentives

To recap: a vote-escrowed token, or veToken, is a non-transferrable token which may be obtained by locking up a “daoToken” for a user-specified duration of time. This mechanism ensures that long term believers in the DAO have the most control over it. The maximum duration is often capped by the DAO to prevent too much of an imbalance between short term and long term holders.

In Tribeca, veToken power is linear with respect to time and balance:

power = duration x balance x multiplier

This means that as a user approaches their lockup period, they also lose voting power: the optionality of liquidity comes at a power discount. This is key to ensuring that DAO members are in things for the long run.

### The Problem: Lack of User Lock Incentives

Before the Saber and Sunny DAOs used Gauge, Saber (and Sunny) liquidity mining rewards were determined arbitrarily by team members. Gauges were the first use case of veTokens outside of voting on proposals.

Gauges allow veToken holders to vote weekly on the rewards distribution of various pools on a veDAO. However, there are only two types users who will buy veTokens for the purpose of voting on gauges:

- **Protocols.** Gauges allow a protocol to boost their own yields. There are several examples of this happening today, e.g. Terra investing heavily into Sunny/Saber or UXD performing a treasury swap with Saber.
- **Protocol affiliates.** If a veToken holder is invested in the success of another protocol, e.g. if they are a founder or an investor of that other protocol, then they may want to boost their own yields. An example of this is the Solend whale boosting the cToken pools.
- **Large liquidity providers.** If a liquidity provider has a lot of capital in a particular pool, they may want to increase the yields of that pool.

Note that neither of these users are the average user. Protocol affiliates may be an individual user; however, the user’s vote does not matter nearly as much as a whale’s does.

Gauges, then, are currently a tool built for whales. The question then is: how do we allow the common user to benefit from this governance power?

### The Solution: Direct Payment to veToken holders

Instead of having to work directly with large veToken holders as a protocol or large liquidity provider, what if veToken holders could be paid en masse with tokens?

This is what bribes are: a way to distribute tokens proportionally to those who voted for a specific pool. Bribes are a way of ensuring that all veToken holders can benefit from gauges, rather than just a small subset of whales.

This is good for both protocols and veToken holders:

- **Protocols** may now spend much less money in order to get the same TVL, since they can vote up their pools indirectly by paying veToken holders.
- **veToken holders** can now earn yield just by holding veTokens, as long as they are voting for a pool with good rewards. This creates a sort of staking APY on veTokens, making veTokens more attractive to hold as a result.

One possible downside to this mechanism is that large veToken holders will now have less leverage in the DAO: founders and VCs with large veToken balances will not be as important in getting high pool rewards. However, this becomes much less relevant when this translates into increased token value.

---

## How To Use The Bribe Market

For users delegating their votes, there are two options:

1.  **Passive Delegation:** User doesn't care who uses their governance power, they just want to delegate their veTokens & earn a mix of rewards optimized by Quarry's Bribe Program
2.  **Active Delegation:** User prefers to select a specific **Bribe Pool** & earn specific tokens. Unfortunately once the pools end their rewards - users will have to manually delegate their tokens again.

### For Passive Delegators

**Step 1:** On the **Bribe Market browsing page** - select the Bribe Market you would like to passively delegate to (for example - SUNNY).

**Step 2:** Input the amount of veSUNNY you would like to Passively Delegate in the module at the top of the **Sunny Bribe Market's page** & sign the transaction.

**Step 3:** Claim rewards at the end of each epoch.

### For Active Delegators

**Step 1:** A new button will appear on the [Quarry.so home page](https://app.quarry.so) which will allow users to browse the **Bribe Markets**. Each Bribe Market contains **Bribe Pools**. The UX of the browsing pages will be extremely similar to browsing Rewarders/ Quarry Pools in v1.

> Example Market in browse page: Sunny

- **SUNNY**
- **Total Rewards Available:** $150,000
- **Passive Delegation APY:** 17%
- **veSUNNY Delegated:** 200,000,000 veSUNNY
- **Pool Count:** 3

**Step 2:** Click on the desired Bribe Market you wish to delegate to. Note: You will need that Market's DAO token to be locked in Tribeca first.

> Following the Sunny example, the following would be displayed at the top of the Market's page:

- **Bribe Market:** Sunny
- **% veSUNNY supply delegated:** 50%
- **Total Rewards:** $100,000
- **Passive Delegation APY:** 17%
- **Passive Delegation/unDelegation/Claim module**

On a Bribe Market's page, below the Passive Delegation module, there are cards displaying the **Bribe Pools**, similarly to how Quarries are displayed inside a Rewarder's page.

> An example Bribe Pool would be:

- **Soluna**
- **Total Reward:** 50,000 solUST (~$50,000)
- **Gauge:** Sunny Saber solUST-UST LP
- **Actively Delegated Votes:** 20,000,000 veSUNNY
- **Your Delegated Votes:** 0 veSUNNY
- **Time Remaining:** 10 Days, 5 Hours, 3 Minutes
- **APY:** 40.58%

**Step 3:** Click on the Bribe Pool which you would like to delegate veToken towards.

> The Bribe Pool's page would show the following:

- **Market:** Sunny
- **Pool:** Soluna
- **APY:** 40.58%
- **Your Delegated Tokens:** 0 veSUNNY
- **Available Tokens:** 10,000 veSUNNY
- **Your Rewards Rate:** --%
- **A module to Delegate/unDelegate/Claim:**

**Step 4:** Use the module on the Bribe Pool's page to select the amount of veTokens to delegate to this pool & sign the transaction.

**Step 5:** If you have more veTokens for this Bribe Market, delegate the rest in other pools.

**Step 6:** Claim your rewards at the end of every epoch.

### For Bribers (Protocols)

**Step 1:** On the **Bribe Market** browsing page, there will be a button at the top to **Create a Bribe**. This will display a page which prompts the user to select a Bribe Market.

**Step 2:** Select your desired Bribe Market.

> On the following page, you will see:

- The table of gauges & their votes for next epoch.
- Total veTOK delegated in the current epoch.
- Total Passively Delegated veTOK
- Total value of Bribes currently offered
- Table with:
  - Col 1: **Current Briber**
  - Col 2: **Gauge to boost**
  - Col 3: **Bribe amount (in tokens & USD)**
  - Col 4: **Duration of reward**
  - Col 5: **Passive Delegator Share (%)**
  - Col 6: **Active Delegators**
  - Col 7: **Total votes rented**
- Module to fund a Bribe/ input duration of rewards/ Create Bribe.

**Step 3:** Select the gauge you want to bribe, fund the bribe, & input a duration for rewards.

**Step 4:** Sign the transaction to create a new Bribe Pool. Gauge votes will automatically update according to the new % delegators who vote for your pool.

---

## Why will protocols offer Bribe rewards?

There are two main reasons for a protocol to offer a Bribe:

1. Attract new holders to their token/protocol from a specific DAO
2. Purchase discounted future liquidity to increase TVL.
3. Rent governance votes on specific proposals that are highly important to a protocol.
   The first point is self explanatory, but the second is best explained with an example.
