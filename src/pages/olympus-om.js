import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';

class OlympusOM extends React.Component {
  render() {
    const description = 'Aperturepedia\'s list of Olympus OM-mount lenses used in all Olympus OM-system interchangeable lens SLR cameras';
    const breadcrumbs = [
      { url: '/olympus-om/', title:'Olympus OM Lens Table' }
    ];

    return (
      <Layout title={'Olympus OM Lenses'} pathname={this.props.path}>
        <SEO
            title={'Olympus OM Lenses'}
            breadcrumbs={breadcrumbs}
            description={description}
            pathname={this.props.path} />
        <LensTable data={this.props.data} />
      </Layout>
    );
  }
}

export default OlympusOM;

export const pageQuery = graphql`
  query {
    allOlympusOmJson {
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
          lensType
          lensCatShort
          lensCatLong
          notes
          sources
        }
      }
    }
  }
`
