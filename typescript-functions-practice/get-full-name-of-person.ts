/* exported getFullNameOfPerson */

interface Person {
  firstName: string;
  lastName: string;
}

// getFullNameOfPerson(person)
function getFullNameOfPerson(person: Person): string {
  // return person.firstName + ' ' + person.lastName;
  return `${person.firstName} ${person.lastName}`;
}
