/* exported sumAll */

// sumAll(numbers)
function sumAll(numbers: number[]): number {
  let sum: number = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
