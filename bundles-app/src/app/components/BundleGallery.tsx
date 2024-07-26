import React from 'react';
import styles from '../css/BundleGallery.module.css';

interface BundleGalleryProps {
  items: Array<React.ReactNode>;
}

const BundleGallery: React.FC<BundleGalleryProps> = ({ items }) => {
  var columns = 3;
  const rows = Math.ceil(items.length / columns);
  return (
    <div className={styles.gridContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          {item}
        </div>
      ))}
      {items.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          {item}
        </div>
      ))}
      {items.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          {item}
        </div>
      ))}
      {items.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          {item}
        </div>
      ))}
      {items.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          {item}
        </div>
      ))}
      {items.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          {item}
        </div>
      ))}
      {items.map((item, index) => (
        <div key={index} className={styles.gridItem}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default BundleGallery;
