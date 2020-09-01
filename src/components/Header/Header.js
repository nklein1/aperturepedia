import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { globalHistory } from '@reach/router'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';

import Menu from '@material-ui/icons/Menu';

import MobileNavItem from '../MobileNavItem/MobileNavItem';
import NavItem from '../NavItem/NavItem';

import styles from './Header.module.scss';

const Header = ({ siteTitle, pathname }, props) => {

  const [state, setState] = React.useState({
    path: globalHistory.location.pathname,
    right: false
  });

  const navList = [
    { name: 'Minolta SR',
      isActive: pathname.includes('minolta-sr'),
      links: [
        { name: 'SR Lens Table', link: '/minolta-sr' },
        { name: 'Other SR Links', link: '/minolta-sr-links' },
      ]
    },
    { name: 'Nikon F',
      isActive: pathname.includes('canon-fd'),
      links: [
        { name: 'F Lens Table', link: '/nikon-f' },
        { name: 'Other F Links', link: '/nikon-f-links' },
      ]
    },
    { name: 'Canon FD',
      isActive: pathname.includes('canon-fd'),
      links: [
        { name: 'FD Lens Table', link: '/canon-fd' },
        { name: 'Other FD Links', link: '/canon-fd-links' },
      ]
    },
    { name: 'Pentax K',
      isActive: pathname.includes('pentax-k'),
      links: [
        { name: 'K Lens Table', link: '/pentax-k' },
        { name: 'Other K Links', link: '/pentax-k-links' },
      ]
    },
    { name: 'Pentax M42',
      isActive: pathname.includes('pentax-m42'),
      links: [
        { name: 'M42 Lens Table', link: '/pentax-m42' },
        { name: 'Other M42 Links', link: '/pentax-m42-links' },
      ]
    },
    { name: 'Pentax M37',
      isActive: pathname.includes('pentax-m37'),
      links: [
        { name: 'M37 Lens Table', link: '/pentax-m37' },
        { name: 'Other M37 Links', link: '/pentax-m37-links' },
      ]
    },
    { name: 'Olympus OM',
      isActive: pathname.includes('olympus-om'),
      links: [
        { name: 'OM Lens Table', link: '/olympus-om' },
        { name: 'Other OM Links', link: '/olympus-om-links' },
      ]
    },
    { name: 'Konica AR',
      isActive: pathname.includes('konica-ar'),
      links: [
        { name: 'AR Lens Table', link: '/konica-ar' },
        { name: 'Other AR Links', link: '/konica-ar-links' },
      ]
    }
  ];

  // const checkIfActive = (links) => {
  //   if (pathname && links && links.length > 0) {
  //     for (let i = 0; i < links.length; i++ ) {
  //       if (pathname.includes(links[i].link)) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // }

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ 'right': isOpen });
  };

  const list = () => (
    <div
      className={classNames(styles.list)}
      role={'presentation'}
    >
      <List>
        <ListItem
            component={Link}
            to={'/'}
            className={styles.title}
            key={'navLogoTitle'}>
          <ListItemText primary={'Aperturepedia'} />
        </ListItem>
        <Divider />
        {navList.map((node, index) => (
          <MobileNavItem item={node} key={'MobileNavItem-' + node.name} />
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position={'relative'} color={'inherit'} classes={{root: styles.appbar}}>
      <Toolbar className={styles.toolbar} disableGutters>
        <Typography component={Link} to={'/'} variant={'h6'} className={styles.title}>
          <strong>Aperture</strong>pedia
        </Typography>
        <div className={classNames(styles.toolbar, styles.desktop)}>
          {navList.map((node, index) => (
            <NavItem
              title={`${node.name} lenses`}
              component={NavItem}
              to={node.link}
              className={styles.tabs}
              isActive={node.isActive}
              items={node.links}
              label={node.name} 
              key={'desktopNavItem-' + node.name}
            />
          ))}
        </div>
        <div className={styles.mobile}>
          <Button onClick={toggleDrawer(true)}>
            <SvgIcon component={Menu} />
          </Button>
          <Drawer
              anchor={'right'}
              open={state['right']}
              onClose={toggleDrawer(false)}
              classes={{paper: styles.drawer}}>
            {list()}
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  pathname: PropTypes.string
}

Header.defaultProps = {
  siteTitle: 'Aperturepedia',
  pathname: '/'
}

export default Header;
