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

const CanonFDLinks = (props) => (
  <Layout>
    <SEO
        title={'Canon FD Links'}
        breadcrumbs={breadcrumbs}
        pathname={props.path} />
    <div className={styles.pageGrid}>
      <div className={styles.gridSummary}>
        <Typography variant={'h4'}>
          Canon FD Links
        </Typography>
        <p>
          Here's a list of helpful links I've found while researching Canon FD & FL lenses, roughly organized by topic. 
          <br/><br/>
          <em>Some of these pages may be broken or in your non-native language. If they're broken, I'd recommend searching for them on the <a href="https://archive.org/web/" target={'_blank'} rel={'noopener'}>Internet Archive's Wayback Machine</a>. If you need a web page to be translated, I've found <a href="https://translate.google.com/" target={'_blank'} rel={'noopener'}>Google Translate</a> to be a serviceable solution.</em>
          <br/><br/>
          <strong>If you have any links you think should be here, feel free to email them to me.</strong> The contact email address is <strong>this website's name</strong> at <strong>gmail dot com</strong>. <em>(This hint is an effort to minimize spam)</em>
        </p>
      </div>

      <div className={styles.gridImg}>
        <img className={styles.leadImg} src="https://i.pinimg.com/originals/1e/e6/28/1ee628ef9c8532089867544d64caebf5.jpg" alt="Canon FD Lens Collection" />
      </div>

      <div className={styles.gridContent}>
        <Typography variant={'h5'}>Canon Manufacturer History:</Typography>
        <ul className={styles.ul}>
          <li key={'source-https://global.canon/en/c-museum/history/story05.html'}>
            <a href="https://global.canon/en/c-museum/history/story05.html" target={'_blank'} rel={'noopener'}>"History Hall (1970-1975)" at the Canon Camera Musem</a>
            <em className={styles.helpText}>Canon's official guide to their company history.</em>
          </li>
        </ul>

        <Typography variant={'h5'}>Lens Specifications:</Typography>
        <ul className={styles.ul}>
          <li key={'source-https://global.canon/en/c-museum/lens-series.html'}>
            <a href="https://global.canon/en/c-museum/lens-series.html" target={'_blank'} rel={'noopener'}>"Lens Hall" at the Canon Camera Musem</a>
              <em className={styles.helpText}>Canon's official reference guide for their legacy equipment. A great primary resource used in this site.</em>
          </li>
          <li key={'source-www.canonclassics.com'}>
            <a href="www.canonclassics.com" target={'_blank'} rel={'noopener'}>CanonClassics.com</a>
              <em className={styles.helpText}>A great reference site dedicated to classic Canon cameras and lenses</em>
          </li>
          <li key={'source-http://www.mir.com.my/rb/photography/companies/canon/fdresources/fdlenses/index.htm'}>
            <a href="http://www.mir.com.my/rb/photography/companies/canon/fdresources/fdlenses/index.htm" target={'_blank'} rel={'noopener'}>FD Lens Writeups & History at Photography in Malaysia</a>
              <em className={styles.helpText}>A great reference site, also has good content for Olympus OM and other lens systems</em>
          </li>
          <li key={'source-http://www.mir.com.my/rb/photography/companies/canon/fdresources/fllenses/index.htm'}>
            <a href="http://www.mir.com.my/rb/photography/companies/canon/fdresources/fllenses/index.htm" target={'_blank'} rel={'noopener'}>FL Lens Writeups & History at Photography in Malaysia</a>
          </li>
          <li key={'source-http://web.mit.edu/dennis/www/canon/fd-lens-info.html'}>
            <a href="http://web.mit.edu/dennis/www/canon/fd-lens-info.html" target={'_blank'} rel={'noopener'}>Dennis Baron's Canon FD Lens specs table</a>
          </li>
          <li key={'source-http://www.canon-photography.com/lens-table-fd.htm'}>
            <a href="http://www.canon-photography.com/lens-table-fd.htm" target={'_blank'} rel={'noopener'}>John Waller's Canon FD Lens specs table</a>
          </li>
          <li key={'source-http://artaphot.ch/canon-fd/fd-lenses'}>
            <a href="http://artaphot.ch/canon-fd/fd-lenses" target={'_blank'} rel={'noopener'}>Lens Profiles at Artaphot.ch</a>
            <em className={styles.helpText}>(Note: Not as complete as their Minolta coverage; much of the content is in German, but Google Translate works well here)</em>
          </li>
        </ul>

        <Typography variant={'h5'}>FD-Mount Lens History:</Typography>
        <ul className={styles.ul}>
          <li key={'source-http://www.canon-photography.com/dating.htm'}>
            <a href="http://www.canon-photography.com/dating.htm" target={'_blank'} rel={'noopener'}>Canon Production Years at canon-photography.com</a>
          </li>
        </ul>

        <Typography variant={'h5'}>Lens Reviews:</Typography>
        <em>
          Here's some good sites I've found with a reviews and lens tests of Minolta SR lenses.
        </em>
        <ul className={styles.ul}>
          <li key={'source-https://phillipreeve.net/blog/guide-canon-fd-lenses-digital-age-2/'}>
            <a href="https://phillipreeve.net/blog/guide-canon-fd-lenses-digital-age-2/" target={'_blank'} rel={'noopener'}>"The Guide to Canon FD lenses on the Sony a7 series" by Phillip Reeve</a>
          </li>

          <li key={'source-https://casualphotophile.com/lens-review-index/'}>
            <a href="https://casualphotophile.com/lens-review-index/" target={'_blank'} rel={'noopener'}>Lens Reviews at Casual Photophile</a>
            <em className={styles.helpText}>High quality articles but unfortunately only covering a handful of Canon Lenses. Highly recommended also for their camera reviews and other articles.</em>
          </li>
          <li key={'source-https://www.kenrockwell.com/canon/fd/lenses.htm'}>
            <a href="https://www.kenrockwell.com/canon/fd/lenses.htm" target={'_blank'} rel={'noopener'}>Lens reviews by Ken Rockwell</a>
          </li>
          <li key={'source-https://www.outsidetheshot.com/lens-reviews/'}>
            <a href="https://www.outsidetheshot.com/lens-reviews/" target={'_blank'} rel={'noopener'}>Lens reviews at OutsideTheShot.com</a>
          </li>
        </ul>
{/*
        <Typography variant={'h5'}>Lens Repair Guides & Manuals:</Typography>
        <em>
          Note: I've often found YouTube to be a good source of disassembly/repair videos. If in doubt, try searching there for your lens.
        </em>
        <ul className={styles.ul}>
          <li key={'source-TBDDDD'}>TBD
          </li>
          <li key={'source-'}>
            <a href="" target={'_blank'} rel={'noopener'}></a>
            <em className={styles.helpText}></em>
          </li>
        </ul>
*/}
        <Typography variant={'h5'}>Additional Minolta SR Resources:</Typography>
        <em>
          Additional pages which didn't fit into the above topics.
        </em>
        <ul className={styles.ul}>
          <li key={'source-http://forum.mflenses.com/manual-focus-lenses-f3.html'}>
            <a href="http://forum.mflenses.com/manual-focus-lenses-f3.html" target={'_blank'} rel={'noopener'}>The Manual Focus Lenses forum at MFLenses.com</a>
            <em className={styles.helpText}>This is the most active forum I've found on the subject of MF lenses of all manufacturers. A good resource.</em>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default CanonFDLinks
