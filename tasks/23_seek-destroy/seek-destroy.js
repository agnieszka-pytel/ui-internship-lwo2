export function destroyer(arr, ...toDestroy) {
  return arr.filter((a) => !toDestroy.includes(a));
}
