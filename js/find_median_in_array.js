
const firstArray = [1,4,7,9,10];
const secondArray = [2,3,6,5,11,8, 12];

const calculateMedianFromTwoArrays = (array1, array2) => {
  const mergedList = [ ...array1, ...array2 ];

  mergedList.sort((a, b) => a - b);
  const len = mergedList.length;

  if( len % 2 !== 1) {
    return ( mergedList[ Math.trunc(len / 2 ) - 1] + mergedList[ Math.trunc(len / 2 )]) / 2;
  }

  return result = mergedList[ Math.trunc(len / 2 )];
}

console.log({result: calculateMedianFromTwoArrays(firstArray, secondArray)});