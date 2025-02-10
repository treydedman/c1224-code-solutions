'use strict';
// select all the span elements inside the h1 tag
const $allSpans = document.querySelectorAll('h1 span');
// error check for query
if (!$allSpans) throw new Error('$allSpans query failed');
// initialize the current index
let $currentIndex = 0;
// add an event listener for the keydown events
document.addEventListener('keydown', (event) => {
  const $currentSpan = $allSpans[$currentIndex];
  if (!$currentSpan) return;
  // remove the existing "no" class (wrong key indicator)
  $currentSpan.classList.remove('no');
  // check for regular character match or space match
  if (event.key === $currentSpan.textContent) {
    // Correct key: add "yes" class and move to the next character
    $currentSpan.classList.remove('current');
    $currentSpan.classList.add('yes');
    $currentIndex++;
    // add the "current" class to the next character
    if ($allSpans[$currentIndex]) {
      $allSpans[$currentIndex].classList.add('current');
    }
  } else {
    // wrong key: add "no" class
    $currentSpan.classList.add('no');
  }
});
