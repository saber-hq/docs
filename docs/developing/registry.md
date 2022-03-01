---
sidebar_position: 2
---

# The Saber Registry

The [Saber Registry](https://registry.saber.so/) is an automatically generated JSON list of all Saber pools. It contains metadata not present on-chain which may be useful if displaying pool information.

## Pools List

The pools list is available at [https://registry.saber.so/data/pools-info.mainnet.json](https://registry.saber.so/data/pools-info.mainnet.json).

The list contains the following info for each pool:

- `id`: the unique user-friendly ID of the pool, used in the URL
- `tokens`: the tokens backing the pool
- `tokenIcons`: the tokens backing the pool in the order that they should be rendered. E.g. USDC-USDT should be rendered as USDT-USDC.
- `underlyingIcons`: the `tokenIcons`, unwrapped for their underlying assets. This is generally only different than `tokenIcons` for [decimal wrapped tokens](./decimal-wrappers).
- `currency`: the currency category of the pool, all uppercase. A pool generally only trades against other pools with the same currency.
- `lpToken`: token information of the LP token.
- `plotKey`: Deprecated. This is the key of the Plot in the old Saber farming system.
- `swap`: The swap config and state.
- `quarry`: Key of the [Quarry](https://quarry.so) associated with the official Saber liquidity mining program.
