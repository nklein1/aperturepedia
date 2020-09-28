import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import LinkPageContent from '../components/LinkPageContent/LinkPageContent';
import mdImg from '../images/nikon_f_hero.jpg';
import smImg from '../images/nikon_f_hero_sm.jpg';

const NikonFLinks = ({data, path}) => {
  const seoData = data.allSeoContentJson.edges[0].node.nikonFLinks;
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
          data={data.allNikonFLinksJson}
          mdImg={mdImg}
          smImg={smImg}>
      </LinkPageContent>
    </Layout>
  );
}

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
    },
    allSeoContentJson {
      edges {
        node {
          nikonFLinks {
            title
            descr
            keywords
          }
        }
      }
    }
  }
`
