export function diffArray(array1, array2) {
  return array1
    .filter(element => !array2.includes(element))
    .concat(array2.filter(element => !array1.includes(element)));
}
