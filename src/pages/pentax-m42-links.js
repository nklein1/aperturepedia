import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Seo from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/pentax_m42_hero.jpg';
import smImg from '../images/pentax_m42_hero_sm.jpg';

const PentaxM42Links = ({data, location}) => {
  const seoData = data.allSeoContentJson.edges[0].node.pentaxM42Links;
  const breadcrumbs = [
    { url: '/', title: 'Aperturepedia' },
    { url: location.pathname, title: seoData.title }
  ];

  return (
    <Layout location={location}>
      <Seo
          title={seoData.title}
          breadcrumbs={breadcrumbs}
          description={seoData.descr}
          keywords={seoData.keywords}
          location={location} />
      <LinkPageContent
          data={data.allPentaxM42LinksJson}
          mdImg={mdImg}
          smImg={smImg}>
      </LinkPageContent>
    </Layout>
  );
}

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
          pentaxM42Links {
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
