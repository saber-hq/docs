import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Welcome to the
          <br />
          Saber Documentation Site!
        </h1>
        <p className="hero__subtitle">
          Saber is the leading cross-chain stablecoin and
          <br />
          wrapped assets exchange on Solana.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about/intro"
          >
            Learn about Saber
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout description="Documentation on how to use and build on Saber, the leading AMM and DEX on Solana for stablecoins and pegged assets.">
      <HomepageHeader />
    </Layout>
  );
}
