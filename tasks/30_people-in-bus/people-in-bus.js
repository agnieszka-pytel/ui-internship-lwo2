export function peopleInBus(list) {
  return list
      .reduce(((passengers, balance) => passengers+balance[0]-balance[1]), 0);
}
