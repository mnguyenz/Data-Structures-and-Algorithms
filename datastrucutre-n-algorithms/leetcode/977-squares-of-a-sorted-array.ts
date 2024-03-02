// https://leetcode.com/problems/squares-of-a-sorted-array/?envType=daily-question&envId=2024-03-02

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.



// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]


// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.


// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

function sortedSquares(nums: number[]): number[] {
    let result: number[] = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let index = nums.length - 1;
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[index] = nums[left] * nums[left];
            left++;
        } else {
            result[index] = nums[right] * nums[right];
            right--;
        }
        index--;
    }
    return result;
};