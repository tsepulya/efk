import React from 'react';
import Switcher from '../UI/UiSwitcher/UiSwitcher';

import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Switcher />
  </header>
);

export default Header;
