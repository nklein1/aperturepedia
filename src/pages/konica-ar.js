import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';
import SourceList from '../components/SourceList/SourceList';

class KonicaAR extends React.Component {
  render() {
    const sources = [
      'http://konicafiles.com/3-hexanon-ar-lenses/-comparative-table',
      'http://www.buhla.de/Foto/Konica/eHexanonUebersicht.html',
      'http://artaphot.ch/konica-ar/objektive'
    ];
    const description = 'Aperturepedia\'s list of Konica AR-mount lenses used in Konica\'s 35mm interchangeable lens SLR cameras';
    const breadcrumbs = [
      { url: '/', title:'Aperturepedia' },
      { url: '/konica-ar', title:'Konica AR' }
    ];

    return (
      <Layout title={'Konica AR Lenses'} pathname={this.props.path}>
        <SEO
            title={'Konica AR Lenses'}
            breadcrumbs={breadcrumbs}
            description={description}
            pathname={this.props.path} />
        <LensTable data={this.props.data} />
        <SourceList sources={sources} />
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
          lensType
          lensCatShort
          lensCatLong
        }
      }
    }
  }
`
