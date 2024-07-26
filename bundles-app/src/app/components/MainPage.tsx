import React from 'react';
import styles from '../css/MainPage.module.css';
import leftStyles from '../css/LeftMenu.module.css';
import Header from './Header';
import LeftMenu from './LeftMenu';
import ImageSection from './ImageSection';
import BundleGallery from './BundleGallery';
import BundleView from './BundleView';

const FleurePage: React.FC = () => {
  //hardcoded items list
  const items = Array.from({ length: 108 }, (_, index) => <BundleView key={index} />);
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={leftStyles.leftColumn}>
            <div className={leftStyles.leftColumnContent}>
              <LeftMenu />
              <ImageSection />
              <ImageSection />
            </div>
          </div>
          <BundleGallery items={[items]} />
        </div>
      </main>
    </div>
  );
};

export default FleurePage;