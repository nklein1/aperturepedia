import React from 'react';
import { Link } from 'gatsby';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import SvgIcon from '@material-ui/core/SvgIcon';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import styles from './MobileNavItem.module.scss';

const MobileNavItem = ({ item }, props) => {

  const [isOpen, setOpen] = React.useState(false);

  const toggleOpen = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!isOpen);
  };

  return (
    <div>
      <ListItem
          component={'div'}
          className={styles.anchor}
          onClick={toggleOpen}
          onKeyDown={toggleOpen}>
        <ListItemText primary={item.name} />
        <SvgIcon component={isOpen ? ExpandLess : ExpandMore} />
      </ListItem>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List disablePadding>
          {item.links.map((node, index) => (
            <ListItem 
                component={Link}
                to={node.link}
                classes={{ root: styles.nested }}
                key={'mobileNavListLink-' + node.link}>
              <ListItemText primary={node.name} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  )
}

// MobileNavItem.propTypes = {
//   siteTitle: PropTypes.string,
// }

// MobileNavItem.defaultProps = {
//   siteTitle: 'Aperturepedia',
// }

export default MobileNavItem;
