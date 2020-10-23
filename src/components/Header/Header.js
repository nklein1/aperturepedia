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
    { name: 'Lens Databases',
      isActive: !location.pathname.includes('links'),
      links: [
        { name: 'Minolta SR', link: '/minolta-sr/' },
        { name: 'Nikon F', link: '/nikon-f/' },
        { name: 'Canon FD / FL', link: '/canon-fd/' },
        { name: 'Pentax K ', link: '/pentax-k/' },
        { name: 'Pentax M42', link: '/pentax-m42/' },
        { name: 'Asahi Pentax M37', link: '/pentax-m37/' },
        { name: 'Olympus OM', link: '/olympus-om/' },
        { name: 'Konica AR', link: '/konica-ar/' },
      ]
    },
    { name: 'Helpful Links',
      isActive: location.pathname.includes('links'),
      links: [
        { name: 'Minolta SR', link: '/minolta-sr-links/' },
        { name: 'Nikon F', link: '/nikon-f-links/' },
        { name: 'Canon FD / FL', link: '/canon-fd-links/' },
        { name: 'Pentax K', link: '/pentax-k-links/' },
        { name: 'Pentax M42', link: '/pentax-m42-links/' },
        { name: 'Asahi Pentax M37', link: '/pentax-m37-links/' },
        { name: 'Olympus OM', link: '/olympus-om-links/' },
        { name: 'Konica AR', link: '/konica-ar-links/' }
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
