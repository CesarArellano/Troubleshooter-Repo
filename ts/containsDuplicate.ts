function containsDuplicate(nums: number[]): boolean {
    const valuesMap = new Set<number>();

    for(const n of nums) {
        if (valuesMap.has(n)) {
            return true;
        }
        valuesMap.add(n);
    }

    return false;
};

console.log(containsDuplicate([1,2,3,1]));