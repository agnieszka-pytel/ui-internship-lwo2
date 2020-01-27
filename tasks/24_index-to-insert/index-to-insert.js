export function getIndexToInsert(arr, number) {
  return arr.sort((a, b) => a-b).filter((a) => a < number).length;
}
