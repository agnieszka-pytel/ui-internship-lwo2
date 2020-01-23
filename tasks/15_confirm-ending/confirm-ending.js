function confirmEnding(string, ending) {
  return string.substring(string.length - ending.length) === ending;
}

export {confirmEnding};
