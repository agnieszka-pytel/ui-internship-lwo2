function largestOfFour(array) {
  return array.map((a)=> a.sort((x, y) => x-y).pop());
}

function largestOfFourReduce(array) {
  let callback = (max, current) => Math.max(max, current);
  return array.map((a) => a.reduce(callback));
}

export {largestOfFour, largestOfFourReduce};
