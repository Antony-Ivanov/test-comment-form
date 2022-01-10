import makeСommentsMarkup from './makeСommentsMarkup.js';
import makePaginationsMarkup from './makePaginationsMarkup.js';

const commentsList = document.querySelector('.js-comments');
const paginationList = document.querySelector('.js-paginations');

export function renderСomment(query) {
  const markup = makeСommentsMarkup(query);
  // commentsList.insertAdjacentHTML('beforeend', markup);
  commentsList.innerHTML = markup;
}

export function renderPagination(query) {
  const markup = makePaginationsMarkup(query);
  paginationList.innerHTML = markup;
}

export const { renderСomment, renderPagination } = renderFunction;
