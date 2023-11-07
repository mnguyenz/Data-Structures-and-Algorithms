// https://leetcode.com/problems/pascals-triangle-ii/description/?envType=daily-question&envId=2023-10-16

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]


// Constraints:

// 0 <= rowIndex <= 33


// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

function getRow(rowIndex: number): number[] {
  const rows: number[][] = [];
  for (let i = 0; i <= rowIndex; i++) {
    const row: number[] = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(rows[i - 1][j - 1] + rows[i - 1][j]);
      }
    }
    rows.push(row);
  }
  return rows[rowIndex];
};

function getRowOptimizeSpace(rowIndex: number): number[] {
  const row = [1];
  for (let i = 0; i < rowIndex; i++) {
    row.push(Math.floor(row[i] * (rowIndex - i) / (i + 1)))
  }
  return row;
};

console.log(getRow(3))