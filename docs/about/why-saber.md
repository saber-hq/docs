---
sidebar_position: 3
---

# Why Saber?

It is a misconception that Saber is competing with general AMMs and orderbooks. They are not the same and go after different markets.

Saber is meant to be a place for low risk staking on large transaction volume. It encourages high volume by having the best pricing for swaps (encouraging arbitrage bots to trade), and it is extremely composable with other DeFi applications on Solana, reducing the opportunity cost for the otherwise low yields.

## Zero Impermanent Loss

Saber's StableSwap algorithm makes the assumption that assets in a pair will converge to the same price. As such, it does not have impermanent loss in the way that constant product AMMs do.

Note that there is still a risk of prices diverging from equilibrium: if one asset in the pool "de-pegs" (that is, drops or skyrockets in price permanently), a liquidity provider will experience impermanent loss. One should take care to research the underlying assets they are investing in.

## Concentrated Liquidity

There is an age-old debate of whether or not automated market makers are more efficient in providing liquidity than orderbooks.

There are two properties to measure the efficiency of liquidity: spread and depth. Spread refers to the difference between the bid (selling) price and the ask (buying) price, and depth refers to the total amount of volume that can be moved for a particular percentage of price decrease.

Constant product market makers like Uniswap V2 are very inefficient in liquidity provision, as they spread liquidity out over a large curve. For example: if $1,000,000 is allocated to the USDT-USDC pair evently, swapping 10,000 USDT to USDC results in a new price of $1.04 USDC.

Saber is different. The algorithm knows that USDT and USDC should be the same price, so you can expect a virtually zero change in price. As a result, liquidity providers are able to charge higher fees and more profit.

## Zero Opportunity Cost

Unlike other concentrated liquidity AMM positions, Saber LP tokens themselves are able to be used in all sorts of places ranging from lending markets (see [Port](https://port.finance)) to collateralizing other stablecoins (see [Parrot](https://parrot.fi)). This allows for Saber to be much more composable than orderbooks, as orderbook positions cannot directly be used as assets within other protocols. This greatly reduces (and in the long run, eliminates) the opportunity cost of deploying capital, providing a passive "risk-free" rate of return to the decentralized financial ecosystem.

This means that the goal of Saber as a protocol is _not_ necessarily to maximize fees per LP token-- it is just the closest thing to a risk free rate of return on Solana, relative to an LP's underlying assets. A more important goal would be to maximize the protocol's revenue, meaning that total volume is more important than volume/TVL ratio.
