---
title: Synthetify Assets
description: xUSD, xSOL, xBTC, xETH
---

![](/assets/assets/banner-synthetify.png)

## About

Synthetify is a synthetic asset protocol on Solana that enables low slippage trading. Synthetic assets track the market price of assets via oracles, which are data feeds that connect Solana and other blockchains with outside data, often price data. Synthetify uses the [Pyth](https://pyth.network) oracle network. xUSD is an exception to this; it is algorithmically pegged to $1.00 by Synthetify.

## How To Create Synthetic Assets

To create Synthetify assets, the first step is to deposit collateral on Synthetify. In this example, we will deposit USDC, but many SPL tokens are accepted as collateral.

![](/assets/assets/synthetify-deposit.png)

Next, we use this collateral to mint xUSD on the mint page. It is important to note that xUSD is being taken on as debt (risks outlined in [Risks](#risks)).

![](/assets/assets/synthetify-mint.png)

Then, we can head to Synthetify's swap page and trade xUSD for any synthetic asset.

![](/assets/assets/synthetify-swap.png)

## Risks

If the value of synthetic assets borrowed exceeds the value of deposited collateral, your collateral may be liquidated. Uniquely, the borrow values are determined as a fixed percentage of the total debt. Thus, if your synthetic portfolio underperforms the mean synthetic portfolio on the platform, your debt will increase, and vice versa. For more details, see the [Synthetify Whitepaper](https://synthetify.io/resources/synthetify-whitepaper.pdf)
