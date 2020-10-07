import React from 'react';
// import * as PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip';

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
