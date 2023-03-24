import React from 'react';
import { Link } from '@reach/router'; // Import Link from @reach/router instead of react-router-dom
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navLink} to="/">Home</Link>
      <Link className={styles.navLink} to="/about-us">About Us</Link>
      <Link className={styles.navLink} to="/gallery">Gallery</Link>
      <Link className={styles.navLink} to="/contact-us">Contact</Link>
    </nav>
  );
}

export default Navbar;
