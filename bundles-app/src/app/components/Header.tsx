import React from 'react';
import styles from '../fleurepage.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Fleure.</h1>
      <div className={styles.textbookTitle}>ECE 105 Textbook</div>
      <div className={styles.avatarContainer}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/02dea22f93c148daa29b6b87fc315a76cebca0a215fae612a044d3700ddd2cbd?apiKey=1424e7cdf45c498b85d60a28784c94fd&" className={styles.avatarImage} alt="User avatar" />
      </div>
    </header>
  );
};

export default Header;