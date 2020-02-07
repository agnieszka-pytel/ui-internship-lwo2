export function translatePigLatin(sentence) {
  let consonantCluster = sentence.match(/^[^aeiouy]+/);

  return consonantCluster
    ? sentence
        .replace(consonantCluster, "")
        .concat(consonantCluster + ENDINGS.consonant)
    : sentence.concat(ENDINGS.vowel);
}

const ENDINGS = {
  vowel: "way",
  consonant: "ay"
};
