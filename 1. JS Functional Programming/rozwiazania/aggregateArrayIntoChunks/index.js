const alphabet = "abcdefghijklmnoprstuwxyz".split("");

const aggregateIntoChunks = (array) => {
  if(!Array.isArray(array))
    throw new Error('prop is not array')

  console.log('run function')

  const workingArray = array;
  const resultArray = [];

  const minimalRangeValue = 4;
  const maximalRangeValue = 7;
  const range = (maximalRangeValue - minimalRangeValue +1);
  let iter = 0;
  while (workingArray.length > iter) {
    const randomLenght = Math.floor(Math.random() * range) + minimalRangeValue;

    if(workingArray[iter]) {
      resultArray.push(workingArray.slice(iter, iter += randomLenght))
    }


    if (workingArray.length - iter < 4) {
      // aggregateIntoChunks(array)
      console.log('to short last part')
    }

    console.log('random: ', randomLenght)
    console.log('workingArrayLenght: ', workingArray.length)
    console.log('iter: ', iter)
  }

  console.log('rest', resultArray.slice(-1)[0].length)
  console.log('last element', resultArray.slice(-1)[0])
  if(resultArray.slice(-1)[0].length < 4) aggregateIntoChunks(array)

  return resultArray;
};

const chunks = aggregateIntoChunks(alphabet);

console.log(chunks)

// chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]


// const perChunk = 2 // items per chunk
//
// const inputArray = ['a','b','c','d','e']
//
// const result = inputArray.reduce((resultArray, item, index) => {
//   const chunkIndex = Math.floor(index/perChunk)
//
//   if(!resultArray[chunkIndex]) {
//     resultArray[chunkIndex] = [] // start a new chunk
//   }
//
//   resultArray[chunkIndex].push(item)
//
//   return resultArray
// }, [])
//
// console.log(result);