import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import styles from  './Layout.module.scss';

const Layout = ({children, location}) => {
  return (
    <div className={styles.container}>
      <Header location={location} />
      <div className={styles.content}>
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
