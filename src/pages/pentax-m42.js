import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';

class PentaxM42 extends React.Component {
  render() {
    const description = 'Aperturepedia\'s list of Pentax M42 screwmount lenses used in Pentax 35mm interchangeable lens SLR cameras';
    const breadcrumbs = [
      { url: '/pentax-m42/', title:'Pentax M42 Lens Table' }
    ];
    return (
      <Layout title={'Pentax M42 Lenses'} pathname={this.props.path}>
        <SEO
            title={'Pentax M42 Lenses'}
            breadcrumbs={breadcrumbs}
            description={description}
            pathname={this.props.path} />
        <LensTable data={this.props.data} />
      </Layout>
    );
  }
}

export default PentaxM42;

export const pageQuery = graphql`
  query {
    allPentaxM42Json {
      edges {
        node {
          focalLength
          name
          engravedName
          lensType
          maxAperture
          minAperture
          elements
          groups
          blades
          closeFocus
          filterThread
          diameter
          length
          diaphramType
          weight
          yearIntroduced
          style
          notes
          sources
          lensCatShort
          lensCatLong
        }
      }
    }
  }
`
