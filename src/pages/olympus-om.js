import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';
import SourceList from '../components/SourceList/SourceList';

class OlympusOM extends React.Component {
  render() {
    const sources = [
      'https://www.mir.com.my/rb/photography/hardwares/classics/olympusom1n2/shared/zuiko/htmls/',
      'https://esif.world-traveller.org/om-sif/lensgroup.htm',
      'http://www.alanwood.net/olympus/#lenses'
    ];
    const description = 'Aperturepedia\'s list of Olympus OM-mount lenses used in all Olympus OM-system interchangeable lens SLR cameras';
    const breadcrumbs = [
      { url: '/', title:'Aperturepedia' },
      { url: '/olympus-om', title:'Olympus OM' }
    ];

    return (
      <Layout title={'Olympus OM Lenses'} pathname={this.props.path}>
        <SEO
            title={'Olympus OM Lenses'}
            breadcrumbs={breadcrumbs}
            description={description}
            pathname={this.props.path} />
        <LensTable data={this.props.data} />
        <SourceList sources={sources} />
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
          lensType
          lensCatShort
          lensCatLong
          notes
          sources
        }
      }
    }
  }
`
