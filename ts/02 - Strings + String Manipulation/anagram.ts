/*
  242. Valid Anagram
  Given two strings s and t, return true if t is an anagram of s, and false otherwise.

  Example 1:

  Input: s = "anagram", t = "nagaram"

  Output: true

  Example 2:

  Input: s = "rat", t = "car"

  Output: false

  

  Constraints:

  1 <= s.length, t.length <= 5 * 104
  s and t consist of lowercase English letters.
*/
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const freq = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 97]++;
    freq[t.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) return false;
  }

  return true;
}

const s = "anagram", t = "nagaram"
console.log(isAnagram(s, t))