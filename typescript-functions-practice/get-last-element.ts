/* exported getLastElement */

// getLastElement(array)
function getLastElement(array: unknown[]): unknown {
  const lastIndex: number = array.length - 1;
  const lastElement: unknown = array[lastIndex];
  return lastElement;
}
