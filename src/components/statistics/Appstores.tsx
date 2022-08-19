import React from 'react';
import styles from './Statistics.module.css';
import Apple from '../../assets/images/apple.png';
import Playstore from '../../assets/images/playstore.png';

export const Appstores = () => {
  return (
    <div className={styles.stores}>
      <div className={styles.store}>
        <img src={Playstore} alt="playstore img" />
        <div>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </div>
      </div>
      <div className={styles.store}>
        <img src={Apple} alt="apple img" />
        <div>
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </div>
      </div>
    </div>
  );
};
