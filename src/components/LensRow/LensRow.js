import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import loadable from '@loadable/component';

import { TableRow, TableCell } from '@material-ui/core';
import { PhotoLibrary as PhotoLibraryIcon,
        RateReview as RateReviewIcon,
        Build as BuildIcon,
        Info as InfoIcon,
        Notes as NotesIcon } from '@material-ui/icons';

import ApIcon from '../ApIcon/ApIcon';
import DetailPanelContext from '../../utils/DetailPanelContext';

import styles from './LensRow.module.scss';

const LensDetailPanel = loadable(() => import('../LensDetailPanel/LensDetailPanel'), {
  // ssr: false,
  // fallback: <></>
});

class LensRow extends React.PureComponent {

  static contextType = DetailPanelContext;

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
      diaphragmType:      PropTypes.string,
      closeFocus:         PropTypes.string,
      diameter:           PropTypes.string,
      length:             PropTypes.string,
      weight:             PropTypes.string,
      yearIntroduced:     PropTypes.string,
      style:              PropTypes.string,
      notes:              PropTypes.string,
      lensCatShort:       PropTypes.string,
      lensCatLong:        PropTypes.string,
      sources:            PropTypes.array
    }).isRequired,
    lensStyle:         PropTypes.string,
    className:         PropTypes.string,
    lensColumns:       PropTypes.array,
    focalSpan:         PropTypes.number,
    maxApSpan:         PropTypes.number,
    showFocalLength:   PropTypes.bool,
    showMaxAperture:   PropTypes.bool,
    renderDetailPanel: PropTypes.bool,
    onRowExpand:       PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {  isExpanded: false };
  }

  preloadDetailPanel = (ev) => {
    ev.stopPropagation();
    if (!this.context.isPreloaded) {
      // console.log('this.context.isPreloaded @ LensRow.preloadDetailPanel()', this.context.isPreloaded);
      LensDetailPanel.preload();
      this.context.setAsPreloaded();
    }
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

          title={this.state.isExpanded ? 'Click to collapse lens details' : 'Click to expand lens details'}
          key={'TableCell-' + lData.id + lColumn.slug}>
          <span className={styles.lensType}>
            {lColumn.slug === 'focalLength' && lData.lensType !== 'false' ? lData.lensType : ''}
          </span>
        {lData[lColumn.slug]}
      </TableCell>
    );
  }

  renderResources(lData, lColumn, i) {
    const sources = lData.sources || [];
    const reviews = lData.reviews || [];
    const repair = lData.repair || [];
    const lensImgs = lData.lensImgs || [];
    const notes = lData.notes || lData.officialNotes || null;

    const infoTip = sources.length + ' Source Link' + ((sources.length > 1) ? 's' : '');
    const reviewTip = reviews.length + ' Review Link' + ((reviews.length > 1) ? 's' : '');
    const repairTip = repair.length + ' Repair Link' + ((repair.length > 1) ? 's' : '');
    const imageTip = lensImgs.length + ' Image Resource' + ((lensImgs.length > 1) ? 's' : '');
    const notesTip = 'Contains Notes';

    return (
      <TableCell
          className={classNames(
            styles.cell,
            styles[lColumn.slug],
            styles.small,
          )}
          rowSpan={1}
          align={'center'}
          key={'TableCell-' + lData.id + lColumn.slug}>
        <div className={styles.iconRow}>
          { sources.length > 0 && <ApIcon iconType={InfoIcon} iconTitle={infoTip} iconSize={'1.2rem'} /> }
          { reviews.length > 0 && <ApIcon iconType={RateReviewIcon} iconTitle={reviewTip} iconSize={'1.2rem'} /> }
          { repair.length > 0 && <ApIcon iconType={BuildIcon} iconTitle={repairTip} iconSize={'1.2rem'} /> }
          { lensImgs.length > 0 && <ApIcon iconType={PhotoLibraryIcon} iconTitle={imageTip} iconSize={'1.2rem'} /> }
          { notes && <ApIcon iconType={NotesIcon} iconTitle={notesTip} iconSize={'1.2rem'} /> }
        </div>
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
      } else if (lensColumns[i].slug === 'sources') {
        // Render 'Resources' cell with icons + tooltips
        toRender.push( this.renderResources(lensData, lensColumns[i], i, 1) );
      } else if (lensColumns[i].slug !== 'focalLength' && lensColumns[i].slug !== 'maxAperture' && lensColumns[i].slug !== 'source' && lensColumns[i].slug !== 'notes' && lensColumns[i].slug !== 'officialNotes') {
        // Render Table cell normally
        toRender.push( this.renderCell(lensData, lensColumns[i], i, 1) );
      }
    }
    return toRender;
  }

  expandRow = () => {
    const lData = this.props.lensData;
    this.props.onRowExpand(lData.lensCatShort, lData.lensCatLong, !this.state.isExpanded);
    this.setState({ isExpanded: !this.state.isExpanded });
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
            onClick={this.expandRow}
            onMouseOver={this.preloadDetailPanel}
            key={'TableRow-' + lensData.id}>
          { this.renderLensColumns(lensData, lensColumns) }
        </TableRow>

        {this.state.isExpanded && 
          <LensDetailPanel
              lensData={lensData}
              lensColumns={lensColumns} 
              isExpanded={this.state.isExpanded}>
          </LensDetailPanel>
        }
      </>
    )
  }
}

export default LensRow;
