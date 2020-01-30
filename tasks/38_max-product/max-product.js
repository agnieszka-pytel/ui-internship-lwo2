export function maxProduct(array) {
  return array
    .reduce((productArray, element, index) => {
      if (index < array.length - 1) {
        productArray.push(element * array[index + 1]);
      }
      return productArray;
    }, [])
    .sort((a, b) => a - b)
    .pop();
}
