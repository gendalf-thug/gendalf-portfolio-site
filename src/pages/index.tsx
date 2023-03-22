import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';

function HomepageHeader() {
  return (
    <header className="hero hero--primary py-[4rem] text-center relative overflow-hidden">
      <div className="container">
        <div className="flex flex-1 relative aspect-[1.534] mx-auto max-h-[550px]">
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
