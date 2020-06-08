import React from 'react';

import Head from '../components/head';
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <center><h1>404<br />Page not found</h1></center>
    </Layout>
  );
}

export default NotFound;