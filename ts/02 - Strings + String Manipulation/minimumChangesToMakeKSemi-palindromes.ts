/*
  2911. Minimum Changes to Make K Semi-palindromes
  Given a string s and an integer k, partition s into k substrings such that the letter changes needed to make each substring a semi-palindrome are minimized.

  Return the minimum number of letter changes required.

  A semi-palindrome is a special type of string that can be divided into palindromes based on a repeating pattern. To check if a string is a semi-palindrome:​

  Choose a positive divisor d of the string's length. d can range from 1 up to, but not including, the string's length. For a string of length 1, it does not have a valid divisor as per this definition, since the only divisor is its length, which is not allowed.
  For a given divisor d, divide the string into groups where each group contains characters from the string that follow a repeating pattern of length d. Specifically, the first group consists of characters at positions 1, 1 + d, 1 + 2d, and so on; the second group includes characters at positions 2, 2 + d, 2 + 2d, etc.
  The string is considered a semi-palindrome if each of these groups forms a palindrome.
  Consider the string "abcabc":

  The length of "abcabc" is 6. Valid divisors are 1, 2, and 3.
  For d = 1: The entire string "abcabc" forms one group. Not a palindrome.
  For d = 2:
  Group 1 (positions 1, 3, 5): "acb"
  Group 2 (positions 2, 4, 6): "bac"
  Neither group forms a palindrome.
  For d = 3:
  Group 1 (positions 1, 4): "aa"
  Group 2 (positions 2, 5): "bb"
  Group 3 (positions 3, 6): "cc"
  All groups form palindromes. Therefore, "abcabc" is a semi-palindrome.
  

  Example 1:

  Input: s = "abcac", k = 2

  Output: 1

  Explanation: Divide s into "ab" and "cac". "cac" is already semi-palindrome. Change "ab" to "aa", it becomes semi-palindrome with d = 1.

  Example 2:

  Input: s = "abcdef", k = 2

  Output: 2

  Explanation: Divide s into substrings "abc" and "def". Each needs one change to become semi-palindrome.

  Example 3:

  Input: s = "aabbaa", k = 3

  Output: 0

  Explanation: Divide s into substrings "aa", "bb" and "aa". All are already semi-palindromes.

  

  Constraints:

  2 <= s.length <= 200
  1 <= k <= s.length / 2
  s contains only lowercase English letters.
*/

function minimumChanges(s: string, k: number): number {
    const n = s.length;
    const INF = 1e9;

    // Step 1: Precompute divisors for each possible substring length
    // getDivisors(len) returns all d where 1 <= d < len and len % d == 0
    function getDivisors(len: number): number[] {
        const divs: number[] = [];
        for (let d = 1; d < len; d++) {
            if (len % d === 0) divs.push(d);
        }
        return divs;
    }

    // Step 2: Compute cost[i][j] = min changes to make s[i..j] a semi-palindrome
    function computeCost(i: number, j: number): number {
        const len = j - i + 1;
        if (len < 2) return INF;

        const divisors = getDivisors(len);
        if (divisors.length === 0) return INF;

        let best = INF;

        for (const d of divisors) {
            let changes = 0;

            // Each "column" col groups chars at positions: col, col+d, col+2d, ...
            for (let col = 0; col < d; col++) {
                const chars: string[] = [];
                for (let p = i + col; p <= j; p += d) {
                    chars.push(s[p]!);
                }

                // Count mismatches to make this group a palindrome
                let lo = 0;
                let hi = chars.length - 1;
                while (lo < hi) {
                    if (chars[lo] !== chars[hi]) changes++;
                    lo++;
                    hi--;
                }
            }

            best = Math.min(best, changes);
        }

        return best;
    }

    // Build the full cost matrix
    const cost: number[][] = Array.from({ length: n }, () => new Array(n).fill(INF));
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            cost[i]![j] = computeCost(i, j);
        }
    }

    // Step 3: DP
    // dp[p][i] = min changes to split s[0..i] into exactly p semi-palindromes
    const dp: number[][] = Array.from({ length: k + 1 }, () => new Array(n).fill(INF));
    // Base case: 1 semi-palindrome covering s[0..i]
    for (let i = 1; i < n; i++) {
        dp[1]![i] = cost[0]![i]!;
    }

    // Fill for p = 2..k
    for (let p = 2; p <= k; p++) {
        for (let i = p - 1; i < n; i++) {
            // j = start index of the last segment s[j..i]
            for (let j = p - 1; j <= i; j++) {
                if (dp[p - 1]![j - 1]! < INF && cost[j]![i]! < INF) {
                    dp[p]![i] = Math.min(dp[p]![i]!, dp[p - 1]![j - 1]! + cost[j]![i]!);
                }
            }
        }
    }
    return dp[k]![n - 1]!;
}

const s = 'abcabc', k =2;
const result = minimumChanges(s, k);
console.log({result})