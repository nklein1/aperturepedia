import React, {memo} from 'react';
import classNames from 'classnames';
import { Table,
        TableContainer,
        TableBody,
        TableRow,
        TableCell,
        Paper } from '@material-ui/core';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import styles from './ModalContent.module.scss';

const ModalContent = memo(({seoData}) => {

  const renderLegend = (legendItems) => {
    console.log('seoData', seoData);
    let toRender = [];
    if (legendItems && legendItems.length > 0) {
      legendItems.map(item => {
        toRender.push(
          <TableRow className={styles.legendItem} key={'item-' + item.id}>
            <TableCell className={classNames(
              styles.name,
              styles[item.id]
            )}>{item.name}</TableCell>
            <TableCell className={styles.descr}>{item.descr}</TableCell>
          </TableRow>
        );
      })
    }
    return toRender;
  }

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.section}>
        <div className={styles.sectionContent}>
          <em className={styles.helpTxt}>
            The following colors are used to represent the following {seoData.name} lens versions.
            &nbsp;
            {seoData.legendSource &&
              <em>(
              <OutboundLink href={seoData.legendSource} target={'_blank'} rel={'noopener noreferrer'}>
                Source
              </OutboundLink>
              )</em>
            }
          </em>
          <TableContainer component={Paper} className={styles.container}>
            <Table>
              <TableBody>
                {renderLegend(seoData.variants)}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
});

export default ModalContent;
