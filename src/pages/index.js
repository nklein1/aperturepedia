import React from 'react';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

const breadcrumbs = [
  { url: '/', title:'Aperturepedia' }
];

const IndexPage = (props) => (
  <Layout>
    <SEO
        title={'Home'}
        breadcrumbs={breadcrumbs}
        pathname={props.path} />
    <Typography variant={'h4'}>
      Welcome to Aperturepedia
    </Typography>
    <p>
      Built by <a href={'http://nklein.info/'} target={'_blank'} rel={'noopener'}>Nick Klein</a>, Aperturepedia collects data on various vintage first-party SLR lenses in one easy-to-reference site.<br /><br/>
      <strong>It's very much a work in progress</strong>, and any feedback on features or enhancements are welcome.<br/>
      The contact email address is <strong>this website's name</strong> at <strong>gmail dot com</strong>. <em>(This hint is an effort to minimize spam)</em>
    </p>
    <Typography variant={'h5'}>Currently Supported Lenses:</Typography>
    <ul>
      <li>
        <Link to="/minolta-sr/">Minolta MD</Link>
      </li>
      <li>
        <Link to="/canon-fd/">Canon FD</Link>
      </li>
      <li>
        <Link to="/pentax-m42/">Pentax M42</Link>
      </li>
      <li>
        <Link to="/pentax-k/">Pentax K</Link>
      </li>
    </ul>
    <Typography variant={'h5'}>Future Supported Lens Mounts:</Typography>
    <em>These will be supported in a future version of Aperturepedia</em>
    <ul>
      <li>Nikon F</li>
      <li>Olympus OM</li>
    </ul>
  </Layout>
)

export default IndexPage
