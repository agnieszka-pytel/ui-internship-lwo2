function arraySum(array) {
  return array.reduce((sum, element) => sum + element, 0);
}

export function arrayLeaders(array) {
  let zeroExpandedArray = [...array, 0];
  return zeroExpandedArray.reduce((leaders, element, index) => {
    if (element > arraySum(zeroExpandedArray.slice(index + 1))) {
      leaders.push(element);
    }
    return leaders;
  }, []);
}
