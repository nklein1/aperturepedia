import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';
import SourceList from '../components/SourceList/SourceList';

class MinoltaSR extends React.Component {
  render() {
    const sources = [
      'http://minolta.eazypix.de/lenses',
      'https://lensqaworks.com',
      'http://allphotolenses.com/lenses/c_652543.html'
    ];
    const description = 'Aperturepedia\'s list of Minolta SR-mount lenses used in all Minolta 35mm interchangeable lens SLR cameras';
    const breadcrumbs = [
      { url: '/', title:'Aperturepedia' },
      { url: '/minolta-sr', title:'Minolta SR' }
    ];

    return (
      <Layout title={'Minolta SR Lenses'} pathname={this.props.path}>
        <SEO
            title={'Minolta SR Lenses'}
            breadcrumbs={breadcrumbs}
            description={description}
            pathname={this.props.path} />
        <LensTable data={this.props.data} />
        <SourceList sources={sources} />
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
          sampleImg
          repair
          lensType
          lensCatShort
          lensCatLong
        }
      }
    }
  }
`
