/* exported getStudentNames */

interface StudentName {
  name: string;
}

// getStudentNames(students)
function getStudentNames(students: StudentName[]): string[] {
  const studentNames: string[] = [];
  for (let i = 0; i < students.length; i++) {
    studentNames.push(students[i].name);
  }
  return studentNames;
}
