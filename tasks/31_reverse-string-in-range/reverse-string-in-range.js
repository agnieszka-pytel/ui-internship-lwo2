export function reverseStringInRange(str, range) {
  let toReplace = str.slice(range[0], range[1]+1);
  return str.replace(
      toReplace,
      toReplace.split('').reverse().join(''));
}
