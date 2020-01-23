function titleCase(sentence) {
  return sentence.split(' ').map(
      (s) => s.toLowerCase()
  ).map(
      (s) => s[0].toUpperCase().concat(s.slice(1))
  ).join(' ');
}

export {titleCase};
