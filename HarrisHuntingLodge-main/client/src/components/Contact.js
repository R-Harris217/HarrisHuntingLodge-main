import React from 'react';
import contactImage from '../assets/contactImage.jpg';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <img src={contactImage} alt="Harris Hunting Lodge" className={styles.contactImage} />
      <h2 className={styles.contactTitle}>Contact Us</h2>
      <p className={styles.contactInfo}>Monday-Friday 7 AM-7 PM</p>
      <p className={styles.contactInfo}>314-944-2619</p>
      <p className={styles.smallText}>We might be out hunting, so please bear with us if we don't answer immediately.</p>
      <p className={styles.email}>Email us anytime at <a href="mailto:harrishuntinglodge@gmail.com">harrishuntinglodge@gmail.com</a></p>
    </div>
  );
}

export default Contact;
