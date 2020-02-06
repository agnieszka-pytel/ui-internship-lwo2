export function maxProduct(array) {
  return array
    .reduce((productArray, element, index) => {
      return index < array.length - 1
        ? productArray.concat(element * array[index + 1])
        : productArray;
    }, [])
    .sort((a, b) => a - b)
    .pop();
}
