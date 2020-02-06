export function findCloseIndex(sentence, beginIndex) {
  let depth = 0;
  let endingIndex = beginIndex;

  for (let [index, element] of sentence
    .slice(beginIndex)
    .split("")
    .entries()) {
    if (element === "(") {
      depth++;
    } else if (element === ")") {
      depth--;
    }
    if (depth === 0) {
      endingIndex = index + beginIndex;
      break;
    }
  }
  return sentence[beginIndex] === ("(" || ")") ? endingIndex : -1;
}
