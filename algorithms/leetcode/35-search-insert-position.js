/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
    if (target < nums[i]) {
      return i;
    }
  }
  return nums.length;
};

var searchInsert = function(nums, target) {
  let lo = 0, hi = nums.length; // we might need to inseart at the end
  while(lo < hi) { // breaks if lo == hi
    let mid = lo + Math.floor((hi-lo)/2); // always gives the lower mid
    if (target > nums[mid]) {
      lo = mid + 1 // no way mid is a valid option
    } else {
      hi = mid // it might be possibe to inseart @ mid
    }
  }
  return lo;
};

console.log(searchInsert([1,2,3,4,5,7,8,9,10], 6));