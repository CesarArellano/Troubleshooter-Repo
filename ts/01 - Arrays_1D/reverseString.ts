/*
  344. Reverse String
  Write a function that reverses a string. The input string is given as an array of characters s.

  Example 1:

  Input: s = ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]

  Example 2:

  Input: s = ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]

  Constraints:

  1 <= s.length <= 10^5
  s[i] is the ith character of string s.
*/
function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left]!;
    s[left] = s[right]!;
    s[right] = temp;

    left++;
    right--;
  }
}

const s = ["h","e","l","l","o"];
reverseString(s)
console.log(s);
