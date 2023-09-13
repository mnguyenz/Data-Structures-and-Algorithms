/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
const maximumBags = (capacity, rocks, additionalRocks) => {
  const diffArray = new Array(capacity.length);
  for (let i = 0; i < capacity.length; i++) {
    const diff = capacity[i] - rocks[i];
    if (i == 0) {
      diffArray[0] = diff;
    }
    if (i > 0) {
      let j = i - 1;
      while ((j >= 0) && (diff < diffArray[j])) {
        diffArray[j + 1] = diffArray[j];
        j--;
      }
      diffArray[j + 1] = diff;
    }
  }
  let result = 0;
  let sum = 0;
  for (let i = 0; i < diffArray.length; i++) {
    sum += diffArray[i];
    if (sum <= additionalRocks) {
      result += 1;
    } else {
      break;
    }
  }
  return result;
};

console.log(maximumBags([54,18,91,49,51,45,58,54,47,91,90,20,85,20,90,49,10,84,59,29,40,9,100,1,64,71,30,46,91], 
  [14,13,16,44,8,20,51,15,46,76,51,20,77,13,14,35,6,34,34,13,3,8,1,1,61,5,2,15,18], 
  77));