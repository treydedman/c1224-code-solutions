'use strict';
/* exported initial */
function initial(array) {
  const allExceptLastIndex = [];
  for (let i = 0; i < array.length - 1; i++) {
    allExceptLastIndex.push(array[i]);
  }
  return allExceptLastIndex;
}
