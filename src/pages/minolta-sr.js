import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';
import { parseLensColumns } from '../utils/utils';

class MinoltaSR extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.minoltaSrDb;
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
            lensData={this.props.data.allMinoltaSrJson}
            lensColumns={parseLensColumns('minolta_sr')}
            mount={'sr'}
            seo={this.seoData} />
      </Layout>
    );
  }
}

export default MinoltaSR;

export const pageQuery = graphql`
  query {
    allMinoltaSrJson {
      edges {
        node {
          id
          focalLength
          name
          maxAperture
          minAperture
          elements
          groups
          filterThread
          lensHood
          closeFocus
          diameter
          length
          weight
          yearIntroduced
          style
          notes
          sources
          reviews
          lensImgs
          repair
          lensType
          lensCatShort
          lensCatLong
        }
      }
    },
    allSeoContentJson {
      edges {
        node {
          minoltaSrDb {
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
