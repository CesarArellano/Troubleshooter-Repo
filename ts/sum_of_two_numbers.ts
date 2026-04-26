function getSum(a: number, b: number): number {
    while(b != 0) {
        const temp = (a & b ) << 1;
        a = a ^ b;
        b = temp;
        console.log({a, b, temp});
    }
    return a;
};

console.log(getSum(9,11));