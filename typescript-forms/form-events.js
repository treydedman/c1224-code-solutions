'use strict';
function handleFocus(event) {
  console.log('-O- focus event fired');
  const eventTarget = event.target;
  console.log('focus name: ', eventTarget.name);
}
function handleBlur(event) {
  console.log('--> blur event fired');
  const eventTarget = event.target;
  console.log('blur name: ', eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log(
    'input name: ',
    eventTarget.name,
    'input value: ',
    eventTarget.value
  );
}
const $nameInput = document.querySelector('#user-name');
if (!$nameInput) throw new Error('name input not found');
const $emailInput = document.querySelector('#user-email');
if (!$emailInput) throw new Error('email input not found');
const $messageInput = document.querySelector('#user-message');
if (!$messageInput) throw new Error('message input not found');
$nameInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('focus', handleFocus);
$messageInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('blur', handleBlur);
$messageInput.addEventListener('blur', handleBlur);
$nameInput.addEventListener('input', handleInput);
$emailInput.addEventListener('input', handleInput);
$messageInput.addEventListener('input', handleInput);
