/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = (strs) => {
  if (strs.length <= 1) {
    return 0;
  }
  let result = 0;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i].localeCompare(strs[j - 1][i]) < 0) {
        result += 1;
        break;
      }
    }
  }
  return result;
};

console.log(minDeletionSize(["cba","daf","ghi"]));