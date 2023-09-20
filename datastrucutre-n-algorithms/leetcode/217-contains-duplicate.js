/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const values = []

  for (const num of nums) {
    if (values.includes(num)) {
      return true;
    } else {
      values.push(num);
    }
  }
  return false;
};

console.log(containsDuplicate([1,2,3,1]));