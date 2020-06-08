import React from 'react';
import { Link } from 'gatsby';

import Head from '../components/head';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Adryan, a full stack developer living in terrible Brazil.</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  );
}

export default Index;