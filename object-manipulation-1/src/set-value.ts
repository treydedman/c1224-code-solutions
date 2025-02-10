/* exported setValue */
function setValue(object: Record<string, any>, key: string, value: any): any {
  object[key] = value;
}
