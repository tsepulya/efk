/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { NavLink } from 'react-router-dom';
import hamburger from '../../../assets/common/img/menu.png';
import styles from './UiMenu.module.css';

const Menu = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const handleClickAway = () => {
    setChecked(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <nav className={styles.menu}>
        <input type="checkbox" id="side-checkbox" className={styles.side_checkbox} onClick={handleClick} checked={checked} />
        <div className={styles.side_panel}>
          <p className={styles.menu__btn_close} onClick={handleClick} aria-hidden="true">X</p>
          <ul className={styles.list__container}>
            <li className={styles.menu__list} onClick={handleClick} aria-hidden="true">
              <NavLink to="/" exact className={styles.menu__page}>Main page</NavLink>
            </li>
            <li className={styles.menu__list} onClick={handleClick} aria-hidden="true">
              <NavLink to="/action-a" className={styles.menu__page}>Action (set A)</NavLink>
            </li>
            <li className={styles.menu__list} onClick={handleClick} aria-hidden="true">
              <NavLink to="/action-b" className={styles.menu__page}>Action (set B)</NavLink>
            </li>
            <li className={styles.menu__list} onClick={handleClick} aria-hidden="true">
              <NavLink to="/transport" className={styles.menu__page}>Transport</NavLink>
            </li>
            <li className={styles.menu__list} onClick={handleClick} aria-hidden="true">
              <NavLink to="/adjective" className={styles.menu__page}>Adjective</NavLink>
            </li>
            <li className={styles.menu__list} onClick={handleClick} aria-hidden="true">
              <NavLink to="/animal-a" className={styles.menu__page}>Animal (set A)</NavLink>
            </li>
            <li className={styles.menu__list} onClick={handleClick} aria-hidden="true">
              <NavLink to="/animal-b" className={styles.menu__page}>Animal (set B)</NavLink>
            </li>
            <li className={styles.menu__list} onClick={handleClick} aria-hidden="true">
              <NavLink to="/clothes" className={styles.menu__page}>Clothes</NavLink>
            </li>
            <li className={styles.menu__list} onClick={handleClick} aria-hidden="true">
              <NavLink to="/emotions" className={styles.menu__page}>Emotions</NavLink>
            </li>
            <li className={styles.menu__list} onClick={handleClick} aria-hidden="true">
              <NavLink to="/statistics" className={styles.menu__page}>Statistics</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.side_button_1_wr}>
          <label className={styles.side_button_1} htmlFor="side-checkbox">
            <img src={hamburger} alt="menu" className={styles.menu__img} />
          </label>
        </div>
      </nav>
    </ClickAwayListener>
  );
};

export default Menu;
