import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/pentax_k_hero.jpg';
import smImg from '../images/pentax_k_hero_sm.jpg';

const description = 'Aperturepedia\'s list of reviews and other helpful links for Pentax K bayonet mount lenses used in Pentax 35mm interchangeable lens SLR cameras';
const breadcrumbs = [
  { url: '/pentax-k-links/', title:'Pentax K Links' }
];

const PentaxKLinks = (props) => (
  <Layout>
    <SEO
        title={'Pentax K Links'}
        breadcrumbs={breadcrumbs}
        description={description}
        pathname={props.path} />
    <LinkPageContent
        data={props.data.allPentaxKLinksJson}
        mdImg={mdImg}
        smImg={smImg}>
    </LinkPageContent>
  </Layout>
)

export default PentaxKLinks

export const pageQuery = graphql`
  query {
    allPentaxKLinksJson {
      edges {
        node {
          mountName
          oemName
          intro
          imgURL
          imgAlt
          oemHistLinks {
            url
            name
            helpText
          }
          lensSpecLinks {
            url
            name
            helpText
          }
          reviewLinks {
            url
            name
            helpText
          }
          repairLinks {
            url
            name
            helpText
          }
          miscLinks {
            url
            name
            helpText
          }
        }
      }
    }
  }
`
