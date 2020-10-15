import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/minolta_md_hero.jpg';
import smImg from '../images/minolta_md_hero_sm.jpg';

const MinoltaSRLinks = ({data, location}) => {
  const seoData = data.allSeoContentJson.edges[0].node.minoltaSrLinks;
  const breadcrumbs = [
    { url: '/', title: 'Aperturepedia' },
    { url: location.pathname, title: seoData.title }
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
          data={data.allMinoltaSrLinksJson}
          mdImg={mdImg}
          smImg={smImg}>
        </LinkPageContent>
    </Layout>
  );
}

export default MinoltaSRLinks

export const pageQuery = graphql`
  query TestQuery {
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
    },
    allSeoContentJson {
      edges {
        node {
          minoltaSrLinks {
            title
            descr
            keywords
          }
        }
      }
    }
  }
`