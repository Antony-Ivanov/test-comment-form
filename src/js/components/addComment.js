import { addFetchComents } from '../apiService.js';

const formBtn = document.querySelector('.form__button');

formBtn.addEventListener('click', handleSubmitBtn);

function handleSubmitBtn(e) {
  e.preventDefault();

  const inputName = document.querySelector('.input-name').value;
  const inputComment = document.querySelector('.input-comment').value;

  const comment = {
    name: inputName,
    text: inputComment,
  };

  addFetchComents(comment);

  document.querySelector('.modal-form').reset();

  return;
}
