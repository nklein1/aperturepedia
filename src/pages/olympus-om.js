import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import DbPageLayout from '../components/DbPageLayout/DbPageLayout';
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
            lensData={this.props.data.allOlympusOmJson}
            lensColumns={parseLensColumns('olympus_om')}
            mount={'om'}
            seo={this.seoData} />
      </DbPageLayout>
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
            name
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
