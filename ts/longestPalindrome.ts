function longestPalindrome(phrase:string): string {
    if (phrase.length <= 1) return phrase;
    
    let start: number = 0;
    let maxLen: number = 1;

    function findLimits(left: number, right: number): void {
        while(left >= 0 && right < phrase.length && phrase[left] === phrase[right]) {
            if (right - left + 1 > maxLen) {
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < phrase.length; i++) {
        findLimits(i, i); // Odd Case
        findLimits(i, i + 1); // Even Case
    }

    return phrase.substring(start, start + maxLen);
}

console.log(longestPalindrome("babad"));