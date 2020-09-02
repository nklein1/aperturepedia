import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/olympus_om_hero.jpg';
import smImg from '../images/olympus_om_hero_sm.jpg';

const breadcrumbs = [
  { url: '/', title:'Aperturepedia' }
];

const OlympusOMLinks = (props) => (
  <Layout>
    <SEO
        title={'Olympus OM Links'}
        breadcrumbs={breadcrumbs}
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
