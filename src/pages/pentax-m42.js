import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import LensTable from '../components/LensTable/LensTable';
import SourceList from '../components/SourceList/SourceList';

class PentaxM42 extends React.Component {
  render() {
    const sources = [
      'https://web.archive.org/web/20120225054115/http://www.aohc.it/lense.htm',
      'http://www.willker.de/wie/texte/takumar.html',
      'https://www.pentaxforums.com/lensreviews/Pentax-Takumar-M42-Screwmount-Lenses-i3.html'
    ];
    return (
      <Layout title={'Pentax M42 Lenses'}>
        <SEO title={'Pentax M42 Lenses | Aperturepedia'} />
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
        }
      }
    }
  }
`
