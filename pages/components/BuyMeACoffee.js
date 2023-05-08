import React from 'react';
import styles from '../../styles/Coffee.module.css';

export default function Coffee() {
  return (
    <a
      className={styles.buyButton}
      target="_blank"
      href="https://www.buymeacoffee.com/eriknewland"
      rel="noreferrer"
    >
      <img
        className={styles.coffeeImage}
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span className={styles.coffeeButtonText}>Buy me a coffee</span>
      <span className={`dark:text-white ${styles.steam}`}>
        <span className={`dark:text-white `}></span>
        <span className={`dark:text-white`}> </span>
        <span className={`dark:text-white `}></span>
      </span>
    </a>
  );
}
