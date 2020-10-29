import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/pentax_k_hero.jpg';
import smImg from '../images/pentax_k_hero_sm.jpg';

const PentaxKLinks = ({data, location}) => {
  const seoData = data.allSeoContentJson.edges[0].node.pentaxKLinks;
  const breadcrumbs = [
    { url: '/', title: 'Aperturepedia' },
    { url: location.pathname, title: seoData.title }
  ];

  return (
    <Layout location={location}>
      <SEO
          title={seoData.title}
          description={seoData.descr}
          keywords={seoData.keywords}
          breadcrumbs={breadcrumbs}
          location={location} />
      <LinkPageContent
          data={data.allPentaxKLinksJson}
          mdImg={mdImg}
          smImg={smImg}>
      </LinkPageContent>
    </Layout>
  )
}

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
    },
    allSeoContentJson {
      edges {
        node {
          pentaxKLinks {
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
