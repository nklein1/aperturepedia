import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import DbPageLayout from '../components/DbPageLayout/DbPageLayout';
import LensTable from '../components/LensTable/LensTable';
import { parseLensColumns } from '../utils/utils';

class PentaxM37 extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.pentaxM37Db;
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
            lensData={this.props.data.allPentaxM37Json}
            lensColumns={parseLensColumns('pentax_m37')}
            mount={'m37'}
            seo={this.seoData} />
      </DbPageLayout>
    );
  }
}

export default PentaxM37;

export const pageQuery = graphql`
  query {
    allPentaxM37Json {
      edges {
        node {
          id
          focalLength
          name
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
          diaphragmType
          weight
          yearIntroduced
          creditNote
          creditUrl
          notes
          officialNotes
          sources
          reviews
          lensCatShort
          lensCatLong
        }
      }
    },
    allSeoContentJson {
      edges {
        node {
          pentaxM37Db {
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
