// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/?envType=daily-question&envId=2023-10-09

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]


// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1];
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const index = Math.round((left + right) / 2);
    if (nums[index] === target) {
      let leftIndex = index;
      if (nums[0] === target) {
        leftIndex = 0;
      } else {
        while (leftIndex > 0 && nums[leftIndex - 1] === target) {
          leftIndex--
        }
      }
      let rightIndex = index;
      if (nums[nums.length - 1] === target) {
        rightIndex = nums.length - 1;
      } else {
        while (rightIndex < nums.length - 1 && nums[rightIndex + 1] === target) {
          rightIndex++
        }
      }
      return [leftIndex, rightIndex]
    }
    if (nums[index] > target) {
      right = index - 1;
    }
    if (nums[index] < target) {
      left = index + 1;
    }
  }
  return [-1, -1];
};

console.log(searchRange([1], 1));