// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/description/?envType=daily-question&envId=2023-09-20

// You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.
// Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

// Example 1:

// Input: nums = [1,1,4,2,3], x = 5
// Output: 2
// Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
// Example 2:

// Input: nums = [5,6,7,8,9], x = 4
// Output: -1
// Example 3:

// Input: nums = [3,2,20,1,1,3], x = 10
// Output: 5
// Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
// 1 <= x <= 109

function minOperations(nums: number[], x: number): number {
  const target = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0) - x;
  let currentSum = 0;
  let maxWindow = -1;
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    currentSum += nums[r];
    while (currentSum > target && l <= r) {
      currentSum -= nums[l];
      l++;
    }
    if (currentSum === target) {
      maxWindow = Math.max(maxWindow, r - l + 1);
    }
  }
  return maxWindow === -1 ? maxWindow : nums.length - maxWindow;
};

console.log(minOperations([5,6,7,8,9], 4));