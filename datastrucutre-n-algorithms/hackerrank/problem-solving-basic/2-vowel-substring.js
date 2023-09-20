function findSubstring(s, k) {
  let vowels = 'aeiou';
  let result = 'Not found!';
  let maxVowels = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (i >= k) {
      if (count > maxVowels) {
        maxVowels = count
        result = s.substring(i - k, i)
      }
      if (vowels.includes(s[i - k])) {
        count--
      }
    }
    if (vowels.includes(s[i])) {
      count++;
      if (maxVowels === k) {
        return s.substring(i - k, i);
      }
    }
  }
  return result
}

console.log(findSubstring('azerdii', 5))