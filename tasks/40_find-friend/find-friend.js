const BLUE = "blue";

export function findFriend(array) {
  return array.reduce((friends, element, index) => {
    if (element === "red") {
      if (
        (array[index + 1] === BLUE && array[index + 2] === BLUE) ||
        (array[index - 2] === BLUE && array[index - 1] === BLUE) ||
        (array[index - 1] === BLUE && array[index + 1] === BLUE)
      ) {
        friends += 1;
      }
    }
    return friends;
  }, 0);
}
