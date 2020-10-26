import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';
import { parseLensColumns } from '../utils/utils';

class OlympusOM extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.olympusOmDb;
    this.breadcrumbs = [
      { url: '/', title: 'Aperturepedia' },
      { url: this.props.location.pathname, title: this.seoData.title }
    ];
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
            title={this.seoData.title}
            description={this.seoData.descr}
            keywords={this.seoData.keywords}
            breadcrumbs={this.breadcrumbs}
            location={this.props.location} />
        <LensTable
            title={this.seoData.title}
            lensData={this.props.data.allOlympusOmJson}
            lensColumns={parseLensColumns('olympus_om')}
            mount={'om'}
            seo={this.seoData} />
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
          id
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
          repair
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
