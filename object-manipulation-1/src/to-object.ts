/* exported toObject */
function toObject(keyValuePair: [string, any]): { [key: string]: any } {
  return { [keyValuePair[0]]: keyValuePair[1] };
}
