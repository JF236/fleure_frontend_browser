import React from 'react';
import styles from '../fleurepage.module.css';

const CategorySection: React.FC = () => {
  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.categoriesTitle}>Categories</h2>
      <div className={styles.categoryList}>
        <div className={styles.categoryItem}>Hockey</div>
        <div className={styles.categoryPlaceholder} />
      </div>
      <div className={styles.categoryItem}>Cooking and Baking</div>
      <a href="#" className={styles.seeMoreLink}>See more</a>
      <h3 className={styles.configurationTitle}>Other configuration</h3>
      <div className={styles.configurationItem}>Lorem Ipsum, or smth</div>
      <a href="#" className={styles.seeMoreLink}>See more</a>
      <p className={styles.moreConfigurationsText}>
        More configurations here idk, but the idea is different colors
      </p>
    </section>
  );
};

export default CategorySection;