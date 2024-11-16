'use client';

import styles from './styles/Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.cubeGrid}>
        {[...Array(9)].map((_, index) => (
          <div key={index} className={styles.cube}></div>
        ))}
      </div>
    </div>
  );
}