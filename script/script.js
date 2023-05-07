const tableTop = document.querySelector('.presentation__table--top');
const tableToTopButton = document.querySelector('.presentation__table-button--top');
const tableToBottomButton = document.querySelector('.presentation__table-button--bottom');

tableToBottomButton.addEventListener('click', () => {
      tableTop.classList.add('lower');
});

tableToTopButton.addEventListener('click', () => {
      tableTop.classList.remove('lower');
});