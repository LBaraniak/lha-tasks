/* Array methods */
const testArray = [1,2,3,4,5,6,7,8,9,10];
const testArrayEvery = [1,2,3,4,'a',6,7,8,9,10];

function testCallback(element) {
  console.log(element * element)
  return element * element
}

function filterCallback(element) {
  return element % 2 == 0
}

function reduceCallback(previousValue, currentValue) {
  return previousValue + currentValue
}

function everyCallback(element) {
  return typeof element == 'number'
}

function someCallback(element) {
  return typeof element == 'string'
}

class Validator {
  static isArray(array) {
    if(!Array.isArray(array))
      throw new Error('prop is not array')
  }

  static isFunction(fun) {
    if(typeof fun != 'function')
      throw new Error('callback is not a function')
  }
}


// forEach
const forEachFn = (array, callback) => {
  Validator.isArray(array)
  Validator.isFunction(callback)

  const lengthOfArray = array.length

  for(let i = 0; i < lengthOfArray; i++) {
    callback(array[i]);
  }
};
// forEachFn(testArray, testCallback)
// testArray.forEach(testCallback)


// map
const mapFn = (array, callback) => {
  Validator.isArray(array)
  Validator.isFunction(callback)

  const returnArray = [];
  const lengthOfArray = array.length

  for(let i = 0; i < lengthOfArray; i++) {
    returnArray.push(callback(array[i]));
  }

  return returnArray;
};
// const returnedArray = mapFn(testArray, testCallback)
// console.log(returnedArray)
// const standardMap = testArray.map(testCallback)
// console.log(standardMAp)


// entries
const entriesFn = (array) => {
  Validator.isArray(array)
  const lengthOfArray = array.length

  const returnArray = [];

  for(let i = 0; i < lengthOfArray; i++) {
    returnArray.push([i, array[i]])
  }

  return returnArray
};

// const iterator = entriesFn(testArray);
// console.log(iterator);
// const iteratorEn = testArray.entries();
// console.log(iteratorEn)
// for (let e of iteratorEn) {
//   console.log(e);
// }

// filter
const filterFn = (array, callback) => {
  Validator.isArray(array)
  Validator.isFunction(callback)

  const lengthOfArray = array.length
  const returnArray = [];

  for(let i = 0; i < lengthOfArray; i++) {
    if(callback(array[i]))
      returnArray.push(array[i])
  }

  return returnArray
};
// const arrayFilterFn = filterFn(testArray, filterCallback)
// console.log(arrayFilterFn)
// const arrayFilter = testArray.filter(filterCallback)
// console.log(arrayFilter)


// reduce
// const reduceFn = (array, callback, inital = 0) => {
//   Validator.isArray(array)
//   Validator.isFunction(callback)
//
//   const lengthOfArray = array.length
//
//   let value = inital;
//   for(let i = 0; i < lengthOfArray; i++) {
//     value = callback(value, array[i]);
//   }
//
//   return value
// };

[1,3,undefined]

const reduceFn = (array, callback, initial) => {
  Validator.isArray(array);
  Validator.isFunction(callback);

  const lengthOfArray = array.length;
  const arrayCopy = array;
  let value = !!initial ? initial : arrayCopy[0];
  let i = !!initial ? 0 : 1;

  for (i; i < lengthOfArray; i++) {
    if(arrayCopy[i] === undefined) break;

    value = callback(value, arrayCopy[i]);
  }

  return value
};

const arrayReduceFNTest = reduceFn(testArray, reduceCallback)
console.log(arrayReduceFNTest)
const arrayReduce = testArray.reduce(reduceCallback);
console.log(arrayReduce)


const everyFn = (array, callback) => {
  Validator.isArray(array)
  Validator.isFunction(callback)

  const lengthOfArray = array.length

  for(let i = 0; i < lengthOfArray; i++) {
    if (!callback(array[i]))
      return false
  }

  return true
};
// console.log(everyFn(testArrayEvery, everyCallback))
// console.log(testArrayEvery.every(everyCallback))

const someFn = (array, callback) => {
  Validator.isArray(array)
  Validator.isFunction(callback)

  const lengthOfArray = array.length
  let result = false

  for(let i = 0; i < lengthOfArray; i++) {
    if (callback(array[i]))
      result = true
  }

  return result
};

// console.log(someFn(testArrayEvery, someCallback))
// console.log(testArrayEvery.some(someCallback))







