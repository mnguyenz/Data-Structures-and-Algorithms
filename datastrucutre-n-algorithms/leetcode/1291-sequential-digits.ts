// https://leetcode.com/problems/sequential-digits/submissions/?envType=daily-question&envId=2024-02-02

// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.



// Example 1:

// Input: low = 100, high = 300
// Output: [123,234]
// Example 2:

// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]


// Constraints:

// 10 <= low <= high <= 10^9

function sequentialDigits(low: number, high: number): number[] {
  let result: number[] = [];
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9 - i + 1; j++) {
      let num = 0;
      for (let k = 0; k < i; k++) {
        num = num * 10 + (j + k);
      }
      if (num >= low && num <= high) {
        result.push(num);
      }
    }
  }
  return result;
};

