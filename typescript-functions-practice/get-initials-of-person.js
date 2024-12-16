'use strict';
/* exported getInitialsOfPerson */
// getFirstInitialOfPerson(person)
function getInitialsOfPerson(person) {
  return person.firstName.charAt(0) + person.lastName.charAt(0);
}
