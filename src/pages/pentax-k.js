import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';

class PentaxK extends React.Component {
  render() {
    const description = 'Aperturepedia\'s list of Pentax K bayonet mount lenses used in Pentax 35mm interchangeable lens SLR cameras';
    const breadcrumbs = [
      { url: '/pentax-k/', title:'Pentax K Lens Table' }
    ];
    return (
      <Layout title={'Pentax K Lenses'} pathname={this.props.path}>
        <SEO
            title={'Pentax K Lenses'}
            breadcrumbs={breadcrumbs}
            description={description}
            pathname={this.props.path} />
        <LensTable data={this.props.data} />
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
          notes
          lensType
          lensCatShort
          lensCatLong
          sources
        }
      }
    }
  }
`
