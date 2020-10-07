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
            key={'LensRow-' + node.lensCatLong + node.style + getRandomString()}
            lensData={node}
            lensStyle={parseClassFromStyle(node.style)}
            className={styles.small}
            lensColumns={lensColumns}
            mount={mount}
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
    let mount = '';
    let captionTitle = '';
    // TODO: Get caption title from page title
    if (this.props.data.allMinoltaSrJson) {
      allLensData = this.props.data.allMinoltaSrJson;
      columnsToRender = parseLensColumns('minolta_sr');
      mount = 'sr';
      captionTitle = 'Minolta SR-Mount Lens Database';
    } else if (this.props.data.allNikonFJson) {
      allLensData = this.props.data.allNikonFJson;
      columnsToRender = parseLensColumns('nikon_f');
      mount = 'f';
      captionTitle = 'Nikon F-Mount Lens Database';
    } else if (this.props.data.allCanonFdJson) {
      allLensData = this.props.data.allCanonFdJson;
      columnsToRender = parseLensColumns('canon_fd');
      mount = 'fd';
      captionTitle = 'Canon FD-Mount Lens Database';
    } else if (this.props.data.allPentaxKJson) {
      allLensData = this.props.data.allPentaxKJson;
      columnsToRender = parseLensColumns('pentax_k');
      mount = 'k';
      captionTitle = 'Pentax K-Mount Lens Database';
    } else if (this.props.data.allPentaxM42Json) {
      allLensData = this.props.data.allPentaxM42Json;
      columnsToRender = parseLensColumns('pentax_m42');
      mount = 'm42';
      captionTitle = 'Pentax M42-Mount Lens Database';
    } else if (this.props.data.allPentaxM37Json) {
      allLensData = this.props.data.allPentaxM37Json;
      columnsToRender = parseLensColumns('pentax_m37');
      mount = 'm37';
      captionTitle = 'Pentax M37-Mount Lens Database';
    } else if (this.props.data.allOlympusOmJson) {
      allLensData = this.props.data.allOlympusOmJson;
      columnsToRender = parseLensColumns('olympus_om');
      mount = 'om';
      captionTitle = 'Olympus OM-Mount Lens Database';
    } else if (this.props.data.allKonicaArJson) {
      allLensData = this.props.data.allKonicaArJson;
      columnsToRender = parseLensColumns('konica_ar');
      mount = 'ar';
      captionTitle = 'Konica AR-Mount Lens Database';
    }
    return (
      <TableContainer component={Paper} className={styles.container}>
        <Table size={'small'} stickyHeader aria-label={'caption table'}>
          <caption>{captionTitle} <br />
            <span>
              Column one and two feature the focal length and maximum aperture of each lens.
              Other columns show additional data for that lens, including the lens name,
              optical formula, dimensions, weight, and year introduced, among others.
            </span>
          </caption>
          <TableHead>
            <TableRow className={styles.row}>
              {this.renderHeaderColumns(columnsToRender)}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderTableBody(allLensData, columnsToRender, mount)}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default LensTable;
