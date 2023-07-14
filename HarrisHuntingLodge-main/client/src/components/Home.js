import React from 'react';
import FullWidthImage from './FullWidthImage';
import Section from './Section';
import styles from './Home.module.css';
import firstImage from '../assets/FirstImage.jpg';
import secondImage from '../assets/SecondImage.jpg';
import thirdImage from '../assets/ThirdImage.jpg';
// import SectionDivider from './SectionDivider';


const Home = () => {
    return (
        <div className={styles.container}>
            <FullWidthImage imageSrc={firstImage} />
            {/* <SectionDivider /> */}
            <Section 
                title="Experience the thrill of the hunt with Harris Hunting Lodge." 
                text="Our lodge is nestled in the heart of Southern Missouri’s countryside, just outside of Rolla. With our diverse range of hunting grounds that include thick forests and expansive fields, you'll find a unique and challenging hunting experience at any time of the season. The local wildlife, particularly deer and turkey, are abundant and the environment is perfect for a memorable hunting trip." 
                imageSrc={secondImage}
                imageOnRight 
                showDivider={true}
            />
            {/* <SectionDivider /> */}
            <Section 
                title="Make your hunting experience unique with us!" 
                text="Our grounds provide diverse terrains to make your hunting experience unique. We provide hunting stands and blinds for all hunts, and we always aim to ensure that you have the best odds for a successful hunt. A stay at Harris Hunting Lodge includes meals and accommodation in our comfortable and rustic lodge, ensuring you have a relaxing and enjoyable stay." 
                imageSrc={thirdImage}
            />
            {/* <SectionDivider /> */}
        </div>
    );
}

export default Home;
