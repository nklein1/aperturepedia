import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';

class KonicaAR extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.konicaArDb;
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

export default KonicaAR;

export const pageQuery = graphql`
  query {
    allKonicaArJson {
      edges {
        node {
          focalLength
          name
          maxAperture
          minAperture
          elements
          groups
          filterThread
          lensHood
          closeFocus
          viewAngle
          diameter
          length
          weight
          yearIntroduced
          yearDiscontinued
          style
          notes
          sources
          lensType
          lensCatShort
          lensCatLong
        }
      }
    },
    allSeoContentJson {
      edges {
        node {
          konicaArDb {
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
