export function sortByBits(array) {
  return array
    .map((element) => element.toString(2))
    .sort((a, b) => {
      let bitsInA = a.split('').filter((element) => element === '1').length;
      let bistinB = b.split('').filter((element) => element === '1').length;
      if (bitsInA === bistinB) {
        return Number(a) - Number(b);
      }
      return bitsInA - bistinB;
    })
    .map((element) => parseInt(element, 2));
}
