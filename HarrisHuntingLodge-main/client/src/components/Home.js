import React from 'react';
import styles from './Home.module.css';
import firstImage from '../assets/FirstImage.jpg';
import secondImage from '../assets/SecondImage.jpg';
import { Parallax } from 'react-scroll-parallax';
import { navigate } from '@reach/router';

const Home = () => {
  return (
    <div className={styles.home}>
      <Parallax y={[-20, 20]} tagOuter="figure">
        <div className={styles.parallax} style={{ backgroundImage: `url(${firstImage})` }}>
          <div className={styles.text}>
            <h1>Welcome to Harris Hunting Lodge</h1>
            {/* <button className={styles.button} onClick={() => navigate('/contact')}>
              Book Your Hunt Today
            </button> */}
          </div>
        </div>
      </Parallax>

      <div className={styles.textBlock}>
        <p>
          Experience the thrill of the hunt with Harris Hunting Lodge. Our lodge is nestled in the
          heart of Southern Missouri’s countryside, just outside of Rolla. With our diverse range of
          hunting grounds that include thick forests and expansive fields, you'll find a unique and
          challenging hunting experience at any time of the season. The local wildlife, particularly
          deer and turkey, are abundant and the environment is perfect for a memorable hunting trip.
        </p>
      </div>

      <Parallax y={[20, -20]} tagOuter="figure">
        <div className={styles.parallax} style={{ backgroundImage: `url(${secondImage})` }}>
          <div className={styles.textBlock}>
            <p>
              Our grounds provide diverse terrains to make your hunting experience unique. We provide
              hunting stands and blinds for all hunts, and we always aim to ensure that you have the
              best odds for a successful hunt. A stay at Harris Hunting Lodge includes meals and
              accommodation in our comfortable and rustic lodge, ensuring you have a relaxing and
              enjoyable stay.
            </p>
            {/* <button className={styles.button} onClick={() => navigate('/contact')}>
              Book Your Hunt Today
            </button> */}
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
