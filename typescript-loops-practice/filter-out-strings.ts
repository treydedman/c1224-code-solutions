/* exported filterOutStrings */

// filterOutStrings(values)
function filterOutStrings(values: unknown[]): unknown[] {
  const filter: unknown[] = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filter.push(values[i]);
    }
  }
  return filter;
}
