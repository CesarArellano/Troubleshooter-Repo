const exampleMatrix = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

const calculateLayerSum = (matrix) => {
  let sumMatrix = []
  const len = matrix.length;

  for( let layer = 0; layer < Math.trunc(len / 2); layer++ ) {
    let currentSum = 0;
    const boundary = len - layer - 1;
      
    // TOP
    for( let i = layer; i <= boundary; i++) {
      currentSum += matrix[layer][i];
    }
    
    // RIGHT
    for( let i = layer + 1; i < boundary; i++ ) {
      currentSum += matrix[i][boundary];
    }

    // BOTTOM
    for( let i = layer; i <= boundary; i++) {
      currentSum += matrix[boundary][i];
    }
    
    // LEFT
    for( let i = layer + 1; i < boundary; i++ ) {
      currentSum += matrix[i][layer];
    }

    sumMatrix = [ ...sumMatrix, currentSum];
  }

  if( len % 2 == 1 ) {
    sumMatrix = [ ...sumMatrix, matrix[Math.trunc(len / 2)][Math.trunc(len / 2)] ];
  }

  return sumMatrix;
}

const result = calculateLayerSum(exampleMatrix);
console.log({ result });
