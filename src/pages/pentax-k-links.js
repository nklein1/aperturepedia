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

const PentaxKLinks = (props) => (
  <Layout>
    <SEO
        title={'Pentax K Links'}
        breadcrumbs={breadcrumbs}
        pathname={props.path} />
    <div className={styles.pageGrid}>
      <div className={styles.gridSummary}>
        <Typography variant={'h4'}>
          Pentax K Links
        </Typography>
        <p>
          Here's a list of helpful links I've found while researching Pentax K lenses, roughly organized by topic. 
          <br/><br/>
          <em>Some of these pages may be broken or in your non-native language. If they're broken, I'd recommend searching for them on the <a href="https://archive.org/web/" target={'_blank'} rel={'noopener'}>Internet Archive's Wayback Machine</a>. If you need a web page to be translated, I've found <a href="https://translate.google.com/" target={'_blank'} rel={'noopener'}>Google Translate</a> to be a serviceable solution.</em>
          <br/><br/>
          <strong>If you have any links you think should be here, feel free to email them to me.</strong> The contact email address is <strong>this website's name</strong> at <strong>gmail dot com</strong>. <em>(This hint is an effort to minimize spam)</em>
        </p>
      </div>

      <div className={styles.gridImg}>
        <img className={styles.leadImg} src="https://i.pinimg.com/originals/1e/e6/28/1ee628ef9c8532089867544d64caebf5.jpg" alt="Pentax K Lens Collection" />
      </div>

      <div className={styles.gridContent}>
        <Typography variant={'h5'}>Pentax Manufacturer History:</Typography>
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
          <li key={'source-http://kmp.pentaxians.eu/lenses/'}>
            <a href="http://kmp.pentaxians.eu/lenses/" target={'_blank'} rel={'noopener'}>Guide to Pentax K-mount lenses at Pentaxians.eu</a>
            <em className={styles.helpText}>Great guide, served as a primary source of data for the K-mount table on this site.</em>
          </li>
          <li key={'source-https://www.pentaxforums.com/lensreviews/Pentax-K-Mount-Lenses-i1.html'}>
            <a href="https://www.pentaxforums.com/lensreviews/Pentax-K-Mount-Lenses-i1.html" target={'_blank'} rel={'noopener'}>K-Mount Lenses at PentaxForums.com</a>
            <em className={styles.helpText}>A highly-active Pentax forum with extensive lens profiles including specs and user-submitted reviews. A highly-recommended resource for all Pentax equipment.</em>
          </li>
          <li key={'source-http://kmp.pentaxians.eu/lenses/resolution/'}>
            <a href="http://kmp.pentaxians.eu/lenses/resolution/" target={'_blank'} rel={'noopener'}>Lens Resolution tests at Pentaxians.eu</a>
            <em className={styles.helpText}></em>
          </li>
        </ul>

        <Typography variant={'h5'}>Pentax K-Mount Lens History:</Typography>
        <ul className={styles.ul}>
          <li key={'source-http://kmp.pentaxians.eu/technology/summary/'}>
            <a href="http://kmp.pentaxians.eu/technology/summary/" target={'_blank'} rel={'noopener'}>"Summary of the K-Mount Evolution, Names, and Features" at Pentaxians.eu</a>
            <em className={styles.helpText}></em>
          </li>
        </ul>

        <Typography variant={'h5'}>Lens Reviews:</Typography>
        <em>
          Here's some good sites I've found with reviews and lens tests of Pentax M42 lenses.
        </em>
        <ul className={styles.ul}>
          <li key={'source-https://www.pentaxforums.com/lensreviews/Pentax-K-Mount-Lenses-i1.html'}>
            <a href="https://www.pentaxforums.com/lensreviews/Pentax-K-Mount-Lenses-i1.html" target={'_blank'} rel={'noopener'}>K-Mount Lenses at PentaxForums.com</a>
            <em className={styles.helpText}>A highly-active Pentax forum with extensive lens profiles including specs and user-submitted reviews. A highly-recommended resource for all Pentax equipment.</em>
          </li>
          <li key={'source-https://casualphotophile.com/lens-review-index/'}>
            <a href="https://casualphotophile.com/lens-review-index/" target={'_blank'} rel={'noopener'}>Lens Reviews at Casual Photophile</a>
            <em className={styles.helpText}>High quality articles but unfortunately only covering a few Pentax lenses. Highly recommended also for their camera reviews and other articles.</em>
          </li>
          <li key={'source-https://www.kenrockwell.com/pentax/index.htm#smc'}>
            <a href="https://www.kenrockwell.com/pentax/index.htm#smc" target={'_blank'} rel={'noopener'}>Pentax K Lens reviews from Ken Rockwell</a>
            <em className={styles.helpText}>Unfortunately only covers a few Pentax lenses.</em>
          </li>
        </ul>

        <Typography variant={'h5'}>Lens Repair Guides & Manuals:</Typography>
        <em>
          Note: I've often found YouTube to be a good source of disassembly/repair videos. If in doubt, try searching there for your lens.
        </em>
        <ul className={styles.ul}>
          <li key={'source-http://www.pentax-manuals.com/literature/literature.htm'}>
            <a href="http://www.pentax-manuals.com/literature/literature.htm" target={'_blank'} rel={'noopener'}>PDF Manuals at Pentax-Manuals.com</a>
            <em className={styles.helpText}>(Contains user manuals and pamphlets for various Pentax cameras and lenses. (PDFs are password-protected, the password for all PDFs is "Pentax")</em>
          </li>
        </ul>

        <Typography variant={'h5'}>Additional Pentax K Resources:</Typography>
        <em>
          Additional pages which didn't fit into the above topics.
        </em>
        <ul className={styles.ul}>
          <li key={'source-https://www.pentaxforums.com/forums/54-pentax-lens-articles/84876-guide-pentax-k-series-lens-hoods.html'}>
            <a href="https://www.pentaxforums.com/forums/54-pentax-lens-articles/84876-guide-pentax-k-series-lens-hoods.html" target={'_blank'} rel={'noopener'}>Guide to K-mount lens hoods at PentaxForums.com</a>
          </li>
          <li key={'source-http://kmp.pentaxians.eu/technology/smc/'}>
            <a href="http://kmp.pentaxians.eu/technology/smc/" target={'_blank'} rel={'noopener'}>Short explanation of Pentax Super-Multi Coating at Pentaxians.eu</a>
          </li>
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

export default PentaxKLinks
