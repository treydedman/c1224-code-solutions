'use strict';
/* exported tail */
function tail(array) {
  const allExceptFirstIndex = [];
  for (let i = 1; i < array.length; i++) {
    allExceptFirstIndex.push(array[i]);
  }
  return allExceptFirstIndex;
}
