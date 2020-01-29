function arraySum(array) {
  return array.reduce((sum, element) => sum + element, 0);
}

export function rowWeights(row) {
  return [
    arraySum(row.filter((element, index) => index % 2 === 0)),
    arraySum(row.filter((element, index) => index % 2 !== 0))
  ];
}
