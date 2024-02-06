// https://leetcode.com/problems/first-unique-character-in-a-string/description/?envType=daily-question&envId=2024-02-05

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.



// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1


// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

function firstUniqChar(s: string): number {
  let charMap = new Map<string, [boolean, number]>();
  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i])) {
      charMap.set(s[i], [false, -1]);
    } else {
      charMap.set(s[i], [true, i]);
    }
  }
  for (const [key, value] of charMap) {
    if (value[0]) {
      return value[1];
    }
  }
  return -1;
};

console.log(firstUniqChar('lle'));