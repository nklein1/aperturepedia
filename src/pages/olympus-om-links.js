import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/olympus_om_hero.jpg';
import smImg from '../images/olympus_om_hero_sm.jpg';

const description = 'Aperturepedia\'s list of reviews and other helpful links for Olympus OM-mount lenses used in all Olympus OM-system interchangeable lens SLR cameras';
const breadcrumbs = [
  { url: '/olympus-om-links/', title:'Olympus OM Links' }
];

const OlympusOMLinks = (props) => (
  <Layout>
    <SEO
        title={'Olympus OM Links'}
        breadcrumbs={breadcrumbs}
        description={description}
        pathname={props.path} />
    <LinkPageContent
        data={props.data.allOlympusOmLinksJson}
        mdImg={mdImg}
        smImg={smImg}>
    </LinkPageContent>
  </Layout>
)

export default OlympusOMLinks

export const pageQuery = graphql`
  query {
    allOlympusOmLinksJson {
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
