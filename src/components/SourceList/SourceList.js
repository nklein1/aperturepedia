import React from 'react';
import PropTypes from 'prop-types';

import { getRandomString } from '../../utils/utils';
import styles from './SourceList.module.scss';

const SourceList = ({ sources }) => {
  return (
    <div className={styles.container}>
      Sources:
      <ul className={styles.sources}>
        {sources.map(node => (
          <li className={styles.source} key={'source-' + getRandomString()}>
            <a href={node} target={'_blank'}>{node}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

SourceList.propTypes = {
  sources: PropTypes.array,
}

export default SourceList;
