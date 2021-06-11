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


// ==================================
// Two Sum

// function twoSum(nums, target) {
//   let res = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i+1; j < nums.length; j++) {
//       res = nums[i] + nums[j];
//       if (res == target) {
//         return
//       }
//     }
//   }

// };

// console.log(twoSum([2,7,11,15],
// 9))

// =======================
// if digit & sum of two inrow digits les than last letter of alphabet(26 => "z") Convert it to letter on this index
// function convert(num) {
//   const alphabet = [...Array(26)].map((_, y) => String.fromCharCode(y + 97));

//   const numArr = num.toString().split('');
//   const resArr = [numArr];


//   for (let i = 1; i < numArr.length; i++) {
//     if (parseInt(numArr[i - 1] + numArr[i]) <= alphabet.length) {
//       resArr.push(
//         [
//           numArr.slice(0, i - 1),
//           numArr[i - 1] + numArr[i],
//           numArr.slice(i + 1),
//         ].flat()
//       );
//     }
//   }

//   for (let i = 0; i < resArr.length; i++) {
//     resArr[i] = resArr[i].map(el => (el = alphabet[parseInt(el) - 1])).join('');
//   }

//   return resArr;
// }

// console.log(convert(11258));

// =================