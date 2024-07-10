import React from 'react';
import styles from '../fleurepage.module.css';

const SideColumn: React.FC = () => {
  return (
    <aside className={styles.sideColumn}>
      <div className={styles.sideColumnContent}>
        <div className={styles.sideColumnWrapper}>
          <button className={styles.sideColumnControl} aria-label="Toggle side column">-</button>
          <div className={styles.sideColumnImageContainer}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7ec30a33e6da27d456210b3edbe223d640730a58642c533aecbe93d20f477ac?apiKey=1424e7cdf45c498b85d60a28784c94fd&" className={styles.sideColumnBackgroundImage} alt="Side column background" />
            <div className={styles.sortSelect}>
              <span className={styles.sortSelectText}>Sort Select</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa9a54b9d279937faf9dde1b961be6b51680a86dd12b4ae4114b201094cf7e35?apiKey=1424e7cdf45c498b85d60a28784c94fd&" className={styles.sortSelectIcon} alt="Sort icon" />
            </div>
            <div className={styles.divider} />
          </div>
        </div>
        <div className={styles.bottomImageContainer}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/50e0e51b3525b867ccc9e03ac0254697c6a092bbb73d875b34661254d5b8575f?apiKey=1424e7cdf45c498b85d60a28784c94fd&" className={styles.bottomBackgroundImage} alt="Bottom background" />
          <span className={styles.bottomText}>TsundereKermit</span>
        </div>
      </div>
    </aside>
  );
};

export default SideColumn;
