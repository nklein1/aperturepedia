import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';

class PentaxM42 extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.pentaxM42Db;
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

export default PentaxM42;

export const pageQuery = graphql`
  query {
    allPentaxM42Json {
      edges {
        node {
          focalLength
          name
          fullName
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
          style
          notes
          sources
          reviews
          repair
          lensCatShort
          lensCatLong
        }
      }
    },
    allSeoContentJson {
      edges {
        node {
          pentaxM42Db {
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
