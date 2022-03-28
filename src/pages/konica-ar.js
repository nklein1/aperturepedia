import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import DbPageLayout from '../components/DbPageLayout/DbPageLayout';
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
      <DbPageLayout
          location={this.props.location}
          seoData={this.seoData}>
        <Seo
            title={this.seoData.title}
            description={this.seoData.descr}
            keywords={this.seoData.keywords}
            breadcrumbs={this.breadcrumbs}
            location={this.props.location} />
        <LensTable
            title={this.seoData.title}
            lensData={this.props.data.allKonicaArJson}
            lensColumns={parseLensColumns('konica_ar')}
            mount={'ar'}
            seo={this.seoData} />
      </DbPageLayout>
    );
  }
}

export default KonicaAR;

export const pageQuery = graphql`
  query {
    allKonicaArJson {
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
