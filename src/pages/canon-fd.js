import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import DbPageLayout from '../components/DbPageLayout/DbPageLayout';
import LensTable from '../components/LensTable/LensTable';
import { parseLensColumns } from '../utils/utils';

class CanonFD extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.canonFdDb;
    this.breadcrumbs = [
      { url: '/', title: 'Aperturepedia' },
      { url: this.props.location.pathname, title: this.seoData.title }
    ];
  }

  render() {
    return (
      <DbPageLayout
          location={this.props.location}
          seoData={this.seoData}>
        <SEO
            title={this.seoData.title}
            description={this.seoData.descr}
            keywords={this.seoData.keywords}
            breadcrumbs={this.breadcrumbs}
            location={this.props.location} />
        <LensTable
            lensData={this.props.data.allCanonFdJson}
            lensColumns={parseLensColumns('canon_fd')}
            mount={'fd'}
            seo={this.seoData} />
      </DbPageLayout>
    );
  }
}

export default CanonFD;

export const pageQuery = graphql`
  query {
    allCanonFdJson {
      edges {
        node {
          id
          name
          fullName
          shortName
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
          lensImgs
          lensType
          lensCatShort
          lensCatLong
        }
      }
    },
    allSeoContentJson {
      edges {
        node {
          canonFdDb {
            name
            title
            descr
            keywords
            variants {
              id
              name
              descr
            }
          }
        }
      }
    }
  }
`
