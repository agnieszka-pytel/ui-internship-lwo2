export function arrayChunks(arr, size) {
  let finalArr = [];
  let begIndex = 0;
  while (begIndex < arr.length) {
    finalArr.push(arr.slice(begIndex, begIndex+size));
    begIndex += size;
  }
  return finalArr;
}
