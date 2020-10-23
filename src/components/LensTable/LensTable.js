import React from 'react';
import classNames from 'classnames';
import { Table,
        TableContainer,
        TableHead,
        TableBody,
        TableRow,
        TableCell,
        Paper } from '@material-ui/core';

import LensRow from '../LensRow/LensRow';
import { parseClassFromStyle } from '../../utils/utils';
import styles from './LensTable.module.scss';

class LensTable extends React.PureComponent {

  countByFocalLength(lensList) {
    let lensCount = lensList.reduce((c, node) => {
      // "2" values are handling for hidden, expandable "detail panel" rows
      if (node && node.lensCatShort) {
        // Parse for 'Focal Length' Column
        if (c[node.lensCatShort]) {
          c[node.lensCatShort].count = c[node.lensCatShort].count + 2;
        } else {
          c[node.lensCatShort] = { key: node.lensCatShort, count: 2 };
        }
        // Parse for 'Max Aperture' Column
        if (c[node.lensCatLong]) {
          c[node.lensCatLong].count = c[node.lensCatLong].count + 2;
        } else {
          c[node.lensCatLong] = { key: node.lensCatLong, count: 2 };
        }
      }
      return c;
    }, {});
    return lensCount;
  }

  renderHeaderColumns(columns) {
    let toRender = [];
    for (let i = 0; i < columns.length; i++) {
      toRender.push(
        <TableCell
            className={classNames(styles.cell, styles.small)}
            key={'TableHeaderCell-' + columns[i].name + i}
            align={'center'}>
            <span className={styles.desktop}>{columns[i].name}</span>
            <span className={styles.mobile}>{columns[i].sName ? columns[i].sName : columns[i].name}</span>
        </TableCell>
      );
    }
    return toRender;
  }

  renderTableBody(allLensData, lensColumns, mount) {
    let lastFocalLength = '';
    let lastLensCat = '';
    let showFocalLength = true;
    let showMaxAperture = true;
    const lensList = allLensData.edges.map(e => e.node);
    const lCount = this.countByFocalLength(lensList);

    return lensList.map((node, count) => {
      if (lastFocalLength === node.lensCatShort) {
        // Don't include a 'Focal Length' cell in this row, focal length is same as last row
        showFocalLength = false;
        if (lastLensCat === node.lensCatLong) {
          // Don't include a 'Max Aperture' cell in this row, focal length & max aperture is same as last row
          showMaxAperture = false;
        } else {
          // Include a 'Max Aperture' cell in this row, focal length is same as last row but Max Aperture is different
          lastLensCat = node.lensCatLong;
          showMaxAperture = true;
        }
      } else {
        // Include 'Focal Length' & 'Max Aperture' cells in this row, Focal Length is different from previous row
        lastFocalLength = node.lensCatShort;
        lastLensCat = node.lensCatLong;
        showFocalLength = true;
        showMaxAperture = true;
      }
      return (
        <LensRow
            key={'LensRow-' + node.id}
            lensData={node}
            lensStyle={parseClassFromStyle(node.style)}
            className={styles.small}
            lensColumns={lensColumns}
            focalSpan={lCount[node.lensCatShort] ? lCount[node.lensCatShort].count : 1}
            maxApSpan={lCount[node.lensCatLong] ? lCount[node.lensCatLong].count : 1}
            showFocalLength={showFocalLength}
            showMaxAperture={showMaxAperture}
            mount={mount}
            count={count}
        />
      );
    });
  }

  render() {
    return (
      <TableContainer component={Paper} className={styles.container}>
        <Table size={'small'} stickyHeader aria-label={'caption table'}>
          <caption>
            {this.props.seo.descr} <br />
            <span>
              Column one and two feature the focal length and maximum aperture of each lens.
              Other columns show additional data for that lens, including the lens name,
              optical formula, dimensions, weight, and year introduced, among others.
            </span>
          </caption>
          <TableHead>
            <TableRow className={styles.row}>
              {this.renderHeaderColumns(this.props.lensColumns)}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderTableBody(this.props.lensData, this.props.lensColumns, this.props.mount)}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default LensTable;
