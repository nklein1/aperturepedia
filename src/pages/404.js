import React from 'react';

import Seo from '../components/seo';
import Layout from '../components/Layout/Layout';

const NotFoundPage = (props) => (
  <Layout location={props.location}>
    <Seo title="404 Not Found | Aperturepedia" location={props.location} />
    <h1>Whoops...</h1>
    <p>The URL you tried doesn&#39;t exist.</p>
  </Layout>
)

export default NotFoundPage;
