import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import cn from 'classnames';
import { takeWordsFromLocalStorage } from '../../utils/localStorage';
import styles from './Statistics.module.css';

export const ORDER_FROM_SMALL = 'smallToBig';
export const ORDER_FROM_BIG = 'bigToSmall';

export const order = {
  direction: ORDER_FROM_SMALL,
};

// export function sortTable(prop: string) : void {
//     const tableLines = document.querySelectorAll(".statistics__tr");
//     tableLines.forEach((elem) => elem.remove());
//     const words = takeWordsFromLocalStorage();
//     let wordsSorted: Array<Word>;
//     if (order.direction === ORDER_FROM_SMALL) {
//       if (prop !== ERRORS) {
//         wordsSorted = words.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
//       } else {
//         wordsSorted = words.sort((a, b) =>
//           (a.wrong / (a.correct + a.wrong) || 0) <
//           (b.wrong / (b.correct + b.wrong) || 0)
//             ? -1
//             : 1
//         );
//       }
//       order.direction = ORDER_FROM_BIG;
//     } else {
//       if (prop !== ERRORS) {
//         wordsSorted = words.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
//       } else {
//         wordsSorted = words.sort((a, b) =>
//           (a.wrong / (a.correct + a.wrong) || 0) >
//           (b.wrong / (b.correct + b.wrong) || 0)
//             ? -1
//             : 1
//         );
//       }
//       order.direction = ORDER_FROM_SMALL;
//     }
//     wordsSorted.forEach((elem) => {
//       const tableLine = document.createElement("tr");
//       tableLine.className = "statistics__tr";
//       tableLine.innerHTML = addWordsInTable(elem);
//       const table = <HTMLElement>document.querySelector("table");
//       table.append(tableLine);
//     });
//   }

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
  // eslint-disable-next-line no-unused-vars
  const [words, setWords] = useState(initial);

  useEffect(() => {
  }, [words]);
  //   const words = takeWordsFromLocalStorage();
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

  return (
    <div className={styles.statistics__container}>
      <div className={styles.statistics__btn_div}>
        <button type="button" className={cn(styles.statistics__btn, styles.btn__difficult)}>
          Repeat difficult words
        </button>
        <button type="button" className={cn(styles.statistics__btn, styles.btn__reset)}>Reset</button>
      </div>
      <table className={styles.statistics__table}>
        <tr>
          <th className={styles.table__title} onClick={() => sortWords('word')} aria-hidden="true">Word</th>
          <th className={styles.table__title} onClick={() => sortWords('translation')} aria-hidden="true">Translation</th>
          <th className={styles.table__title} onClick={() => sortWords('category')} aria-hidden="true">Category</th>
          <th className={styles.table__title} onClick={() => sortWords('clicks')} aria-hidden="true">Clicks</th>
          <th className={styles.table__title} onClick={() => sortWords('correct')} aria-hidden="true">Correct</th>
          <th className={styles.table__title} onClick={() => sortWords('wrong')} aria-hidden="true">Wrong</th>
          <th className={styles.table__title} onClick={() => sortWords('errors')} aria-hidden="true">% errors</th>
        </tr>
        {words.map((elem) => (
          <TableInner keyWord={elem} key={uuid()} />
        ))}
      </table>
    </div>
  );
};

export default Statistics;
