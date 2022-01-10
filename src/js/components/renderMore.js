import NewsApiService from '../apiService.js';

import LoadMoreBtn from './load-more-btn';
import renderPagination from './renderPagination.js';
import renderСomment from './renderСomment.js';
import Loader from './loader.js';

const changeLoader = new Loader('.loader');

const newsApiService = new NewsApiService();

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

loadMoreBtn.refs.button.addEventListener('click', renderMore);

function renderMore() {
  changeLoader.addLoader();
  loadMoreBtn.disable();

  newsApiService
    .fetchApi()
    .then(({ data, links }) => {
      renderСomment(data);
      renderPagination(links);

      changeLoader.clearLoader();
      loadMoreBtn.enable();
    })
    .catch(err => console.log(err));
}

loadMoreBtn.show();
renderMore();
