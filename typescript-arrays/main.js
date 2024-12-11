'use strict';
// colors array
// 1.
// create an array literal containing the strings 'red', 'white', and 'blue' and assign it to a new variable named colors
const colors = ['red', 'white', 'blue'];
// 2.
// Log each value of the colors array to the console with proper labels
console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);
// 3.
// Create a template literal which interpolates each of the values inside of the colors array, and log the string to the console
// The string should read: America is red, white, and blue.
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
// 4.
// Assign the string 'green' to index 2 of the colors array
colors[2] = 'green';
// 5.
// Create another template literal which interpolates each of the values inside of the colors array, and log the string to the console
// The string should read: Mexico is red, white, and green
console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
// 6.
// Log the value of the colors array to the console
console.log('the value of colors: ', colors);
// 7.
// Log the typeof colors to the console
console.log('the typeof colors: ', typeof colors);
// students array
// 1.
// Create a new array literal containing four strings and assign it to a new variable named students
// Each string should be a person's name
const students = ['Sara', 'Jim', 'Ray', 'Alma'];
// 2.
// Use dot notation to access the length property of the students array and assign it to a new variable named numberOfStudents
const numberOfStudents = students.length;
// 3.
// Log the value of numberOfStudents to the console
console.log(`There are ${numberOfStudents} students in the class.`);
// 4.
// Subtract 1 from the numberOfStudents variable and store the result in a new variable named lastIndex
const lastIndex = numberOfStudents - 1;
// 5.
// Use lastIndex as an array index to access the last element of the students array and assign it to the variable lastStudent
const lastStudent = students[lastIndex];
// 6.
// Log the value of the lastStudent variable to the console
console.log(`The last student in the array is ${lastStudent}.`);
// 7.
// Log the value of the students array to the console
console.log('The value of students: ', students);
// 8.
// Log the typeof students to the console
console.log('The typeof students: ', typeof students);
