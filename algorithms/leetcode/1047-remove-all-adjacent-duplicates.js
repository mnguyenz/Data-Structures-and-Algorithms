/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function(s) {
  if (s.length <= 1) {
    return s
  } else {
    const result = [];
    for (let i = 0; i < s.length; i++) {
      result.push(s[i]);
      if (result.length > 1) {
        if(result[result.length - 1] === result[result.length - 2]) {
          result.pop();
          result.pop();
        }
      }
    }
    return result.join('');
  }
};

// Testing
console.log(removeDuplicates('abbaca'));