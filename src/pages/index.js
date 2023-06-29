import React from 'react';
import { Link } from 'gatsby';
// import { Typography } from '@mui/material';
import { Typography } from '@mui/material';
import { OutboundLink } from "gatsby-plugin-google-gtag";

import Layout from '../components/Layout/Layout';
import Seo from '../components/seo';

import * as styles from './index.module.scss';

const description = 'Aperturepedia is a comprehensive guide to vintage SLR lenses made by Minolta, Nikon, Canon, Pentax, Olympus & Konica, with databases of lens specs plus links to other sites with lens reviews and other helpful info.';
const breadcrumbs = [
  { url: '/', title: 'Aperturepedia' }
];

const sources = [
  'http://forum.mflenses.com/manual-focus-lenses-f3.html',
  'http://minolta.eazypix.de/lenses',
  'https://lens.ws/',
  'http://artaphot.ch/minolta-sr/objektive/',
  'https://www.mir.com.my/rb/photography/',
  'https://www.pentaxforums.com/lensreviews/',
  'http://kmp.pentaxians.eu/lenses/',
  'http://www.photosynthesis.co.nz/nikon/',
  'http://www.destoutz.ch/nikon-f.html',
  'https://casualphotophile.com/lens-review-index/',
  'https://global.canon/en/c-museum/lens-series.html',
  'http://allphotolenses.com/lenses/a.html',
  'http://web.mit.edu/dennis/www/canon/fd-lens-info.html',
  'http://konicafiles.com/3-hexanon-ar-lenses/-comparative-table/',
  'http://www.buhla.de/Foto/Konica/eHexanonUebersicht.html',
  'http://www.aohc.it/catalogo.php?catalogo=obiettivi',
  'http://www.willker.de/wie/texte/takumar.html',
];

const links = [
  { path: '/minolta-sr/', name: 'Minolta Rokkor SR (MC/MD)' },
  { path: '/nikon-f/', name: 'Nikon Nikkor F' },
  { path: '/canon-fd/', name: 'Canon FD & FL' },
  { path: '/pentax-k/', name: 'Pentax K' },
  { path: '/pentax-m42/', name: 'Pentax Takumar M42' },
  { path: '/pentax-m37/ ', name: 'Asahi Pentax Takumar M37' },
  { path: '/olympus-om/', name: 'Olympus Zuiko OM' },
  { path: '/konica-ar/', name: 'Konica Hexanon / Hexar AR' }
];

const IndexPage = (props) => (
  <Layout location={props.location}>
    <Seo
        title={'Home'}
        description={description}
        breadcrumbs={breadcrumbs}
        pathname={props.path}
        location={props.location} />
    <div className={styles.indexWrapper}>
      <div className={styles.row}>
        <div className={styles.colLeft}>
          <Typography variant={'h3'}>
            Welcome to Aperturepedia
          </Typography>
        </div>
        <div className={styles.colRight}>
          <span>
            Aperturepedia collects data on various vintage first-party SLR lenses in one easy-to-reference site.
            <br /><br/>
            The goal here is to provide a free resource with long-term support for referencing and comparing specs for most vintage first-party camera lenses, as well as a repository for helpful links to other sites which may not immediately come up in Google, or Wayback Machine-cached dead sites (RIP Geocities). Those of you who are seeking to break into adapting vintage glass on your mirrorless camera or expand your legacy lens collection can find easy-to-parse comparison charts for the lens systems listed below.
            <br /><br/>
            <strong>It's very much a work in progress</strong>, and any feedback on features or enhancements are welcome.<br/>
            The contact email address is <strong>this website's name</strong> at <strong>gmail dot com</strong>. <em>(This hint is an effort to minimize spam)</em>

            <br /><br/>
            <strong>Furthermore you can also&nbsp;
            <OutboundLink href={'https://forms.gle/Dvzx3j1gs5faUoPt5'} target={'_blank'} rel={'noopener noreferrer'}>
              take our short User Survey
            </OutboundLink>
            &nbsp;to help me gather data on what site improvements users will find most useful.</strong>
          </span>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.colLeft}>
          <Typography variant={'h5'}>Currently Supported Lenses:</Typography>
        </div>
        <div className={styles.colRight}>
          <ul>
            {links.map(node => (
              <li key={'link-' + node.path}>
                <Link to={node.path}>{node.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.colLeft}>
          <Typography variant={'h5'}>Credits:</Typography>
        </div>
        <div className={styles.colRight}>
          <span>
            Aperturepedia itself was built by <a href={'https://github.com/nklein1'} target={'_blank'} rel={'noopener noreferrer'}>Nick Klein</a>, with data aggregated from a number of online resources. In addition to listing these resources on each lens system's "Links" page, here's a short list of sites which were especially instrumental in the success of this site.
          </span>
          <ul>
            {sources.map(node => (
              <li key={'source-' + node}>
                <OutboundLink href={node} target={'_blank'} rel={'noopener noreferrer'}>
                  {node}
                </OutboundLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.colLeft}>
          <Typography variant={'h5'}>Contributions:</Typography>
        </div>
        <div className={styles.colRight}>
          <span>
            Want to get involved? I'm open to collaborate with anyone who's interested in contributing. Feel free to contact me at the email address above.
          </span>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
