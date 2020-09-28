import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';

class CanonFD extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.canonFdDb;
    this.breadcrumbs = [
      { url: this.props.path, title: this.seoData.title }
    ];
  }

  render() {
    return (
      <Layout title={this.seoData.title} pathname={this.props.path}>
        <SEO
            title={this.seoData.title}
            description={this.seoData.descr}
            keywords={this.seoData.keywords}
            breadcrumbs={this.breadcrumbs}
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
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
