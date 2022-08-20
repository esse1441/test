import React from 'react';
import { Numeric } from './Numeric';
import styles from './Statistics.module.css';

import data from './mock.json';

export const Numerics = () => {
  const renderedNumeric = data.data.map((d) => {
    return <Numeric num={d.num} unit={d.unit} desc={d.desc} />;
  });

  return <div className={styles.numerics}>{renderedNumeric}</div>;
};
