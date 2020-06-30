import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';
import SourceList from '../components/SourceList/SourceList';

class PentaxM37 extends React.Component {
  render() {
    const sources = [
      'http://www.aohc.it/catalogo.php?catalogo=obiettivi',
      // 'https://web.archive.org/web/20120225054115/http://www.aohc.it/lense.htm',
      'https://www.pentaxforums.com/lensreviews/Pentax-Takumar-M37-Screwmount-Lenses-i62.html',
      'http://www.willker.de/wie/texte/takumar.html'
    ];
    const description = 'Aperturepedia\'s list of Asahi Pentax M37 screwmount lenses used in Pentax\'s early Asahiflex SLR cameras';
    const breadcrumbs = [
      { url: '/', title:'Aperturepedia' },
      { url: '/pentax-m37', title:'Pentax M37' }
    ];
    return (
      <Layout title={'Pentax M37 Lenses'} pathname={this.props.path}>
        <SEO
            title={'Pentax M37 Lenses'}
            breadcrumbs={breadcrumbs}
            description={description}
            pathname={this.props.path} />
        <LensTable data={this.props.data} />
        <SourceList sources={sources} />
      </Layout>
    );
  }
}

export default PentaxM37;

export const pageQuery = graphql`
  query {
    allPentaxM37Json {
      edges {
        node {
          focalLength
          name
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
          diaphramType
          weight
          yearIntroduced

          notes
          officialNotes
          sources
          lensCatShort
          lensCatLong
        }
      }
    }
  }
`
