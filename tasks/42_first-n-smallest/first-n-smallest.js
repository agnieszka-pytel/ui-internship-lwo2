export function firstNSmallest(arr, n) {
  let nSmallest = [...arr].sort((a, b) => a - b).slice(0, n);
  let counter = 0;

  return arr.reduce((filtered, element) => {
    if (nSmallest.includes(element) && counter < n) {
      counter += 1;
      filtered.push(element);
    }
    return filtered;
  }, []);
}
