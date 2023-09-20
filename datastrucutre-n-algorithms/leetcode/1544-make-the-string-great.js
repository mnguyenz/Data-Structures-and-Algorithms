/**
 * @param {string} s
 * @return {string}
 */
// Solution 1
// const makeGood = function(s) {
//   if (s.length <= 1) {
//     return s
//   } else {
//     for (let i = 0; i < s.length - 1; i++) {
//       if(s[i].localeCompare(s[i + 1], undefined, { sensitivity: 'base' }) === 0) {
//         if ((s[i] == s[i].toUpperCase() && s[i + 1] == s[i + 1].toLowerCase()) || 
//             (s[i] == s[i].toLowerCase() && s[i + 1] == s[i + 1].toUpperCase())) {
//           s = s.slice(0, i) + s.slice(i + 2);
//           if (i > 0) {
//             i -= 2;
//           } else {
//             i -= 1;
//           }
//         }
//       }
//     }
//     return s;
//   }
// };

// Solution 2
const makeGood = function(s) {
  if (s.length <= 1) {
    return s
  } else {
    const result = [];
    for (let i = 0; i < s.length; i++) {
      result.push(s[i]);
      if (result.length > 1) {
        if(result[result.length - 1].localeCompare(result[result.length - 2], undefined, { sensitivity: 'base' }) === 0) {
          if ((result[result.length - 1] == result[result.length - 1].toUpperCase() && result[result.length - 2] == result[result.length - 2].toLowerCase()) || 
              (result[result.length - 1] == result[result.length - 1].toLowerCase() && result[result.length - 2] == result[result.length - 2].toUpperCase())) {
            result.pop();
            result.pop();
          }
        }
      }
    }
    return result.join('');
  }
};

// Testing
console.log(makeGood('abBAcC'));