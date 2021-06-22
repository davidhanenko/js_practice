// ==================================
// Minimum Path Sum

// const minPathSum = function (grid) {
//   let row = grid.length;
//   let col = grid[0].length;

//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (i === 0 && j > 0) {
//         grid[i][j] += grid[i][j - 1];
//       }
//       if (i > 0 && j === 0) {
//         grid[i][j] += grid[i - 1][j];
//       }
//       if (i > 0 && j > 0) {
//         grid[i][j] = Math.min(
//           grid[i][j] + grid[i - 1][j],
//           grid[i][j] + grid[i][j - 1]
//         );
//       }
//     }
//   }
//   return grid[row - 1][col - 1];
// };

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
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// var findMaxConsecutiveOnes = function(nums) {
//     let j=0;
//     let max=0; 
//     for (let i=0;i<=nums.length; i++) {
//         if(nums[i] !== 1) {
//             max < i-j ? max = i-j: max;
//             j = i+1
//         }    
//     }
//     return max;
// };

// findMaxConsecutiveOnes([1,1,0,1,1,1]) // 3
// =================
// =================
// Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
// Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

// const twoSum = function(numbers, target) {
//    let r = numbers.length-1;
//    let l = 0;
  
//     while (l < r) {
        
//         let sum = numbers[l] + numbers[r]
    
//         if(sum === target) {
//             return [l+1, r+1];
            
//         } else { 
//             sum > target ? r-- : l++
       
//     }
//     }
    
// };

// twoSum([2,7,11,15],9) // [1,2]
// =================


// =============

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// var removeElement = function(nums, val) {
//     let i = 0;
//    while(i <= nums.length) {
//       if(nums[i] === val) { 
//           nums.splice(i,1)
//           i--
//       }
//        i++
//    }
//     return nums.length
// };
// =============
// =============