// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/?envType=daily-question&envId=2023-12-11

// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.



// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:

// Input: arr = [1,1]
// Output: 1


// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 105

function findSpecialInteger(arr: number[]): number {
  const windowSize = Math.floor(arr.length / 4);
  for (let i = 0; i < arr.length - windowSize; i++) {
    if (arr[i] === arr[i + windowSize]) {
      return arr[i];
    }
  }
  return arr[0];
};

console.log(findSpecialInteger([1,2,3,3]))