/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import hamburger from '../../../assets/common/img/menu.png';
import styles from './UiMenu.module.css';

const Menu = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  return (
    <nav className={styles.menu}>
      <input type="checkbox" id="side-checkbox" className={styles.side_checkbox} onClick={handleClick} checked={checked} />
      <div className={styles.side_panel}>
        <p className={styles.menu__btn_close} onClick={handleClick}>X</p>
        <ul className={styles.list__container}>
          <li className={styles.menu__list}>
            <NavLink to="/" exact className={styles.menu__page}>Main page</NavLink>
          </li>
          <li className={styles.menu__list}>
            <NavLink to="/action-a" className={styles.menu__page}>Action (set A)</NavLink>
          </li>
          <li className={styles.menu__list}>
            <NavLink to="/action-b" className={styles.menu__page}>Action (set B)</NavLink>
          </li>
          <li className={styles.menu__list}>
            <NavLink to="/transport" className={styles.menu__page}>Transport</NavLink>
          </li>
          <li className={styles.menu__list}>
            <NavLink to="/adjective" className={styles.menu__page}>Adjective</NavLink>
          </li>
          <li className={styles.menu__list}>
            <NavLink to="/animal-a" className={styles.menu__page}>Animal (set A)</NavLink>
          </li>
          <li className={styles.menu__list}>
            <NavLink to="/animal-b" className={styles.menu__page}>Animal (set B)</NavLink>
          </li>
          <li className={styles.menu__list}>
            <NavLink to="/clothes" className={styles.menu__page}>Clothes</NavLink>
          </li>
          <li className={styles.menu__list}>
            <NavLink to="/emotions" className={styles.menu__page}>Emotions</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.side_button_1_wr}>
        <label className={styles.side_button_1} htmlFor="side-checkbox">
          <img src={hamburger} alt="menu" className={styles.menu__img} />
        </label>
      </div>
    </nav>
  );
};

export default Menu;
