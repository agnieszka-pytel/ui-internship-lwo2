export function uniqueInOrder(sentence) {
  let elements = typeof sentence === "string" ? sentence.split("") : sentence;
  return elements.reduce((uniques, element, index) => {
    if (
      index === elements.length - 1 ||
      (index < elements.length - 1 && elements[index + 1] !== element)
    ) {
      uniques.push(element);
    }
    return uniques;
  }, []);
}
