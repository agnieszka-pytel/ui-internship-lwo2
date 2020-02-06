import { arraySum } from "../additional_functions/array_sum";

export function runningAverage() {
  let counter = 0;
  let numbers = [];

  return function countAverage(num) {
    counter++;
    numbers.push(num);
    return arraySum(numbers) / counter;
  };
}
