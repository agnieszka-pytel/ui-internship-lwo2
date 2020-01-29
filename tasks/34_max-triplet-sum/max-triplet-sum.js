export function maxTripletSum(array) {
  return array
    .sort((a, b) => b - a)
    .reduce((maxTriplet, element) => {
      if (maxTriplet.length < 3 && !maxTriplet.includes(element)) {
        maxTriplet.push(element);
      }
      return maxTriplet;
    }, [])
    .reduce((sum, element) => sum + element, 0);
}
