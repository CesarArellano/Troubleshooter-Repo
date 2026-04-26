
function trap(height: number[]): number {
  const n = height.length;
  
  let leftWall = 0, rightWall = 0;

  const maxLeft = new Array(n).fill(0);
  const maxRight = [...maxLeft];
  
  let j = n;

  for (let i = 0; i < n; i++) {
    j--;
    console.log({i, j})
    maxLeft[i] = leftWall;
    maxRight[j] = rightWall;
    leftWall = Math.max(leftWall, height[i]!);
    rightWall = Math.max(rightWall, height[j]!);
  }

  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    const potential = Math.min(maxLeft[i], maxRight[i]);
    sum += Math.max(0, potential - height[i]!)
  }
  
  return sum;
};

const result = trap([0,1,0,2,1,0,1,3,2,1,2,1]);
console.log({result});