/* exported addSuffixToAll */

// addSuffixToAll(words, suffix)
function addSuffixToAll(words: string[], suffix: string): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < words.length; i++) {
    newArray.push(words[i] + suffix);
  }
  return newArray;
}
