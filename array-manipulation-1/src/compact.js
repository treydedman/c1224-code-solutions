'use strict';
/* exported compact */
function compact(array) {
  const filter = [];
  // not gonna lie, had to google to figure this one out,
  // could not do it based on my own knowledge
  for (const value of array) {
    if (value) {
      filter.push(value);
    }
  }
  return filter;
}
