/* exported reverseWord */
function reverseWord(word: string): string {
  let reversed = '';
  // had to get help with this part also - got a little confused
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word.charAt(i);
  }
  return reversed;
}
