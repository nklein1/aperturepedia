import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
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
      <Layout title={this.seoData.title} location={this.props.location}>
        <SEO
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
      </Layout>
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
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
