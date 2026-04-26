function factorial(value: number): number {
  if (value == 0) return 1;
  
  let result = 1;
  
  for(let i = 1; i <= value; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(6));