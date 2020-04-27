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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from './Header.module.scss';

const Header = ({ siteTitle, location }, props) => {

  const [state, setState] = React.useState({
    path: globalHistory.location.pathname,
    right: false
  });

  const navList = [
    {name: 'Minolta SR', link: '/minolta-sr'},
    {name: 'Canon FD', link: '/canon-fd'},
    {name: 'Pentax M42', link: '/pentax-m42'},
    {name: 'Pentax K', link: '/pentax-k'}
  ];

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
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
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
          <ListItem
              component={Link}
              to={node.link}
              className={styles.anchor}
              key={'mobileNavList-' + node.link}>
            <ListItemText primary={node.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  function tabProps(index) {
    return {
      'value': index,
      'key': `desktopNavList-${index}`,
      'aria-controls': `desktopNavList-${index}`,
      'id': `nav-tab-${index}`,
      'classes': {root: styles.tabs},
      'className': styles.anchor,
      'disableFocusRipple': true,
      'disableRipple': true
    };
  }

  // TODO: Refactor this to reduce code rigidity
  const parsePath = (value) => {
    let tab = false;
    if (value) {
    value = value.replace(/\//g, '');
      if (value && value === 'minolta-sr') {
        tab = 0;
      } else if (value && value === 'canon-fd') {
        tab = 1;
      } else if (value && value === 'pentax-m42') {
        tab = 2;
      } else if (value && value === 'pentax-k') {
        tab = 3;
      }
    }
    return tab;
  };

  return (
    <AppBar position={'static'} color={'inherit'} classes={{root: styles.appbar}}>
      <Toolbar className={styles.toolbar} disableGutters>
        <Typography component={Link} to={'/'} variant={'h6'} className={styles.title}>
          <strong>Aperture</strong>pedia
        </Typography>
        <div className={styles.desktop}>
          <Tabs
              aria-label={'Navigation Bar'}
              value={parsePath(state.path || false)}
              TabIndicatorProps={{classes: {root: styles.tabIndicator}}}>
            {navList.map((node, index) => (
              <Tab
                title={`${node.name} lenses`}
                component={Link}
                to={node.link}
                label={node.name}
                {...tabProps(index)} />
            ))}
          </Tabs>
        </div>
        <div className={styles.mobile}>
          <Button onClick={toggleDrawer(true)}>Menu</Button>
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
}

Header.defaultProps = {
  siteTitle: 'Aperturepedia',
}

export default Header;
