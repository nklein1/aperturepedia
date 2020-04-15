import React from 'react';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

import {
  getRandomString,
  parseClassFromStyle,
  parseLensColumns
} from '../../utils/utils';
import LensRow from '../LensRow/LensRow';
import styles from './LensTable.module.scss';

class LensTable extends React.Component {

  countByFocalLength(lensList) {
    let lensCount = lensList.reduce((c, node) => {
      if (node && node.lensCatShort) {
        // Parse for 'Focal Length' Column
        if (c[node.lensCatShort]) {
          c[node.lensCatShort].count++;
        } else {
          c[node.lensCatShort] = { key: node.lensCatShort, count: 1 };
        }
        // Parse for 'Max Aperture' Column
        if (c[node.lensCatLong]) {
          c[node.lensCatLong].count++;
        } else {
          c[node.lensCatLong] = { key: node.lensCatLong, count: 1 };
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
          {columns[i].name}
        </TableCell>
      );
    }
    return toRender;
  }

  renderTableBody(allLensData, lensColumns) {
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
            key={'LensRow-' + node.lensCatLong + node.style + getRandomString()}
            lensData={node}
            lensStyle={parseClassFromStyle(node.style)}
            className={styles.small}
            lensColumns={lensColumns}
            focalSpan={lCount[node.lensCatShort] ? lCount[node.lensCatShort].count : 1}
            maxApSpan={lCount[node.lensCatLong] ? lCount[node.lensCatLong].count : 1}
            showFocalLength={showFocalLength}
            showMaxAperture={showMaxAperture}
        />
      );
    });
  }

  render() {
    let allLensData = [];
    let columnsToRender = [];
    if (this.props.data.allMinoltaMdJson) {
      allLensData = this.props.data.allMinoltaMdJson;
      columnsToRender = parseLensColumns('minolta');
    } else if (this.props.data.allPentaxM42Json) {
      allLensData = this.props.data.allPentaxM42Json;
      columnsToRender = parseLensColumns('pentax');
    }
    return (
      <TableContainer component={Paper} className={styles.container}>
        <Table size="small" stickyHeader aria-label="Minolta Lens Table">
          <TableHead>
            <TableRow className={styles.row}>
              {this.renderHeaderColumns(columnsToRender)}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderTableBody(allLensData, columnsToRender)}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default LensTable;
