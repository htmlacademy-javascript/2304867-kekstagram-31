/*
На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:
  Адрес изображения url подставьте как атрибут src изображения.
  Описание изображения description подставьте в атрибут alt изображения.
  Количество лайков likes выведите в блок .picture__likes.
  Количество комментариев comments выведите в блок .picture__comments.
*/

//Задаем шаблон и контейнер, куда будут отрисовываться фотографии
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

//Функция добавления фотографий в контейнер
const generatePictures = (addPictures) => {
  addPictures.forEach((photo) => {
    const thumbnail = picturesTemplate.cloneNode(true);
    const image = thumbnail.querySelector('.picture__img');
    const likes = thumbnail.querySelector('.picture__likes');
    const comments = thumbnail.querySelector('.picture__comments');

    image.src = photo.url;
    image.alt = photo.description;
    likes.textContent = photo.likes;
    comments.textContent = photo.comments.length;
    picturesContainer.appendChild(thumbnail);
  });
};

export {generatePictures};
