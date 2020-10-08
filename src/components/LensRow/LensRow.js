import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { TableRow, TableCell } from '@material-ui/core';
import { PhotoLibrary as PhotoLibraryIcon,
        RateReview as RateReviewIcon,
        Build as BuildIcon,
        Info as InfoIcon,
        Notes as NotesIcon } from '@material-ui/icons';

import ApIcon from '../ApIcon/ApIcon';

import { getRandomString, getFullLensName } from '../../utils/utils';
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
      diaphragmType:      PropTypes.string,
      closeFocus:         PropTypes.string,
      diameter:           PropTypes.string,
      length:             PropTypes.string,
      weight:             PropTypes.string,
      yearIntroduced:     PropTypes.string,
      style:              PropTypes.string,
      notes:              PropTypes.string,
      sources:            PropTypes.array
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

          title={this.state.isExpanded ? 'Click to collapse lens details' : 'Click to expand lens details'}
          key={'TableCell-' + lData.lensCatLong + lData.style + getRandomString()}>
          <span className={styles.lensType}>
            {lColumn.slug === 'focalLength' && lData.lensType !== 'false' ? lData.lensType : ''}
          </span>
        {lData[lColumn.slug]}
      </TableCell>
    );
  }

  renderLinksCell(lData, lColumn, i, lRowSpan) {
    let linkCount = 0;
    if (lData.sources && lData.sources.length > 0) {
      linkCount = linkCount + lData.sources.length;
    }
    if (lData.reviews && lData.reviews.length > 0) {
      linkCount = linkCount + lData.reviews.length;
    }
    if (lData.sampleImg && lData.sampleImg.length > 0) {
      linkCount = linkCount + lData.sampleImg.length;
    }
    if (lData.repair && lData.repair.length > 0) {
      linkCount = linkCount + lData.repair.length;
    }
    return (
      <TableCell
          className={classNames(
            styles.cell,
            styles[lColumn.slug],
            styles.small,
          )}
          align={'center'}
          rowSpan={1}
          title={this.state.isExpanded ? 'Click to collapse lens details' : 'Click to expand lens details'}
          key={'TableCell-' + lData.lensCatLong + lData.style + lColumn.slug}>
        { linkCount }
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
          title={this.state.isExpanded ? 'Click to collapse lens details' : 'Click to expand lens details'}
          key={'TableCell-' + lData.lensCatLong + lData.style + lColumn.slug}>
        <strong>{lData[lColumn.slug] ? 'Yes' : ''}</strong>
      </TableCell>
    );
  }

  renderResources(lData, lColumn, i, lRowSpan) {
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
          align={'center'}
          rowSpan={1}
          key={'TableCell-' + lData.lensCatLong + lData.style + lColumn.slug}>
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
      // } else if (lensColumns[i].slug === 'notes' || lensColumns[i].slug === 'officialNotes') {
      //   // Render 'Notes' cell with custom boolean value
      //   toRender.push( this.renderBoolCell(lensData, lensColumns[i], i, 1) );
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

  renderDetailLinks(links, icon, title) {
    let toRender = [];
    if (links && links.length > 0) {
      toRender.push(
        <div className={styles.padded} key={'linkdiv-' + getRandomString()}>
          <strong className={styles.linkTitle}>
            <ApIcon iconType={icon} iconTitle={''} iconSize={'1rem'} /> 
            &nbsp;
            {title}: 
          </strong>
          <ul className={styles.ul}>
            {links.map(link => (
              <li className={styles.source} key={'link-' + getRandomString()}>
                <a href={link} target={'_blank'} rel={'noopener noreferrer'}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return toRender;
  }

  renderDetailPanel(lData, lColumns) {
    let toRender = [];
    toRender.push(
      <TableCell classes={{root: styles.detailPanel}} colSpan={lColumns.length-2} key={'TableDetailCell-' + lData.lensCatLong + lData.style + getRandomString()}>
        <div className={styles.detailPanelInner}>
        <h2>{getFullLensName(lData)}</h2>
          <p className={!lData.officialNotes ? styles.hidden : styles.text}>
            <strong className={styles.linkTitle}>
              <ApIcon iconType={NotesIcon} iconTitle={''} iconSize={'1rem'} /> 
              &nbsp;
              Manufacturer Notes:
            </strong>
            {lData.officialNotes}
          </p>
          <p className={!lData.notes ? styles.hidden : ''}>
            <strong className={styles.linkTitle}>
              <ApIcon iconType={NotesIcon} iconTitle={''} iconSize={'1rem'} /> 
              &nbsp;
              Notes:
            </strong>
            {lData.notes}
          </p>
          <p className={!lData.url ? styles.hidden : ''}>
            <strong>Source(s): </strong>
            <a href={lData.url} title={lData.url} target={'_blank'} rel={'noopener noreferrer'}>{lData.url}</a>
          </p>

          { this.renderDetailLinks(lData.sources, InfoIcon, 'Sources') }
          { this.renderDetailLinks(lData.reviews, RateReviewIcon, 'Reviews') }
          { this.renderDetailLinks(lData.sampleImg, PhotoLibraryIcon, 'Sample Photos') }
          { this.renderDetailLinks(lData.lensImgs, PhotoLibraryIcon, 'Lens Images, Optical Diagrams & Sample Photos') }
          { this.renderDetailLinks(lData.repair, BuildIcon, 'Repair Guides & Misc. Manuals') }
        </div>
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
