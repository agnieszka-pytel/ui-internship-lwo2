export function rot13Encoder(str) {
  let lettersStart = 'A'.charCodeAt(0);
  let lettersEnd = 'Z'.charCodeAt(0);
  let shift = 13;
  let wasLowerCase = false;
  return str.split('').reduce((acc, s) => {
    wasLowerCase = /[A-Z]/.test(s);
    let currentCode = s.toUpperCase().charCodeAt(0);
    if (lettersStart <= currentCode && currentCode <= lettersEnd) {
      let newCode = currentCode + shift;
      wasLowerCase ?
      acc.push(String.fromCharCode(
        (newCode > lettersEnd) ? newCode-2*shift : newCode)
      ) :
      acc.push(String.fromCharCode(
        (newCode > lettersEnd) ? newCode-2*shift : newCode)
      ).toLowerCase();
      return acc;
    } else {
      wasLowerCase ? acc.push(s) : acc.push(s.toLowerCase());
      return acc;
    }
  }, []).join('');
}
