// https://leetcode.com/problems/median-of-two-sorted-arrays/description/?envType=daily-question&envId=2023-09-21

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let pointer1 = 0;
  let pointer2 = 0;
  let medianIndex, medianIndex1, medianIndex2;
  let sum2Medians = 0;
  if ((nums1.length + nums2.length) % 2 === 0) {
    medianIndex2 = (nums1.length + nums2.length) / 2;
    medianIndex1 = medianIndex2 - 1;
  } else {
    medianIndex = Math.floor((nums1.length + nums2.length) / 2);
  }
  while (pointer1 < nums1.length || pointer2 < nums2.length) {
    if (medianIndex !== undefined) {
      if ( nums1[pointer1] < nums2[pointer2] || pointer2 >= nums2.length) {
        pointer1++;
        if (pointer1 + pointer2 === medianIndex + 1) {
          return nums1[pointer1 - 1];
        }
      }
      else {
        pointer2++;
        if (pointer1 + pointer2 === medianIndex + 1) {
          return nums2[pointer2 - 1];
        }
      }

    }
    if (medianIndex1 !== undefined && medianIndex2 !== undefined) {
      if ( nums1[pointer1] < nums2[pointer2] || pointer2 >= nums2.length) {
        pointer1++;
        if (pointer1 + pointer2 === medianIndex1 + 1) {
          sum2Medians += nums1[pointer1 - 1];
        }
        if (pointer1 + pointer2 === medianIndex2 + 1) {
          sum2Medians += nums1[pointer1 - 1];
        }
      }
      else {
        pointer2++;
        if (pointer1 + pointer2 === medianIndex1 + 1) {
          sum2Medians += nums2[pointer2 - 1];
        }
        if (pointer1 + pointer2 === medianIndex2 + 1) {
          sum2Medians += nums2[pointer2 - 1];
        }
      }
      if (pointer1 + pointer2 === medianIndex2 + 1) {
        return sum2Medians / 2;
      }
    }
  }
  return 0;
};

console.log(findMedianSortedArrays([], [1]));