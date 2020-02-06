/* This function is based on mathematical equation for sum of natural numbers from 1 to N
which is SUM = n*(n+1)/2 
*/

export function sumAll(range) {
  let [start, end] = range[0] > range[1] ? range.reverse() : range;

  return (end * (end + 1) - (start - 1) * start) / 2;
}
