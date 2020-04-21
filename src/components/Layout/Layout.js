/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';

import Header from '../Header/Header';
import styles from  './layout.module.scss';

const Layout = ({ children, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={styles.container}>

        <Typography variant={'h5'} className={styles.title}>
          {title}
        </Typography>
        <main>{children}</main>
        <footer className={styles.footer}>
          © {new Date().getFullYear()} Nick Klein. Built with&nbsp;
          <a href="https://www.gatsbyjs.org" rel={'noopener noreferrer nofollow'} target={'_blank'}>Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
