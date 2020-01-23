function largestOfFour(array) {
  return array.map((a)=> a.sort((x, y) => x-y).pop());
}

export {largestOfFour};
