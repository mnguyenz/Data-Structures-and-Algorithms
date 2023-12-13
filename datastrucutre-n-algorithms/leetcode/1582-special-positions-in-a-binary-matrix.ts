// https://leetcode.com/problems/special-positions-in-a-binary-matrix/description/?envType=daily-question&envId=2023-12-13

// Given an m x n binary matrix mat, return the number of special positions in mat.

// A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).



// Example 1:


// Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
// Output: 1
// Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.
// Example 2:


// Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3
// Explanation: (0, 0), (1, 1) and (2, 2) are special positions.


// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// mat[i][j] is either 0 or 1.

function numSpecial(mat: number[][]): number {
  let result: { i: number; j: number; }[] = [];
  let oneI: number[] = [];
  let oneJ: number[] = [];
  for (let i = 0; i < mat[0].length; i++) {
    for (let j = 0; j < mat.length; j++) {
      if (mat[j][i] === 1) {
        if (!oneI.includes(i) && !oneJ.includes(j)) {
          result.push({i: i, j: j});
        } else {
          result = result.filter((item) => item.i !== i && item.j !== j);
        }
        if (!oneI.includes(i)) {

          oneI.push(i);
        }
        if (!oneJ.includes(j)) {
          oneJ.push(j);
        }
      }
    }
  }
  return result.length;
};

console.log(numSpecial([[0,0,0,1],[1,0,0,0],[0,1,1,0],[0,0,0,0]]))