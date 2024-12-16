/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */

// Define a function named getNumbersToTen (with no parameters)
function getNumbersToTen(): number[] {
  // assigns an empty array to a new variable named numbers
  const numbers = [];
  // assigns 1 to a new variable named currentNumber
  let currentNumber = 1;
  // uses a while loop to loop through the numbers 1 to 10
  // and for each of them: pushes currentNumber into the numbers array & increments currentNumber
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  // returns the numbers array after the loop terminates
  return numbers;
}
// Test getNumbersToTen in the browser console. Calling it multiple times should not return a larger and larger array

// Define a function named getEvenNumbersToTwenty (with no parameters)
function getEvenNumbersToTwenty(): number[] {
  // assigns an empty array to a new variable named evenNumbers
  const evenNumbers = [];
  // assigns 2 to a new variable named currentNumber
  let currentNumber = 2;
  // uses a while loop to loop through the numbers 2 to 20 and for each of them
  // pushes currentNumber into the evenNumbers array
  // increases the value of currentNumber by 2
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  // returns the evenNumbers array after the loop terminates
  return evenNumbers;
}
// Test getEvenNumbersToTwenty in the browser console

// Define a function named repeatWord with two parameters: word and times
function repeatWord(word: string, times: number): string {
  // assign 1 to a new variable named count
  let count = 1;
  // assign an empty string '' to a new variable named repeated
  let repeated = '';
  // uses a while loop to loop through the numbers from count to times
  // updates the value of repeated to include the word
  // and increments count
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

// Define a function named logEachCharacter with one parameter: str
function logEachCharacter(str: string): void {
  // use a for loop that
  // assigns 0 to a new variable named i in its initialization expression
  // and logs the value of str at the index i to the console in its code block
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
  // not return anything
}

// Define a function named doubleAll with one parameter: numbers
function doubleAll(numbers: number[]): number[] {
  // assign an empty array to a new variable named doubled
  const doubled = [];
  // use a for loop that assigns 0 to a new variable named i in its initialization expression
  // checks that i is less than the length of the numbers array in its condition expression
  // increments i in its final expression
  for (let i = 0; i < numbers.length; i++) {
    // in its code block, accesses the element of the numbers array at the index i, doubles it,
    // then pushes the result into the doubled array
    doubled.push(numbers[i] * 2);
  }
  // return the doubled array
  return doubled;
}

// Define a function named sumArray with one parameter: numbers
function sumArray(numbers: number[]): number {
  // assign 0 to a new variable named sum
  let sum = 0;
  // use a for..of loop to iterate over each number in the numbers array
  // add each number to the sum variable and update the sum variable with the result
  for (const num of numbers) {
    sum += num;
  }
  // return the sum variable
  return sum;
}

// Define a function named reverseString with one parameter: str
function reverseString(str: string): string {
  // assign an empty string '' to a new variable named reversed
  let reversed = '';
  // use a for..of loop to iterate over each character in the str string
  // add each character to the reversed string and update the reversed string with the result
  for (const value of str) {
    reversed = value + reversed;
  }
  // return the reversed string
  return reversed;
}

// Define a function named getKeys with one parameter: obj
function getKeys(obj: Record<string, unknown>): string[] {
  // Assign an empty array to a new variable named keys
  const keys = [];
  // use a for...in loop to get each property key of the input obj and push it into the keys array
  for (const key in obj) {
    keys.push(key);
  }
  // return the keys array
  return keys;
}

// Define a function named getValues with one parameter: obj
function getValues(obj: Record<string, unknown>): unknown[] {
  // Assign an empty array to a new variable named values
  const values = [];
  // use a for...in loop and bracket notation to get each key
  // and use it to access and push each property value of the obj into the values array
  for (const key in obj) {
    values.push(obj[key]);
  }
  // return the values array
  return values;
}
