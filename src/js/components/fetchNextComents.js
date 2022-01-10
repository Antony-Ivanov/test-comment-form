import { fetchComents } from '../apiService.js';

import renderPagination from './renderPagination.js';
import renderСomment from './renderСomment.js';
import Loader from './loader.js';

const changeLoader = new Loader('.loader');

const paginationList = document.querySelector('.js-paginations');

paginationList.addEventListener('click', fetchNextComents);

function fetchNextComents(e) {
  const url = e.target.dataset.src;

  if (url === null) {
    console.log('tut null');
    return;
  } else {
    // changeLoader.addLoader();

    return fetchComents(url)
      .then(({ data, links }) => {
        changeLoader.addLoader();
        renderСomment(data);
        renderPagination(links);
        changeLoader.clearLoader();
      })
      .finally(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
  }
}
