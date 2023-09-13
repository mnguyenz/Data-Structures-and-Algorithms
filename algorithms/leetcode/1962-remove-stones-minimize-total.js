/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
// The solution when I did not clear about the requirement
const minStoneSum1 = (piles, k) => {
  piles.sort();
  let sum = 0;
  let idx = 0;
  for (let i = piles.length - 1; i >=0; i--) {
    if (idx < k) {
      sum += (piles[i] - ((piles[i] - piles[i] % 2) / 2));
    } else {
      sum += piles[i];
    }
    idx++;
  }
  return sum;
};

// Fail in case there is 1 in piles
const minStoneSum2 = (piles, k) => {
  piles.sort();
  let idx = 1;
  if (piles.length == 1) {
    while (idx <= k) {
      piles.length[0] = piles.length[0] - ((piles.length[0] - piles.length[0] % 2) / 2);
      idx++;
    }
    return piles.length[0];
  }
  while (idx <= k) {
    let num = piles[piles.length - 1]
    num = num - ((num - num % 2) / 2);
    let index = piles.length - 2;
    while ((index >= 0) && (num < piles[index])) {
      piles[index + 1] = piles[index];
      index--;
    }
    piles[index + 1] = num;
    idx++;
  }
  let sum = 0;
  for (const number of piles) {
    sum += number;
  }
  return sum;
};

// Fail because the sort do not work properly
const minStoneSum3 = (piles, k) => {
  piles.sort();
  let idx = 1;
  if (piles.length == 1) {
    while (idx <= k) {
      if (piles[0] > 1) {
        piles[0] = piles[0] - ((piles[0] - piles[0] % 2) / 2);
      }
      idx++;
    }
    return piles[0];
  }
  while (idx <= k) {
    let num = piles[piles.length - 1];
    if (num > 1) {
      num = num - ((num - num % 2) / 2);
    }
    let index = piles.length - 2;
    while ((index >= 0) && (num < piles[index])) {
      piles[index + 1] = piles[index];
      index--;
    }
    piles[index + 1] = num;
    idx++;
  }
  let sum = 0;
  for (const number of piles) {
    sum += number;
  }
  return sum;
};

// Time Limit Exceeded
const minStoneSum = (piles, k) => {
  for (let i = 0; i < piles.length; i++) {
    const currentNumber = piles[i];
    if (i > 0) {
      let j = i - 1;
      while ((j >= 0) && (currentNumber < piles[j])) {
        piles[j + 1] = piles[j];
        j--;
      }
      piles[j + 1] = currentNumber;
    }
  }
  let idx = 1;
  if (piles.length == 1) {
    while (idx <= k) {
      if (piles[0] > 1) {
        piles[0] = piles[0] - ((piles[0] - piles[0] % 2) / 2);
      }
      idx++;
    }
    return piles[0];
  }
  while (idx <= k) {
    let num = piles[piles.length - 1];
    if (num > 1) {
      num = num - ((num - num % 2) / 2);
    }
    let index = piles.length - 2;
    while ((index >= 0) && (num < piles[index])) {
      piles[index + 1] = piles[index];
      index--;
    }
    piles[index + 1] = num;
    idx++;
  }
  let sum = 0;
  for (const number of piles) {
    sum += number;
  }
  return sum;
};

// Have to Use Max Heap

console.log(minStoneSum([8916,7289,8226,4395,589,450,5965,7617,5218,6227], 7));