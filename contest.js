var findColumnWidth2 = function (grid) {
  let colsArr = [];

  for (let i = 0; i < grid.length; i++) {
    colsArr[i] = [];

    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i].length === 1) {
        colsArr[i] = grid[i];
      } else {
        colsArr[i][j] = grid[j][i];
      }
    }
  }

  console.log(colsArr);

  const m = colsArr.map(
    el => (el = el.map(inEl => inEl.toString().length))
  );
  console.log(m);

  return m.map(el => Math.max(...el));
};

// console.log(findColumnWidth2([[1], [22], [333]]));
// console.log(
//   findColumnWidth2([
//     [-15, 1, 3],
//     [15, 7, 12],
//     [5, 6, -2],
//   ])
// );

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
// var findColumnWidth = function (grid) {
//   // Create output array
//   let output = [];
//   // Find out what m is
//   let m = grid.length;
//   let n = grid[0].length;
//   // Traverse the grid
//   // Double for loop
//   let max = -Infinity;
//   for (let i = 0; i < n; i++) {
//     // Find out what n is
//     max = -Infinity;
//     for (let j = 0; j < m; j++) {
//       // Find out the length of internal elements
//       let current = String(grid[j][i]);
//       // Compare internal elements to find greatest
//       max = max > current.length ? max : current.length;
//     }
//     // Push greatest onto output array
//     output.push(max);
//   }
//   // Return output array
//   return output;
// };

// console.log(findColumnWidth([[1], [22], [333]]));
// console.log(
//   findColumnWidth([
//     [-15, 1, 3],
//     [15, 7, 12],
//     [5, 6, -2],
//   ])
// );

var findPrefixScore = function (nums) {
  // Create output array
  let output = [];
  // Create max variable
  let max = -Infinity;
  // Create convert array
  let convert = [];
  let totalConvert = 0;

  // Loop over nums
  for (let i = 0; i < nums.length; i++) {
    // Find out max
    max = Math.max(max, nums[i]);
    // Use current element and max to figure out next value of convert
    convert[i] = nums[i] + max;
    // Keep track of and build a conversion array and sum
    totalConvert += convert[i];
    output.push(totalConvert);
  }
  return output;
};

// console.log(findPrefixScore([2, 3, 7, 5, 10]));
// console.log(findPrefixScore([1, 1, 2, 4, 8, 16]));

var findMaxFish = function (grid) {
  let max = 0;
  const explore = (x, y) => {
    let res;
    let curr = grid[x][y];
    if (
      x >= 0 &&
      x < grid[0].length &&
      y >= 0 &&
      y < grid.length
    ) {
      let r = x + 1 < grid[0].length - 1;
      let b = y + 1 < grid.length - 1;

      res = Math.max(
        curr + (r ? grid[x + 1][y] : 0),
        curr + (b ? grid[x][y + 1] : 0)
      );
      r && (grid[x + 1][y] = 0);
      b && (grid[x][y + 1] = 0);
    }
    return res;
  };

  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] > 0) {
        max = Math.max(explore(i, j), max);
      }
    }
  }
  return max;
};

console.log(
  findMaxFish([
    [0, 2, 1, 0],
    [4, 0, 0, 3],
    [1, 0, 0, 4],
    [0, 3, 2, 0],
  ])
);
console.log(
  findMaxFish([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1],
  ])
);

//?///////////////////
// var findMaxFish = function (grid) {
//   let maximumAmountFish = 0;

//   const explore = (x, y) => {
//     let amountFish = 0;
//     if (
//       x > -1 &&
//       x < grid.length &&
//       y > -1 &&
//       y < grid[0].length &&
//       grid[x][y] > 0
//     ) {
//       amountFish += grid[x][y];
//       grid[x][y] = 0;
//       amountFish += explore(x - 1, y);
//       amountFish += explore(x + 1, y);
//       amountFish += explore(x, y + 1);
//       amountFish += explore(x, y - 1);
//     }
//     return amountFish;
//   };

//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[0].length; col++) {
//       if (grid[row][col] > 0) {
//         let currentAmountFish = explore(row, col);
//         maximumAmountFish = Math.max(
//           maximumAmountFish,
//           currentAmountFish
//         );
//       }
//     }
//   }

//   return maximumAmountFish;
// };

// console.log(
//   findMaxFish([
//     [0, 2, 1, 0],
//     [4, 0, 0, 3],
//     [1, 0, 0, 4],
//     [0, 3, 2, 0],
//   ])
// );
// console.log(
//   findMaxFish([
//     [1, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 1],
//   ])
// );
