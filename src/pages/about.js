import React from 'react';
import { Link } from 'gatsby';

import Head from '../components/head';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>I'm Iran Adryan, a student of web development that loves technology.</p>
      <p>Like my profile? <Link to="/contact">Contact me</Link></p>
    </Layout>
  );
}

export default About;