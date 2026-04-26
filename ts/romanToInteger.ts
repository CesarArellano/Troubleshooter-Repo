// Define the values outside the function to avoid re-allocation
const ROMAN_MAP: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInteger(s: string): number {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = ROMAN_MAP[s[i] ?? 0] ?? 0;
    const next = ROMAN_MAP[s[i + 1] ?? 0] ?? 0;

    // If the current value is less than the next, we subtract (e.g., IV = -1 + 5)
    if (next > current) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

console.log(romanToInteger('MCMXCIV'))