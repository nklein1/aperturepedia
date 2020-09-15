import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';

class KonicaAR extends React.Component {
  render() {
    const description = 'Aperturepedia\'s list of Konica AR-mount lenses used in Konica\'s 35mm interchangeable lens SLR cameras';
    const breadcrumbs = [
      { url: '/konica-ar/', title:'Konica AR Lens Table' }
    ];

    return (
      <Layout title={'Konica AR Lenses'} pathname={this.props.path}>
        <SEO
            title={'Konica AR Lenses'}
            breadcrumbs={breadcrumbs}
            description={description}
            pathname={this.props.path} />
        <LensTable data={this.props.data} />
      </Layout>
    );
  }
}

export default KonicaAR;

export const pageQuery = graphql`
  query {
    allKonicaArJson {
      edges {
        node {
          focalLength
          name
          maxAperture
          minAperture
          elements
          groups
          filterThread
          lensHood
          closeFocus
          viewAngle
          diameter
          length
          weight
          yearIntroduced
          yearDiscontinued
          style
          notes
          sources
          lensType
          lensCatShort
          lensCatLong
        }
      }
    }
  }
`
