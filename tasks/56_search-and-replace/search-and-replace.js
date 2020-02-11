import { titleCase } from "../12_title-case/title-case";

export function myReplace(sentence, before, after) {
  return startsWithUpperCase(before)
    ? sentence.replace(before, after)
    : sentence.replace(before, titleCase(after));
}

function startsWithUpperCase(word) {
  return word[0] !== word[0].toUpperCase();
}
