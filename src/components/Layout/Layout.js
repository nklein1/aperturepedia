import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';

import Header from '../Header/Header';
import styles from  './Layout.module.scss';

const Layout = ({ children, title, pathname }) => {
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
    <div className={styles.container}>
      <Header siteTitle={data.site.siteMetadata.title} pathname={pathname} />
      <div className={styles.content}>
        <Typography variant={'h5'} className={styles.title}>
          {title}
        </Typography>
        {children}
      </div>
    </div>
  )
}

// <footer className={styles.footer}>
//   © {new Date().getFullYear()} Nick Klein. Built with&nbsp;
//   <a href="https://www.gatsbyjs.org" rel={'noopener noreferrer nofollow'} target={'_blank'}>Gatsby</a>
// </footer>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
