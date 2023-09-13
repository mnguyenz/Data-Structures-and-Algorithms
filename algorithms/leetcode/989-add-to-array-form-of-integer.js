/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm1 = (num, k) => {
  let number = 0;
  for (let i = num.length - 1; i >=0; i--) {
    number += num[i] * Math.pow(10, num.length - 1 - i);
  }
  return Array.from(String(number + k));
};

const addToArrayForm = (num, k) => {
  k = Array.from(String(k), Number);
  let addZero = 0;
  if (num.length < k.length) {
    addZero = k.length - num.length;
    for (let i = 0; i < addZero; i++) {
      num.unshift(0);
    }
  } else {
    addZero = num.length - k.length;
    for (let i = 0; i < addZero; i++) {
      k.unshift(0);
    }
  }
  let result = [];
  let store = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    const sum = num[i] + k[i] + store;
    if (sum < 10) {
      result.unshift(sum);
      store = 0;
    } else {
      result.unshift(sum - 10);
      store = 1;
    }
  }
  if (store === 1) {
    result.unshift(1);
  }
  return result;
};

console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516));