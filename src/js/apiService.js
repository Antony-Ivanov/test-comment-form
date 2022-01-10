const BASE_URL = ' https://jordan.ashton.fashion/api/goods/30/comments';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchApi() {
    const url = `${BASE_URL}?page=${this.page}`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(console.log('Error'));
        }
        return response.json();
      })
      .then(response => {
        this.incrementPage();
        return response;
      });
  }

  fetchPostApi(comment) {
    const url = `${BASE_URL}`;
    const dataPost = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    };
    return fetch(url, dataPost).then(response => {
      console.log(response.status);
    });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchComents(BASE_URL) {
  return fetchWithErrorHandling(`${BASE_URL}`);
}

export function addFetchComents(comment) {
  const options = {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  };
  return fetchWithErrorHandling(`${BASE_URL}`, options);
}
