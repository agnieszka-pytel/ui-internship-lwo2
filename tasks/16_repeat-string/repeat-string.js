export function repeatStringNumTimes(string, n) {
  let final = '';
  for (let i=0; i<n; i++) {
    final = final.concat(string);
  }
  return final;
}
