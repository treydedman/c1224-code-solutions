// math object
// 1.
// Create a new array containing four strings that are the names of your favorite superheroes and assign it to a new variable named heroes
const heroes = ['captain america', 'superman', 'thor', 'iron man'];

// // 2.
// // Call the random() method of the Math object and assign its return value to a new variable named randomNumber
let randomNumber = Math.random();

console.log('value of randomNumber: ', randomNumber);

// // 3.
// // Multiply your random number by the length property of your heroes object and assign the result back to the randomNumber variable.
randomNumber = randomNumber * heroes.length;

// 4.
// Call the floor() method of the Math object and pass in randomNumber as an argument
// Assign its return value to a new variable named randomIndex
const randomIndex = Math.floor(randomNumber);

// 5.
// Log the value of randomIndex to the console
console.log('randomIndex: ', randomIndex);

// 6.
// Using bracket notation, access the heroes array at randomIndex and assign the result to a new variable named randomHero
const randomHero = heroes[randomIndex];

// 7.
// Log the value of randomHero to the console
console.log('randomHero: ', randomHero);

// Array Methods
// 1.
interface Book {
  title: string;
  author: string;
}
// Create a new array containing three objects. Each object represents a book and should have two properties: title and author. Assign the array to a new variable named library
const library: Book[] = [
  {
    title: '1984',
    author: 'George Orwell',
  },
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
  },
  {
    title: 'Hidden Figures',
    author: 'Margot Lee Shetterly',
  },
];

// Call the pop() method of the library and assign its return value to a new variable named lastBook
const lastBook = library.pop();

// Log the value of lastBook to the console
console.log('lastBook: ', lastBook);

// Call the shift() method of the library and assign its return value to a new variable named firstBook
const firstBook = library.shift();

// Log the value of firstBook to the console
console.log('firstBook: ', firstBook);

// Create two new book objects
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

// Call the push() method of the library and pass your js book as an argument
library.push(js);

// Call the unshift() method of the library as pass your css book as an argument
library.unshift(css);

// Call the splice() method of the library and delete one book from the middle (index 1)
library.splice(1, 1);

// Log the value of the library array to the console
console.log('library: ', library);

// String Methods
// Create a new string containing your full name (including a space) and assign it to a new variable named fullName
const fullName = 'Trey Dedman';

// Call the split() method of fullName and pass a space character (' ') as an argument
// Assign the method's return value to a new variable named firstAndLastName
const firstAndLastName = fullName.split(' ');

// Log the value of firstAndLastName to the console
console.log('firstAndLastName: ', firstAndLastName);

// Access the first element of firstAndLastName and assign it to a variable named firstName
const firstName = firstAndLastName[0];

// Call the toUpperCase() method of firstName and assign its return value to a new variable named sayMyName
const sayMyName = firstName.toUpperCase();

// Log the value of sayMyName to the console
console.log('sayMyName: ', sayMyName);

// Object Methods
interface Employee {
  name: string;
  age: number;
  position: string;
}

// Create an object that represents an employee and should have three properties: name, age, position
// Assign the object to a new variable named employee
const employee: Employee = {
  name: 'Sue Jones',
  age: 38,
  position: 'CEO',
};

// Call the keys() method of Object and pass the employee variable as an argument
// Assign the method's return value to a new variable named employeeKeys
const employeeKeys = Object.keys(employee);

// Log the value of employeeKeys to the console
console.log('employeeKeys: ', employeeKeys);

// Call the values() method of Object and pass the employee variable as an argument
// Assign the method's return value to a new variable name employeeValues
const employeeValues = Object.values(employee);

// Log the value of employeeValues to the console
console.log('employeeValues: ', employeeValues);

// Call the entries() method of Object and pass the employee variable as an argument
// Assign the method's return value to a new variable name employeePairs
const employeePairs = Object.entries(employee);

// Log the value of employeePairs to the console.
console.log('employeePairs: ', employeePairs);
