import React, {memo} from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import  { AppBar,
        Toolbar,
        Typography,
        ListItemText,
        ListItem,
        Divider,
        SvgIcon,
        Button,
        Drawer,
        List } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import MobileNavItem from '../MobileNavItem/MobileNavItem';
import NavItem from '../NavItem/NavItem';

import styles from './Header.module.scss';

const Header = memo(({location}) => {

  const [state, setState] = React.useState({
    path: location.pathname,
    right: false
  });

  const navList = [
    { name: 'Minolta SR',
      isActive: location.pathname.includes('minolta-sr'),
      links: [
        { name: 'SR Lens Database', link: '/minolta-sr/' },
        { name: 'Other SR Links', link: '/minolta-sr-links/' }
      ]
    },
    { name: 'Nikon F',
      isActive: location.pathname.includes('nikon-f'),
      links: [
        { name: 'F Lens Database', link: '/nikon-f/' },
        { name: 'Other F Links', link: '/nikon-f-links/' }
      ]
    },
    { name: 'Canon FD / FL',
      isActive: location.pathname.includes('canon-fd'),
      links: [
        { name: 'FD / FL Lens Database', link: '/canon-fd/' },
        { name: 'Other FD / FL Links', link: '/canon-fd-links/' }
      ]
    },
    { name: 'Pentax K',
      isActive: location.pathname.includes('pentax-k'),
      links: [
        { name: 'K Lens Database', link: '/pentax-k/' },
        { name: 'Other K Links', link: '/pentax-k-links/' }
      ]
    },
    { name: 'Pentax M42',
      isActive: location.pathname.includes('pentax-m42'),
      links: [
        { name: 'M42 Lens Database', link: '/pentax-m42/' },
        { name: 'Other M42 Links', link: '/pentax-m42-links/' }
      ]
    },
    { name: 'Pentax M37',
      isActive: location.pathname.includes('pentax-m37'),
      links: [
        { name: 'M37 Lens Database', link: '/pentax-m37/' },
        { name: 'Other M37 Links', link: '/pentax-m37-links/' }
      ]
    },
    { name: 'Olympus OM',
      isActive: location.pathname.includes('olympus-om'),
      links: [
        { name: 'OM Lens Database', link: '/olympus-om/' },
        { name: 'Other OM Links', link: '/olympus-om-links/' }
      ]
    },
    { name: 'Konica AR',
      isActive: location.pathname.includes('konica-ar'),
      links: [
        { name: 'AR Lens Database', link: '/konica-ar/' },
        { name: 'Other AR Links', link: '/konica-ar-links/' }
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
})

export default Header;
