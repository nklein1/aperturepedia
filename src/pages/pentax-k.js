import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';
import SourceList from '../components/SourceList/SourceList';

class PentaxK extends React.Component {
  render() {
    const sources = [
      'http://kmp.pentaxians.eu/lenses/',
      'https://www.pentaxforums.com/lensreviews/Pentax-K-Mount-Lenses-i1.html'
    ];
    return (
      <Layout title={'Pentax K Lenses'}>
        <SEO title={'Pentax K Lenses'} />
        <LensTable data={this.props.data} />
        <SourceList sources={sources} />
      </Layout>
    );
  }
}

export default PentaxK;

export const pageQuery = graphql`
  query {
    allPentaxKJson {
      edges {
        node {
          focalLength
          name
          maxAperture
          minAperture
          elements
          groups
          blades
          filterThread
          closeFocus
          diameter
          length
          weight
          yearIntroduced
          style
          lensType
          lensCatShort
          lensCatLong
          url
        }
      }
    }
  }
`
