import React from 'react';
import styles from './FullWidthImage.module.css';
import { Link } from '@reach/router';

const FullWidthImage = ({ imageSrc }) => (
    <div className={styles.imageContainer} style={{ backgroundImage: `url(${imageSrc})` }}>
        <h1 className={styles.title}>Welcome to Harris Hunting Lodge</h1>
        <Link to="/contact" className={styles.button}>Book Your Hunt Today</Link>
    </div>
);

export default FullWidthImage;
