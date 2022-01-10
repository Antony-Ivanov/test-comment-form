export default function makeСommentsMarkup(comments) {
  return comments
    .map(({ name, text, updated_at }) => {
      return `<li class="comments__item">
          <div class="comments-block">
            <p class="comments-name">
              <svg width="18" height="18">
                <use href="../images/icons.svg#person-black"></use>
              </svg>
              ${name}
            </p>

            <p class="comments-date">${updated_at.slice(0, 10)}</p>
          </div>
          <p class="comments-text">${text}</p>
        </li>`;
    })
    .join('');
}
