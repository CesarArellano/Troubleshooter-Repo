function largestSquare(matrix: number[][]): number {
    const rows = matrix.length;
    const cols = matrix[0]?.length ?? 0;
    const dp = Array.from({length: rows}, () => Array(cols).fill(0))
    let max_sum = -1;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (matrix[i]![j]! === 0) {
          continue;
        }
        let left = 0;
        let right = 0;
        let diag = 0;

        if (i > 0) left = dp[i - 1]![j]!;
        if (j > 0) right = dp[i]![j - 1]!;
        if (i > 0 && j > 0) diag = dp[i - 1]![j - 1]!;
        dp[i]![j] = Math.min(left, right, diag) + 1;
        max_sum = Math.max(max_sum, dp[i]![j]!);
      }
    }
    
    return max_sum * max_sum;
};

const matrix = [[1, 1, 1, 1, 0], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 0]];
console.log({matrix})
console.log(largestSquare(matrix));