import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Head from '../components/head';
import Layout from '../components/Layout';
import blogStyle from './blog.module.scss'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: {
        fields: publishedDate,
        order: DESC,
      }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyle.posts}>
        {data.allContentfulBlogPost.edges.map(edge => (
          <li key={edge.node.slug} className={blogStyle.post}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
}

export default Blog;