
function calculateTotal(prices) {
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (typeof price === "number" && Number.isFinite(price)) {
      total += price;
    }
  }

  return total;
}

console.log(calculateTotal([100, 200, 300]));
console.log(calculateTotal([]));
console.log(calculateTotal([100, "200", 300]));
console.log(calculateTotal([100, NaN, 200]));