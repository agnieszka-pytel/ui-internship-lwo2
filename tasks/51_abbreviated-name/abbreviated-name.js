export function abbreviated(names) {
  return names
    .split(" ")
    .reduce((abbreviatedNames, element, index) => {
      return index === 0
        ? abbreviatedNames.concat(element + " ")
        : abbreviatedNames.concat(element[0] + ". ");
    }, "")
    .trim();
}
