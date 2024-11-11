function countPositivesSumNegatives(input) {
  let countPositiveNumber = 0;
  let sumNegativeNumber = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositiveNumber++;
    } else if (input[i] < 0) {
      sumNegativeNumber += input[i];
    }
  }

  if (input.length === 0) {
    return [];
  }

  return [countPositiveNumber, sumNegativeNumber];
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives([]);
console.log(result2); // []
