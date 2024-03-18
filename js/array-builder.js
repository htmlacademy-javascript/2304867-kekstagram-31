import { createRandomUniqueIntegerGenerator, getRandomArrayElement, getRandomInteger} from './utils.js';
import { MESSAGES, NAMES } from './constant.js';

// Задаем функцию создания комментария
const createNewComment = () => {
  const randomCommentId = createRandomUniqueIntegerGenerator(1,200);
  const MAX_AVATAR_ID = 6;
  const randomCommentAvatar = getRandomInteger(1, MAX_AVATAR_ID);
  const randomCommentMessage = getRandomArrayElement(MESSAGES);
  const randomCommentName = getRandomArrayElement(NAMES);

  return (
    {
      id: randomCommentId(),
      avatar: `img/avatar-${randomCommentAvatar}.svg`,
      message: randomCommentMessage,
      name: randomCommentName
    }
  );
};

// Задаем переменные для добавления в итоговый объект
const randomPhotoIdGenerator = createRandomUniqueIntegerGenerator(1, 25);
const MAX_URL_ID = 25;
const randomPhotoUrlGenerator = createRandomUniqueIntegerGenerator(1, MAX_URL_ID);
const randomPhotoDescription = 'Определенно запоминающиеся впечатления';
const likesQuantity = createRandomUniqueIntegerGenerator(15, 200);

// Функция для создания нового объекта (описания фотографии)
const createNewPhotoDescription = () => ({
  id: randomPhotoIdGenerator(),
  url: `photos/${randomPhotoUrlGenerator()}.jpg`,
  description: randomPhotoDescription,
  likes: likesQuantity(),
  comments: createNewComment()
});

// Создаем массив полученных объектов
const initArrayBuilder = () => {
  const NECESSARY_OBJECTS_COUNT = 25; // задаем необходимое количество сгенерированных объектов
  return Array.from({length: NECESSARY_OBJECTS_COUNT}, createNewPhotoDescription);
};

//const photoObjectsCollection = Array.from({length: NECESSARY_OBJECTS_COUNT}, createNewPhotoDescription);

export {initArrayBuilder};


