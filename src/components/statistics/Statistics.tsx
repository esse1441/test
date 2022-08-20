import React from 'react';
import { Logo, Numerics, Appstores } from '.';
import { useTimer } from '../../hooks';
import styles from './Statistics.module.css';

export const Statistics = () => {
  const timer = useTimer({ delay: 300 });

  return (
    <div className={styles.section_container}>
      <div className={styles.left_section}>{timer > 0 && <Logo />}</div>
      <div className={styles.right_section}>
        {timer > 1 && <Numerics />}
        {timer > 2 && <Appstores />}
      </div>
    </div>
  );
};
