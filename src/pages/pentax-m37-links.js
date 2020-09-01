import React from 'react';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

import { getRandomString } from '../utils/utils';

import styles from './LinksPage.module.scss';

const breadcrumbs = [
  { url: '/', title:'Aperturepedia' }
];

const PentaxM37Links = (props) => (
  <Layout>
    <SEO
        title={'Pentax M37 Links'}
        breadcrumbs={breadcrumbs}
        pathname={props.path} />
    <div className={styles.pageGrid}>
      <div className={styles.gridSummary}>
        <Typography variant={'h4'}>
          Pentax M37 Links
        </Typography>
        <p>
          Here's a list of helpful links I've found while researching Asahi Pentax M37 lenses, roughly organized by topic. 
          <br/><br/>
          <em>Some of these pages may be broken or in your non-native language. If they're broken, I'd recommend searching for them on the <a href="https://archive.org/web/" target={'_blank'} rel={'noopener'}>Internet Archive's Wayback Machine</a>. If you need a web page to be translated, I've found <a href="https://translate.google.com/" target={'_blank'} rel={'noopener'}>Google Translate</a> to be a serviceable solution.</em>
          <br/><br/>
          <strong>If you have any links you think should be here, feel free to email them to me.</strong> The contact email address is <strong>this website's name</strong> at <strong>gmail dot com</strong>. <em>(This hint is an effort to minimize spam)</em>
        </p>
      </div>

      <div className={styles.gridImg}>
        <img className={styles.leadImg} src="https://i.pinimg.com/originals/1e/e6/28/1ee628ef9c8532089867544d64caebf5.jpg" alt="Pentax M37 Lens Collection" />
      </div>

      <div className={styles.gridContent}>
        <Typography variant={'h5'}>Asahi Pentax Manufacturer History:</Typography>
        <ul className={styles.ul}>
          <li key={'source-http://www.ricoh-imaging.co.jp/english/pentax/pentaxhistory/course/'}>
            <a href="http://www.ricoh-imaging.co.jp/english/pentax/pentaxhistory/course/" target={'_blank'} rel={'noopener'}>The Pentax "Course of History" Official Historical Timeline</a>
          </li>
          <li key={'source-https://www.youtube.com/watch?v=y0CRXZ3dX3U'}>
            <a href="https://www.youtube.com/watch?v=y0CRXZ3dX3U" target={'_blank'} rel={'noopener'}>History of Pentax: The Beatles, Tragedy, WW2 (Picture This! Podcast on YouTube)</a>
          </li>
        </ul>

        <Typography variant={'h5'}>Lens Specifications:</Typography>
        <ul className={styles.ul}>
          <li key={'source-https://www.pentaxforums.com/lensreviews/Pentax-Takumar-M37-Screwmount-Primes-c63.html'}>
            <a href="https://www.pentaxforums.com/lensreviews/Pentax-Takumar-M37-Screwmount-Primes-c63.html" target={'_blank'} rel={'noopener'}>M37-Mount Lenses at PentaxForums.com</a>
            <em className={styles.helpText}>Pentax Forums is the best resource I've found for info and reviews on Pentax M37 lenses.</em>
          </li>
          <li key={'source-http://m42lens.com/m42-database-search'}>
            <a href="http://m42lens.com/m42-database-search" target={'_blank'} rel={'noopener'}>M42 Lens DB</a>
            <em className={styles.helpText}>Covers M37 & M42 screwmount lenses, including those not made by Asahi Pentax</em>
          </li>
        </ul>
{/*
        <Typography variant={'h5'}>Asahi Pentax M37 Lens History:</Typography>
        <ul className={styles.ul}>
          <li key={'source-'}>
            <a href="" target={'_blank'} rel={'noopener'}></a>
            <em className={styles.helpText}></em>
          </li>
        </ul>
*/}
        <Typography variant={'h5'}>Lens Reviews:</Typography>
        <em>
          Here's some good sites I've found with reviews and lens tests of Pentax M42 lenses.
        </em>
        <ul className={styles.ul}>
          <li key={'source-https://www.pentaxforums.com/lensreviews/Pentax-Takumar-M37-Screwmount-Primes-c63.html'}>
            <a href="https://www.pentaxforums.com/lensreviews/Pentax-Takumar-M37-Screwmount-Primes-c63.html" target={'_blank'} rel={'noopener'}>M37-Mount Lenses at PentaxForums.com</a>
            <em className={styles.helpText}>I repeated the above link with good reason: Pentax Forums is the best resource I've found for reviews and info on Pentax M37 lenses.</em>
          </li>
        </ul>
{/*
        <Typography variant={'h5'}>Lens Repair Guides & Manuals:</Typography>
        <em>
          Note: I've often found YouTube to be a good source of disassembly/repair videos. If in doubt, try searching there for your lens.
        </em>
        <ul className={styles.ul}>
          <li key={'source-'}>
            <a href="" target={'_blank'} rel={'noopener'}></a>
            <em className={styles.helpText}></em>
          </li>
        </ul>
*/}

        <Typography variant={'h5'}>Additional Pentax M37 Resources:</Typography>
        <em>
          Additional pages which didn't fit into the above topics.
        </em>
        <ul className={styles.ul}>
          <li key={'source-http://forum.mflenses.com/manual-focus-lenses-f3.html'}>
            <a href="http://forum.mflenses.com/manual-focus-lenses-f3.html" target={'_blank'} rel={'noopener'}>The Manual Focus Lenses forum at MFLenses.com</a>
            <em className={styles.helpText}>This is the most active forum I've found on the subject of MF lenses of all manufacturers. A good resource.</em>
          </li>
{/*
          <li key={'source-'}>
            <a href="" target={'_blank'} rel={'noopener'}></a>
            <em className={styles.helpText}></em>
          </li>
*/}
        </ul>
      </div>
    </div>
  </Layout>
)

export default PentaxM37Links
