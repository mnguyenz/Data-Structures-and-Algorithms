/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = (costs, coins) => {
  costs.sort((a, b) => a - b); 
  let sum = 0;
  for (let i = 0; i < costs.length; i++) {
    sum += costs[i];
    if (sum > coins) {
      return i;
    }
  }
  return costs.length;
};

console.log(maxIceCream([10,2,10,10,10,10,8,2,7,8], 25));