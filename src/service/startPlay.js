import { useDispatch } from 'react-redux';
import playAudio from './playAudio';
import { addActiveSound } from '../store/actions';

const startPlay = (category) => {
  const dispatch = useDispatch();
  const playArray = category.sound.sort(() => Math.random() - 0.5);
  dispatch(addActiveSound(playArray[0]));
  playAudio(playArray[0]);
  console.log(dispatch);
};

export default startPlay;
