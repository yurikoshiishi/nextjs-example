import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import React from 'react';
import TodoList from '../components/TodoList/TodoList';

export const config = { amp: 'hybrid' };

export default function TodosPage() {
  return (
    <Layout home>
      <Head>
        <title>My Todos</title>
      </Head>
      <TodoList />
    </Layout>
  );
}
