import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.title}>Saessac_Study_Team_2</h1>
      <button
        className={styles.gitLink}
        onClick={() =>
          window.open(
            'https://github.com/Saessac-Study-Team2/RunToYou',
            '_blank'
          )
        }
      >
        https://github.com/Saessac-Study-Team2/RunToYou
      </button>
      <p className={styles.member}>
        Codestates SEB_FE_39 서은정,안태건,조수완,진현덕
      </p>
    </footer>
  );
};

export default Footer;
