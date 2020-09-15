import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/konica_ar_hero.jpg';
import smImg from '../images/konica_ar_hero_sm.jpg';

const breadcrumbs = [
  { url: '/konica-ar-links/', title:'Konica AR Links' }
];

const KonicaARLinks = (props) => (
  <Layout>
    <SEO
        title={'Konica AR Links'}
        breadcrumbs={breadcrumbs}
        pathname={props.path} />
    <LinkPageContent
        data={props.data.allKonicaArLinksJson}
        mdImg={mdImg}
        smImg={smImg}>
    </LinkPageContent>
  </Layout>
)

export default KonicaARLinks

export const pageQuery = graphql`
  query {
    allKonicaArLinksJson {
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
          mountHistLinks {
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