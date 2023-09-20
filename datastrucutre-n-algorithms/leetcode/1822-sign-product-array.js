/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = (nums) => {
  let sumSign = 0;
  for (const num of nums) {
    sumSign += signFunc(num);
  }
  return signFunc(sumSign);
};

const signFunc = (x) => {
  if (x < 0) {
    return -1;
  } else if (x > 0) {
    return 1;
  } else {
    return 0;
  }
}