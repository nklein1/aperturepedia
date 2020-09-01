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

const KonicaARLinks = (props) => (
  <Layout>
    <SEO
        title={'Konica AR Links'}
        breadcrumbs={breadcrumbs}
        pathname={props.path} />
    <div className={styles.pageGrid}>
      <div className={styles.gridSummary}>
        <Typography variant={'h4'}>Konica AR Links</Typography>
        <p>
          Here's a list of helpful links I've found while researching Konica AR lenses, roughly organized by topic. 
          <br/><br/>
          <em>Some of these pages may be broken or in your non-native language. If they're broken, I'd recommend searching for them on the <a href="https://archive.org/web/" target={'_blank'} rel={'noopener'}>Internet Archive's Wayback Machine</a>. If you need a web page to be translated, I've found <a href="https://translate.google.com/" target={'_blank'} rel={'noopener'}>Google Translate</a> to be a serviceable solution.</em>
          <br/><br/>
          <strong>If you have any links you think should be here, feel free to email them to me.</strong> The contact email address is <strong>this website's name</strong> at <strong>gmail dot com</strong>. <em>(This hint is an effort to minimize spam)</em>
        </p>
      </div>

      <div className={styles.gridImg}>
        <img className={styles.leadImg} src="https://i.pinimg.com/originals/1e/e6/28/1ee628ef9c8532089867544d64caebf5.jpg" alt="Konica AR Lens Collection" />
      </div>

      <div className={styles.gridContent}>
        <Typography variant={'h5'}>Konica Manufacturer History:</Typography>
        <ul className={styles.ul}>
          <li key={'source-http://konicafiles.com/-a-bit-of-history/'}>
            <a href="http://konicafiles.com/-a-bit-of-history/" target={'_blank'} rel={'noopener'}>Konica History at Konicafiles.com</a>
            <em className={styles.helpText}></em>
          </li>
{/*
          <li key={'source-'}>
            <a href="" target={'_blank'} rel={'noopener'}></a>
            <em className={styles.helpText}></em>
          </li>
*/}
        </ul>

        <Typography variant={'h5'}>Lens Specifications:</Typography>
        <ul className={styles.ul}>
          <li key={'source-http://konicafiles.com/3-hexanon-ar-lenses/-comparative-table/'}>
            <a href="http://konicafiles.com/3-hexanon-ar-lenses/-comparative-table/" target={'_blank'} rel={'noopener'}>Comparative table of AR lenses at Konicafiles.com</a>
            <em className={styles.helpText}></em>
          </li>
          <li key={'source-http://www.buhla.de/Foto/Konica/eHexanonUebersicht.html'}>
            <a href="http://www.buhla.de/Foto/Konica/eHexanonUebersicht.html" target={'_blank'} rel={'noopener'}>Guide to Hexanon/Hexar lenses by Andreas Buhl</a>
            <em className={styles.helpText}>Mr. Buhl has created profile pages for each lens listed with specifications, photos, and subjective analysis. A great resource.</em>
          </li>
        </ul>

        <Typography variant={'h5'}>Konica AR Lens History:</Typography>
        <ul className={styles.ul}>
          <li key={'source-http://konicafiles.com/3-hexanon-ar-lenses/-lens-types/'}>
            <a href="http://konicafiles.com/3-hexanon-ar-lenses/-lens-types/" target={'_blank'} rel={'noopener'}>"The Konica AR System" at Konicafiles.com</a>
            <em className={styles.helpText}>Great writeup of the AR system and its evolution</em>
          </li>
          <li key={'source-http://konicafiles.com/3-hexanon-ar-lenses/time-of-production/'}>
            <a href="http://konicafiles.com/3-hexanon-ar-lenses/time-of-production/" target={'_blank'} rel={'noopener'}>Konica AR Lens Production TImeline at Konicafiles.com</a>
            <em className={styles.helpText}></em>
          </li>
          <li key={'source-http://www.buhla.de/Foto/Konica/eHexanonHaupt.html'}>
            <a href="http://www.buhla.de/Foto/Konica/eHexanonHaupt.html" target={'_blank'} rel={'noopener'}>Konica Hexanon/Hexar lens Overview by Andreas Buhl</a>
            <em className={styles.helpText}></em>
          </li>
        </ul>

        <Typography variant={'h5'}>Lens Reviews:</Typography>
        <em>
          Here's some good sites I've found with reviews and lens tests of Konica AR lenses.
        </em>
        <ul className={styles.ul}>
          <li key={'source-http://artaphot.ch/konica-ar/objektive'}>
            <a href="http://artaphot.ch/konica-ar/objektive" target={'_blank'} rel={'noopener'}>Konica Lens Guide at Artaphot.ch</a>
            <em className={styles.helpText}>(Note: Most content is in German, but Google Translate works well here)</em>
          </li>
        </ul>

        <Typography variant={'h5'}>Lens Repair Guides & Manuals:</Typography>
        <em>
          Note: I've often found YouTube to be a good source of disassembly/repair videos. If in doubt, try searching there for your lens.
        </em>
        <ul className={styles.ul}>
          <li key={'source-https://www.butkus.org/chinon/konica.htm'}>
            <a href="https://www.butkus.org/chinon/konica.htm" target={'_blank'} rel={'noopener'}>Assorted Konica PDF Manuals by Mike Butkus</a>
            <em className={styles.helpText}>Most are camera manuals, but towards the bottom of the page there is one or two documents specific to Konica lenses</em>
          </li>
        </ul>
        <Typography variant={'h5'}>Additional Konica AR Resources:</Typography>
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

export default KonicaARLinks
