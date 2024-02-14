// https://leetcode.com/problems/largest-divisible-subset/description/?envType=daily-question&envId=2024-02-09

import { getArrayWithLargestLength } from "./helper-map";

// Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0
// If there are multiple solutions, return any of them.



// Example 1:

// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.
// Example 2:

// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]


// Constraints:

// 1 <= nums.length <= 1000
// 1 <= nums[i] <= 2 * 109
// All the integers in nums are unique.

function largestDivisibleSubset(nums: number[]): number[] {
  if (nums.length === 0 || nums.length === 1) {
    return nums;
  }
  nums.sort((a, b) => a - b);
  let resultArrayMap = new Map<number, number[]>();
  let baseIndex = 0;
  let nextBaseIndex = -1;
  let checkedIndexs = [0];
  resultArrayMap.set(nums[baseIndex], [nums[baseIndex]]);
  while (baseIndex < nums.length - 1 && nextBaseIndex !== baseIndex) {
    if (nextBaseIndex < 0) {
      nextBaseIndex = baseIndex;
    }
    if (baseIndex !== nextBaseIndex) {
      baseIndex = nextBaseIndex
    }
    for (let i = baseIndex + 1; i < nums.length; i++) {
      let resultArray = resultArrayMap.get(nums[baseIndex]) || [nums[baseIndex]];
      if (nums[i] % resultArray[resultArray.length - 1] === 0) {
        resultArrayMap.set(nums[baseIndex], resultArray.concat(nums[i]));
        checkedIndexs.push(i);
      } else {
        if (nextBaseIndex === baseIndex && !checkedIndexs.includes(i)) {
          nextBaseIndex = i;
          checkedIndexs.push(i);
        }
      }
    }
  }
  return getArrayWithLargestLength(resultArrayMap);
};

console.log(largestDivisibleSubset([5,9,18,54,108,540,90,180,360,720]));