function isMatch(s: string, p: string): boolean {
    const memo = new Map<string, boolean>();

    function dp(i: number, j: number): boolean {
        if (j === p.length) return i === s.length;
        const key = `${i},${j}`;
        if (memo.has(key)) return memo.get(key)!;

        const charMatch = i < s.length && (p[j] === '.' || p[j] === s[i]);

        let result: boolean;
        if (p[j + 1] === '*') {
            result = dp(i, j + 2) ||              // zero occurrences
                    (charMatch && dp(i + 1, j));   // one or more
        } else {
            result = charMatch && dp(i + 1, j + 1);
        }

        memo.set(key, result);
        return result;
    }

    return dp(0, 0);
}

console.log(isMatch('mississippi', 'mis*is*ip*.'));
