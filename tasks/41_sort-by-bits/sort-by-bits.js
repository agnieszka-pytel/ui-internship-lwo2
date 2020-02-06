export function sortByBits(array) {
  return array
    .map(element => element.toString(2))
    .sort((a, b) => {
      if (countBits(a) === countBits(b)) {
        return Number(a) - Number(b);
      }
      return countBits(a) - countBits(b);
    })
    .map(element => parseInt(element, 2));
}

function countBits(binaryNumber) {
  return binaryNumber.split("").filter(element => element === "1").length;
}
