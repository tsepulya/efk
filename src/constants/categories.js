import { actionAImages, actionBImages } from '../assets/images';

const categories = [
  {
    category: 'Action (set A)',
    words: ['cry', 'dance', 'dive', 'draw', 'fish', 'fly', 'hug', 'jump'],
    translation: ['плакать', 'танцевать', 'нырять', 'рисовать', 'рыбачить', 'летать', 'обнимать', 'прыгать'],
    images: actionAImages,
  },
  {
    category: 'Action (set B)',
    words: ['open', 'play', 'point', 'ride', 'run', 'sing', 'skip', 'swim'],
    translation: ['открывать', 'играть', 'указывать', 'ездить', 'бежать', 'петь', 'скакать', 'плавать'],
    images: actionBImages,
  },
  {
    category: 'Transport',
    words: ['bus', 'car', 'plane', 'ship', 'boat', 'helicopter', 'train', 'bicycle'],
    translation: ['автобус', 'машина', 'самолет', 'корабль', 'лодка', 'вертолет', 'поезд', 'велосипед'],
    images: [],
  },
  {
    category: 'Adjective',
    words: ['bad', 'beautiful', 'big', 'broken', 'clean', 'cold', 'dirty', 'heavy'],
    translation: ['плохой', 'красивый', 'большой', 'сломанный', 'чистый', 'холодный', 'грязный', 'тяжелый'],
    images: [],
  },
  {
    category: 'Animal (set A)',
    words: ['cat', 'chick', 'chicken', 'dog', 'horse', 'pig', 'rabbit', 'sheep'],
    translation: ['кот', 'цыпленок', 'курица', 'собака', 'лошадь', 'свинья', 'кролик', 'овца'],
    images: [],
  },
  {
    category: 'Animal (set B)',
    words: ['bird', 'panda', 'frog', 'giraffe', 'lion', 'mouse', 'turtle', 'dolphin'],
    translation: ['птица', 'панда', 'лягушка', 'жираф', 'лев', 'мышь', 'черепаха', 'дельфин'],
    images: [],
  },
  {
    category: 'Clothes',
    words: ['skirt', 'pants', 'blouse', 'dress', 'boot', 'shirt', 'coat', 'shoe'],
    translation: ['юбка', 'штаны', 'блузка', 'платье', 'ботинки', 'рубашка', 'пальто', 'туфли'],
    images: [],
  },
  {
    category: 'Emotions',
    words: ['sad', 'angry', 'happy', 'tired', 'surprised', 'scared', 'smile', 'laugh'],
    translation: ['грустный', 'злой', 'счастливый', 'усталый', 'удивленный', 'испуганный', 'улыбаться', 'смеяться'],
    images: [],
  },
];

export default categories;
