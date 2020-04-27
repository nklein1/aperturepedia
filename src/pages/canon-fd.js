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
    const description = 'Aperturepedia\'s list of Canon FL, FD, and New FD lenses used in Canon 35mm interchangeable lens SLR cameras between 1971 and 1992';
    const breadcrumbs = [
      { url: '/', title:'Aperturepedia' },
      { url: '/canon-fd', title:'Canon FD' }
    ];
    return (
      <Layout title={'Canon FD Lenses'}>
        <SEO
            title={'Canon FD Lenses'}
            breadcrumbs={breadcrumbs}
            description={description}
            pathname={this.props.path} />
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
          notes
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
