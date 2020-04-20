import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';
import SourceList from '../components/SourceList/SourceList';

class CanonFD extends React.Component {
  render() {
    const sources = [
      'https://global.canon/en/c-museum/lens-series.html',
      'http://web.mit.edu/dennis/www/canon/fd-lens-info.html'
    ];
    return (
      <Layout title={'Canon FD Lenses'}>
        <SEO title={'Canon FD Lenses'} />
        <LensTable data={this.props.data} />
        <SourceList sources={sources} />
      </Layout>
    );
  }
}

export default CanonFD;

export const pageQuery = graphql`
  query {
    allCanonFdJson {
      edges {
        node {
          name
          focalLength
          maxAperture
          minAperture
          elements
          groups
          blades
          closeFocus
          filterThread
          diameter
          length
          weight
          yearIntroduced
          originalPrice
          descr
          style
          img
          url
          lensType
          lensCatShort
          lensCatLong
        }
      }
    }
  }
`
