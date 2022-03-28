import React from 'react';
import { Link } from 'gatsby';
import { List,
        ListItem,
        ListItemText,
        Collapse,
        SvgIcon } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import * as styles from './MobileNavItem.module.scss';

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
