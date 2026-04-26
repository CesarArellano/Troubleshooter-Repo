/*
  1480. Running Sum of 1d Array

  Example 1:

  Input: nums = [1,2,3,4]
  Output: [1,3,6,10]
  Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
  Example 2:

  Input: nums = [1,1,1,1,1]
  Output: [1,2,3,4,5]
  Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
  Example 3:

  Input: nums = [3,1,2,10,1]
  Output: [3,4,6,16,17]
  

  Constraints:

  1 <= nums.length <= 1000
  -10^6 <= nums[i] <= 10^6
*/

function runningSum(nums: number[]): number[] {
  const result: number[] = [];
  let sum = 0;
  
  for (const num of nums) {
    sum += num;
    result.push(sum);
  }

  return result;
}


const nums = [3,1,2,10,1];
const expected = [3,4,6,16,17];
console.log({result: JSON.stringify(nums) === JSON.stringify(expected)});
const result = runningSum(nums);
console.log({result: JSON.stringify(result) === JSON.stringify(expected)});