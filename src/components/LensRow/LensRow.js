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
      focalLength:        PropTypes.string,
      name:               PropTypes.string,
      lensType:           PropTypes.string,
      lensFamily:         PropTypes.string,
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
    lensStyle:        PropTypes.string,
    className:        PropTypes.string,
    lensColumns:      PropTypes.array,
    focalSpan:        PropTypes.number,
    maxApSpan:        PropTypes.number,
    showFocalLength:  PropTypes.bool,
    showMaxAperture:  PropTypes.bool
  }

  renderCell(lData, lColumn, i, lRowSpan) {
    return (
      <TableCell
          className={classNames(
            styles.cell,
            styles[lColumn.slug],
            lColumn.slug !== 'focalLength' ? styles.small : '',
            lColumn.slug !== 'maxAperture' ? styles.small : '',
            lColumn.slug === 'name' ? styles.lensName : '',
          )}
          align={i === 0 ? 'left' : 'center'}
          rowSpan={(lColumn.slug === 'focalLength' || lColumn.slug === 'maxAperture') && lRowSpan > 1 ? lRowSpan : 1}
          key={'TableCell-' + lData.lensCatLong + lData.style + getRandomString()}>
        {lData[lColumn.slug]}
      </TableCell>
    );
  }

  renderLensColumns(lensData, lensColumns) {
    let toRender = [];
    for (let i = 0; i < lensColumns.length; i++) {
      if (lensColumns[i].slug !== 'focalLength' && lensColumns[i].slug !== 'maxAperture') {
        // Render Table cell normally
        toRender.push( this.renderCell(lensData, lensColumns[i], i, 1) );
      } else if (lensColumns[i].slug === 'focalLength' && this.props.showFocalLength === true) {
        // Render 'Focal Length' cell with custom 'rowSpan' value
        toRender.push( this.renderCell(lensData, lensColumns[i], i, this.props.focalSpan) );
      } else if (lensColumns[i].slug === 'maxAperture' && this.props.showMaxAperture === true) {
        // Render 'Max Aperture' cell with custom 'rowSpan' value
        toRender.push( this.renderCell(lensData, lensColumns[i], i, this.props.maxApSpan) );
      }
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
          key={'TableRow-' + lensData.lensCatLong + lensData.style + getRandomString()}>
        { this.renderLensColumns(lensData, lensColumns) }
      </TableRow>
    )
  }
}

export default LensRow;
