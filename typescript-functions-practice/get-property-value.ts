/* exported getPropertyValue */

interface Person {
  name: string;
  occupation: string;
  birthPlace: string;
}

// getPropertyValue(object, key)
function getPropertyValue(object: Person, key: string): string {
  return object[key];
}
