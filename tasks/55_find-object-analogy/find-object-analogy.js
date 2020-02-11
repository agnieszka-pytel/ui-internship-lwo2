export function whatIsInAName(objects, requiredProperties) {
  let requiredPropertiesArray = Object.entries(requiredProperties);

  return objects.filter(object =>
    hasProperties(object, requiredPropertiesArray)
  );
}

function hasProperties(object, properties) {
  return properties.every(element => {
    let [property, value] = element;

    return object.hasOwnProperty(property) && object[property] === value;
  });
}
