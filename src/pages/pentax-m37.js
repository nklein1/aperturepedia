import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';

class PentaxM37 extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.pentaxM37Db;
    this.breadcrumbs = [
      { url: this.props.location.pathname, title: this.seoData.title }
    ];
  }

  render() {
    return (
      <Layout title={this.seoData.title}>
        <SEO
            title={this.seoData.title}
            description={this.seoData.descr}
            keywords={this.seoData.keywords}
            breadcrumbs={this.breadcrumbs}
            location={this.props.location} />
        <LensTable data={this.props.data} />
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
          notes
          officialNotes
          sources
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
