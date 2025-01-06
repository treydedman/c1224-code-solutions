/* exported initial */
function initial(array: unknown[]): unknown[] {
  const allExceptLastIndex: unknown[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    allExceptLastIndex.push(array[i]);
  }
  return allExceptLastIndex;
}
