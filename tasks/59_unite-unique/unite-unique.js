export function uniteUnique() {
  return [...new Set([...arguments].flat())];
}
