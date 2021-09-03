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
// Return the indexes of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

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

// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// var minSubArrayLen = function (target, nums) {
//   let j = 0;
//   let minLen = nums.length;
//   let sum = 0;

//   if (nums.reduce((a, b) => a + b) < target) return 0;

//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     while (sum >= target) {
//       minLen > i - j + 1 ? (minLen = i - j + 1) : minLen;
//       sum -= nums[j++];
//     }
//   }

//   return minLen;
// };

// =============
// =============

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// var maxSubArray = function (nums) {
//   let maxSum = nums[0];
//   let curSum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     curSum = Math.max(curSum + nums[i], nums[i]);
//     maxSum = Math.max(maxSum, curSum);
//   }
//   return maxSum;
// };

// =============// =============

// =============// =============

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.


// var pivotIndex = function (nums) {
//   let left = 0;
//   let right = nums.reduce((a, b) => a + b, 0) - nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     if (left === right) {
//       return i;
//     } else {
//       left += nums[i];
//       right -= nums[i + 1];
//     }
//   }
//   return -1;
// };

// =============// =============
// =============// =============

// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

// var dominantIndex = function (nums) {
//   const max = Math.max(...nums);
//   const index = nums.indexOf(max);
//   nums.sort((a, b) => a - b);
//   for (i = nums.length - 2; i > 0; i--) {
//     if (max / 2 < nums[i]) {
//       return -1;
//     }
//   }
//   return index;
// };



// =============// =============
// =============// =============
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.


// const plusOne = function (digits) {
//   if (digits.length < 16) {
//     return (+digits.join('') + 1).toString().split('');
//   } else {
//     return (BigInt(digits.join('')) + 1n).toString().split('');
//   }
// };


// =============// =============
// =============// =============