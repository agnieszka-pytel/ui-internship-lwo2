export function checkLetters(arr) {
  arr = arr.map((element) => element.toLowerCase());
  let word = arr[0];
  let letters = arr[1];
  return letters.split('').every((letter) => word.includes(letter));
}
