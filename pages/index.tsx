import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import List from '../components/List/List';
import Layout, { siteTitle } from '../components/Layout/Layout';
import React from 'react';
import Counter from '../components/Counter/Counter';

export const config = { amp: 'hybrid' };

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="headingMd">
        <Counter />
      </section>
      <section className="headingMd padding1px">
        <h2 className="headingLg">Blog</h2>
        <List posts={allPostsData} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
