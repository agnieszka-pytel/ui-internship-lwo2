export function humanizeFormat(num) {
  let lastDigit = num%10;
  if (!num) {
    return '';
  }
  switch (lastDigit) {
    case 1:
      return num+'st';
    case 2:
      return num+'nd';
    case 3:
      return num+'rd';
    default:
      return num+'th';
  }
}
