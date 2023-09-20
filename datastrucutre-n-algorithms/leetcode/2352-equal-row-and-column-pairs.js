// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
// Daily 23/06/13

// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

// Example 1:

// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]
// Example 2:

// Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
	let rows = [];
	let cols = [];
	for (let i = 0; i < grid.length; i++) {
		rows.push(grid[i])
		let singleCols = [];
		for (let j = 0; j < grid.length; j++) {
			singleCols.push(grid[j][i])
		}
		cols.push(singleCols)
	}
	let result = 0;
	rows.forEach((row) => {
		for (let i = 0; i < cols.length; i++) {
			if (compare(row, cols[i])) {
				result++;
			}
		}
	});
	return result;
};

const compare = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
  }
	return true
}

console.log(equalPairs([[2,2,2],[2,2,2],[2,2,2]]));
