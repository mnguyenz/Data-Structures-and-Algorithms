// https://leetcode.com/problems/reverse-words-in-a-string-ii/

// Given a character array s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by a single space.

// Your code must solve the problem in-place, i.e. without allocating extra space.



// Example 1:

// Input: s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
// Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]

// Example 2:

// Input: s = ["a"]
// Output: ["a"]



// Constraints:

//     1 <= s.length <= 105
//     s[i] is an English letter (uppercase or lowercase), digit, or space ' '.
//     There is at least one word in s.
//     s does not contain leading or trailing spaces.
//     All the words in s are guaranteed to be separated by a single space.

function reverseWords(s: string[]): void {
  let left = 0;
  let leftBeginWord = 0;
  let right = s.length - 1;
  let rightLastWord = s.length - 1;
  while (left <= right) {
    if (s[left] === ' ' && s[right] === ' ') {
      const leftWord = s.slice(leftBeginWord, left).join('');
      const rightWord = s.slice(right + 1, rightLastWord + 1).join('');
      const lengthDifference = rightWord.length - leftWord.length;
      s.splice(leftBeginWord, left - leftBeginWord, ...rightWord.split(''));
      s.splice(right + 1 + lengthDifference, rightLastWord - right, ...leftWord.split(''));
      left = left + 1 + lengthDifference;
      right = right - 1 + + lengthDifference;
      leftBeginWord = left;
      rightLastWord = right;
    }
    if (s[left] !== ' ') {
      left += 1;
    }
    if (s[right] !== ' ') {
      right -= 1;
    }
  }
}

console.log(reverseWords(['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l']));



