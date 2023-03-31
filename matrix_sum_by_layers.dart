void main() {
  List<List<int>> exampleMatrix = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ];
  print('matrixSumByLayers: ${ matrixSumByLayers(exampleMatrix) }');
}

List<int> matrixSumByLayers(List<List<int>> matrix) {
  List<int> matrixSum = [];
  int len = matrix.length;

  for( int layer = 0; layer < len ~/ 2; layer ++ ) {
    int sumByLayer = 0;
    int boundary = len - layer - 1;

    // TOP
    for( int i = layer; i <= boundary; i++) {
      sumByLayer += matrix[layer][i];
    }

    // RIGHT
    for( int i = layer + 1; i < boundary; i++ ) {
      sumByLayer += matrix[i][boundary];
    }

    // BOTTOM
    for( int i = layer; i <= boundary; i++) {
      sumByLayer += matrix[boundary][i];
    }

    // LEFT
    for( int i = layer + 1; i < boundary; i++ ) {
      sumByLayer += matrix[i][layer];
    }
    

    matrixSum.add(sumByLayer);
  }

  if( matrix.length % 2 == 1 ) {
    matrixSum.add( matrix[len ~/ 2][len ~/2] );
  }

  return matrixSum;
}