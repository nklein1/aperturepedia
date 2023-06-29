import React from 'react';
import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import thumbImg from '../images/thumbnail.png';
import favicon from '../images/favicon.png';

function Seo({ description, lang, meta, title, keywords, breadcrumbs, location }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaUrl = site.siteMetadata.siteUrl;
  const metaDescription = description || site.siteMetadata.description;
  const metaKeywords = keywords || site.siteMetadata.keywords;
  const canonical = location ? `${site.siteMetadata.siteUrl}${location.pathname}` : null;


  // const seo = { // TODO: REfactor aboce consts to this
  //   title: title,
  //   description: description || site.siteMetadata.description,
  //   keywords: keywords || site.siteMetadata.keywords
  //   image: `${siteUrl}${image}`,
  //   url: `${siteUrl}${pathname || ``}`,
  //   twitterUsername,
  // }

  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      'url': metaUrl,
      'name': title,
      'description': metaDescription,
      "inLanguage": "en-US"
    }
  ];

  const schemaJSONLD = breadcrumbs ? [
    ...baseSchema,
    {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((breadcrumb, index) => (
        {
          '@type': 'ListItem',
          'position': index,
          'item': {
            '@type': 'WebSite',
            '@id': metaUrl + breadcrumb.url,
            'url': metaUrl + breadcrumb.url,
            'name': breadcrumb.title
          }
        }
      ))
    }
  ] : baseSchema;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content={`website`} />
      <meta name="og:url" content={canonical} />
      <meta name="og:image" content={site.siteMetadata.siteUrl + thumbImg} />
      <meta name="image" content={site.siteMetadata.siteUrl + thumbImg} />
      <meta name="twitter:card" content={`summary`} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:image" content={site.siteMetadata.siteUrl + thumbImg} />

      <link rel="icon" href="image/png" />
      
      <script type={'application/ld+json'}>
        {JSON.stringify(schemaJSONLD)}
      </script>
    </>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  canonical: PropTypes.string,
  keywords: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  breadcrumbs: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  location: PropTypes.object
}

export default Seo
