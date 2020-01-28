import {reverseString} from '../6_reverse-string/reverse-string';

export function reverseStringInRange(str, range) {
  let toReplace = str.slice(range[0], range[1]+1);
  return str.replace(
      toReplace,
      reverseString(toReplace));
}
