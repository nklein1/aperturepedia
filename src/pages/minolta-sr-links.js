import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/minolta_md_hero.jpg';
import smImg from '../images/minolta_md_hero_sm.jpg';

const breadcrumbs = [
  { url: '/', title:'Aperturepedia' }
];

const MinoltaSRLinks = (props) => (
  <Layout>
    <SEO
        title={'Minolta SR Links'}
        breadcrumbs={breadcrumbs}
        pathname={props.path} />
      <LinkPageContent
        data={props.data.allMinoltaSrLinksJson}
        mdImg={mdImg}
        smImg={smImg}>
      </LinkPageContent>
  </Layout>
)

export default MinoltaSRLinks

export const pageQuery = graphql`
  query {
    allMinoltaSrLinksJson {
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