import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div  style={{"display": "flex","alignItems": "center","justify-content": "center","flex-direction":"row"}}> 
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Read the docs 📜
          </Link>
        </div>
        <div className={styles.buttons} style={{"marginLeft": "20px"}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Check out the Blog 👨‍💻
          </Link>
        </div>
        </div> 
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Welcome to the documentation for Nebula Services Projects">
      <HomepageHeader />
      <main>
      
      </main>
    </Layout>
  );
}
