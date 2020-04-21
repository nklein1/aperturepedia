import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';
import SourceList from '../components/SourceList/SourceList';

class PentaxM42 extends React.Component {
  render() {
    const sources = [
      'http://www.aohc.it/catalogo.php?catalogo=obiettivi',
      'https://web.archive.org/web/20120225054115/http://www.aohc.it/lense.htm',
      'https://www.pentaxforums.com/lensreviews/Pentax-Takumar-M42-Screwmount-Lenses-i3.html',
      'http://www.willker.de/wie/texte/takumar.html'
    ];
    const description = 'Aperturepedia\'s list of Pentax M42 screwmount lenses used in Pentax 35mm interchangeable lens SLR cameras';
    const seoBreadcrumbs = [
      { url: '/', title:'Aperturepedia' },
      { url: '/pentax-m42', title:'Pentax M42' }
    ];
    return (
      <Layout title={'Pentax M42 Lenses'}>
        <SEO title={'Pentax M42 Lenses'} breadcrumbs={seoBreadcrumbs} description={description} />
        <LensTable data={this.props.data} />
        <SourceList sources={sources} />
      </Layout>
    );
  }
}

export default PentaxM42;

export const pageQuery = graphql`
  query {
    allPentaxM42Json {
      edges {
        node {
          focalLength
          name
          lensType
          lensCatShort
          lensCatLong
          maxAperture
          minAperture
          elements
          groups
          diaphramType

          closeFocus
          diameter
          length
          weight
          yearIntroduced
          style
          notes
          url
        }
      }
    }
  }
`
