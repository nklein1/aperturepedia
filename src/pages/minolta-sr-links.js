import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/minolta_md_hero.jpg';
import smImg from '../images/minolta_md_hero_sm.jpg';

const description = 'Compare stats for Minolta SR-mount lenses with Aperturepedia\'s lens specs table';
const keywords = 'Aperturepedia Minolta SR Rokkor MC MD lenses lens aperture lenstable table lenslist list SLR cameras';
const breadcrumbs = [
  { url: '/minolta-sr-links/', title:'Minolta SR Links' }
];

const MinoltaSRLinks = (props) => (
  <Layout>
    <SEO
        title={'Minolta SR Links'}
        breadcrumbs={breadcrumbs}
        description={description}
        keywords={keywords}
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