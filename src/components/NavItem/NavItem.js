import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { ClickAwayListener,
        MenuItem,
        MenuList,
        Paper } from '@mui/material';

import * as styles from './NavItem.module.scss';

export default function NavItem(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classNames(
        styles.root,
        props.isActive ? styles.active : ''
      )} 
        role={'button'}
        onMouseEnter={handleToggle}
        onMouseLeave={handleToggle}>
      <div
        className={styles.anchor}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
      >
        {props.label}
      </div>
      <div className={classNames(styles.menuRoot, open ? styles.isOpen : '')}>
        <Paper square>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
              {props.items.map((node, index) => (
                <MenuItem 
                  component={Link} 
                  to={node.link}
                  classes={{ root: styles.menuItem }}
                  key={'NavMenuItem-' + node.link}>
                  { node.name }
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </div>
    </div>
  );
}
