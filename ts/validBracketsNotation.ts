function isBalanced(brackets: string): boolean {
  let stack: string[] = [];
  const PAIRS: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of brackets) {
    if ('({['.includes(char)) {
      stack.push(char);
    }

    if(PAIRS[char]) {
      if (stack.length == 0) return false;
      const last = stack.pop();
      if (last != PAIRS[char]) return false;
    }
  }

  return stack.length == 0;
}

console.log(isBalanced("()[]{}"));
console.log(isBalanced("({}){}[]([])"));
console.log(isBalanced("()[]{}}}"));
console.log(isBalanced("([)]"));

// DFS - BFS