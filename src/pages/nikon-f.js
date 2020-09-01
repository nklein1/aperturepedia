import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';
import SourceList from '../components/SourceList/SourceList';

class NikonF extends React.Component {
  render() {
    const sources = [
      'http://minolta.eazypix.de/lenses',
      'https://lensqaworks.com',
      'http://allphotolenses.com/lenses/c_652543.html'
    ];
    const description = 'Aperturepedia\'s list of Nikon F-mount lenses used in Nikon 35mm interchangeable lens SLR cameras';
    const breadcrumbs = [
      { url: '/', title:'Aperturepedia' },
      { url: '/minolta-sr', title:'Nikon F' }
    ];

    return (
      <Layout title={'Nikon F Lenses'} pathname={this.props.path}>
        <SEO
            title={'Nikon F Lenses'}
            breadcrumbs={breadcrumbs}
            description={description}
            pathname={this.props.path} />
        <LensTable data={this.props.data} />
        <SourceList sources={sources} />
      </Layout>
    );
  }
}

export default NikonF;

export const pageQuery = graphql`
  query {
    allNikonFJson {
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
          style
          notes
          lensType
          lensCatShort
          lensCatLong
          sources
          specs
          nikon
          reviews
        }
      }
    }
  }
`
