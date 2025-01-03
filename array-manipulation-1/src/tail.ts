/* exported tail */
function tail(array: unknown[]): unknown[] {
  const allExceptFirstIndex: unknown[] = [];
  for (let i = 1; i < array.length; i++) {
    allExceptFirstIndex.push(array[i]);
  }
  return allExceptFirstIndex;
}
