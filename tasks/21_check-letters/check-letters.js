export function checkLetters(arr) {
  let includedLetters = arr[1].toLowerCase().split('')
      .map((a) => arr[0].toLowerCase().indexOf(a))
      .filter((a) => a !== -1);
  return includedLetters.length === arr[1].length;
}
