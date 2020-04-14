import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { getRandomString } from '../../utils/utils';
import styles from './LensRow.module.scss';

class LensRow extends React.Component {

  static propTypes = {
    lensData: PropTypes.shape({
      focalLength:        PropTypes.string.isRequired,
      name:               PropTypes.string,
      lensType:           PropTypes.string,
      maxAperture:        PropTypes.string,
      minAperture:        PropTypes.string,
      elements:           PropTypes.string,
      groups:             PropTypes.string,
      blades:             PropTypes.string,
      frontFilterThread:  PropTypes.string,
      diaphramType:       PropTypes.string,
      closeFocus:         PropTypes.string,
      diameter:           PropTypes.string,
      length:             PropTypes.string,
      weight:             PropTypes.string,
      yearIntroduced:     PropTypes.string,
      style:              PropTypes.string,
      notes:              PropTypes.string
    }).isRequired,
  }

  // constructor() {
  //   super();
  // }

  renderLensColumns(lensData, lensColumns) {
    let toRender = [];
    for (let i = 0; i < lensColumns.length; i++) {
      toRender.push(
        <TableCell
            className={classNames(
              styles.cell,
              styles[lensColumns[i].slug],
              lensColumns[i].slug !== 'focalLength' ? styles.small : '',
              lensColumns[i].slug !== 'maxAperture' ? styles.small : '',
              lensColumns[i].slug === 'name' ? styles.lensName : '',
            )}
            align={i === 0 ? 'left' : 'center'}
            key={'TableCell-' + lensData.focalLength + lensData.maxAperture + lensData.style + getRandomString()}>
          {lensData[lensColumns[i].slug]}
        </TableCell>
      );
    }
    return toRender;
  }

  render() {
    let { lensData, lensStyle, lensColumns } = this.props;
    return (
      <TableRow
          className={classNames(
            styles.row,
            lensStyle ? styles[lensStyle] : ''
          )}
          key={'TableRow-' + lensData.focalLength + lensData.maxAperture + lensData.style + getRandomString()}>
        { this.renderLensColumns(lensData, lensColumns) }
      </TableRow>
    )
  }
}

export default LensRow;
