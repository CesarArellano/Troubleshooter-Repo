function searchMatrix(matrix: number[][], target: number): boolean {
    let m = matrix.length;
    let n = matrix[0]?.length || 0;
    let t = m * n;
    let l = 0;
    let r = t - 1;
    while (l <= r) {
      m = Math.trunc((l + r) / 2);
      let i  = Math.trunc(m / n);
      let j  = m % n;
      const mid_num = (matrix[i] ?? [])[j] ?? 0; 

      console.log({
        l,r,m,i,j,mid_num,target
      })

      if (target === mid_num) {
        return true;
      }
      if (target < mid_num) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    
    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))