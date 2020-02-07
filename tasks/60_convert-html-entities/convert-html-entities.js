export function convertHTML(sentence) {
  return sentence
    .split("")
    .map(element =>
      Object.keys(HTML_ENTITIES).includes(element)
        ? `&${HTML_ENTITIES[element]};`
        : element
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
