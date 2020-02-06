export function sortByBits(array) {
  return array.sort((a, b) => compareInBinary(a, b));
}

function compareInBinary(num1, num2) {
  let [bin1, bin2] = [num1.toString(2), num2.toString(2)];

  return countBits(bin1) === countBits(bin2)
    ? num1 - num2
    : countBits(bin1) - countBits(bin2);
}

function countBits(binaryNumber) {
  return binaryNumber.split("").filter(element => element === "1").length;
}
