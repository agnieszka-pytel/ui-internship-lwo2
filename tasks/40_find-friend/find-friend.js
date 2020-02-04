function isBlue(friend) {
  return friend === "blue";
}

export function findFriend(array) {
  return array.reduce((friends, element, index) => {
    if (element === "red") {
      if (
        (isBlue(array[index + 1]) && isBlue(array[index + 2])) ||
        (isBlue(array[index - 2]) && isBlue(array[index - 1])) ||
        (isBlue(array[index - 1]) && isBlue(array[index + 1]))
      ) {
        friends += 1;
      }
    }
    return friends;
  }, 0);
}
