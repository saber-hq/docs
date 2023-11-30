# How to Bridge ibBTC to Saber

Badger is a community DAO and is focused on bringing Bitcoin to DeFi. Badger has aggregated much of the tokenized Bitcoin liquidity on Ethereum via its [SETTs](https://badger-finance.gitbook.io/badger-finance/sett/overview). A SETT, is a vault akin to yearn vaults and deploys strategies for maximizing BTC yields. BTC denominated assets from Badger Vaults (Sett) or Tokenized BTC (wBTC, renBTC, tBTC & sBTC) can be deposited to [mint ibBTC](https://app.badger.finance/ibBTC).

### Using the Ethereum to Solana Wormhole Bridge

To bridge ibBTC from Ethereum to Solana, users can leverage [the Wormhole Bridge](https://www.wormholebridge.com/#/move?from=ETH&token=IBBTC). Note that Saber does not maintain the bridge; any questions or issues should be [brought up to the Wormhole team directly](https://github.com/certusone/wormhole).

1. Go to the [Wormhole Bridge UI website](https://www.wormholebridge.com/#/move?from=ETH&token=IBBTC).

2. Connect the Ethereum wallet you're storing your ibBTC in and the Solana wallet you want to transfer to. If you don't have a Solana wallet, we recommend [Phantom's Extension Wallet](https://phantom.app) -- the functionality is similar to MetaMask. If you're creating a new Solana wallet, you'll also need SOL to pay for transaction fees. You can get SOL using a centralized exchange.

3. Once connected, enter the amount of ibBTC you want to transfer, then select **Transfer**.

4. You should now be prompted by several transactions on your Solana and Ethereum wallets to initiate the transaction.

5. Once you get to the **Finalizing transfer** step, you must waiting for 15 ETH confirmations for the Wormhole Wrapped ibBTC to display in your Solana wallet.

### Supplying liquidity for (depositing) ibBTC

1. Now that you have ibBTC on Solana, you can deposit it into the Saber ibBTC-renBTC pool to earn yield from swap fees.
2. On the ibBTC-renBTC pool page, you can deposit your desired amount. In order to maximize the amount of LP tokens you receive, you may want to also supply a balanced proportion of renBTC.
3. After you've deposited the tokens, you'll receive an LP token representing your share of the pool.

### Staking (farming) ibBTC-renBTC LP

1. To earn liquidity mining incentives for ibBTC-renBTC, you must stake the LP token into Saber.
2. On the ibBTC-renBTC farm page, you can stake the LP token.
3. While staked, you'll continuously receive rewards relative to your share of the pool.
4. You can select Claim at any time to transfer the rewards to your wallet without unstaking your LP token.
