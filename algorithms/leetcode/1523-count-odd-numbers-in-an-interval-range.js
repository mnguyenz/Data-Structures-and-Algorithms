/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds1 = (low, high) => {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 === 1) {
      count += 1;
    }
  }
  return count;
};

const countOdds = (low, high) => {
  if (low % 2 === 1) {
    return Math.floor((high - low) / 2) + 1;
  } else {
    if (high % 2 === 0) {
      return Math.floor((high - low) / 2);
    } else {
      return Math.floor((high - low) / 2) + 1;
    }
  }
};
