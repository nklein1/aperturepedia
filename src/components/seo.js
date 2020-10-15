import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import thumbImg from '../images/thumbnail.png';
import favicon from '../images/favicon.png';

function SEO({ description, lang, meta, title, keywords, breadcrumbs, location }) {
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
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon}` },
        { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon}` }
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: canonical,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${thumbImg}`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:url`,
          content: canonical,
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${thumbImg}`,
        }
      ].concat(meta)}
    >
      <script type={'application/ld+json'}>
        {JSON.stringify(schemaJSONLD)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  canonical: PropTypes.string,
  keywords: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  breadcrumbs: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  location: PropTypes.object
}

export default SEO
