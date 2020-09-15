import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/pentax_m42_hero.jpg';
import smImg from '../images/pentax_m42_hero_sm.jpg';

const breadcrumbs = [
  { url: '/pentax-m42-links/', title:'Pentax M42 Links' }
];

const PentaxM42Links = (props) => (
  <Layout>
    <SEO
        title={'Pentax M42 Links'}
        breadcrumbs={breadcrumbs}
        pathname={props.path} />
    <LinkPageContent
        data={props.data.allPentaxM42LinksJson}
        mdImg={mdImg}
        smImg={smImg}>
    </LinkPageContent>
  </Layout>
)

export default PentaxM42Links

export const pageQuery = graphql`
  query {
    allPentaxM42LinksJson {
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
