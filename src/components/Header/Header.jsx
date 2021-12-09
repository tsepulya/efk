import React from 'react';
import Menu from '../UI/UiMenu/UiMenu';
import Switcher from '../UI/UiSwitcher/UiSwitcher';

import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Menu />
    <Switcher />
  </header>
);

export default Header;
