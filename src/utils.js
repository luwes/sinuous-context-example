// Make any signal jsonable by adding a toJSON method
// that extracts its value during JSONization.
export function jsonable(s) {
  s.toJSON = toJSON;
  return s;
}

function toJSON() {
  var json = this();
  // if the value has it's own toJSON, call it now
  if (json && json.toJSON) json = json.toJSON();
  return json;
}
