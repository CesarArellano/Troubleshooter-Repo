function intToRoman(num: number): string {
  // Define symbols and values in descending order, including subtractive cases
  const symbols: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const values: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= (values[i] ?? 0)) {
      num -= (values[i] ?? 0);
      result += (symbols[i] ?? "");
    }
  }

  return result;
}

console.log(intToRoman(4749));