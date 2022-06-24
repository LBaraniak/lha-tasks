function getMyAge(input) {
  const actualYear = new Date().getFullYear();

  switch (typeof input) {
    case 'object' :
      return (actualYear - input.getFullYear())
      break
    default :
      return (actualYear - input)
      break
   }
}

const result1 = getMyAge(new Date(1990, 1, 1));
const result2 = getMyAge("1990");
const result3 = getMyAge(1990);

console.log(result1, result2, result3)