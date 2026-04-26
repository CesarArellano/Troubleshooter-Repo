function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0

  let k = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]!;
      k++;
    }
  }
  return k;
}
const nums = [-3,-3,-1,-1,0,0,0,2,2];
console.log(removeDuplicates(nums))
console.log({nums})