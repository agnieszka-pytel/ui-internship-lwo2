function titleCase(sentence) {
  return sentence.toLowerCase().split(' ')
      .map((s) => s[0].toUpperCase().concat(s.slice(1)))
      .join(' ');
}

export {titleCase};
