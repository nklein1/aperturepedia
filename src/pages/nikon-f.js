import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';

class NikonF extends React.Component {
  render() {
    const description = 'Aperturepedia\'s list of Nikon F-mount lenses used in Nikon 35mm interchangeable lens SLR cameras';
    const breadcrumbs = [
      { url: '/nikon-f/', title:'Nikon F Lens Table' }
    ];

    return (
      <Layout title={'Nikon F Lenses'} pathname={this.props.path}>
        <SEO
            title={'Nikon F Lenses'}
            breadcrumbs={breadcrumbs}
            description={description}
            pathname={this.props.path} />
        <LensTable data={this.props.data} />
      </Layout>
    );
  }
}

export default NikonF;

export const pageQuery = graphql`
  query {
    allNikonFJson {
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
          lensHood
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
          specs
          nikon
          reviews
        }
      }
    }
  }
`
