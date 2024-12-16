/* exported getDescriptionOfPerson */

interface Person {
  name: string;
  occupation: string;
  birthPlace: string;
}

// getDescriptionOfPerson(person)
function getDescriptionOfPerson(person: Person): string {
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}
