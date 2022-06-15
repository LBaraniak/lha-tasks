function generateArrayWithRandomNumbers(howManyNumbers = 10, min = 1, max = 10) {
  let i;
  const output = [];
  min = Math.ceil(min);
  max = Math.floor(max);

  for (i = 0; i < howManyNumbers; i++) {
    output.push(Math.floor(Math.random() * (max - min +1)) + min)
  }

  return output;
}

function generateArrayOfArrays(howManyArrays = 10, howManyNumbers = 10, min = 1, max = 10) {
  const output = [];
  let i = 0;

  do {
    output.push(generateArrayWithRandomNumbers(howManyNumbers, min, max));
  } while (++i < howManyArrays)

  return output
}

console.log(generateArrayWithRandomNumbers(30, 100, 101))
console.log(generateArrayOfArrays(4,2,100,1000))