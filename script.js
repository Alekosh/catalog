const filterBox = document.querySelectorAll('.work__catalog--item');
const filterItems = document.querySelectorAll('.filter__item');

document.querySelector('.work__inner--filter').addEventListener('click', event => {
  if (event.target.tagName !== 'LI') return false;

  let filterClass = event.target.dataset['filter'];

  filterBox.forEach(elem => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hide');
    }
  });

  filterItems.forEach(item => {
    item.classList.remove('filter__item--active');
    if (!event.target.classList.contains(filterClass)) {
      event.target.classList.add('filter__item--active');
    }
  })
});