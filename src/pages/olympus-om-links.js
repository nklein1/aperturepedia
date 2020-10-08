import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/olympus_om_hero.jpg';
import smImg from '../images/olympus_om_hero_sm.jpg';

const OlympusOMLinks = ({data, location}) => {
  const seoData = data.allSeoContentJson.edges[0].node.olympusOmLinks;
  const breadcrumbs = [
    { url: location.pathname, title: data.title }
  ];

  return (
    <Layout location={location}>
      <SEO
          title={seoData.title}
          breadcrumbs={breadcrumbs}
          description={seoData.descr}
          keywords={seoData.keywords}
          location={location} />
      <LinkPageContent
          data={data.allOlympusOmLinksJson}
          mdImg={mdImg}
          smImg={smImg}>
      </LinkPageContent>
    </Layout>
  );
}

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
    },
    allSeoContentJson {
      edges {
        node {
          olympusOmLinks {
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
