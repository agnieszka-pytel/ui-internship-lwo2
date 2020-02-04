function arraySum(array) {
  return array.reduce((sum, element) => sum + element, 0);
}

export function runningAverage() {
  let counter = 0;
  let numbers = [];
  return function countAverage(num) {
    counter++;
    numbers.push(num);
    return arraySum(numbers) / counter;
  };
}
