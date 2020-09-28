import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/pentax_m37_hero.jpg';
import smImg from '../images/pentax_m37_hero_sm.jpg';

const PentaxM37Links = ({data, path}) => {
  const seoData = data.allSeoContentJson.edges[0].node.pentaxM37Links;
  const breadcrumbs = [
    { url: path, title: data.title }
  ];

  return (
    <Layout>
      <SEO
          title={seoData.title}
          breadcrumbs={breadcrumbs}
          description={seoData.descr}
          keywords={seoData.keywords}
          pathname={path} />
      <LinkPageContent
          data={data.allPentaxM37LinksJson}
          mdImg={mdImg}
          smImg={smImg}>
      </LinkPageContent>
    </Layout>
  );
}

export default PentaxM37Links

export const pageQuery = graphql`
  query {
    allPentaxM37LinksJson {
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
          pentaxM37Links {
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
