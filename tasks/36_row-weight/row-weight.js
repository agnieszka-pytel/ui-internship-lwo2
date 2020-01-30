import { arraySum } from "../additional_functions/array_sum";

export function rowWeights(row) {
  return [
    arraySum(row.filter((element, index) => index % 2 === 0)),
    arraySum(row.filter((element, index) => index % 2 !== 0))
  ];
}
