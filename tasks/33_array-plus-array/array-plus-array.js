export function arrayPlusArray(array1, array2) {
  let shorterArray = array1.length <= array2.length ? array1 : array2;
  let longerArray = array1.length > array2.length ? array1 : array2;
  return longerArray.map((element, index) =>
    shorterArray[index] ? element + shorterArray[index] : element
  );
}
