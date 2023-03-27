import React from 'react';
import styles from './Banner.module.css';

function Bannerr({ lodgeLogo, additionalLogo }) {
  return (
    <div className={styles.headerContainer}>
      {lodgeLogo && <img className={styles.logo} src={lodgeLogo} alt="Harris Hunting Lodge logo" />}
      <div className={styles.titleAndLocation}>
        <h1 className={styles.title}>Harris Hunting Lodge</h1>
        <p className={styles.location}>Texas and Phelps County, MO</p>
      </div>
      <div className={styles.contactInfo}>
        {additionalLogo && (
          <img
            className={styles.additionalLogo}
            src={additionalLogo}
            alt="Additional logo"
          />
        )}
        </div>
    </div>
  );
}

export default Bannerr;
