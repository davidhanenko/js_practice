// **************
// Min deletions A & B
// **************

// function ab(str) {
//   let count = 0;

//   let a = false;
//   let b = false;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'A') {
//       b === true ? count++ : (a = true);
//     }
//     if (str[i] === 'B') {
//       a === false ? count++ : (b = true);
//     }
//   }
//   if (b === false) return -1;
//   if (a === false) return -1;

//   return count;
// }

// console.log(ab('AABBB'));
// console.log(ab('BAABAB'));

// ===============================
// ===============================

// **************
// Max binary gap
// **************

// function maxBinaryGap(n) {
//   const binaryN = n.toString(2);
//   let maxGap = 0;
//   let j = 0;

//   for (let i = 0; i < binaryN.length; i++) {
//     if (binaryN[i] === '1') {
//       let curGap = i - j - 1;
//       maxGap = Math.max(maxGap, curGap);
//       j = i;
//     }
//   }
//   return maxGap;
// }

// console.log(maxBinaryGap(1041));
// console.log(maxBinaryGap(20));
// console.log(maxBinaryGap(32));

// ===============================
// ===============================

// **************
// cyclic rotation of array
// **************
// function cyclicRotation(arr, k) {
//   let result = new Array(arr.length);

//   for (let i = 0; i < result.length; i++) {
//     result[(i + k) % arr.length] = arr[i];
//   }
//   return result;
// }

// console.log(cyclicRotation([3, 8, 9, 7, 6], 3));
// ===============================
// ===============================

// **************
// find one odd element of array, one without couple

// it's not the best solution, shown 88%
// **************
// ===============================
// ===============================
// function oddElement(arr) {
//   let obj = {};

//   for (let el of arr) {
//     obj[el] ? obj[el]++ : (obj[el] = 1);
//   }
//   for (const [key, value] of Object.entries(obj)) {
//     if (value % 2 !== 0) return +key;
//   }
// }

// console.log(oddElement([9, 3, 9, 3, 9, 7, 9]));
// ===============================
// ===============================

// **************
// Permanent missing element
// **************
// function solution(A) {
//   const newLength = A.length + 1;
//   return (newLength * (newLength + 1)) / 2 - A.reduce((a, b) => a + b);
// }

// ===============================
// ===============================
// **************
// TapeEquilibrium
// **************

// function tapeEquilibrium(A) {
//   let left = A[0];
//   let right = A.reduce((a, b) => a + b) - left;
//   let minDiff = Math.abs(left - right);

//   for (let i = 1; i < A.length - 1; i++) {
//     left += A[i];
//     right -= A[i];
//     minDiff = Math.min(minDiff, Math.abs(left - right));
//   }
//   return minDiff;
// }
// ===============================
// ===============================

// **************
//A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.
// **************

// function solution(X, A) {
//   let jumps = X;
//   let positionsArr = new Array(X + 1).fill(false);

//   for (let i = 0; i < A.length; i++) {
//     if (!positionsArr[A[i]]) {
//       positionsArr[A[i]] = true;
//       jumps--;
//     }
//     if (jumps === 0) return i;
//   }
//   return -1;
// }

// ===============================
// ===============================

// **************
// A permutation is a sequence containing each element from 1 to N once, and only once.
// Check if array A is a permutation
// **************

// function permCheck(A) {
//   if (A.length === 1 && A[0] !== 1) return 0;
//   A.sort((a, b) => a - b);
//   if (A[0] !== 1) return 0;
//   for (let i = 1; i < A.length; i++) {
//     if (A[i] - A[i - 1] !== 1) return 0;
//   }
//   return 1;
// }

// ===============================
// ===============================
