import React from 'react';
import styles from '../css/LeftMenu.module.css';

const LeftMenu: React.FC = () => {
  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.categoriesTitle}>Categories</h2>
      <div className={styles.categoryList}>
        <div className={styles.categoryItem}>Hockey</div>
        <div className={styles.categoryItem}>University</div>
      </div>
      {/* Should probably abstract this programmatically with preset colors */}
      <a href="#" className={styles.seeMoreLink}>See more</a>
      <h2 className={styles.configurationTitle}>Other configuration</h2>
      <div className={styles.categoryList}>
        <div className={styles.configurationItem}>Lorem Ipsum, or smth</div>
      </div>
      <a href="#" className={styles.seeMoreLink}>See more</a>
    </section>
  );
};

export default LeftMenu;