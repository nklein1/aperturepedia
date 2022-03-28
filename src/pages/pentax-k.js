import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import DbPageLayout from '../components/DbPageLayout/DbPageLayout';
import LensTable from '../components/LensTable/LensTable';
import { parseLensColumns } from '../utils/utils';

class PentaxK extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.pentaxKDb;
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
        <Seo
            title={this.seoData.title}
            description={this.seoData.descr}
            keywords={this.seoData.keywords}
            breadcrumbs={this.breadcrumbs}
            location={this.props.location} />
        <LensTable
            lensData={this.props.data.allPentaxKJson}
            lensColumns={parseLensColumns('pentax_k')}
            mount={'k'}
            seo={this.seoData} />
      </DbPageLayout>
    );
  }
}

export default PentaxK;

export const pageQuery = graphql`
  query {
    allPentaxKJson {
      edges {
        node {
          id
          focalLength
          name
          fullName
          shortName
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
    },
    allSeoContentJson {
      edges {
        node {
          pentaxKDb {
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
