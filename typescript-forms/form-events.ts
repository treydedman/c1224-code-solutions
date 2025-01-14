function handleFocus(event: Event): void {
  console.log('-O- focus event fired');

  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('focus name: ', eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('--> blur event fired');

  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('blur name: ', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
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
