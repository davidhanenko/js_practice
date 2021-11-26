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

// **************
//Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.
// **************

// function maxCounters(N, A) {
//     const arr = new Array(N).fill(0);
//     let max = 0;
//     let start = 0;
//     for (let i = 0; i < A.length; i++) {
//       let index = A[i] - 1;
//       if (A[i] > N) {
//         start = max;
//       } else {
//         arr[index] < start ? (arr[index] = start + 1) : (arr[index] += 1);
//         max = Math.max(max, arr[index]);
//       }
//     }
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] < start ? (arr[i] = start) : arr[i];
//     }
//     return arr;
//   }

// ===============================
// ===============================

// **************
// A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

// Array A contains only 0s and/or 1s:

// 0 represents a car traveling east,
// 1 represents a car traveling west.
// The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.
// **************

// function passingCars(A) {
//   let countCar = 0;
//   let sumArr = new Array(A.length);
//   let tempSum = 0;

//   for (let i = A.length - 1; i >= 0; i--) {
//     tempSum += A[i];
//     sumArr[i] = tempSum;
//     if (A[i] === 0) countCar += sumArr[i];
//   }
//   return countCar <= 1000000000 ? countCar : -1;
// }

// ===============================
// ===============================

// **************

// Write a function:

// function solution(A, B, K);

// that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:
// **************

// function countDiv(A, B, K) {
//     let start = Math.ceil(A/K);
//     let end = Math.floor(B/K);

//     return end -start + 1;
// }

// ===============================
// ===============================

// **************

// Write a function
// that, given an array A consisting of N integers, returns the number of distinct values in array A.

// **************

// function solution(A) {
//   return new Set(A).size;
// }
// ===============================
// ===============================

// **************
// For example, consider array A such that:
//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// Triplet (0, 2, 4) is triangular.
// Write a function:
// function solution(A);
// that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

// **************

// function triangular(A) {
//   if (A.length < 3) return 0;

//   A.sort((a, b) => b - a);
//   for (let i = 0; i < A.length - 2; i++) {
//     if (A[i] < A[i + 1] + A[i + 2]) return 1;
//   }
//   return 0;
// }

// ===============================
// ===============================

// **************
// Your goal is to find the maximal product of any triplet.
// **************

// function maxTripletOfArray(A) {
//   A.sort((a,b)=>a-b);
//   let p1 = A[A.length-1] * A[A.length-2] * A[A.length-3];
//   let p2 = A[0] * A[1] * A[A.length-1];
//   return Math.max(p1, p2);
// }

// ===============================
// ===============================

// **************
// Determine whether a given string of parentheses (multiple types) is properly nested.
// **************

// function brackets(S) {
// let stack = [];
//    for(let i=0; i<S.length; i++) {
//        if(S[i] == '(' || S[i] == '{' || S[i] == '[') {
//            stack.push(S[i]);
//         } else {
//             let test;
//             if(stack.length != 0) {
//            test = stack.pop();
//             } else return 0;
//            if(test === '(' && S[i]!==')') return 0;
//            if(test === '{' && S[i]!=='}') return 0;
//            if(test === '[' && S[i]!==']') return 0;
//         }
//    }
// return 1;
// }

// anothert solution (100%)
// function brackets(S) {
//   let stack = [];
//   let current = '';

//   for (let i = 0; i < S.length; i++) {
//     current = S[i];
//     if (current == '{' || current == '[' || current == '(') {
//       stack.push(current);
//     } else if (current == '}') {
//       if (stack.length == 0 || stack.pop() != '{') return 0;
//     } else if (current == ']') {
//       if (stack.length == 0 || stack.pop() != '[') return 0;
//     } else if (current == ')') {
//       if (stack.length == 0 || stack.pop() != '(') return 0;
//     }
//   }

//   return stack.length ? 0 : 1;
// }
// ===============================
// ===============================


// FISH 

// function solution(A, B) {
//   let surv = 0;
//   let stack = [];

//   for (let i = 0; i < A.length; i++) {
//     if (B[i] === 1) {
//       stack.push(A[i]);
//     } else {
//       let temp = stack.length === 0 ? -1 : stack.pop();

//       while (temp !== -1 && temp < A[i]) {
//         temp = stack.length === 0 ? -1 : stack.pop();
//       }
//       if (temp === -1) {
//         surv++;
//       } else {
//         stack.push(temp);
//       }
//     }
//   }
//   return surv + stack.length;
// }

// ===============================
// ===============================

// ===============================
// ===============================
