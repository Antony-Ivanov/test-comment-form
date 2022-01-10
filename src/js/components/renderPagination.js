import makePaginationsMarkup from './makePaginationsMarkup.js';

const paginationList = document.querySelector('.js-paginations');

export default function renderPagination(query) {
  const markup = makePaginationsMarkup(query);
  paginationList.innerHTML = markup;
}
