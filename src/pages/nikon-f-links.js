import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/nikon_f_hero.jpg';
import smImg from '../images/nikon_f_hero_sm.jpg';

const description = 'Aperturepedia\'s list of reviews and other helpful links for Nikon F-mount lenses used in Nikon 35mm interchangeable lens SLR cameras';
const breadcrumbs = [
  { url: '/nikon-f-links/', title:'Nikon F Links' }
];

const NikonFLinks = (props) => (
  <Layout>
    <SEO
        title={'Nikon F Links'}
        breadcrumbs={breadcrumbs}
        description={description}
        pathname={props.path} />
    <LinkPageContent
        data={props.data.allNikonFLinksJson}
        mdImg={mdImg}
        smImg={smImg}>
    </LinkPageContent>
  </Layout>
)

export default NikonFLinks

export const pageQuery = graphql`
  query {
    allNikonFLinksJson {
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
