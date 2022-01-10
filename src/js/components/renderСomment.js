import makeСommentsMarkup from './makeСommentsMarkup.js';

const commentsList = document.querySelector('.js-comments');

export default function renderСomment(query) {
  const markup = makeСommentsMarkup(query);
  // commentsList.insertAdjacentHTML('beforeend', markup);
  commentsList.innerHTML = markup;
}
