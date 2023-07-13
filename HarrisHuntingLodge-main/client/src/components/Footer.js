import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        Harris Hunting Lodge | Licking, MO 65542 <br />
        Copyright © Harris Hunting Lodge. All Rights Reserved
      </div>
      <div className={styles.right}>
      <a href="mailto:harrishuntinglodge@gmail.com" className={styles.emailLink}>harrishuntinglodge@gmail.com</a> <br />
        314-944-2619
      </div>
    </footer>
  );
};

export default Footer;
