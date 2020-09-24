import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';

class CanonFD extends React.Component {
  render() {
    const description = 'Aperturepedia\'s list of specs, reviews, repair guides and other helpful links for Canon FL, FD, and New FD lenses used in Canon 35mm interchangeable lens SLR cameras between 1971 and 1992. ';
    const breadcrumbs = [
      { url: '/canon-fd/', title:'Canon FD Lens Table' }
    ];
    return (
      <Layout title={'Canon FD Lenses'} pathname={this.props.path}>
        <SEO
            title={'Canon FD Lenses'}
            breadcrumbs={breadcrumbs}
            description={description}
            pathname={this.props.path} />
        <LensTable data={this.props.data} />
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
          officialNotes
          style
          sources
          reviews
          lensImg
          lensType
          lensCatShort
          lensCatLong
        }
      }
    }
  }
`
