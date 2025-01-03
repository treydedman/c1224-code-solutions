/* exported compact */
function compact(array: unknown[]): unknown[] {
  const filter: unknown[] = [];
  // not gonna lie, had to google to figure this one out,
  // could not do it based on my own knowledge
  for (const value of array) {
    if (value) {
      filter.push(value);
    }
  }
  return filter;
}
