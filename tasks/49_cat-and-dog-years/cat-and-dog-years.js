const animalYears = {
  "1st": 15,
  "2nd": 9,
  "cat+": 4,
  "dog+": 5
};

function countYears(animal, humanYears) {
  let years = 0;
  while (humanYears) {
    switch (humanYears) {
      case 1:
        years += animalYears["1st"];
        break;
      case 2:
        years += animalYears["2nd"];
        break;
      default:
        years += animal === "dog" ? animalYears["dog+"] : animalYears["cat+"];
    }
    humanYears--;
  }
  return years;
}

export function humanYearsCatYearsDogYears(humanYears) {
  return [
    humanYears,
    countYears("cat", humanYears),
    countYears("dog", humanYears)
  ];
}
