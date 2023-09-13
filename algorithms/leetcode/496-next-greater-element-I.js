/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Easy solution 1
const nextGreaterElement = (nums1, nums2) => {
  if (nums2.length == 1) {
    return [-1];
  }
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    let compare = false;
    for (let j = 0; j < nums2.length; j++) {
      if (nums2[j] == nums1[i]) {
        compare = true
      }
      if (compare && nums2[j] > nums1[i]) {
        result.push(nums2[j]);
        break;
      }
      if (j == nums2.length - 1) {
        result.push(-1);
      }
    }
  }
  return result;
};

// Monotonic stack
const nextGreaterElement2 = (nums1, nums2) => {
  const map = {};
  const stack = [];
  nums2.forEach((n) => {
    while (stack.length > 0 && stack[stack.length - 1] < n) {
      map[stack.pop()] = n;
    }
    stack.push(n);
  });
  return nums1.map((n) => map[n] || -1);
}

console.log(nextGreaterElement2([4,1,2], [1,3,4,2]));