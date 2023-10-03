// https://leetcode.com/problems/number-of-good-pairs/description/?envType=daily-question&envId=2023-10-03

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.



// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0


// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

function numIdenticalPairs(nums: number[]): number {
  let numberMap: Map<number, number> = new Map();
  nums.forEach((num) => {
    numberMap.set(num, (numberMap.get(num) || 0) + 1);
  });
  let result = 0;
  numberMap.forEach((value, key) => {
    result += (value * (value - 1)) / 2;
  });
  return result;
};