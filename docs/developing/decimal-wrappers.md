---
sidebar_position: 3
---

# Decimal Wrapped Tokens

A _decimal-wrapped token_ is a token which has been modified to add more decimal places. It exists because the Saber stable swap invariant formula does not adjust for the number of decimal places that the underlying token has.

For example, USDC has 6 decimal places but wDAI has 9 decimal places. Without the decimal wrapper, the stable swap invariant would assume that 1,000 USDC = 1 DAI, which is obviously incorrect.

The lack of decimal adjustment was intentional to ship fast with as few edge cases as possible; however, it can cause confusion for developers attempting to integrate tokens. Furthermore, it is possible to acquire decimal-wrapped tokens in one's wallet if the Saber UI was not used to withdraw or swap tokens.

## Terminology

The **underlying** token is the token that is staked into the decimal wrapper. The **wrapper** token is the decimal wrapped token.

Each wrapper token is suffixed with the number of decimal places it has. For example, USDC-9 is the wrapper token of USDC with 9 decimals.

## Interacting with the Decimal Wrapper

There are four key [instructions for interacting with decimal-wrapped tokens](https://anchor.so/programs/DecZY86MU5Gj7kppfUCEmd4LbXXuyZH1yHaP2NTqdiZB):

- `InitializeWrapper`: if your token does not yet have a decimal wrapper, you must create a decimal wrapper using this instruction. Make sure to select a mint that is user friendly, as it might end up in your users' wallets!
- `deposit`: Deposits underlying tokens for wrapper tokens.
- `withdraw`: Burns wrapper tokens to get the underlying tokens.
- `withdrawAll`: Burns all wrapper tokens to get the underlying tokens. This is particularly useful for multi-instruction swaps.

One should use the [Saber Periphery](https://github.com/saber-hq/saber-periphery) SDK in order to interact with this program.

TODO: add code examples of the `saber-periphery`.

## Code

The code for the [Add Decimals program can be found on GitHub](https://github.com/saber-hq/saber-periphery/tree/master/programs/add-decimals).
