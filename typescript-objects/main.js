'use strict';
// 2.
// Using literal notation, create an object with three properties: firstName, lastName and age
const student = {
  firstName: 'Trey',
  lastName: 'Dedman',
  age: 21,
};
// 3.
// Use dot notation to access firstName and lastName of student object and concatenate them into a new string assigned to a variable named fullName
const fullName = `${student.firstName} ${student.lastName}`;
// Log the value of fullName to the console
console.log('the value of fullName: ', fullName);
// 4.
// Use dot notation to add a property to the student object- livesInIrvine and set to a boolean value
student.livesInIrvine = false;
// Use dot notation to add a property to the student object- previousOccupation and set to a string value
student.previousOccupation = 'Malware Researcher';
// Use dot notation to log the livesInIrvine property of the student object to the console
console.log('the value of student.livesInIrvine: ', student.livesInIrvine);
// Use dot notation to log the previousOccupation property of the student object to the console
console.log(
  'the value of student.previousOccupation: ',
  student.previousOccupation
);
// Log the value of the entire student object to the console
console.log('the value of student: ', student);
// 2.
// Using literal notation create an object with make model and year assigned to variable name vehicle
const vehicle = {
  make: 'International',
  model: 'Travelall',
  year: 1962,
};
// 3.
// Use bracket notation to add a color property to the vehicle object
vehicle['color'] = 'Olive';
// 4.
// // Use bracket notation to add a isConvertible property to the vehicle object
vehicle['isConvertible'] = false;
// 5.
// Use bracket notation to log the 'color' property of the vehicle object to the console
console.log('the value of vehicle[color]: ', vehicle['color']);
// 6.
// Use bracket notation to log the 'isConvertible' property of the vehicle object to the console
console.log('the value of vehicle[isConvertible]: ', vehicle['isConvertible']);
// 7.
// Log the value of the entire vehicle object to the console
console.log('the value of vehicle: ', vehicle);
// 8.
// Log the typeof vehicle to the console
console.log('the typeof vehicle: ', typeof vehicle);
// 2.
// Using literal notation, create an object with two properties: name and kind
// Assign the object to a new variable named pet. Annotate the object with the Pet interface
const pet = {
  name: 'Ruby',
  kind: 'lab',
};
// Use the delete operator to remove the name property from the pet object
delete pet['name'];
// Use the delete operator to remove the kind property from the pet object
delete pet.kind;
// Log the value of the pet object to the console
console.log('the value of pet: ', pet);
// Log the typeof pet to the console
console.log('the typeof pet: ', typeof pet);
