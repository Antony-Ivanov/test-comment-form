export default function makePaginationsMarkup(links) {
  return links
    .map(({ active, label, url }) => {
      return active
        ? `<li><button class="paginations__item paginations__item--active" data-active="${active}" data-src="${url}" type="button">${label}</button></li>`
        : url === null
        ? `<li><button class="paginations__item" data-active="${active}" data-src="${url}" disabled="disabled" type="button">${label}</button></li>`
        : `<li><button class="paginations__item" data-active="${active}" data-src="${url}" type="button">${label}</button></li>`;
    })
    .join('');
}
