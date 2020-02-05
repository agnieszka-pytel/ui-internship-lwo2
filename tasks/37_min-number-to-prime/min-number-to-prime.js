import { arraySum } from "../additional_functions/array_sum";

function isPrime(number) {
  let dividers = [];
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) dividers.push(i);
  }
  return dividers.length === 0;
}

export function minNumberToPrime(array) {
  let arrSum = arraySum(array);
  let numberToPrime = 0;
  while (!isPrime(arrSum + numberToPrime)) {
    numberToPrime += 1;
  }
  return numberToPrime;
}
