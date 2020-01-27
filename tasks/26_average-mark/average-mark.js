export function getAverage(arr) {
  return arr.reduce((sum, a) => sum+a)/arr.length >> 0;
}
