export function followTheSpy(array) {
  let destinations = [];
  let currentTrip = array[0];
  while (destinations.length < array.length) {
    destinations.push(currentTrip[0]);
    currentTrip =
      array.find(element => element[0] === currentTrip[1]) || currentTrip;
  }
  destinations.push(currentTrip[1]);
  return destinations.join(", ");
}
