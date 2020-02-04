function isLastIndex(index, elements) {
  return index === elements.length - 1;
}

function isNextDifferent(index, elements, element) {
  return !isLastIndex(index, elements) && elements[index + 1] !== element;
}

export function uniqueInOrder(sentence) {
  let elements = typeof sentence === "string" ? sentence.split("") : sentence;
  return elements.reduce((uniques, element, index) => {
    if (
      isLastIndex(index, elements) ||
      isNextDifferent(index, elements, element)
    ) {
      uniques.push(element);
    }
    return uniques;
  }, []);
}
