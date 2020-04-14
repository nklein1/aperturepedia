// import * as PropTypes from "prop-types"
// import { graphql } from 'gatsby';
import React from 'react';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
// import chunk from 'lodash/chunk';

import LensRow from '../LensRow/LensRow';
import {
  getRandomString,
  parseClassFromStyle,
  parseLensColumns
} from '../../utils/utils';
import styles from './LensTable.module.scss';

class LensTable extends React.Component {
  renderLensColumns(columns) {
    let toRender = [];
    for (let i = 0; i < columns.length; i++) {
      toRender.push(
        <TableCell className={classNames(styles.cell, styles.small)} align={'center'}>
          {columns[i].name}
        </TableCell>
      );
    }
    return toRender;
  }

  render() {
    let allLensData = [];
    let lensColumns = [];
    if (this.props.data.allMinoltaMdJson) {
      allLensData = this.props.data.allMinoltaMdJson;
      lensColumns = parseLensColumns('minolta');
    } else if (this.props.data.allPentaxM42Json) {
      allLensData = this.props.data.allPentaxM42Json;
      lensColumns = parseLensColumns('pentax');
    }
    const lensList = allLensData.edges.map(e => e.node);
    return (
      <TableContainer component={Paper} className={styles.container}>
        <Table size="small" stickyHeader aria-label="Minolta Lens Table">
          <TableHead>
            <TableRow className={styles.row}>
             {this.renderLensColumns(lensColumns)}
            </TableRow>
          </TableHead>
          <TableBody>
            {lensList.map(node => (
              <LensRow
                key={'LensRow-' + node.focalLength + node.maxAperture + node.style + getRandomString()}
                lensData={node}
                lensStyle={parseClassFromStyle(node.style)}
                className={styles.small}
                lensColumns={lensColumns}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default LensTable;
