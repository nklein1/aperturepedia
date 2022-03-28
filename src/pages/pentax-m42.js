import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import DbPageLayout from '../components/DbPageLayout/DbPageLayout';
import LensTable from '../components/LensTable/LensTable';
import { parseLensColumns } from '../utils/utils';

class PentaxM42 extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.pentaxM42Db;
    this.breadcrumbs = [
      { url: '/', title: 'Aperturepedia' },
      { url: this.props.location.pathname, title: this.seoData.title }
    ];
  }

  render() {
    return (
      <DbPageLayout
          location={this.props.location}
          seoData={this.seoData}>
        <SEO
            title={this.seoData.title}
            description={this.seoData.descr}
            keywords={this.seoData.keywords}
            breadcrumbs={this.breadcrumbs}
            location={this.props.location} />
        <LensTable
            lensData={this.props.data.allPentaxM42Json}
            lensColumns={parseLensColumns('pentax_m42')}
            mount={'m42'}
            seo={this.seoData} />
      </DbPageLayout>
    );
  }
}

export default PentaxM42;

export const pageQuery = graphql`
  query {
    allPentaxM42Json {
      edges {
        node {
          id
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
            name
            title
            descr
            keywords
            variants {
              id
              name
              descr
            }
          }
        }
      }
    }
  }
`
