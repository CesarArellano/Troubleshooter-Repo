function matrixSumByLayers(matrix: number[][]): number[] {
  const matrixSum: number[] = [];
  const len = matrix.length;
  
  for (let layer = 0; layer < Math.trunc(len / 2); layer++) {
    let sumByLayer = 0;
    let boundary = len - layer - 1;

    // TOP
    for (let i = layer; i <= boundary; i++) {
      sumByLayer += matrix[layer]![i]!;
    }
    
    // RIGHT
    for (let i = layer + 1; i < boundary; i++) {
      sumByLayer += matrix[i]![boundary]!;
    }

    // BOTTOM
    for (let i = layer; i <= boundary; i++) {
      sumByLayer += matrix[boundary]![i]!;
    }

    // LEFT
    for (let i = layer + 1; i < boundary; i++) {
      sumByLayer += matrix[layer]![i]!;
    }

    matrixSum.push(sumByLayer);
  }

  if (len % 2 !== 0) {
    const centerIndex = Math.trunc(len / 2);
    matrixSum.push(matrix[centerIndex]![centerIndex]!)
  }
  return matrixSum;
}

const matrixExample = [
  [1, 1, 1, 1, 1, 1, 1],  // TOP => 7, RIGHT => 5, BOTTOM => 7, LEFT => 5. 
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

const expected = [24, 16, 8, 1];
const result = matrixSumByLayers(matrixExample);
console.log({result});

function arraysEqual<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) return false;
  return a.every((value, i) => value === b[i]);
}

console.log(arraysEqual(expected, result))