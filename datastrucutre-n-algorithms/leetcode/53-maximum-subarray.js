/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = (nums) => {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};

// Kadane’s algorithm
var maxSubArray = (nums) => {
  let max = Number.NEGATIVE_INFINITY;
  let max_ending = 0;
  for (let i = 0; i < nums.length; i++) {
    max_ending = max_ending + nums[i]
    if (max_ending > max) {
      max = max_ending;
    }
    if (max_ending < 0) {
      max_ending = 0
    }
  }
  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));