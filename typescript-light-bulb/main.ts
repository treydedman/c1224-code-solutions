// Query for lightBulb and container
const $lightBulb = document.querySelector('.light-bulb');
const $container = document.querySelector('.container');

// check for error if query fails
if (!$lightBulb) throw new Error('$lightBulb query failed');
if (!$container) throw new Error('$container query failed');

// click event listener for $lightBulb
$lightBulb.addEventListener('click', () => {
  // toggle $lightBulb and $container
  if ($lightBulb.classList.contains('off')) {
    $lightBulb.classList.remove('off');
    $lightBulb.classList.add('on');
    $container.classList.remove('light-off');
    $container.classList.add('light-on');
    // console.log('on');
  } else {
    $lightBulb.classList.remove('on');
    $lightBulb.classList.add('off');
    $container.classList.remove('light-on');
    $container.classList.add('light-off');
    // console.log('off');
  }
});
