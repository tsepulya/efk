import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import cn from 'classnames';
import { takeWordsFromLocalStorage } from '../../utils/localStorage';
import {
  ORDER_FROM_BIG, ORDER_FROM_SMALL,
  order, WORD, TRANSLATION, CATEGORY, CLICKS, CORRECT, WRONG, ERRORS,
} from '../../constants/constants';
import styles from './Statistics.module.css';

const TableInner = ({ keyWord }) => (
  <tr className={styles.statistics__tr}>
    <td>{keyWord.word}</td>
    <td>{keyWord.translation}</td>
    <td>{keyWord.category}</td>
    <td>{keyWord.clicks}</td>
    <td>{keyWord.correct}</td>
    <td>{keyWord.wrong}</td>
    <td>
      {Number(((keyWord.wrong / (keyWord.correct + keyWord.wrong)) * 100).toFixed(2)) || 0}
      %
    </td>
  </tr>
);

TableInner.propTypes = {
  keyWord: PropTypes.instanceOf(Object).isRequired,
};

const Statistics = () => {
  const initial = takeWordsFromLocalStorage();
  const [words, setWords] = useState(initial);

  useEffect(() => {
  }, [words]);
  const sortWords = (prop) => {
    let wordsSorted = words.slice(0);
    if (order.direction === ORDER_FROM_SMALL) {
      if (prop !== 'errors') {
        wordsSorted = wordsSorted.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
      } else {
        wordsSorted = wordsSorted.sort((a, b) => ((a.wrong / (a.correct + a.wrong) || 0)
          < (b.wrong / (b.correct + b.wrong) || 0)
          ? -1
          : 1));
      }
      order.direction = ORDER_FROM_BIG;
    } else {
      if (prop !== 'errors') {
        wordsSorted = wordsSorted.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
      } else {
        wordsSorted = wordsSorted.sort((a, b) => ((a.wrong / (a.correct + a.wrong) || 0)
          > (b.wrong / (b.correct + b.wrong) || 0)
          ? -1
          : 1));
      }
      order.direction = ORDER_FROM_SMALL;
    }
    setWords(wordsSorted);
  };

  function reset() {
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key !== 'loglevel:webpack-dev-server') {
        const word = JSON.parse(localStorage.getItem(key));
        word.clicks = 0;
        word.correct = 0;
        word.wrong = 0;
        word.errors = 0;
        localStorage.setItem(key, JSON.stringify(word));
      }
    }
    setWords(takeWordsFromLocalStorage());
  }

  return (
    <div className={styles.statistics__container}>
      <div className={styles.statistics__btn_div}>
        <Link to="/repeat" className={styles.repeat__link}>
          <button type="button" className={cn(styles.statistics__btn, styles.btn__difficult)}>
            Repeat difficult words
          </button>
        </Link>
        <button type="button" className={cn(styles.statistics__btn, styles.btn__reset)} onClick={() => reset()}>Reset</button>
      </div>
      <table className={styles.statistics__table}>
        <thead>
          <tr>
            <th className={styles.table__title} onClick={() => sortWords(WORD)} aria-hidden="true">Word</th>
            <th className={styles.table__title} onClick={() => sortWords(TRANSLATION)} aria-hidden="true">Translation</th>
            <th className={styles.table__title} onClick={() => sortWords(CATEGORY)} aria-hidden="true">Category</th>
            <th className={styles.table__title} onClick={() => sortWords(CLICKS)} aria-hidden="true">Clicks</th>
            <th className={styles.table__title} onClick={() => sortWords(CORRECT)} aria-hidden="true">Correct</th>
            <th className={styles.table__title} onClick={() => sortWords(WRONG)} aria-hidden="true">Wrong</th>
            <th className={styles.table__title} onClick={() => sortWords(ERRORS)} aria-hidden="true">% errors</th>
          </tr>
        </thead>
        <tbody>
          {words.map((elem) => (
            <TableInner keyWord={elem} key={uuid()} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
