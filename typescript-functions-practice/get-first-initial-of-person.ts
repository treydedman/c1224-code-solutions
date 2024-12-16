/* exported getFirstInitialOfPerson */

interface Person {
  firstName: string;
  lastName: string;
}

// getFirstInitialOfPerson(person)
function getFirstInitialOfPerson(person: Person): string {
  return person.firstName.charAt(0);
}
