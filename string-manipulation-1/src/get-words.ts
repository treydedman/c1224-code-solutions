/* exported getWords */
function getWords(string: string): string[] {
  // had to get help with this part because it failed the returns no words test
  if (string.trim() === '') {
    return [];
  }
  return string.split(' ');
}
