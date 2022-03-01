# Tutorial: Swapping Tokens

Saber allows you to swap between a stable pair of assets (e.g. USDC and USDT) with very low slippage and fees.

Let's say you have USDT and you want to swap it for USDC.

- On the swapping interface, select the tokens you want to exchange from (USDT) and to (USDC).
- Enter a quantity of USDT to swap from.&#x20;
  - You can click on a token balance to populate the max amount you can swap.
  - Clicking the arrow button in the center will switch between what token you're swapping from and to.

![](/assets/saber-swap.png)

- Select **Review**. This will display a breakdown of the transaction you're about to make:
  - **Swap from** is the quantity of the token you currently hold that you want to exchange
  - **Minimum Received** is the minimum quantity of the token you'll receive. If the received amount turns out to be lower after you execute the transaction, the transaction will fail.
  - **Exchange Rate** is the conversion rate between the two tokens you're swapping.
  - **Price Impact** is the slippage percentage of the swap. The lower the price impact, the better value you're getting on your swap.
  - **Liquidity Provider Fee** is the transaction fee for swaps. This fee is split evenly between rewards to incentivize liquidity providers and reserves for the protocol.

![](/assets/swap-confirm.png)

- Select **Confirm Swap**. Depending on what wallet you're using, you'll likely be prompted to confirm the transaction via your wallet's interface.
- The swap is now complete! On the bottom left, you'll see a notification that contains a link to the transaction on Solana's explorer.
