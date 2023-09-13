/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = (fruits) => {
  let max = 0;
  let max_ending = 0;
  let previousContinuous = 0;
  let twoFruits = [];
  for (let i = 0; i < fruits.length; i++) {
    if (twoFruits.length === 0) {
      max_ending += 1;
      twoFruits.push(fruits[i]);
      if (max_ending > max) {
        max = max_ending;
      }
    }
    else if (twoFruits.length === 1) {
      max_ending += 1;
      if (fruits[i] !== twoFruits[0]) {
        twoFruits.push(fruits[i]);
        previousContinuous = 1;
      }
      if (max_ending > max) {
        max = max_ending;
      }
    }
    else if (twoFruits.length === 2) {
      if (fruits[i] === twoFruits[1]) {
        max_ending += 1;
        previousContinuous += 1;
        if (max_ending > max) {
          max = max_ending;
        }
      }
      else if (fruits[i] === twoFruits[0]) {
        const temp = twoFruits[0]
        twoFruits[0] = twoFruits[1];
        twoFruits[1] = temp;
        max_ending += 1;
        previousContinuous = 1;
        if (max_ending > max) {
          max = max_ending;
        }
      }
      else {
        if (max_ending > max) {
          max = max_ending;
        }
        twoFruits[0] = twoFruits[1];
        twoFruits[1] = fruits[i];
        max_ending = previousContinuous + 1;
        previousContinuous = 1;
      }
    }
  }
  return max;
};

console.log(totalFruit([1,0,1,4,1,4,1,2,3]));