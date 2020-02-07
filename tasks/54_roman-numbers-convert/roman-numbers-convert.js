export function convertToRoman(number) {
  return convertNumber(number, getOrderOfMagnitude(number));
}

function convertNumber(number, orderOfMagnitude = 0) {
  let multiplier = Math.pow(10, orderOfMagnitude);
  let currentOrderNumber = Math.floor(number / multiplier);
  let rest =
    orderOfMagnitude > 0
      ? convertNumber(
          number % multiplier,
          getOrderOfMagnitude(number % multiplier)
        )
      : "";

  switch (currentOrderNumber) {
    case 1:
    case 2:
    case 3:
      return ROMAN_SYMBOLS[1 * multiplier].repeat(currentOrderNumber) + rest;
    case 4:
      return (
        ROMAN_SYMBOLS[1 * multiplier] + ROMAN_SYMBOLS[5 * multiplier] + rest
      );
    case 5:
    case 6:
    case 7:
    case 8:
      return (
        ROMAN_SYMBOLS[5 * multiplier] +
        ROMAN_SYMBOLS[1 * multiplier].repeat(currentOrderNumber % 5) +
        rest
      );
    case 9:
      return (
        ROMAN_SYMBOLS[1 * multiplier] + ROMAN_SYMBOLS[10 * multiplier] + rest
      );
    default:
      return "";
  }
}

function getOrderOfMagnitude(number) {
  return String(number).length - 1;
}

const ROMAN_SYMBOLS = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
};
