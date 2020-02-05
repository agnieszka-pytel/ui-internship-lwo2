export function sumAll(range) {
  let [start, end] = range[0] > range[1] ? range.reverse() : range;
  return (end * (end + 1) - (start - 1) * start) / 2;
}
