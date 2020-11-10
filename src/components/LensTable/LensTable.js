import React from 'react';
import classNames from 'classnames';
import { Table,
        TableContainer,
        TableHead,
        TableBody,
        TableRow,
        TableCell,
        Paper } from '@material-ui/core';
// import loadable from '@loadable/component';

import LensRowGroup from '../LensRowGroup/LensRowGroup';
import styles from './LensTable.module.scss';

// const LensDetailPanel = loadable(() => import('../LensDetailPanel/LensDetailPanel'), {
//   // ssr: false,
//   // fallback: <></>
// })


class LensTable extends React.PureComponent {

  constructor(props) {
    super(props);
    // this.state = { detailPanelPreloaded: false };
  }

  // preloadDetailPanel = () => {
  //   if (!this.props.isPreloaded) {
  //     console.log('preloadDetailPanel @ LensTable!');
  //     LensDetailPanel.preload();
  //     // this.handlePanelPreload();
  //     // this.setState({ detailPanelPreloaded: true });
  //   }
  // }

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

  countByFocalLength(lensList) {
    let lensCount = lensList.reduce((c, node) => {
      // "2" values are handling for hidden, expandable "detail panel" rows
      if (node && node.lensCatShort) {
        // Parse for 'Focal Length'
        if (c[node.lensCatShort]) {
          c[node.lensCatShort].count = c[node.lensCatShort].count + 1;
        } else {
          c[node.lensCatShort] = { key: node.lensCatShort, count: 1 };
        }
      }
      return c;
    }, {});
    return lensCount;
  }

  renderTableBody() {
    let lastFocalLength = '';
    const lensList = this.props.lensData.edges.map(e => e.node);
    const lCount = this.countByFocalLength(lensList);
    let focalGroup = [];
    let groupSize = 0;
    return lensList.map((node, count) => {
      let lensRowGroup = [];
      if (lastFocalLength !== node.lensCatShort) {
        groupSize = lCount[node.lensCatShort].count;
        focalGroup = lensList.slice(count, count + groupSize);
        lastFocalLength = node.lensCatShort;

        lensRowGroup.push(
          <LensRowGroup
              lensGroup={focalGroup}
              groupSize={groupSize}
              mount={this.props.mount}
              lensColumns={this.props.lensColumns}
              focalSpan={lCount[node.lensCatShort] ? lCount[node.lensCatShort].count : 1}
              maxApSpan={lCount[node.lensCatLong] ? lCount[node.lensCatLong].count : 1}
              key={'LensRow-' + node.id}
          />
        );
      }
      return lensRowGroup;
    });
  }

  render() {
    return (
      <>
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
              {this.renderTableBody()}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default LensTable;
