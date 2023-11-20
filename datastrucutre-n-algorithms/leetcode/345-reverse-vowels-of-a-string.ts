// https://leetcode.com/problems/reverse-vowels-of-a-string/

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.



// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"


// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

function reverseVowels2(s: string): string {
  const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  let left = 0;
  let right = s.length - 1;
  let sArray = Array.from(s);
  while (left < right) {
    if (!vowels.includes(s[left])) {
      left++;
    } else if (!vowels.includes(s[right])) {
      right--;
    } else {
      sArray[left] = s[right];
      sArray[right] = s[left];
      left++;
      right--;
    }
  }
  return sArray.join('');
};

function reverseVowels(s: string): string {
  const vowelsMap = new Map([
    ["a", true],
    ["e", true],
    ["i", true],
    ["o", true],
    ["u", true],
    ["A", true],
    ["E", true],
    ["I", true],
    ["O", true],
    ["U", true],
  ]);
  let left = 0;
  let right = s.length - 1;
  let sArray = Array.from(s);
  while (left < right) {
    if (!vowelsMap.has(s[left])) {
      left++;
    } else if (!vowelsMap.has(s[right])) {
      right--;
    } else {
      sArray[left] = s[right];
      sArray[right] = s[left];
      left++;
      right--;
    }
  }
  return sArray.join('');
};