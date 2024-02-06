// https://leetcode.com/problems/group-anagrams/description/?envType=daily-question&envId=2024-02-06

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

function groupAnagrams(strs: string[]): string[][] {
  let resultMap = new Map<string, string[]>();
  for (let s of strs) {
    let charFreq: number[] = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      charFreq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    let keyStr = charFreq.toString();
    if (!resultMap.has(keyStr)) {
      resultMap.set(keyStr, []);
    }
    resultMap.get(keyStr)!.push(s);
  }
  return Array.from(resultMap.values());
};