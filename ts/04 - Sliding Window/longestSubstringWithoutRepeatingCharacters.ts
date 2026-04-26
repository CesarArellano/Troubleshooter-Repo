/*
  3. Longest Substring Without Repeating Characters
  Given a string s, find the length of the longest substring without duplicate characters.

  Example 1:

  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
  Example 2:

  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.
  Example 3:

  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
  

  Constraints:

  0 <= s.length <= 5 * 104
  s consists of English letters, digits, symbols and spaces.
*/


function lengthOfLongestSubstring(s: string): number {
  const n = s.length;
  if (n < 0 || n > (5 * Math.pow(10, 4))) {
      return 0;
  }

  let left = 0;
  let longest = 0;
  const sett = new Set<string>();

  for (let right = 0; right < n; right++) {
    while (sett.has(s[right]!)) {
        sett.delete(s[left]!);
        left++;
    }
    const window = (right - left) + 1;
    longest = Math.max(longest, window);
    sett.add(s[right]!)
  }

  return longest;
};

console.log(lengthOfLongestSubstring('pwwkew'))