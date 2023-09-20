function MatrixChallenge(strArr) { 
  const board = [];
  for (let i = 0; i < strArr.length; i++) {
    board.push(strArr[i].slice(1, -1).split(","));
  }

  const validRow = (board, value, row) => {
    var count = 0;
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === value) {
        count++
      }
    }
    if (count != 1) {
      return false;
    }
    return true;
  }

  const validColumn = (board, value, column) => {
    var count = 0;
    for (let i = 0; i < 9; i++) {
      if (board[i][column] === value) {
        count++
      }
    }
    if (count != 1) {
      return false;
    }
    return true;
  }

  const validBox = (board, value, startRow, startColumn) => {
    var count = 0;
    for(let row = 0; row < 3; row++) {
      for(let col = 0; col < 3; col++) {
        if (board[row + startRow][col + startColumn] === value) {
          count++
        }
      }
    }
    if (count != 1) {
      return false;
    }
    return true;
  }

  const isPointValid = (board, row, column) => {
    if (board[row][column] === 'x') {
      return true;
    }
    else {
      return validRow(board, board[row][column], row) && 
        validColumn(board, board[row][column], column) && 
        validBox(board, board[row][column], row - row % 3, column - column % 3);
    }
  }

  const checkBoxNumber = (row, column) => {
    const rowIndex = Math.floor(row / 3);
    const ColumnIndex = Math.floor(column / 3);
    return rowIndex * 3 + ColumnIndex + 1;
  }

  let invalidBox = [];
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      if (!isPointValid(board, i, j)) {
        if (!invalidBox.includes(checkBoxNumber(i, j))) {
          invalidBox.push(checkBoxNumber(i, j));
        }
      }
    }
  }
  if (invalidBox.length > 0) {
    return invalidBox.join(',');
  } else {
    return 'legal';
  }
}
   
// keep this function call here 
console.log(MatrixChallenge(["(1,2,3,4,5,6,7,8,1)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(1,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)"]));