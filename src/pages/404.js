import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not Found | Aperturepedia" />
    <h1>Whoops...</h1>
    <p>The URL you tried doesn&#39;t exist.</p>
  </Layout>
)

export default NotFoundPage;
