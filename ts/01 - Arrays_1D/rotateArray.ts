function reverse(nums: number[], left: number, right: number): void {
  while (left < right) {
    const temp = nums[left]!;
    nums[left] = nums[right]!;
    nums[right] = temp;
    left++;
    right--;
  }
}

function rotate(nums: number[], k: number): void {
  const n: number = nums.length;
  if (n === 0) return;

	k = k % n;
	reverse(nums, 0, n - 1);
	reverse(nums, 0, k - 1);
	reverse(nums, k, n - 1)
};

const nums = [1,2,3,4,5,6,7];
rotate(nums, 3);
console.log(nums);