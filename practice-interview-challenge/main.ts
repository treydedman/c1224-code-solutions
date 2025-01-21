// interface Return {
//   total: number;
//   odds: number[];
//   evens: number[];
//   range: number[];
//   average: number;
// }

// function getRangeReport
// it should return an object containing properties holding info
// about the numbers between the values in the start and end parameters
function getRangeReport(start: number, end: number): any {
  // create array with all integers from start to end
  const range: number[] = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  // variables for return

  // total = sum of all integers in the range array
  let total = 0;
  for (let i = 0; i < range.length; i++) {
    total += range[i];
  }

  // odds = an array containing all of the odd integers from start to end
  const odds: number[] = [];
  for (const num of range) {
    if (num % 2 !== 0) {
      odds.push(num);
    }
  }

  const evens: number[] = [];
  for (const num of range) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }

  // average = the average of all integers from start to end

  return {
    total,
    odds,
    evens,
    range,
  };
}
