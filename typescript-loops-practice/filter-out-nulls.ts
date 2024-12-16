/* exported filterOutNulls */

// filterOutNulls(values)
function filterOutNulls(values: unknown[]): unknown[] {
  const filter: unknown[] = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filter.push(values[i]);
    }
  }
  return filter;
}
