import React from 'react';
import logo from '../../assets/common/img/rss-logo.svg';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.efk__footer}>
    <a href="https://github.com/tsepulya" className={styles.footer__link_github}>tsepulya</a>
    <p className={styles.footer__year}>2021</p>
    <a href="https://rs.school/js/">
      <img src={logo} alt="logo" className={styles.footer__logo} />
    </a>
  </footer>
);

export default Footer;
