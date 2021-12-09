import {
  actionAImages, actionBImages, adjectiveImages, animalAImages,
  animalBImages, clothesImages, emotionsImages, transportImages,
} from '../assets/images';
import {
  actionAAudio, actionBAudio, adjectiveAudio, animalAAudio,
  animalBAudio, clothesAudio, emotionsAudio, transportAudio,
} from '../assets/audio';

const categories = [
  {
    category: 'Action (set A)',
    words: ['cry', 'dance', 'dive', 'draw', 'fish', 'fly', 'hug', 'jump'],
    translation: ['плакать', 'танцевать', 'нырять', 'рисовать', 'рыбачить', 'летать', 'обнимать', 'прыгать'],
    images: actionAImages,
    sound: actionAAudio,
  },
  {
    category: 'Action (set B)',
    words: ['open', 'play', 'point', 'ride', 'run', 'sing', 'skip', 'swim'],
    translation: ['открывать', 'играть', 'указывать', 'ездить', 'бежать', 'петь', 'скакать', 'плавать'],
    images: actionBImages,
    sound: actionBAudio,
  },
  {
    category: 'Transport',
    words: ['bus', 'car', 'plane', 'ship', 'boat', 'helicopter', 'train', 'bicycle'],
    translation: ['автобус', 'машина', 'самолет', 'корабль', 'лодка', 'вертолет', 'поезд', 'велосипед'],
    images: transportImages,
    sound: transportAudio,
  },
  {
    category: 'Adjective',
    words: ['bad', 'beautiful', 'big', 'broken', 'clean', 'cold', 'dirty', 'heavy'],
    translation: ['плохой', 'красивый', 'большой', 'сломанный', 'чистый', 'холодный', 'грязный', 'тяжелый'],
    images: adjectiveImages,
    sound: adjectiveAudio,
  },
  {
    category: 'Animal (set A)',
    words: ['cat', 'chick', 'chicken', 'dog', 'horse', 'pig', 'rabbit', 'sheep'],
    translation: ['кот', 'цыпленок', 'курица', 'собака', 'лошадь', 'свинья', 'кролик', 'овца'],
    images: animalAImages,
    sound: animalAAudio,
  },
  {
    category: 'Animal (set B)',
    words: ['bird', 'panda', 'frog', 'giraffe', 'lion', 'mouse', 'turtle', 'dolphin'],
    translation: ['птица', 'панда', 'лягушка', 'жираф', 'лев', 'мышь', 'черепаха', 'дельфин'],
    images: animalBImages,
    sound: animalBAudio,
  },
  {
    category: 'Clothes',
    words: ['skirt', 'pants', 'blouse', 'dress', 'boot', 'shirt', 'coat', 'shoe'],
    translation: ['юбка', 'штаны', 'блузка', 'платье', 'ботинки', 'рубашка', 'пальто', 'туфли'],
    images: clothesImages,
    sound: clothesAudio,
  },
  {
    category: 'Emotions',
    words: ['sad', 'angry', 'happy', 'tired', 'surprised', 'scared', 'smile', 'laugh'],
    translation: ['грустный', 'злой', 'счастливый', 'усталый', 'удивленный', 'испуганный', 'улыбаться', 'смеяться'],
    images: emotionsImages,
    sound: emotionsAudio,
  },
];

export default categories;
