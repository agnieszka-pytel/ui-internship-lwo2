export function convertHTML(sentence) {
  return sentence
    .split("")
    .map(element =>
      element in HTML_ENTITIES ? `&${HTML_ENTITIES[element]};` : element
    )
    .join("");
}

const HTML_ENTITIES = {
  "&": "amp",
  ">": "gt",
  "<": "lt",
  '"': "quot",
  "'": "apos"
};
