---
title: Onboarding Info
---

### Tribeca Protocol Articles

Explore community-made articles that go into detail on different aspects of the Tribeca Protocol which will be useful when creating a DAO.

- [Tribeca Protocol: Architechture](https://medium.com/@solien_/tribeca-protocol-architecture-23a719ccea12)

  - Deep dive into the structure of the protocol.

- [Tribeca Protocol: Ecosystem](https://medium.com/@solien_/tribeca-protocol-ecosystem-e140da1fbd90)

  - Explore the different protocols built around Tribeca.

- [Saber and Saber Wars: A Deep Dive](https://stakedsol.substack.com/p/saber-and-the-saber-wars-a-deep-dive?utm_source=twitter&s=r)
  - Understand the hype around Saber Wars, and the central role of Tribeca.

To learn how to use the protocol, and what the DAO creation process looks like - read this:

- [Tribeca Protocol: How To Use](https://medium.com/@solien_/tribeca-protocol-how-to-use-e0c0bb929b4f)
  - **BE SURE TO SAVE ALL OF THE ADDRESSES IN THE DAO CREATION PROCESS TO REGISTER THE OFFICIAL DAO VIA GITHUB AFTER CREATING ONE USING FRONEND!**
    - Smart wallet, exec multisig, emergency multisig, locker, governor, are all addresses that you must save.

### Tutorial: Register a DAO

Once you've created a DAO on the [Tribeca Interface](https://tribeca.so/onboarding/dao), and verified that the parameters you've set are accurate - you can go to the [Tribeca Registry Github](https://github.com/TribecaHQ/tribeca-registry/tree/master/config/mainnet) to register your official DAO.

Common mistakes up to this point include:

- Not accounting for decimals when inputting # votes for quorum/activation (eg. 10000 votes on a token with 6 decimals is 10000000000 votes when setting parameter)
- Token not registered on Solana Token List, resulting in no metadata appearing.

If everything in your parameters look good, you should create a config file named `Tribeca.toml` inside of a folder named `YourDAOName`, and make a PR to add your folder inside of the `tribeca-registry/config/mainnet` directory on Github.

#### Registry Example: SBR

Saber DAO was one of the first made on Tribeca, and is a perfect example because it includes every data point for registering your DAO - many of which are optional.

The Governance section includes basic data points about the DAO you created in the frontend. This is where your saved addresses come in handy. Most of these data points will come from the DAO you've just created. Slug reffers to the page your DAO will appear on. For example https://tribeca.so/gov/sbr is for the slug "sbr". Also all times are in seconds, and use underscores instead of decimals for large numbers.

```toml
# .config/mainnet/sbr/Tribeca.toml

[governance]
network = "mainnet-beta"
slug = "sbr"
name = "Saber"
address = "9tnpMysuibKx6SatcH3CWR9ZsSRMBNeBf1mhfL6gAXR4"
description = "AMM for mean-reverting trading pairs on Solana"

[governance.token]
address = "Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1"

[governance.parameters.governor]
quorum-votes = 400_000_000_000000
token-mint = "Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1"
voting-delay = 86_400
voting-period = 259_200
timelock-delay = 86_400

[governance.parameters.locker]
max-stake-vote-multiplier = 10
min-stake-duration = 604_800 # 7 days
max-stake-duration = 157_680_000 # 5 years
proposal-activation-min-votes = 10_000_000_000000 # 10M veSBR / 1M SBR
whitelist-enabled = true
```

After adding governor specific parameters, you can set an alias for your DAO to connect to a custom domain. You also need to include the addresses for the other accounts tied to your DAO.

```toml
[site]
aliases = ["dao.saber.so"]

[addresses]
governor = "9tnpMysuibKx6SatcH3CWR9ZsSRMBNeBf1mhfL6gAXR4"
electorate = "4tr9CDSgZRLYPGdcsm9PztaGSfJtX5CEmqDbEbvCTX2G"

[addresses.smart-wallet]
label = "Smart Wallet"
type = "smart-wallet"
address = "F9TxY3Bj1tWebTHZPJC323WK8KwAe3W6XKkg2hzCdsKM"

[addresses.executive-council]
label = "Executive Council"
type = "smart-wallet"
address = "ByB3GkPHuUBmzcNbY1Ed7xK2uMkEkNsxTwjMGAFeLsbw"

[addresses.emergency-dao]
label = "Emergency DAO"
type = "smart-wallet"
address = "F9TxY3Bj1tWebTHZPJC323WK8KwAe3W6XKkg2hzCdsKM"
```

Once those parameters are set, you have the option to include requirements for users to attach a link to a custom domain before creating a proposal. This is so users can view and discuss proposals outside of the limited space in the proposal page.

```toml
[proposals]
notice = """\
To create a proposal, first make a post on the [Saber Governance Forum](https://gov.saber.so/c/governance/6).
Once you have determined that there is sufficient community support,
add the link to the discussion thread and create a proposal.
"""
discussion = { required = true, link = "https://gov.saber.so/c/governance/6", prefix = "https://gov.saber.so/t/" }
```

You can also add a section to the Tribeca.toml to link the frontend to other sites related to your project.

```toml
[links]
website = "https://saber.so"
app = "https://app.saber.so"
forum = "https://gov.saber.so"
discord = "https://chat.saber.so"
github = "https://github.com/saber-hq"
medium = "https://blog.saber.so"
twitter = "https://twitter.com/saber_hq"
```

The last section is only for protocols that wish to include gauges in their DAO.

```toml
[quarry]
rewarder = "rXhAofQCT7NN9TUqigyEAUzV1uLL4boeD8CRkNBSkYk"
mint-wrapper = "EVVDA3ZiAjTizemLGXNUN3gb6cffQFEYkFjFZokPmUPz"
redeemer = "CL9wkGFT3SZRRNa9dgaovuRV7jrVVigBUZ6DjcgySsCU"
features = ["issue-tokens"]

[quarry.operator]
address = "GdW7Accmjusk8qKUPoCMJasEje63h97igqkjdEpacpRN"
features = ["set-annual-rewards-rate"]

[quarry.gauge]
gaugemeister = "28ZDtf6d2wsYhBvabTxUHTRT6MDxqjmqR7RMCp348tyU"
```

**That's it!** Once your PR is reviewed and merged - your DAO will officially be a part of Tribeca. You can now add more users to the mulisigs using Goki, and then begin your governance process.
