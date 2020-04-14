import React from 'react';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title={'Home | Aperturepedia'} />
    <Typography variant={'h4'}>
      Welcome to Aperturepedia
    </Typography>
    <p>
      This is a personal project to collect data on various vintage first-party SLR lenses in one place.
    </p>
    <Typography variant={'h5'}>Currently Supported Lenses:</Typography>
    <ul>
      <li>
        <Link to="/minolta-sr/">Minolta MD</Link>
      </li>
      <li>
        <Link to="/pentax-m42/">Pentax M42</Link>
      </li>
    </ul>
    <Typography variant={'h5'}>Future Supported Lens Mounts:</Typography>
    <em>These will be supported in a future version of Aperturepedia</em>
    <ul>
      <li>Pentax K</li>
      <li>Canon FD</li>
      <li>Nikon F</li>
      <li>Olympus OM</li>
    </ul>
  </Layout>
)

export default IndexPage
