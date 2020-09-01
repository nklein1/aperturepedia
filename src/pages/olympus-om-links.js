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

const OlympusOMLinks = (props) => (
  <Layout>
    <SEO
        title={'Olympus OM Links'}
        breadcrumbs={breadcrumbs}
        pathname={props.path} />
    <div className={styles.pageGrid}>
      <div className={styles.gridSummary}>
        <Typography variant={'h4'}>Olympus OM Links</Typography>
        <p>
          Here's a list of helpful links I've found while researching Olympus OM lenses, roughly organized by topic. 
          <br/><br/>
          <em>Some of these pages may be broken or in your non-native language. If they're broken, I'd recommend searching for them on the <a href="https://archive.org/web/" target={'_blank'} rel={'noopener'}>Internet Archive's Wayback Machine</a>. If you need a web page to be translated, I've found <a href="https://translate.google.com/" target={'_blank'} rel={'noopener'}>Google Translate</a> to be a serviceable solution.</em>
          <br/><br/>
          <strong>If you have any links you think should be here, feel free to email them to me.</strong> The contact email address is <strong>this website's name</strong> at <strong>gmail dot com</strong>. <em>(This hint is an effort to minimize spam)</em>
        </p>
      </div>

      <div className={styles.gridImg}>
        <img className={styles.leadImg} src="https://esif.world-traveller.org/om-sif/lensgroup/images/lensposter.jpg" alt="Olympus OM Lens Collection" />
      </div>

      <div className={styles.gridContent}>
        <Typography variant={'h5'}>Olympus Manufacturer History:</Typography>
        <ul className={styles.ul}>
          <li key={'source-https://esif.world-traveller.org/om-sif/concepts.htm'}>
            <a href="https://esif.world-traveller.org/om-sif/concepts.htm" target={'_blank'} rel={'noopener'}>Olympus OM History by Hans van Veluwen</a>
            <em className={styles.helpText}></em>
          </li>
        </ul>

        <Typography variant={'h5'}>Lens Specifications:</Typography>
        <ul className={styles.ul}>
          <li key={'source-https://esif.world-traveller.org/om-sif/lensgroup.htm'}>
            <a href="https://esif.world-traveller.org/om-sif/lensgroup.htm" target={'_blank'} rel={'noopener'}>Guide to Olympus OM lenses by Hans van Veluwen</a>
            <em className={styles.helpText}></em>
          </li>
          <li key={'source-https://esif.world-traveller.org/om-sif/lensgroup/lenstable.htm'}>
            <a href="https://esif.world-traveller.org/om-sif/lensgroup/lenstable.htm" target={'_blank'} rel={'noopener'}>Comparative table of Olympus OM lenses by Hans van Veluwen</a>
            <em className={styles.helpText}></em>
          </li>
          <li key={'source-https://www.mir.com.my/rb/photography/hardwares/classics/olympusom1n2/shared/zuiko/htmls/'}>
            <a href="https://www.mir.com.my/rb/photography/hardwares/classics/olympusom1n2/shared/zuiko/htmls/" target={'_blank'} rel={'noopener'}>Olympus Zuiko Lens Writeups & History at Photography in Malaysia</a>
            <em className={styles.helpText}>A great reference site (need to scroll down to view links to individual lens pages), also has good content for Canon FD and other Lens systems</em>
          </li>
          <li key={'source-http://www.alanwood.net/olympus/#lenses'}>
            <a href="http://www.alanwood.net/olympus/#lenses" target={'_blank'} rel={'noopener'}>Olympus Macro Lenses by Alan Wood</a>
            <em className={styles.helpText}>Source of technical details on Olympus Zuiko macro lenses</em>
          </li>
        </ul>
{/*
        <Typography variant={'h5'}>Olympus OM Lens History:</Typography>
        <ul className={styles.ul}>
          <li key={'source-'}>
            <a href="" target={'_blank'} rel={'noopener'}></a>
            <em className={styles.helpText}></em>
          </li>
        </ul>
*/}
        <Typography variant={'h5'}>Lens Reviews:</Typography>
        <em>
          Here's some good sites I've found with reviews and lens tests of Olympus OM lenses.
        </em>
        <ul className={styles.ul}>
          <li key={'source-https://phillipreeve.net/blog/guide-to-classic-olympus-om-zuiko-lenses-on-film-and-sony-full-frame/'}>
            <a href="https://phillipreeve.net/blog/guide-to-classic-olympus-om-zuiko-lenses-on-film-and-sony-full-frame/" target={'_blank'} rel={'noopener'}>Guide to Olympus OM lenses at Phillipreeve.net</a>
            <em className={styles.helpText}>Great set of brief reviews.</em>
          </li>
          <li key={'source-https://casualphotophile.com/lens-review-index/'}>
            <a href="https://casualphotophile.com/lens-review-index/" target={'_blank'} rel={'noopener'}>Lens Reviews at Casual Photophile</a>
            <em className={styles.helpText}>High quality articles but unfortunately only covering a few Olympus Zuiko Lenses. Highly recommended also for their camera reviews and other articles.</em>
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
        <Typography variant={'h5'}>Additional Olympus OM Resources:</Typography>
        <em>
          Additional pages which didn't fit into the above topics.
        </em>
        <ul className={styles.ul}>
          <li key={'source-http://forum.mflenses.com/manual-focus-lenses-f3.html'}>
            <a href="http://forum.mflenses.com/manual-focus-lenses-f3.html" target={'_blank'} rel={'noopener'}>The Manual Focus Lenses forum at MFLenses.com</a>
            <em className={styles.helpText}>This is the most active forum I've found on the subject of MF lenses of all manufacturers. A good resource.</em>
          </li>
          <li key={'source-https://esif.world-traveller.org/om-sif/lensgroup/lensterms.htm'}>
            <a href="https://esif.world-traveller.org/om-sif/lensgroup/lensterms.htm" target={'_blank'} rel={'noopener'}>Zuiko Lens Terminology by Hans van Veluwen</a>
            <em className={styles.helpText}></em>
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

export default OlympusOMLinks
