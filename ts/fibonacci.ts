function fibonacci(n: number): number {
    let fibonacciList = Array.from({length: n + 2}, (_) => 0);

    fibonacciList[0] = 0;
    fibonacciList[1] = 1;

    for (let i = 2; i <= n; i++) {
      fibonacciList[i] = (fibonacciList[i-1] ?? 0) + (fibonacciList[i - 2] ?? 0);
    }

    return fibonacciList[n] ?? 0;
}

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    let mergedArray = [...arr1, ...arr2];
    
    mergedArray = mergedArray.filter((n) => n != 0);
    mergedArray.sort();

    return mergedArray;
}

function mergeSortedArraysVoid(arr1: number[], m: number, arr2: number[], n: number): void {
    let x = m-1;
    let y = n-1;
    for (let z = m + n - 1; z >= 0; z--) {
      console.log({
        x,
        y,
        z,
      });
      
      if (x < 0) {
        arr1[z] = arr2[y] ?? 0;
        y--;
      } else if (y < 0) {
        break;
      } else if ((arr1[x] ?? 0) > (arr2[y] ?? 0)) {
        arr1[z] = arr1[x] ?? 0;
        x--; 
      } else {
        arr1[z] = arr2[y] ?? 0;
        y--;
      }
    }
}

console.log(mergeSortedArrays([1, 2, 3, 5, 0, 0, 0], [2, 4, 6]));
let arr1 = [0,0];
let arr2 = [9, 3];
console.log(arr1);
mergeSortedArraysVoid(arr1, 0, arr2, 2)
console.log({arr1: [...arr1]});
