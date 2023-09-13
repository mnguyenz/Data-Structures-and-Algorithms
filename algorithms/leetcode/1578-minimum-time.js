/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
const minCost = function(colors, neededTime) {
  let result = 0;
  let maxInConsecutive = 0;
  for (let i = 1; i < colors.length; i++) {
    if (colors[i] === colors[i - 1]) {
      if (maxInConsecutive === 0) {
        // result += smaller(neededTime[i], neededTime[i - 1]);
        // maxInConsecutive = larger(neededTime[i], neededTime[i - 1]);
        result += compare(neededTime[i], neededTime[i - 1])[0];
        maxInConsecutive = compare(neededTime[i], neededTime[i - 1])[1];
      }
      else {
        // result += smaller(neededTime[i], maxInConsecutive);
        // maxInConsecutive = larger(neededTime[i], maxInConsecutive);
        result += compare(neededTime[i], maxInConsecutive)[0];
        maxInConsecutive = compare(neededTime[i], maxInConsecutive)[1];
      }
    }
    else {
      maxInConsecutive = 0
    }
  }
  return result;
};

// function smaller(x, y) {
//   if (x < y) {
//     return x;
//   }
//   else return y;
// }

// function larger(x, y) {
//   if (x > y) {
//     return x;
//   }
//   else return y;
// }

// const smaller = (x, y) => x < y ? x : y 
// const larger = (x, y) => x > y ? x : y 
const compare = (x, y) => x < y ? [x, y] : [y, x]

// Solution 2
// const minCost = function(colors, neededTime) {
//   let result = 0;
//   let sumInConsecutive = 0;
//   let maxInConsecutive = 0;
//   for (let i = 0; i < colors.length; i++) {
//     if (i > 0 && colors[i] !== colors[i - 1]) {
//       result += sumInConsecutive - maxInConsecutive;
//       sumInConsecutive = maxInConsecutive = 0;
//     }
//     sumInConsecutive += neededTime[i];
//     maxInConsecutive = Math.max(maxInConsecutive, neededTime[i]);
//   }
//   result += sumInConsecutive - maxInConsecutive;
//   return result;
// };

// Testing
console.log(minCost("aaabc", [1,2,3,4,5]));
