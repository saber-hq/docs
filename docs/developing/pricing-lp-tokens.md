---
title: Pricing LP Tokens
sidebar_position: 5
---

## Fair Price

The **fair price** of a Saber LP token is the value of the tokens backing an LP token. For example, if the USDT-USDC pool has 700 USDT and 300 USDC, there are 1,000 circulating LP tokens, and USDT = $1.01 while USDC = $1.00, the fair price is:

```
1.01 * 700 + 1.00 * 300 / 1,000 = $1.007
```

This is useful for calculating how much money one has; however, it is unreliable for calculating value as collateral as this value can easily be manipulated.

## Virtual Price

The **virtual price** of a Saber Stable Swap pool is the theoretical lower bound of the value of tokens if each token was worth 1.00 of the underlying asset. It is useful when understanding LP returns or liquidation value.

Virtual price may only increase, and it only increases when swap fees are accrued.

- Rust implementation: [`SaberSwap::calculate_virtual_price_of_pool_tokens`](https://docs.rs/stable-swap-math/1.7.0/stable_swap_math/price/struct.SaberSwap.html#method.calculate_virtual_price_of_pool_tokens)
- JavaScript implementation: [`calculateVirtualPrice`](https://github.com/saber-hq/saber-common/blob/master/packages/stableswap-sdk/src/calculator/amounts.ts#L15)

## Calculating liquidation value

To use a Saber LP token as collateral, you will need to fetch the prices
of both of the tokens in the pool and get the min of the two. Then, multiply the number of LP tokens by the _virtual price_.

This virtual price is resilient to manipulations of the LP token price.

Hence, `min_lp_price = min_value * virtual_price`.

### Additional Reading

- [Chainlink: Using Chainlink Oracles to Securely Utilize Curve LP Pools](https://blog.chain.link/using-chainlink-oracles-to-securely-utilize-curve-lp-pools/)
