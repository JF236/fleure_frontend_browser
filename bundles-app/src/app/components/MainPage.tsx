import React from 'react';
import styles from '../fleurepage.module.css';
import Header from './Header';
import CategorySection from './CategorySection';
import ImageSection from './ImageSection';
import SideColumn from './SideColumn';

const FleurePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <div className={styles.leftColumnContent}>
              <CategorySection />
              <ImageSection />
            </div>
          </div>
          <SideColumn />
        </div>
      </main>
    </div>
  );
};

export default FleurePage;