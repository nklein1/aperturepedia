import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';

class OlympusOM extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.olympusOmDb;
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

export default OlympusOM;

export const pageQuery = graphql`
  query {
    allOlympusOmJson {
      edges {
        node {
          focalLength
          name
          maxAperture
          minAperture
          elements
          groups
          blades
          filterThread
          lensHood
          closeFocus
          diameter
          length
          weight
          yearIntroduced
          yearDiscontinued
          lensType
          lensCatShort
          lensCatLong
          notes
          sources
          reviews
          lensImgs
        }
      }
    },
    allSeoContentJson {
      edges {
        node {
          olympusOmDb {
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
