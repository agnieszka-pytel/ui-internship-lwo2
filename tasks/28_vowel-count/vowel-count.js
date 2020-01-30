export function getVowelCount(str) {
  let vowels = 'aeiou'.split('');
  return str.split('').filter((s) => vowels.includes(s)).length;
}
