'use strict';
/* exported getStudentNames */
// getStudentNames(students)
function getStudentNames(students) {
  const studentNames = [];
  for (let i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
