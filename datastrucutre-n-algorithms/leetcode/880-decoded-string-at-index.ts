// https://leetcode.com/problems/decoded-string-at-index/?envType=daily-question&envId=2023-09-27

// You are given an encoded string s. To decode the string to a tape, the encoded string is read one character at a time and the following steps are taken:

// If the character read is a letter, that letter is written onto the tape.
// If the character read is a digit d, the entire current tape is repeatedly written d - 1 more times in total.
// Given an integer k, return the kth letter (1-indexed) in the decoded string.



// Example 1:

// Input: s = "leet2code3", k = 10
// Output: "o"
// Explanation: The decoded string is "leetleetcodeleetleetcodeleetleetcode".
// The 10th letter in the string is "o".
// Example 2:

// Input: s = "ha22", k = 5
// Output: "h"
// Explanation: The decoded string is "hahahaha".
// The 5th letter is "h".
// Example 3:

// Input: s = "a2345678999999999999999", k = 1
// Output: "a"
// Explanation: The decoded string is "a" repeated 8301530446056247680 times.
// The 1st letter is "a".


// Constraints:

// 2 <= s.length <= 100
// s consists of lowercase English letters and digits 2 through 9.
// s starts with a letter.
// 1 <= k <= 109
// It is guaranteed that k is less than or equal to the length of the decoded string.
// The decoded string is guaranteed to have less than 263 letters.

function decodeAtIndex2(s: string, k: number): string {
  let decodeString = '';
  for (const char of s) {
    if (decodeString.length < k) {
      if (isLowerLetter(char)) {
        decodeString += char;
      } else {
        decodeString = decodeString.repeat(parseInt(char));
      }
    }
  }
  return decodeString[k - 1];
};

function decodeAtIndex(s: string, k: number): string {
  let curSize = 0;
  let i = 0;

  while (curSize < k) {
    if (!isNaN(Number(s[i]))) {
      curSize *= Number(s[i]);
    } else {
      curSize++;
    }
    i++;
  }
  for (let j = i - 1; j >= 0; j--) {
    if (!isNaN(Number(s[j]))) {
      curSize /= Number(s[j]);
      k %= curSize;
    } else {
      if (k === 0 || k === curSize) {
        return s[j];
      }
      curSize--;
    }
  }
  return '';
};

const isLowerLetter = (input: string): boolean => {
  return /^[a-z]+$/.test(input);
}

console.log(decodeAtIndex("jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt", 731963130));