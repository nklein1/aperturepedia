import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/canon_fd_hero.jpg';
import smImg from '../images/canon_fd_hero_sm.jpg';

const CanonFDLinks = ({data, location}) => {
  const seoData = data.allSeoContentJson.edges[0].node.canonFdLinks;
  const breadcrumbs = [
    { url: location.pathname, title: data.title }
  ];
  return (
    <Layout>
      <SEO
          title={seoData.title}
          breadcrumbs={breadcrumbs}
          description={seoData.descr}
          keywords={seoData.keywords}
          location={location} />
      <LinkPageContent
          data={data.allCanonFdLinksJson}
          mdImg={mdImg}
          smImg={smImg}>
      </LinkPageContent>
    </Layout>
  );
}

export default CanonFDLinks

export const pageQuery = graphql`
  query {
    allCanonFdLinksJson {
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
          canonFdLinks {
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
