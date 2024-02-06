// https://leetcode.com/problems/minimum-window-substring/description/?envType=daily-question&envId=2024-02-04

// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.



// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.


// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.


// Follow up: Could you find an algorithm that runs in O(m + n) time?

function minWindow(s: string, t: string): string {
  if (t.length === 0 || t.length > s.length) {
    return '';
  }
  let countT = new Map<string, number>();
  for (let i = 0; i < t.length; i++) {
    countT.set(t[i], (countT.get(t[i]) || 0) + 1);
  }
  let window = new Map<string, number>();
  let have = 0, need = countT.size;
  let res = [-1, -1];
  let maxLen = Number.MAX_VALUE, l = 0;
  for (let r = 0; r < s.length; r++) {
    const c = s[r];
    window.set(c, (window.get(c) || 0) + 1);
    if (countT.has(c) && countT.get(c) === window.get(c)) {
      have += 1;
    }
    while(have === need){
      if(r - l + 1 < maxLen){
        maxLen = r - l + 1;
        res[0] = l;
        res[1] = r;
      }
      window.set(s[l], (window.get(s[l]) || 0) - 1);
      if ( countT.has(s[l]) && (window.get(s[l]) || 0) < (countT.get(s[l]) || 0) ) {
        have -= 1;
      }
      l += 1;
    }
  }
  return maxLen == Number.MAX_SAFE_INTEGER ? '' : s.substring(res[0], res[1]+1);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
