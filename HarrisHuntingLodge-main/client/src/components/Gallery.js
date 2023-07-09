import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './Gallery.module.css';

const importAllImages = (r) => {
  return r.keys().map(r);
};

const images = importAllImages(require.context('../assets/Gallery', false, /\.(jpeg|jpg)$/));

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  function openModal(imgSrc) {
    setModalIsOpen(true);
    setModalImage(imgSrc);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={styles.gallery}>
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.imageGrid}>
        {images.map((src, index) => (
          <div className={styles.imageContainer} key={index}>
            <img
              src={src.default}
              alt="Gallery"
              className={styles.image}
              onClick={() => openModal(src.default)}
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <button onClick={closeModal}>close</button>
        <div>
          <img src={modalImage} alt="Full Size" className={styles.fullImage} />
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
