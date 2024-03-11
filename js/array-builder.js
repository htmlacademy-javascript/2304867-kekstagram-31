import { getRandomIndex, getRandomArrayElement} from './utils.js';
import { MESSAGES, NAMES } from './data.js';

// Задаем переменные для создания комментария
const randomCommentId = getRandomIndex (1,200);
const randomCommentAvatar = getRandomIndex (1, 6);
const randomCommentMessage = getRandomArrayElement (MESSAGES);
const randomCommentName = getRandomArrayElement (NAMES);

// Задаем функцию создания комментария
const createNewComment = () => ({
  id: randomCommentId(),
  avatar: `img/avatar-${randomCommentAvatar}.svg`,
  message: randomCommentMessage(),
  name: randomCommentName()
});

// Задаем переменные для добавления в итоговый объект
const randomPhotoId = getRandomIndex (1, 25);
const randomPhotoUrl = getRandomIndex (1, 25);
const randomPhotoDescription = 'Определенно запоминающиеся впечатления';
const likesQuantity = getRandomIndex (15, 200);

// Функция для создания нового объекта (описания фотографии)
const createNewPhotoDescription = () => ({
  id: randomPhotoId (),
  url: `photos/${randomPhotoUrl()}.jpg`,
  description: randomPhotoDescription,
  likes: likesQuantity (),
  comments: createNewComment ()
});

// Задаем необходимое количество сгенерированных объектов
const NECESSARY_OBJECTS_COUNT = 25;

//Генерируем (создаем) массив полученных объектов
const photoObjectsCollection = Array.from({length: NECESSARY_OBJECTS_COUNT}, createNewPhotoDescription);

export {photoObjectsCollection};


