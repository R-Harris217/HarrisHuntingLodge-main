import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, text, imageSrc, imageOnRight }) => (
    <div className={styles.section}>
        {imageOnRight ? (
            <>
                <div>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{text}</p>
                </div>
                <img src={imageSrc} alt="" className={styles.image} />
            </>
        ) : (
            <>
                <img src={imageSrc} alt="" className={styles.image} />
                <div>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{text}</p>
                </div>
            </>
        )}
    </div>
);

export default Section;
