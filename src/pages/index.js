import React from 'react';
import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

const breadcrumbs = [
  { url: '/', title:'Aperturepedia' }
];

const sources = [
  'http://forum.mflenses.com/manual-focus-lenses-f3.html',
  'http://minolta.eazypix.de/lenses',
  'https://lensqaworks.com',
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
      Aperturepedia collects data on various vintage first-party SLR lenses in one easy-to-reference site.<br /><br/>
      <strong>It's very much a work in progress</strong>, and any feedback on features or enhancements are welcome.<br/>
      The contact email address is <strong>this website's name</strong> at <strong>gmail dot com</strong>. <em>(This hint is an effort to minimize spam)</em>
    </p>
    <Typography variant={'h5'}>Currently Supported Lenses:</Typography>
    <ul>
      <li>
        <Link to="/minolta-sr">Minolta SR</Link>
      </li>
      <li>
        <Link to="/nikon-f">Nikon F</Link>
      </li>
      <li>
        <Link to="/canon-fd">Canon FD</Link>
      </li>
      <li>
        <Link to="/pentax-k">Pentax K</Link>
      </li>
      <li>
        <Link to="/pentax-m42">Pentax M42</Link>
      </li>
      <li>
        <Link to="/pentax-m37">Pentax M37</Link>
      </li>
      <li>
        <Link to="/olympus-om">Olympus OM</Link>
      </li>
      <li>
        <Link to="/konica-ar">Konica AR</Link>
      </li>
    </ul>
    <Typography variant={'h5'}>Credits:</Typography>
    <p>
      The app itself was built by <a href={'https://github.com/nklein1'} target={'_blank'} rel={'noopener'}>Nick Klein</a>, but the data has been sourced from a number of online resources. I've listed them on each System page, but here you can see them all together.
    </p>
    <ul>
      {sources.map(node => (
        <li key={'source-' + node}>
          <a href={node} target={'_blank'} rel={'noopener'}>{node}</a>
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
