export function findLetter(sentence) {
  let missedLetters = sentence.split("").reduce((missed, letter, index) => {
    let [previousCode, currentCode] = [
      sentence.charCodeAt(index - 1),
      letter.charCodeAt(0)
    ];

    return !isNaN(previousCode) && currentCode !== previousCode + 1
      ? missed.concat(String.fromCharCode(previousCode + 1))
      : missed;
  }, "");

  return missedLetters.length ? missedLetters : undefined;
}
