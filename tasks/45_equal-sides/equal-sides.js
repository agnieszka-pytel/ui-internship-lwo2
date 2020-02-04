function arraySum(array) {
  return array.reduce((sum, element) => sum + element, 0);
}

export function findEqualIndex(array) {
  return array.findIndex(
    (element, index) =>
      arraySum(array.slice(0, index)) === arraySum(array.slice(index + 1))
  );
}
