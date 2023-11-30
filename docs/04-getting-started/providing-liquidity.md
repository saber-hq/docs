# Tutorial: Providing Liquidity

Pools are a way to provide _liquidity_, or the ability to trade, between tokens on Saber. They allow users to earn trading fees on tokens they're holding.

### Deposit

Let's say you want to supply to the USDC and USDT pool.

- Go the the **Pools** tab and select **Deposit**.
- Enter a quantity of USDT and USDC to trade from.
  - Because this is a stable pair, you aren't required to deposit both tokens. However, depending on how different the quantity between tokens is, you may have to pay a larger transaction fee. This is to incentivize close-to-equal distribution within the pool.

![](/assets/deposit.png)

- Select **Deposit**. This will display a breakdown of the transaction you're about to make:

  - **Deposit Currencies** shows the amount of each token you're depositing
  - **New pool share** is what your share of the pool will be after the transaction is made
  - **Fees** is determined by how different the quantity between tokens you're depositing is. This is to incentivize close-to-equal distribution within the pool.

    &#x20;

![](/assets/confirm-deposit.png)

- Select **Confirm Deposit**. Depending on what wallet you're using, you'll likely be prompted to confirm the transaction via your wallet's interface.
- The deposit is now complete! On the bottom left, you'll see a notification that contains a link to the transaction on Solana's explorer.
  - You'll notice that you also now have LP tokens in your wallet that represent your share of the pool.\

### Withdraw

Let's say you want to withdraw your liquidity from the USDC-USDT pool.

- Go the the **Pools** tab and select **Withdraw**.
- By default, you'll be given the option to withdraw using a single token in the pool. You can click on the currently selected token to a different token in the pool.
  - If you are withdrawing a large proportion of the pool, you may want to choose to withdraw a distribution of all tokens in the pool instead. To do this, you can enter **Settings** by clicking on the settings icon in the top right corner. Here, you can switch Withdrawal Currency to **All Currencies**.\

![](/assets/withdraw-all-settings.png)

- Enter how much of your liquidity in the pool that you want to withdraw by moving the percentage slider.

![](/assets/withdraw-slider.png)

- Once you've entered your desired amount, click the **Withdraw** button. This will show a review screen with the following breakdown:
  - **Withdrawal Currencies** shows the amount of each token you're withdrawing
  - **New pool share** is what your share of the pool will be after the transaction is made
  - **Fees** is determined by the quantity of token(s) you withdraw relative to the other token in the pool. This is to incentivize close-to-equal distribution within the pool.

![](/assets/withdraw-confirm.png)

- Select **Confirm Withdrawal**. Depending on what wallet you're using, you'll likely be prompted to confirm the transaction via your wallet's interface.
- The withdrawal is now complete! On the bottom left, you'll see a notification that contains a link to the transaction on Solana's explorer.
