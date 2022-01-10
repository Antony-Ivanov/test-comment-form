import './styles.css';

import './js/components/renderMore.js';
import './js/components/fetchNextComents';
import './js/components/addComment';

// import NewsApiService from './js/apiService.js';
// import LoadMoreBtn from './js/components/load-more-btn';
// import renderPagination from './js/components/renderPagination.js';
// import renderСomment from './js/components/renderСomment.js';

// const newsApiService = new NewsApiService();

// const commentsList = document.querySelector('.js-comments');

// const paginationList = document.querySelector('.js-paginations');

// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });

// loadMoreBtn.refs.button.addEventListener('click', renderMore);

// function renderMore() {
//   loadMoreBtn.disable();
//   newsApiService
//     .fetchApi()
//     .then(({ data, links }) => {
//       renderСomment(data);
//       renderPagination(links);
//       console.log();
//       loadMoreBtn.enable();
//     })
//     .catch(err => console.log(err));
// }

// loadMoreBtn.show();
// renderMore();

// const paginationItem = document.querySelector('.paginations__item');

// const paginationItem = paginationList.children;

// console.log(paginationItem);

// function paginationClassActive(active) {
//   console.log(active);
//   for (let i = 0; i < active.length; i++) {
//     // const element = active[i];

//     if (active[i]) {
//       return paginationItem.classList.add('paginations__item--active');
//     }

//     // ${ if (active) { return 'paginations__item--active' } }
//   }

//   // paginationItem.classList.add('paginations__item--active');
// }

// paginationClassActive();

// async function addСomment(comment) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(comment),
//   };

//   const response = await fetch(`${BASE_URL}`, options);
//   const Сomment = await response.json();

//   return Сomment;
// }

// async function fetchWithErrorHandling(url = '', config = {}) {
//   const response = await fetch(url, config);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not found'));
// }

// export function fetchComents(BASE_URL) {
//   return fetchWithErrorHandling(`${BASE_URL}`);
// }

// paginationList.addEventListener('click', fetchNextComents);

// function fetchNextComents(e) {
//   const url = e.target.dataset.src;
//   // const url = e.currentTarget;
//   // const test = paginationList.target.dataset.src;
//   // console.log(test);
//   if (url === null) {
//     //  modalEl.classList.add('is-open');
//     console.log('tut null');
//     return;
//   }

//   console.log(url);
//   return fetchComents(url).then(({ data, links }) => {
//     renderСomment(data);
//     renderPagination(links);

//     loadMoreBtn.enable();
//   });
// }

// const BASE_URL = 'https://jordan.ashton.fashion/api/goods/30/comments';

// export function addFetchComents(comment) {
//   const options = {
//     method: 'POST',

//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(comment),
//   };
//   return fetchWithErrorHandling(`${BASE_URL}`, options);
// }

// const formBtn = document.querySelector('.form__button');

// formBtn.addEventListener('click', handleSubmitBtn);

// function handleSubmitBtn(e) {
//   e.preventDefault();

//   const inputName = document.querySelector('.input-name').value;
//   const inputComment = document.querySelector('.input-comment').value;

//   const comment = {
//     name: inputName,
//     text: inputComment,
//   };

//   addFetchComents(comment);

//   document.querySelector('.modal-form').reset();

//   return;
// }
