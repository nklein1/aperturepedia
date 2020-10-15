import React from 'react';
import { SvgIcon, Tooltip } from '@material-ui/core';

import styles from './ApIcon.module.scss';

export default function ApIcon({ iconType, iconTitle, iconSize, iconColor }) {

  return (
    <span className={styles.iconWrapper}>
      <Tooltip
          title={iconTitle}
          enterDelay={50}
          enterTouchDelay={100}
          arrow={true}
          classes={{ tooltip:styles.tooltip }}>
        <SvgIcon
            component={iconType}
            htmlColor={iconColor}
            style={{ fontSize: iconSize }}
            classes={{ root:styles.icon }} />
      </Tooltip>
    </span>
  );
}
