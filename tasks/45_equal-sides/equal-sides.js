import { arraySum } from "../additional_functions/array_sum";

export function findEqualIndex(array) {
  return array.findIndex(
    (element, index) =>
      arraySum(array.slice(0, index)) === arraySum(array.slice(index + 1))
  );
}
