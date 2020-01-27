export function destroyer(arr) {
  // eslint-disable-next-line prefer-rest-params
  let toDestroy = Array.from(arguments);
  return arr.filter((a) => !toDestroy.includes(a));
}
