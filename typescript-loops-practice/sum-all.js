'use strict';
/* exported sumAll */
// sumAll(numbers)
function sumAll(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
