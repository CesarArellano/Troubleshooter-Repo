function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let left = 0;
    let right = prices.length - 1;
    
    while (left < right) {
      const profit = prices[right]! - prices[left]!;
      maxProfit = Math.max(maxProfit, profit)
      if (left + 1 !== right) {
        right--;
      } else {
        left++;
        right = prices.length - 1;
      }
    }

    return maxProfit;
};

function maxProfi2(prices: number[]): number {
  if (prices.length === 0) return 0;

  let minPrice = prices[0]!;      // best buy so far
  let maxProfit = 0;             // best profit so far

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]!;
    // profit if we sell today
    const profit = price - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    // update best buy price
    if (price < minPrice) {
      minPrice = price;
    }
  }

  return maxProfit;
}

const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices))