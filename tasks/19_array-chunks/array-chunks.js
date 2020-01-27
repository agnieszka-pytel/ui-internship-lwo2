export function arrayChunks(arr, size) {
  let finalArr = [];
  let begIndex = 0;
  let endIndex = size;
  while (endIndex < arr.length) {
    finalArr.push(arr.slice(begIndex, endIndex));
    begIndex = endIndex;
    endIndex += size;
  }
  finalArr.push(arr.slice(begIndex, arr.length));
  return finalArr;
}
