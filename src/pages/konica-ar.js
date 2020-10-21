import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';
import { parseLensColumns } from '../utils/utils';

class KonicaAR extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.konicaArDb;
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
            lensData={this.props.data.allKonicaArJson}
            lensColumns={parseLensColumns('konica_ar')}
            mount={'ar'}
            seo={this.seoData} />
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
          reviews
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
