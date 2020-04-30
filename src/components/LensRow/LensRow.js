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

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
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
          align={'center'}
          rowSpan={(lColumn.slug === 'focalLength' || lColumn.slug === 'maxAperture') && lRowSpan > 1 ? lRowSpan : 1}
          key={'TableCell-' + lData.lensCatLong + lData.style + getRandomString()}>
          <span className={styles.lensType}>
            {lColumn.slug === 'focalLength' && lData.lensType !== 'false' ? lData.lensType : ''}
          </span>
        {lData[lColumn.slug]}
      </TableCell>
    );
  }

  renderSourceCell(lData, lColumn, i, lRowSpan) {
    return (
      <TableCell
          className={classNames(
            styles.cell,
            styles[lColumn.slug],
            lColumn.slug !== 'focalLength' ? styles.small : '',
          )}
          align={'center'}
          rowSpan={1}
          key={'TableCell-' + lData.lensCatLong + lData.style + lColumn.slug}>
        <a href={lData.url} title={lData.url} target={'_blank'}>Source</a>
      </TableCell>
    );
  }

  renderBoolCell(lData, lColumn, i, lRowSpan) {
    return (
      <TableCell
          className={classNames(
            styles.cell,
            styles.small,
            styles[lColumn.slug]
          )}
          align={'center'}
          rowSpan={1}
          key={'TableCell-' + lData.lensCatLong + lData.style + lColumn.slug}>
        <strong>{lData[lColumn.slug] ? 'Yes' : ''}</strong>
      </TableCell>
    );
  }

  renderLensColumns(lensData, lensColumns) {
    let toRender = [];
    for (let i = 0; i < lensColumns.length; i++) {
      if (lensColumns[i].slug === 'focalLength' && this.props.showFocalLength === true) {
        // Render 'Focal Length' cell with custom 'rowSpan' value
        toRender.push( this.renderCell(lensData, lensColumns[i], i, this.props.focalSpan) );
      } else if (lensColumns[i].slug === 'maxAperture' && this.props.showMaxAperture === true) {
        // Render 'Max Aperture' cell with custom 'rowSpan' value
        toRender.push( this.renderCell(lensData, lensColumns[i], i, this.props.maxApSpan) );
      } else if (lensColumns[i].slug === 'notes' || lensColumns[i].slug === 'officialNotes') {
        // Render 'Notes' cell with custom boolean value
        toRender.push( this.renderBoolCell(lensData, lensColumns[i], i, 1) );
      } else if (lensColumns[i].slug !== 'focalLength' && lensColumns[i].slug !== 'maxAperture' && lensColumns[i].slug !== 'source' && lensColumns[i].slug !== 'notes' && lensColumns[i].slug !== 'officialNotes') {
        // Render Table cell normally
        toRender.push( this.renderCell(lensData, lensColumns[i], i, 1) );
      // } else if (lensColumns[i].slug === 'source') {
      //   // Render 'Source' cell with anchor tag
      //   toRender.push( this.renderSourceCell(lensData, lensColumns[i], i, 1) );
      }
    }
    return toRender;
  }

  // renderAnchors(sources) {
  //   let toRender = [];
  //   toRender.push(<ul>);
  //   for (let i = 0; i < sources.length; i++) {

  //     toRender.push(<li><a href={sources[i]} title={sources[i]} target={'_blank'}>{sources[i]}</a></li>);
  //   }
  //   toRender.push(</ul>);
  //   return toRender;
  // }

  renderDetailPanel(lData, lColumns) {
    let toRender = [];
    toRender.push(
      <TableCell classes={{root: styles.detailPanel}} colSpan={lColumns.length-2} key={'TableDetailCell-' + lData.lensCatLong + lData.style + getRandomString()}>
        <h2>{lData.name}</h2>
        <p className={!lData.officialNotes ? styles.hidden : ''}>
          <strong>Manufacturer Notes: </strong>
          {lData.officialNotes}
        </p>
        <p className={!lData.notes ? styles.hidden : ''}>
          <strong>Notes: </strong>
          {lData.notes}
        </p>
        <p className={!lData.url ? styles.hidden : ''}>
          <strong>Source(s): </strong>
          <a href={lData.url} title={lData.url} target={'_blank'}>{lData.url}</a>
        </p>
        <p className={!lData.sources ? styles.hidden : ''}>
          <strong>Source(s): </strong>

          <ul className={styles.ul}>
            {lData.sources.map(source => (
              <li className={styles.source} key={'source-' + getRandomString()}>
                <a href={source} target={'_blank'} rel={'noopener'}>{source}</a>
              </li>
            ))}
          </ul>
        </p>
      </TableCell>
    );
    return toRender;
  }

  render() {
    let { lensData, lensStyle, lensColumns, mount } = this.props;
    return (
      <>
        <TableRow
            className={classNames(
              styles.row,
              lensStyle ? styles[mount + lensStyle] : ''
            )}
            title={this.state.isExpanded ? 'Click to collapse lens details' : 'Click to expand lens details'}

            onClick={() => this.setState({ isExpanded: !this.state.isExpanded })}
            key={'TableRow-' + lensData.lensCatLong + lensData.style + getRandomString()}>
          { this.renderLensColumns(lensData, lensColumns) }
        </TableRow>

        <TableRow
            className={classNames(
              // styles.detailContainer,
              this.state.isExpanded ? styles.isExpanded : ''
            )}
            classes={{ root: styles.detailContainer }}
            key={'TableDetailRow-' + lensData.lensCatLong + lensData.style + getRandomString()}>
          { this.renderDetailPanel(lensData, lensColumns) }
        </TableRow>
      </>
    )
  }
}

export default LensRow;
