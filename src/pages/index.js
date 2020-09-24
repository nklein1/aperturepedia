import React from 'react';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

const description = 'Aperturepedia is a comprehensive guide to vintage SLR lenses made by Minolta, Nikon, Canon, Pentax, Olympus & Konica. Contains lens specs tables and links to lens reviews and other sites with helpful info.';
const breadcrumbs = [
  { url: '/', title:'Aperturepedia' }
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
  'http://allphotolenses.com/lenses/a.html',
  'https://global.canon/en/c-museum/lens-series.html',
  'http://web.mit.edu/dennis/www/canon/fd-lens-info.html',
  'http://konicafiles.com/3-hexanon-ar-lenses/-comparative-table/',
  'http://www.buhla.de/Foto/Konica/eHexanonUebersicht.html',
  'http://www.aohc.it/catalogo.php?catalogo=obiettivi',
  'http://www.willker.de/wie/texte/takumar.html',
];

const links = [
  { path: '/minolta-sr/', name: 'Minolta SR (Rokkor)' },
  { path: '/nikon-f/', name: 'Nikon F (Nikkor)' },
  { path: '/canon-fd/', name: 'Canon FD' },
  { path: '/pentax-k/', name: 'Pentax K' },
  { path: '/pentax-m42/', name: 'Pentax Takumar M42' },
  { path: '/pentax-m37/ ', name: 'Asahi Pentax Takumar M37' },
  { path: '/olympus-om/', name: 'Olympus Zuiko OM' },
  { path: '/konica-ar/', name: 'Konica Hexanon / Hexar AR' }
];

const IndexPage = (props) => (
  <Layout>
    <SEO
        title={'Home'}
        breadcrumbs={breadcrumbs}
        pathname={props.path} />
    <Typography variant={'h4'}>
      Welcome to Aperturepedia
    </Typography>
    <p>
      Aperturepedia collects data on various vintage first-party SLR lenses in one easy-to-reference site.
      <br /><br/>
      The goal here is to provide a free resource with long-term support for referencing and comparing specs for most vintage first-party camera lenses, as well as a repository for helpful links to other sites which may not immediately come up in Google, or Wayback Machine-cached dead sites (RIP Geocities). Those of you who are seeking to break into adapting vintage glass on your mirrorless camera or expand your legacy lens collection can find easy-to-parse comparison charts for the lens systems listed below.
      <br /><br/>
      <strong>It's very much a work in progress</strong>, and any feedback on features or enhancements are welcome.<br/>
      The contact email address is <strong>this website's name</strong> at <strong>gmail dot com</strong>. <em>(This hint is an effort to minimize spam)</em>
    </p>
    <p>
    </p>
    <Typography variant={'h5'}>Currently Supported Lenses:</Typography>
    <ul>
      {links.map(node => (
        <li key={'link-' + node.path}>
          <a href={node.path}>{node.name}</a>
        </li>
      ))}
    </ul>
    <Typography variant={'h5'}>Credits:</Typography>
    <p>
      The app itself was built by <a href={'https://github.com/nklein1'} target={'_blank'} rel={'noopener noreferrer'}>Nick Klein</a>, but the data has been sourced from a number of online resources. I've listed them on the "Helpful Links" page for each lens system, but here you can see them all together.
    </p>
    <ul>
      {sources.map(node => (
        <li key={'source-' + node}>
          <a href={node} target={'_blank'} rel={'noopener noreferrer'}>{node}</a>
        </li>
      ))}
    </ul>
    <Typography variant={'h5'}>Collaboration:</Typography>
    <p>
      Want to get involved? I'm eager to collaborate with anyone who's interested in contributing. Feel free to contact me at the email address above.
    </p>
  </Layout>
)

export default IndexPage
