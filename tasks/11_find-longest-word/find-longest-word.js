function findLongestWord(sentence) {
  let callback = (max, current) => Math.max(max, current);
  return sentence.split(' ').map((s) => s.length).reduce( callback );
}

export {findLongestWord};
