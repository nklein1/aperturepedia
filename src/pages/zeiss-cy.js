import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import DbPageLayout from '../components/DbPageLayout/DbPageLayout';
import LensTable from '../components/LensTable/LensTable';
import { parseLensColumns } from '../utils/utils';

class ZeissCY extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.ZeissCyDb;
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
            lensData={this.props.data.allZeissCyJson}
            lensColumns={parseLensColumns('zeiss_cy')}
            mount={'cy'}
            seo={this.seoData} />
      </DbPageLayout>
    );
  }
}

export default ZeissCY;

export const pageQuery = graphql`
  query {
    allZeissCyJson {
      edges {
        node {
          id
          focalLength
          name
          fullName
          maxAperture
          minAperture
          elements
          groups
          blades
          filterThread
          hood
          closeFocus
          diameter
          length
          weight
          yearIntroduced
          lensType
          lensCatShort
          lensCatLong
          notes
          officialNotes
          officalData
          sources
          reviews
        }
      }
    },
    allSeoContentJson {
      edges {
        node {
          ZeissCyDb {
            name
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
