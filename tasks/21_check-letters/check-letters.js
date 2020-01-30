export function checkLetters(array) {
  let arrayLower = array.map(element => element.toLowerCase());
  const [word, letters] = arrayLower;
  return letters.split("").every(letter => word.includes(letter));
}
