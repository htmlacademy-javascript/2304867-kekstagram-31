const fullSizePicture = document.querySelector('.big-picture');
const commentList = fullSizePicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const shownCommentCounter = fullSizePicture.querySelector('.social__comment-shown-count');
const loaderButton = fullSizePicture.querySelector('.social__comments-loader');

const CURRENT_COMMENT_COUNT = 5;
const STEP = 5;
let commentCounter = CURRENT_COMMENT_COUNT;
let totalCounter = 5;
let commentsContainer = [];

const loadMoreComments = () => {
  const nextCounter = commentCounter + STEP;
  if (nextCounter > totalCounter) {
    commentCounter = totalCounter;
  } else {
    commentCounter = nextCounter;
  }
  shownCommentCounter.textContent = commentCounter;
  for (let i = commentCounter - STEP; i < commentCounter; i ++) {
    commentsContainer[i].classList.remove('hidden');
  }
};

loaderButton.addEventListener('click', loadMoreComments);

export const renderComment = (comments) => {
  commentList.innerHTML = '';
  const fragment = document.createDocumentFragment();
  totalCounter = comments.length;
  if (CURRENT_COMMENT_COUNT > totalCounter) {
    commentCounter = totalCounter;
  } else {
    commentCounter = CURRENT_COMMENT_COUNT;
  }
  comments.forEach((comment, index) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__text').textContent = comment.message;
    if (index >= CURRENT_COMMENT_COUNT) {
      commentElement.classList.add('hidden');
    }
    fragment.appendChild(commentElement);
  });
  commentsContainer = [...fragment.childNodes];
  commentList.appendChild(fragment);
  shownCommentCounter.textContent = commentCounter;
};
