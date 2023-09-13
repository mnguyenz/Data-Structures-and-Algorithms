/**
 * @param {string} s
 * @return {string}
 */
const removeStars = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      if (i > 0) {
        s = s.substring(0, i - 1) +  s.substring(i + 1);
        i -= 2;
      } else {
        s = s.substring(1);
        i--;
      }
    }
  }
  return s;
};

console.log(removeStars('leet**cod*e'));