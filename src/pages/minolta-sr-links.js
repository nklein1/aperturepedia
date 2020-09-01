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

const MinoltaSRLinks = (props) => (
  <Layout>
    <SEO
        title={'Minolta SR Links'}
        breadcrumbs={breadcrumbs}
        pathname={props.path} />
    <div className={styles.pageGrid}>
      <div className={styles.gridSummary}>
        <Typography variant={'h4'}>
          Minolta SR Links
        </Typography>
        <p>
          Here's a list of helpful links I've found while researching Minolta SR (MC & MD) lenses roughly organized by topic. 
          <br/><br/>
          <em>Some of these pages may be broken or in your non-native language. If they're broken, I'd recommend searching for them on the <a href="https://archive.org/web/" target={'_blank'} rel={'noopener'}>Internet Archive's Wayback Machine</a>. If you need a web page to be translated, I've found <a href="https://translate.google.com/" target={'_blank'} rel={'noopener'}>Google Translate</a> to be a serviceable solution.</em>
          <br/><br/>
          <strong>If you have any links you think should be here, feel free to email them to me.</strong> The contact email address is <strong>this website's name</strong> at <strong>gmail dot com</strong>. <em>(This hint is an effort to minimize spam)</em>
        </p>
      </div>

      <div className={styles.gridImg}>
        <img className={styles.leadImg} src="http://thesybersite.com/public/minolta-md-lenses.jpg" alt="Minolta Lens Collection" />
      </div>

      <div className={styles.gridContent}>
        <Typography variant={'h5'}>Minolta Manufacturer History:</Typography>
        <ul className={styles.ul}>
            <li key={'source-http://www.subclub.org/minman/history.htm'}>
              <a href="http://www.subclub.org/minman/history.htm" target={'_blank'} rel={'noopener'}>Minolta History at Minman</a>
            </li>
        </ul>

        <Typography variant={'h5'}>Lens Specifications:</Typography>
        <ul className={styles.ul}>
          <li key={'source-http://minolta.eazypix.de/lenses'}>
            <a href="http://minolta.eazypix.de/lenses" target={'_blank'} rel={'noopener'}>Dennis Lohmann's Minolta Lens specs table</a>
            <em className={styles.helpText}>(The definitive Minolta SR mount spec table created by Dennis Lohman and the inspiration for this site)</em>
          </li>
          <li key={'source-http://artaphot.ch/minolta-sr/objektive'}>
            <a href="http://artaphot.ch/minolta-sr/objektive" target={'_blank'} rel={'noopener'}>Lens Writeups at Artaphot.ch</a>
            <em className={styles.helpText}>(Note: Most lens pages have links to great comparison tests; much of the content is in German, but Google Translate works well here)</em>
          </li>
          <li key={'source-http://www.subclub.org/minman/length.htm'}>
            <a href="http://www.subclub.org/minman/length.htm" target={'_blank'} rel={'noopener'}>Lens Writeups at Minman</a>
          </li>
          <li key={'source-http://www.massimoscottinelweb.com/Minolta%20produz.obiettivi.htm'}>
            <a href="http://www.massimoscottinelweb.com/Minolta%20produz.obiettivi.htm" target={'_blank'} rel={'noopener'}>"MINOLTA - Tabella comparativa produzione obiettivi manualfocus" by Massimo Scotti</a>
            <em className={styles.helpText}>(Note: image-based text is in Italian, so Google Translate isn't as helpful here)</em>
          </li>
        </ul>

        <Typography variant={'h5'}>SR-Mount Lens History:</Typography>
        <ul className={styles.ul}>
          <li key={'source-http://minolta.eazypix.de/lenses'}>
            <a href="http://minolta.eazypix.de/lenses/" target={'_blank'} rel={'noopener'}>A great visual writeup by Dennis Lohmann showing/explaining the different Minolta Lens Versions</a>
            <em className={styles.helpText}>(scroll below the lens specs table to see the "Lens Classification" section)</em>
          </li>
          <li key={'source-http://thesybersite.com/minolta/historical/Minolta_Lens_Chronology.htm'}>
            <a href="http://thesybersite.com/minolta/historical/Minolta_Lens_Chronology.htm" target={'_blank'} rel={'noopener'}>RED Bailey’s Minolta Collection</a>
            <em className={styles.helpText}>A historical timeline of all Minolta & Chiyoda Kogaku lenses made for the SR mount.</em>
          </li>
          <li key={'source-http://www.rokkorfiles.com/Lens%20History.html'}>
            <a href="http://www.rokkorfiles.com/Lens%20History.html" target={'_blank'} rel={'noopener'}>"A Brief History of Minolta lenses" at Rokkorfiles.com</a>
          </li>
        </ul>

        <Typography variant={'h5'}>Lens Reviews:</Typography>
        <em>
          Here's some good sites I've found with a reviews and lens tests of Minolta SR lenses.
        </em>
        <ul className={styles.ul}>
          <li key={'source-http://artaphot.ch/minolta-sr/objektive'}>
            <a href="http://artaphot.ch/minolta-sr/objektiv-vergleiche" target={'_blank'} rel={'noopener'}>Minolta Lens Guide at Artaphot.ch</a>
            <em className={styles.helpText}>(Note: Most content is in German, but Google Translate works well here)</em>
          </li>
          <li key={'source-http://www.rokkorfiles.com/Lens%20Reviews.html'}>
            <a href="http://www.rokkorfiles.com/Lens%20Reviews.html" target={'_blank'} rel={'noopener'}>Lens reviews at Rokkorfiles</a>
          </li>
          <li key={'source-https://lensqaworks.com'}>
            <a href="https://lensqaworks.com/" target={'_blank'} rel={'noopener'}>Minolta Lens Reviews at Lens QA Works</a>
          </li>
          <li key={'source-https://casualphotophile.com/lens-review-index/'}>
            <a href="https://casualphotophile.com/lens-review-index/" target={'_blank'} rel={'noopener'}>Minolta Lens Reviews at Casual Photophile</a>
            <em className={styles.helpText}>High quality articles but unfortunately only covering a handful of Minolta Lenses. Highly recommended also for their camera reviews and other articles.</em>
          </li>
          <li key={'source-https://vintagelensreviews.com/'}>
            <a href="https://vintagelensreviews.com/" target={'_blank'} rel={'noopener'}>Minolta Lens Reviews and Lens Tests at Vintage Lens Reviews</a>
          </li>
          <li key={'source-https://phillipreeve.net/blog/lenses/minolta-mcmd'}>
            <a href="https://phillipreeve.net/blog/lenses/minolta-mcmd/" target={'_blank'} rel={'noopener'}>Minolta MC/MD Articles/Reviews at Phillip Reeve.com</a>
          </li>
          <li key={'source-https://phillipreeve.net/blog/manual-minolta-lens-ratings/'}>
            <a href="https://phillipreeve.net/blog/manual-minolta-lens-ratings/" target={'_blank'} rel={'noopener'}>"The rated List of Minolta MD/MC Lenses on the Sony a7" by Phillip Reeve</a>
          </li>
          <li key={'source-http://minolta.eazypix.de/lenses/indexTEST.html'}>
            <a href="http://minolta.eazypix.de/lenses/indexTEST.html" target={'_blank'} rel={'noopener'}>Lens Performance Tests by Dennis Lohmann</a>
          </li>
          <li key={'source-http://www.paulfvs.dds.nl/lenstest.html'}>
            <a href="https://web.archive.org/web/20070221091305/http://www.paulfvs.dds.nl/lenstest.html" target={'_blank'} rel={'noopener'}>MC and MD lens tests in Dutch photography magazines</a>
            <em className={styles.helpText}>(From www.paulfvs.dds.nl via the Internet Archive)</em>
          </li>
        </ul>
        <Typography variant={'h5'}>Lens Repair Guides & Manuals:</Typography>
        <em>
          Note: I've often found YouTube to be a good source of disassembly/repair videos. If in doubt, try searching there for your lens.
        </em>
        <ul className={styles.ul}>
          <li key={'source-https://www.youtube.com/playlist?list=PLWUxAx7ODw3sMT6V2XrQQb2xztW9lSHtQ'}>
            <a href="https://www.youtube.com/playlist?list=PLWUxAx7ODw3sMT6V2XrQQb2xztW9lSHtQ" target={'_blank'} rel={'noopener'}>Lens Disassembly Guides by Matt Bierner on YouTube</a>
          </li>
          <li key={'source-http://minolta.eazypix.de/lr/indexLR.html'}>
            <a href="http://minolta.eazypix.de/lr/indexLR.html" target={'_blank'} rel={'noopener'}>Some Minolta SR lens repair guides preserved by Dennis Lohmann</a>
            <em className={styles.helpText}>(Original text is in Japanese, but Google Translate can help with that)</em>
          </li>
          <li key={'source-https://www.butkus.org/chinon/minolta.htm'}>
            <a href="https://www.butkus.org/chinon/minolta.htm" target={'_blank'} rel={'noopener'}>Minolta Camera & Lens manuals preserved by M. Butkus</a>
          </li>
          <li key={'source-http://web.archive.org/web/20011206114400/www.geocities.com/eskoufos/fmm.html'}>
            <a href="http://web.archive.org/web/20011206114400/www.geocities.com/eskoufos/fmm.html" target={'_blank'} rel={'noopener'}>A list of some free Minolta manuals</a>
            <em className={styles.helpText}>(From www.geocities.com/eskoufos via the Internet Archive)</em>
          </li>
        </ul>

        <Typography variant={'h5'}>Additional Minolta SR Resources:</Typography>
        <em>
          Additional pages which didn't fit into the above topics.
        </em>
        <ul className={styles.ul}>
          <li key={'source-http://minolta.eazypix.de/shades/lensshades.html'}>
            <a href="http://minolta.eazypix.de/shades/lensshades.html" target={'_blank'} rel={'noopener'}>A list of Minolta OEM lens shades for SR-mount lenses by Dennis Lohmann</a>
          </li>
          <li key={'source-http://forum.mflenses.com/manual-focus-lenses-f3.html'}>
            <a href="http://forum.mflenses.com/manual-focus-lenses-f3.html" target={'_blank'} rel={'noopener'}>The Manual Focus Lenses forum at MFLenses.com</a>
            <em className={styles.helpText}>This is the most active forum I've found on the subject of MF lenses of all manufacturers. A good resource.</em>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default MinoltaSRLinks
