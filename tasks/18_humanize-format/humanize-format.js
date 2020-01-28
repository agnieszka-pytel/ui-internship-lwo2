export function humanizeFormat(num) {
  let lastDigit = num%10;
  switch (lastDigit) {
    case 1:
      return num+'st';
    case 2:
      return num+'nd';
    case 3:
      return num+'rd';
    case 4: case 5: case 6: case 7: case 8: case 9: case 0:
      return num+'th';
    default:
      return '';
  }
}
