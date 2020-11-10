import React, { useContext } from 'react';
import { SvgIcon, Tooltip } from '@material-ui/core';

import DetailPanelContext from '../../utils/DetailPanelContext';
import styles from './ApIcon.module.scss';

export default function ApIcon({ iconType, iconTitle, iconSize, iconColor, showTooltip }) {

  const tooltipCx = useContext(DetailPanelContext)

  const renderIcon = () => {
    let toRender = [];
    if (tooltipCx.isTooltipPreloaded === true) {
      return (
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
      );
    } else {
      return (
        <SvgIcon
            component={iconType}
            title={iconTitle}
            htmlColor={iconColor}
            style={{ fontSize: iconSize }}
            classes={{ root:styles.icon }} />
      );
    }
  }

  return (
    <span className={styles.iconWrapper}>
      {renderIcon()}
    </span>
  );
}
