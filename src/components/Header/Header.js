import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { getRandomString } from '../../utils/utils';
import styles from './Header.module.scss';

const Header = ({ siteTitle, location }, props) => {

  const [state, setState] = React.useState({
    left: false
  });

  const navList = [
    {name: 'Minolta SR', link: '/minolta-sr'},
    {name: 'Pentax M42', link: '/pentax-m42'}
  ];

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, 'right': isOpen });
  };

  const list = () => (
    <div
      className={classNames(styles.list)}
      role={'presentation'}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key={'menuTitle-' + getRandomString()}>
          <Link to={'/'} className={styles.title}>
            <ListItemText primary={'Aperturepedia'} />
          </Link>
        </ListItem>
        <Divider />
        {navList.map((node, index) => (
          <ListItem button key={node.link + getRandomString()}>
            <Link to={node.link} className={styles.anchor}>
              <ListItemText primary={node.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
      'disableFocusRipple': true,
      'disableRipple': true
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log('newValue', newValue);
    setValue(newValue);
  };

  return (
    <AppBar position={'static'} color={'inherit'} classes={{root: styles.root}}>
      <Toolbar className={styles.toolbar} disableGutters>
        <Link to={'/'}>
          <Typography variant={'h6'} className={styles.title}>
            {siteTitle}
          </Typography>
        </Link>
        <div className={styles.desktop}>

          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            {navList.map((node, index) => (
              <Link to={node.link} className={styles.anchor}>
                <Tab label={node.name} value={node.link} {...a11yProps(index)} />
              </Link>
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
