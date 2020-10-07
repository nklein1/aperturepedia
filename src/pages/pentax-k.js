import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';

class PentaxK extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.pentaxKDb;
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

export default PentaxK;

export const pageQuery = graphql`
  query {
    allPentaxKJson {
      edges {
        node {
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
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
