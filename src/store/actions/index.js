import {
  ADD_CORRECT_ANSWER, ADD_WRONG_ANSWER, ADD_STAR,
  ADD_ACTIVE_SOUND, ADD_ARRAY_OF_WORDS, RETURN_TO_INITIAL_STATE,
} from '../constants/actionTypes';

export const addCorrectAnswer = () => ({
  type: ADD_CORRECT_ANSWER,
});

export const addWrongAnswer = () => ({
  type: ADD_WRONG_ANSWER,
});

export const addActiveSound = (sound) => ({
  type: ADD_ACTIVE_SOUND,
  payload: sound,
});

export const addArrayOfWords = (array) => ({
  type: ADD_ARRAY_OF_WORDS,
  payload: array,
});

export const returnToInitialState = () => ({
  type: RETURN_TO_INITIAL_STATE,
});

export const addStar = (img) => ({
  type: ADD_STAR,
  payload: img,
});
