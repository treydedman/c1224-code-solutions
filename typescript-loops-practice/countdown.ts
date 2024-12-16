/* exported countdown */

// countdown(num)
function countdown(num: number): number[] {
  const decrement: number[] = [];
  for (let i = num; i >= 0; i--) {
    decrement.push(i);
  }
  return decrement;
}
