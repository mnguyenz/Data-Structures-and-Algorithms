/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = (arr, k) => {
  let indexInArray = 0;
  let increasing = 0;
  let missing  = 0;
  while (missing < k) {
    increasing += 1;
    if (arr[indexInArray] === increasing) {
      indexInArray += 1;
    } else {
      missing += 1;
    }
  }
  return increasing;
};

console.log(findKthPositive([2,3,4,7,11], 5));