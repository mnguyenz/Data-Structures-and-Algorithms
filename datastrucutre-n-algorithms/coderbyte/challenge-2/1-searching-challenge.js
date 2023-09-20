function SearchingChallenge(strArr) { 

  // code goes here 
  const matrix = [];
  for (let i = 0; i < strArr.length; i++) {
    matrix.push(strArr[i].split(""));
  }

  let numberOfHole = 0;

  const dfs = (i, j) => {
    if (i >=0 && 
      j >= 0 && 
      i < matrix.length && 
      j < matrix[i].length && 
      matrix[i][j] === '0') {
        matrix[i][j] = '1';
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '0') {
        numberOfHole += 1;
        dfs(i, j)
      }
    }
  }
  return numberOfHole; 
}
   
// Test
console.log(SearchingChallenge(["01111", "01101", "00011", "11110"]));