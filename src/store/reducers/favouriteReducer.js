// import { omit } from 'lodash';

import {
  ADD_CORRECT_ANSWER, ADD_WRONG_ANSWER,
  ADD_ACTIVE_SOUND, ADD_ARRAY_OF_WORDS, RETURN_TO_INITIAL_STATE,
} from '../constants/actionTypes';
// import { getLocalStorage } from '../../utils/localStorage';

// const initialState = getLocalStorage('store');

export const initialState = {
  arrayOfWords: [],
  correct: 0,
  wrong: 0,
  activeSound: '',
};

const playReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CORRECT_ANSWER:
      return { ...state, correct: state.correct + 1 };
    case ADD_WRONG_ANSWER:
      return { ...state, wrong: state.wrong + 1 };
    case ADD_ACTIVE_SOUND:
      return { ...state, activeSound: action.payload };
    case ADD_ARRAY_OF_WORDS:
      return { ...state, arrayOfWords: action.payload };
    case RETURN_TO_INITIAL_STATE:
      return initialState;
    default:
      return state;
  }
};

export default playReducer;
