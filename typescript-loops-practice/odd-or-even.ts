/* exported oddOrEven */

// oddOrEven(numbers)
function oddOrEven(numbers: number[]): string[] {
  const value: string[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      value.push('even');
    } else {
      value.push('odd');
    }
  }
  return value;
}
