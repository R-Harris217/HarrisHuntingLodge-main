import React from 'react';
import styles from './Gallery.module.css';

const importAllImages = (r) => {
  return r.keys().map(r);
};

const images = importAllImages(require.context('../assets/Gallery', false, /\.(jpeg|jpg)$/));

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.imageGrid}>
        {images.map((src, index) => (
          <div className={styles.imageContainer} key={index}>
            <img src={src.default} alt="Gallery" className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
