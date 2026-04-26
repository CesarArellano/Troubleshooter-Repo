function isPalindrome(s: string): boolean {
    const polishedArray = s.toLowerCase().trim().split('');
    let result:string[] = []; 
    for(const c of polishedArray) {
        if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
            result.push(c);
        }
    }
    return result.join('') === result.reverse().join('');
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));