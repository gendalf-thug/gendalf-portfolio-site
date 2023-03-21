import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="flex flex-1 relative aspect-[1.534]">
          <img
            className="rounded-xl absolute overflow-hidden"
            src="img/yanix.png"
          />
          <div className="absolute w-full bottom-[5%]">
            <h3 className="z-10 sm:text-xl text-xs text-white self-center inline-block bg-black">
              Выхожу на ринг, бой с самим с собой, кто же победит? 🎶
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
