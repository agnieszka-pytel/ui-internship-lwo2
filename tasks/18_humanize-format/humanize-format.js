export function humanizeFormat(num) {
  let lastDigit = num%10;
  let regularEnding = [4, 5, 6, 7, 8, 9, 0];
  switch (true) {
    case lastDigit === 1:
      return num+'st';
    case lastDigit === 2:
      return num+'nd';
    case lastDigit === 3:
      return num+'rd';
    case regularEnding.includes(lastDigit):
      return num+'th';
    default:
      return '';
  }
}
