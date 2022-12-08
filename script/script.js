// Находим столешницу и кнопки
const tableTop = document.querySelector('.presentation__table--top');
const tableButtonTop = document.querySelector('.presentation__table-button--top');
const tableButtonBottom = document.querySelector('.presentation__table-button--bottom');

// Меняем классы для подъёма и опускания столешницы
tableButtonBottom.addEventListener('click', function () {
      tableTop.classList.remove('raise');
      tableTop.classList.add('lower');
});

tableButtonTop.addEventListener('click', function () {
      tableTop.classList.remove('lower');
      tableTop.classList.add('raise');
});