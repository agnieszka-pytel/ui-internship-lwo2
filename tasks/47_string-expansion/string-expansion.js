export function stringExpansion(sentence) {
  let countIndicator = 1;
  return sentence.split("").reduce((expandedString, element) => {
    if (element.match(/\d/)) {
      countIndicator = Number(element);
    } else if (element.match(/[a-zA-Z]/)) {
      expandedString += element.repeat(countIndicator);
    }
    return expandedString;
  }, "");
}
