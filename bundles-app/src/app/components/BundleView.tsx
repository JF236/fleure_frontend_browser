import React from 'react';
import styles from '../css/BundleView.module.css';

const BundleView: React.FC = () => {
  return (
    <section className={styles.imageContainer}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/98e4c6a00fe5d84bf5a87585c774882ac2563719c084003cd47a7b774440613e?apiKey=1424e7cdf45c498b85d60a28784c94fd&" className={styles.backgroundImage} alt="Background" />
      <div className={styles.imageControls}>
        <button className={styles.controlButton} aria-label="Previous image">-</button>
        <button className={styles.controlButton} aria-label="Next image">-</button>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userInfoItem}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed898c0d5c0065828bd080d8bf994cfc0c9d3e474cd0a858b19614b94c18929?apiKey=1424e7cdf45c498b85d60a28784c94fd&" className={styles.userAvatar} alt="User avatar" />
          <span className={styles.userName}>TsundereKermit</span>
        </div>
        <div className={styles.userInfoItem}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed898c0d5c0065828bd080d8bf994cfc0c9d3e474cd0a858b19614b94c18929?apiKey=1424e7cdf45c498b85d60a28784c94fd&" className={styles.userAvatar} alt="User avatar" />
          <span className={styles.userName}>TsundereMermaid</span>
        </div>
      </div>
    </section>
  );
};

export default BundleView;
