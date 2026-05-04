function maxNumberOfBalloons(text: string): number {
  const count: Record<string, number> = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0
  };

  for (const c of text) {
    if (c in count) {
      count[c]!++;
    }
  }

  return Math.min(
    count['b']!,
    count['a']!,
    Math.trunc(count['l']! / 2),
    Math.trunc(count['o']! / 2),
    count['n']!,
  );
};

const text = "loonbalxballpoon"
console.log(maxNumberOfBalloons(text));