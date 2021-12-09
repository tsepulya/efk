import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import Flippy, { FrontSide, BackSide } from 'react-flippy';
import styles from './CardWords.module.css';

// const CardWords = ({ categories }) => (
//   <div className={styles.main__container}>
//     {categories.map(({
//       category, words, images, path,
//     }) => (
//       <Link to={path} key={category}>
//         <div className={styles.card__category}>
//           <img src={images[0]} alt={words[0]} className={styles.category__img} />
//           <p className={styles.category__name}>{category}</p>
//         </div>
//       </Link>
//     ))}
//     ;
//   </div>
// );

// CardWords.propTypes = {
//   categories: PropTypes.instanceOf(Array).isRequired,
// };

// export default CardWords;

const CardWords = ({ card }) => {
  const { words, translation, images } = card;
  return (
    <div className={styles.main__container}>
      {words.map((elem, index) => (
        <Card
          key={elem}
          word={words[index]}
          translation={translation[index]}
          image={images[index]}
        />
      ))}
    </div>
  );
  // const ref = useRef();
  // return (
  //   <div>
  //     {category.words.map((elem) => (
  //       <Flippy
  //         key={elem}
  //         flipOnHover={false} // default false
  //         flipOnClick={false} // default false
  //         flipDirection="horizontal" // horizontal or vertical
  //         ref={ref} // to use toggle method like ref.curret.toggle()
  //     // if you pass isFlipped prop component will be controlled component.
  //     // and other props, which will go to div
  //         className={styles.card}/// these are optional style, it is not necessary
  //       >
  //         <FrontSide className={styles.card__front}>
  //           {/* <img src={category.images[index]} alt={elem} className={styles.card__img} />
  //           <br /> */}
  //           <button type="button" onClick={() =>
  // { ref.current.toggle(); }}> Toggle via button</button>
  //         </FrontSide>
  //         <BackSide className={styles.card__back}>
  //           ROCKS
  //         </BackSide>
  //       </Flippy>
  //     ))}
  //   </div>
  // );
};

CardWords.propTypes = {
  card: PropTypes.instanceOf(Object).isRequired,
};

export default CardWords;
