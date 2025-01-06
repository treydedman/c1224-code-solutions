const $button = document.querySelector('.click-button');
if (!$button) throw new Error('$button does not exist');

function handleClick(event: Event): void {
  console.log('button clicked');
  console.log('event', event);
  console.log('target', event.target);
}
$button.addEventListener('click', handleClick);

const $buttonMouseOver = document.querySelector('.hover-button');
if (!$buttonMouseOver) throw new Error('$buttonMouseOver does not exist');

function handleMouseOver(event: Event): void {
  console.log('button hovered');
  console.log('event', event);
  console.log('target', event.target);
}
$buttonMouseOver.addEventListener('mouseover', handleMouseOver);

const $buttonDouble = document.querySelector('.double-click-button');
if (!$buttonDouble) throw new Error('$buttonDouble does not exist');

function handleDoubleClick(event: Event): void {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('target', event.target);
}
$buttonDouble.addEventListener('dblclick', handleDoubleClick);
