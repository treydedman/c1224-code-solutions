/* exported getLastNameOfPerson */

interface Person {
  firstName: string;
  lastName: string;
}

// getLastNameOfPerson(person)
function getLastNameOfPerson(person: Person): string {
  return person.lastName;
}
