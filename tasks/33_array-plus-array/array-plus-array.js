export function arrayPlusArray(array1, array2) {
  let shorterArray = (array1.length <= array2.length) ? array1 : array2;
  let longerArray = (array1.length > array2.length) ? array1 : array2;
  let sum = [];
  longerArray.forEach((element, index) => {
    if (shorterArray[index]) {
      sum.push(element + shorterArray[index]);
    } else {
      sum.push(element + 0);
    }
  });
  return sum;
}
