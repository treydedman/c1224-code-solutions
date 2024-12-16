'use strict';
/* exported oddOrEven */
// oddOrEven(numbers)
function oddOrEven(numbers) {
  const value = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      value.push('even');
    } else {
      value.push('odd');
    }
  }
  return value;
}
