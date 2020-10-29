import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import DbPageLayout from '../components/DbPageLayout/DbPageLayout';
import LensTable from '../components/LensTable/LensTable';
import { parseLensColumns } from '../utils/utils';

class NikonF extends React.Component {
  constructor(props) {
    super(props);
    this.seoData = this.props.data.allSeoContentJson.edges[0].node.nikonFDb;
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
            lensData={this.props.data.allNikonFJson}
            lensColumns={parseLensColumns('nikon_f')}
            mount={'f'}
            seo={this.seoData} />
      </DbPageLayout>
    );
  }
}

export default NikonF;

export const pageQuery = graphql`
  query {
    allNikonFJson {
      edges {
        node {
          id
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
          lensHood
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
          reviews
          lensImgs
          repair
        }
      }
    },
    allSeoContentJson {
      edges {
        node {
          nikonFDb {
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
