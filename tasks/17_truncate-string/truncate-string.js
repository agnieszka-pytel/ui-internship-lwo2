export function truncateString(string, maxLen) {
  let ending = '...';
  if (string.length > maxLen) {
    return (maxLen <= ending.length) ?
    string.slice(0, maxLen).concat(ending) :
    string.slice(0, maxLen-ending.length).concat(ending);
  }
  return string;
}
