export function numberToReversedArray(number) {
  return number.toString().split('').reverse().map((n) => Number(n));
}
