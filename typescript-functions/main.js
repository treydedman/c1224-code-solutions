'use strict';
// write and test functions
// 1.
// create function for convertMinutesToSeconds(minutes)
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
// test
console.log('how many seconds in 10 minutes: ', convertMinutesToSeconds(10));
console.log('how many seconds in 30 minutes: ', convertMinutesToSeconds(30));
// 2.
// create function for greet(name)
function greet(name) {
  return 'Hi ' + name + ', ' + 'be sure to learn diligently!';
}
// test
console.log('add greeting for Charlie: ', greet('Charlie'));
// 3.
// create function for getArea(width, height)
function getArea(width, height) {
  return width * height;
}
// test
console.log('area of rectangle 4 by 5: ', getArea(4, 5));
console.log('area of rectangle 100 by 400: ', getArea(100, 400));
// create function for getFirstName(person)
const getFirstName = (person) => {
  const firstName = person.firstName;
  return firstName;
};
const getFirstNameResult = getFirstName({
  firstName: 'Bill',
  lastName: 'Smith',
});
// test
console.log('first name of Bill Smith: ', getFirstNameResult);
// 5.
// create function for getLastElement(array)
const getLastElement = (array) => {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
};
// declare variable to input array data
const getLastElementResult = getLastElement([1, 2, 3, 7]);
// test
console.log('the last element in the array: ', getLastElementResult);
// 6.
// create function for callOtherFunction(otherFunction, params)
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const callOtherFunctionResult = callOtherFunction(convertMinutesToSeconds, 10);
console.log('value for callOtherFunctionResult: ', callOtherFunctionResult);
