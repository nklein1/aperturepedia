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

const NikonFLinks = (props) => (
  <Layout>
    <SEO
        title={'Nikon F Links'}
        breadcrumbs={breadcrumbs}
        pathname={props.path} />
    <div className={styles.pageGrid}>
      <div className={styles.gridSummary}>
        <Typography variant={'h4'}>
          Nikon F Links
        </Typography>
        <p>
          Here's a list of helpful links I've found while researching Nikon F lenses roughly organized by topic. 
          <br/><br/>
          <em>Some of these pages may be broken or in your non-native language. If they're broken, I'd recommend searching for them on the <a href="https://archive.org/web/" target={'_blank'} rel={'noopener'}>Internet Archive's Wayback Machine</a>. If you need a web page to be translated, I've found <a href="https://translate.google.com/" target={'_blank'} rel={'noopener'}>Google Translate</a> to be a serviceable solution.</em>
          <br/><br/>
          <strong>If you have any links you think should be here, feel free to email them to me.</strong> The contact email address is <strong>this website's name</strong> at <strong>gmail dot com</strong>. <em>(This hint is an effort to minimize spam)</em>
        </p>
      </div>

      <div className={styles.gridImg}>
        <img className={styles.leadImg} src="https://i.pinimg.com/originals/ba/7b/a1/ba7ba19c75325b68726eed7aaad7be2d.jpg" alt="Nikon F Lens Collection" />
      </div>


      <div className={styles.gridContent}>

        <Typography variant={'h5'}>Nikon Manufacturer History:</Typography>
        <ul className={styles.ul}>
            <li key={'source-https://imaging.nikon.com/history/'}>
              <a href="https://imaging.nikon.com/history/" target={'_blank'} rel={'noopener'}>Official Nikon Company History</a>
            </li>
        </ul>

        <Typography variant={'h5'}>Lens Specifications:</Typography>
        <ul className={styles.ul}>
          <li key={'source-http://www.photosynthesis.co.nz/nikon/lenses.html'}>
            <a href="http://www.photosynthesis.co.nz/nikon/lenses.html" target={'_blank'} rel={'noopener'}>Roland Vink's Nikon SLR lens table</a>
            <em className={styles.helpText}>(The most comprehensive Nikon SLR spec table I've found so far)</em>
          </li>
          <li key={'source-http://www.destoutz.ch/nikon-f.html'}>
            <a href="http://www.destoutz.ch/nikon-f.html" target={'_blank'} rel={'noopener'}>Richard de Stoutz' Nikon Collection</a>
          </li>
          <li key={'source-http://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/'}>
            <a href="http://www.mir.com.my/rb/photography/companies/nikon/nikkoresources/" target={'_blank'} rel={'noopener'}>Nikon F Resources at Photography in Malaysia Site</a>
          </li>
        </ul>

        <Typography variant={'h5'}>Nikon F-Mount Lens History:</Typography>
        <ul className={styles.ul}>
          <li key={'source-http://www.photosynthesis.co.nz/nikon/lenstype.html'}>
            <a href="http://www.photosynthesis.co.nz/nikon/lenstype.html" target={'_blank'} rel={'noopener'}>Detailed Timeline of Nikon F Lens Versions by Roland Vink</a>
          </li>
          <li key={'source-https://www.cameraquest.com/fhistory.htm'}>
            <a href="https://www.cameraquest.com/fhistory.htm" target={'_blank'} rel={'noopener'}>General Nikon F Lens History by Stephen Gandy</a>
          </li>
        </ul>

        <Typography variant={'h5'}>Lens Reviews:</Typography>
        <em>
          Here's some good sites I've found with a reviews and lens tests of Minolta SR lenses.
        </em>
        <ul className={styles.ul}>
          <li key={'source-https://www.kenrockwell.com/nikon/nikkor.htm#mf'}>
            <a href="https://www.kenrockwell.com/nikon/nikkor.htm#mf" target={'_blank'} rel={'noopener'}>Ken Rockwell's Nikkor Lens Reviews</a>
          </li>
          <li key={'source-https://casualphotophile.com/lens-review-index/'}>
            <a href="https://casualphotophile.com/lens-review-index/" target={'_blank'} rel={'noopener'}>Lens Reviews at Casual Photophile</a>
            <em className={styles.helpText}>High quality articles but their reviews unfortunately only covering a few Nikkor lenses. Highly recommended also for their camera reviews and other articles.</em>
          </li>
          <li key={'source-http://www.momentcorp.com/review/index.html'}>
            <a href="http://www.momentcorp.com/review/index.html" target={'_blank'} rel={'noopener'}>Lens Reviews by Fredrik A. Rasmussen</a>
          </li>
          <li key={'source-http://www.naturfotograf.com/lens_surv.html#top1'}>
            <a href="http://www.naturfotograf.com/lens_surv.html#top1" target={'_blank'} rel={'noopener'}>Lens Survey And Subjective Evaluations by Bjørn Rørslett</a>
          </li>
          <li key={'source-https://matthewdurrphotography.com/lens-reviews/'}>
            <a href="https://matthewdurrphotography.com/lens-reviews/" target={'_blank'} rel={'noopener'}>Lens Reviews by Matthew Durr</a>
          </li>
        </ul>
        <Typography variant={'h5'}>Lens Repair Guides & Manuals:</Typography>
        <em>
          Note: I've often found YouTube to be a good source of disassembly/repair videos. If in doubt, try searching there for your lens.
        </em>
        <ul className={styles.ul}>
          <li key={'source-https://www.youtube.com/results?search_query=nikkor+lens+repair&sp=EgIQAw%253D%253D'}>
            <a href="https://www.youtube.com/results?search_query=nikkor+lens+repair&sp=EgIQAw%253D%253D" target={'_blank'} rel={'noopener'}>Search Results for "Nikkor Lens Repair" playlists on YouTube</a>
          </li>
        </ul>

        <Typography variant={'h5'}>Additional Minolta SR Resources:</Typography>
        <em>
          Additional pages which didn't fit into the above topics.
        </em>
        <ul className={styles.ul}>
          <li key={'source-http://rick_oleson.tripod.com/index-153.html'}>
            <a href="http://rick_oleson.tripod.com/index-153.html" target={'_blank'} rel={'noopener'}>Visual comparison of Non-Ai, Ai and AiS Nikon mounts by Rick Oleson</a>
          </li>
          <li key={'source-https://redbook-jp.com/redbook-e/index.html'}>
            <a href="https://redbook-jp.com/redbook-e/index.html" target={'_blank'} rel={'noopener'}>Nikon Kenkyukai Tokyo</a>
            <em className={styles.helpText}>A collector's club site with interesting information on some specialty Nikkor lenses.</em>
          </li>
          <li key={'source-https://nikongear.net/revival/index.php?PHPSESSID=a88cb8418d61fd1ff8d77f2c5b808d75&board=3.0'}>
            <a href="https://nikongear.net/revival/index.php?PHPSESSID=a88cb8418d61fd1ff8d77f2c5b808d75&board=3.0" target={'_blank'} rel={'noopener'}>Nikon Gear Forum</a>
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

export default NikonFLinks
