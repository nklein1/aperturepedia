import React, {memo} from 'react';
import classNames from 'classnames';
import { TableRow, TableCell } from '@material-ui/core';
import { PhotoLibrary as PhotoLibraryIcon,
        RateReview as RateReviewIcon,
        Build as BuildIcon,
        Info as InfoIcon,
        Notes as NotesIcon } from '@material-ui/icons';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import ApIcon from '../ApIcon/ApIcon';

import { getRandomString, getFullLensName } from '../../utils/utils';

import styles from './LensDetailPanel.module.scss';

const LensDetailPanel = memo(({lensData, lensColumns, isExpanded}) => {

  const renderDetailLinks = (links, icon, title) => {
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
                <OutboundLink href={link} target={'_blank'} rel={'noopener noreferrer'}>{link}</OutboundLink>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return toRender;
  }


  return (
    <TableRow
        className={classNames(
          // styles.detailContainer,
          isExpanded ? styles.isExpanded : ''
        )}
        classes={{ root: styles.detailContainer }}
        key={'TableDetailRow-' + lensData.lensCatLong + lensData.style + getRandomString()}>

      <TableCell
          classes={{root: styles.detailPanel}}
          colSpan={lensColumns.length-2}
          key={'TableDetailCell-' + lensData.lensCatLong + lensData.style + getRandomString()}>
        <div className={styles.detailPanelInner}>
        <h2>{getFullLensName(lensData)}</h2>
          <p className={!lensData.officialNotes ? styles.hidden : styles.text}>
            <strong className={styles.linkTitle}>
              <ApIcon iconType={NotesIcon} iconTitle={''} iconSize={'1rem'} /> 
              &nbsp;
              Manufacturer Notes:
            </strong>
            {lensData.officialNotes}
          </p>
          <p className={!lensData.notes ? styles.hidden : styles.text}>
            <strong className={styles.linkTitle}>
              <ApIcon iconType={NotesIcon} iconTitle={''} iconSize={'1rem'} /> 
              &nbsp;
              Notes:
            </strong>
            {lensData.notes}
          </p>
          <p className={!lensData.url ? styles.hidden : ''}>
            <strong>Source(s): </strong>
            <OutboundLink href={lensData.url} title={lensData.url} target={'_blank'} rel={'noopener noreferrer'}>{lensData.url}</OutboundLink>
          </p>

          { renderDetailLinks(lensData.sources, InfoIcon, 'Sources') }
          { renderDetailLinks(lensData.reviews, RateReviewIcon, 'Reviews') }
          { renderDetailLinks(lensData.sampleImg, PhotoLibraryIcon, 'Sample Photos') }
          { renderDetailLinks(lensData.lensImgs, PhotoLibraryIcon, 'Lens Images, Optical Diagrams & Sample Photos') }
          { renderDetailLinks(lensData.repair, BuildIcon, 'Repair Guides & Misc. Manuals') }
        </div>
      </TableCell>

    </TableRow>
  )
})

export default LensDetailPanel;
