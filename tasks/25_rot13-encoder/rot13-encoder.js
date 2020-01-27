export function rot13Encoder(str) {
  let lettersStart = 'A'.charCodeAt(0);
  let lettersEnd = 'Z'.charCodeAt(0);
  let shift = 13;
  return str.split('').reduce((acc, s) => {
    let currentCode = s.charCodeAt(0);
    if (lettersStart <= currentCode && currentCode <= lettersEnd) {
      let newCode = currentCode + shift;
      acc.push(String.fromCharCode(
        (newCode > lettersEnd) ? newCode-2*shift : newCode)
      );
      return acc;
    } else {
      acc.push(s);
      return acc;
    }
  }, []).join('');
}
