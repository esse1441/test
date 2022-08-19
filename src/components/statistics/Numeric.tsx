import React from 'react';
import { useCounter } from '../../hooks';
import styles from './Statistics.module.css';

interface NumericI {
  num: number;
  unit: string;
  desc: string;
}
export const Numeric = ({ num, unit, desc }: NumericI) => {
  const counter = useCounter({ targetNum: num, startNum: 0, duration: 2000 });
  return (
    <div className={styles.numeric}>
      <strong>
        <span>{counter}</span>
        {unit}
      </strong>
      {desc}
    </div>
  );
};
