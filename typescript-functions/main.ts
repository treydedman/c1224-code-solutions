// write and test functions

// 1.
// create function for convertMinutesToSeconds(minutes)
function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

// test
console.log('how many seconds in 10 minutes: ', convertMinutesToSeconds(10));
console.log('how many seconds in 30 minutes: ', convertMinutesToSeconds(30));

// 2.
// create function for greet(name)
function greet(name: string): string {
  return 'Hi ' + name + ', ' + 'be sure to learn diligently!';
}

// test
console.log('add greeting for Charlie: ', greet('Charlie'));

// 3.
// create function for getArea(width, height)
function getArea(width: number, height: number): number {
  return width * height;
}

// test
console.log('area of rectangle 4 by 5: ', getArea(4, 5));
console.log('area of rectangle 100 by 400: ', getArea(100, 400));

// 4.
// create interface for Person
interface Person {
  firstName: string;
  lastName: string;
}

// create function for getFirstName(person)
const getFirstName = (person: Person): string => {
  const firstName: string = person.firstName;
  return firstName;
};

const getFirstNameResult: string = getFirstName({
  firstName: 'Bill',
  lastName: 'Smith',
});

// test
console.log('first name of Bill Smith: ', getFirstNameResult);

// 5.
// create function for getLastElement(array)
const getLastElement = (array: unknown[]): unknown => {
  const lastIndex: number = array.length - 1;
  const lastElement: unknown = array[lastIndex];
  return lastElement;
};

// declare variable to input array data
const getLastElementResult: unknown = getLastElement([1, 2, 3, 7]);

// test
console.log('the last element in the array: ', getLastElementResult);

// 6.
// create function for callOtherFunction(otherFunction, params)
function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

const callOtherFunctionResult: number = callOtherFunction(
  convertMinutesToSeconds,
  10
);

console.log('value for callOtherFunctionResult: ', callOtherFunctionResult);
