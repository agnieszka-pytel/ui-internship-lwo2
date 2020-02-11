export function findLetter(sentence) {
  let missedLetters = sentence.split("").reduce((missed, letter, index) => {
    const previousCode = sentence.charCodeAt(index - 1);
    const currentCode = letter.charCodeAt(0);

    return !isNaN(previousCode) && currentCode !== previousCode + 1
      ? missed.concat(String.fromCharCode(previousCode + 1))
      : missed;
  }, "");

  return missedLetters.length ? missedLetters : undefined;
}
