import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/pentax_m37_hero.jpg';
import smImg from '../images/pentax_m37_hero_sm.jpg';

const description = 'Aperturepedia\'s list of reviews and other helpful links for Asahi Pentax M37 screwmount lenses used in Pentax\'s early Asahiflex SLR cameras';
const breadcrumbs = [
  { url: '/pentax-m37-links/', title:'Pentax M37 Links' }
];

const PentaxM37Links = (props) => (
  <Layout>
    <SEO
        title={'Pentax M37 Links'}
        breadcrumbs={breadcrumbs}
        description={description}
        pathname={props.path} />
    <LinkPageContent
        data={props.data.allPentaxM37LinksJson}
        mdImg={mdImg}
        smImg={smImg}>
    </LinkPageContent>
  </Layout>
)

export default PentaxM37Links

export const pageQuery = graphql`
  query {
    allPentaxM37LinksJson {
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
