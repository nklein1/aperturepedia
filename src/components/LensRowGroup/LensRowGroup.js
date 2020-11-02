import React from 'react';

import LensRow from '../LensRow/LensRow';
import { parseClassFromStyle } from '../../utils/utils';
import styles from './LensRowGroup.module.scss';

class LensRowGroup extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { 
      groupSize:   this.props.groupSize,
      groupCounts: this.countByMaxAp(this.props.lensGroup)
    };
  }

  countByMaxAp(lensGroup) {
    // Add additional count if rows have been expanded
    let lensCount = lensGroup.reduce((c, node) => {
      if (node && node.lensCatShort) {
        // Parse for 'Focal Length' Column
        if (c[node.lensCatShort]) {
          c[node.lensCatShort].count = c[node.lensCatShort].count + 1;
        } else {
          c[node.lensCatShort] = { key: node.lensCatShort, count: 1 };
        }
        // Parse for 'Max Aperture' Column
        if (c[node.lensCatLong]) {
          c[node.lensCatLong].count = c[node.lensCatLong].count + 1;
        } else {
          c[node.lensCatLong] = { key: node.lensCatLong, count: 1 };
        }
      }
      return c;
    }, {});
    return lensCount;
  }

  // Updates 'rowSpan' for columns with merged rows when user toggles a Detail Panel
  onRowExpand = (lensCatShort, lensCatLong, wasExpanded) => {
    let gCount = this.state.groupCounts;
    if (wasExpanded) {
      gCount[lensCatLong].count = gCount[lensCatLong].count + 1;
      gCount[lensCatShort].count = gCount[lensCatShort].count + 1;
      this.setState({
        groupCounts: gCount,
        groupSize: this.state.groupSize + 1
      });
    } else {
      gCount[lensCatLong].count = gCount[lensCatLong].count - 1;
      gCount[lensCatShort].count = gCount[lensCatShort].count - 1;
      this.setState({
        groupCounts: gCount,
        groupSize: this.state.groupSize - 1
      });
    }
  }
  
  renderRowGroup(lensGroup, lensColumns, mount) {
    let lastFocalLength = '';
    let lastLensCat = '';
    let showFocalLength = true;
    let showMaxAperture = true;
    return lensGroup.map((node, count) => {
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
            mount={mount}
            lensData={node}
            lensStyle={parseClassFromStyle(node.style)}
            className={styles.small}
            lensColumns={lensColumns}
            onRowExpand={this.onRowExpand}
            focalSpan={this.state.groupCounts[node.lensCatShort] ? this.state.groupCounts[node.lensCatShort].count : 1}
            maxApSpan={this.state.groupCounts[node.lensCatLong] ? this.state.groupCounts[node.lensCatLong].count : 1}
            showFocalLength={showFocalLength}
            showMaxAperture={showMaxAperture}
            key={'LensRow-' + node.id}
        />
      );
    });
  }

  render() {
    return (
      <>
        {this.renderRowGroup(this.props.lensGroup, this.props.lensColumns, this.props.mount)}
      </>
    );
  }
}

export default LensRowGroup;
