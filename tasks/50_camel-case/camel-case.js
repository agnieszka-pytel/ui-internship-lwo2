// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  return this.split(" ")
    .map(element => element[0].toUpperCase() + element.slice(1))
    .join("");
};
