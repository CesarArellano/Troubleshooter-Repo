function evalRPN(tokens: string[]): number {
  let stack: number[] = [];
  const OPERATORS = ['+', '-', '*', '/'];

  for (const token of tokens) {
    if (OPERATORS.includes(token)) {
      const b = stack.pop() ?? 0;
      const a = stack.pop() ?? 0;
      if (token === '+') stack.push(a + b);
      if (token === '-') stack.push(a - b);
      if (token === '*') stack.push(a * b);
      if (token === '/') stack.push(Math.trunc(a / b));
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop() ?? 0;
};

const tokens = ["4","13","5","/","+"]
console.log(evalRPN(tokens));