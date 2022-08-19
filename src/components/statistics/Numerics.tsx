import React from 'react';
import { Numeric } from './Numeric';
import styles from './Statistics.module.css';

import data from './mock.json';

export const Numerics = () => {
  return (
    <div className={styles.numerics}>
      <Numeric num={data.data.users} unit={'만 명'} desc={'의 사용자'} />
      <Numeric num={data.data.reviews} unit={'만 개'} desc={'의 리뷰'} />
      <Numeric num={data.data.saves} unit={'만 개'} desc={'의 저장'} />
    </div>
  );
};
