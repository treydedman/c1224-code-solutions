'use strict';
/* exported addSuffixToAll */
// addSuffixToAll(words, suffix)
function addSuffixToAll(words, suffix) {
  const newArray = [];
  for (let i = 0; i < words.length; i++) {
    newArray.push(words[i] + suffix);
  }
  return newArray;
}
