'use strict';
/* exported countdown */
// countdown(num)
function countdown(num) {
  const decrement = [];
  for (let i = num; i >= 0; i--) {
    decrement.push(i);
  }
  return decrement;
}
