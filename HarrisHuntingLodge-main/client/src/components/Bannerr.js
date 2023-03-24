import React from 'react';
import styles from './Banner.module.css';

function Bannerr({ lodgeLogo }) {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title}>Harris Hunting Lodge</h1>
      {lodgeLogo && <img className={styles.logo} src={lodgeLogo} alt="Harris Hunting Lodge logo" />}
      <div className={styles.contactInfo}>
        <p>Texas County, MO</p>
        <p className={styles.email}>harrishuntinglodge@gmail.com</p>
      </div>
    </div>
  );
}

export default Bannerr;
