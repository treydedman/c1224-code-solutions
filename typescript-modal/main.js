'use strict';
const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
if (!$openModal || !$dismissModal || !$dialog)
  throw new Error(
    'The author of this code has much to learn because the query failed'
  );
$openModal.addEventListener('click', () => {
  $dialog.showModal();
  console.log('modal should open');
});
$dismissModal.addEventListener('click', () => {
  $dialog.close();
  console.log('modal should close');
});
