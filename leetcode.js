// ==================================
// Minimum Path Sum

const minPathSum = function (grid) {
  let row = grid.length;
  let col = grid[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j > 0) {
        grid[i][j] += grid[i][j - 1];
      }
      if (i > 0 && j === 0) {
        grid[i][j] += grid[i - 1][j];
      }
      if (i > 0 && j > 0) {
        grid[i][j] = Math.min(
          grid[i][j] + grid[i - 1][j],
          grid[i][j] + grid[i][j - 1]
        );
      }
    }
  }
  return grid[row - 1][col - 1];
};

// console.log(
//   minPathSum([
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1],
//   ])
// );

// ==================================
