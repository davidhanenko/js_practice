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
//         return [i,j];
//       }
//     }
//   }

// };

// console.log(twoSum([2,7,11,15],
// 9))

// =======================
// if digit & sum of two in row digits les than last letter of alphabet(26 => "z") Convert it to letter on this index

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
//     for (let i=0; i<=nums.length; i++) {
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

// let arrA = a.split('').reverse();
//     let arrB = b.split('').reverse();
//     let arr =[];
//     let c = 0;

//     l = arrA.length > arrB.length ? arrA.length : arrB.length;
//       for (let i = 0; i < l; i++) {

//           arrA[i] = !arrA[i] ? 0 : arrA[i];
//           arrB[i] = !arrB[i] ? 0 : arrB[i];

//           let sum = +arrA[i] + +arrB[i] + c

//         if (sum === 0) {
//           arr.push(0);
//         } else if (sum === 1) {
//           arr.push(1);
//           if (c !== 0) {
//             c = 0;
//           }
//         } else if (sum === 2) {
//           arr.push(0);
//           c = 1;
//         } else {
//           arr.push(1);
//           c = 1;
//         }
//     }
//     if(c === 1) arr.push(1);
//     return arr.reverse().join('');

// ======
// BigInt solution
// return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
// =====
// };

// =============// =============
// =============// =============

// const twoSum = function (nums, target) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];

//     if (map.has(diff)) {
//       return [map.get(diff), i];
//     }
//     map.set(nums[i], i);
//   }
// };

// console.log(twoSum([2,7,11,15], 9))

// =============// =============
// =============// =============

// Single Number
const singleNumber = function (nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;

  // let obj = {};
  // for (let el of nums) {
  //  obj[el] ? obj[el]++ : (obj[el] = 1);
  // }
  // for (const [key, value] of Object.entries(obj)) {
  //  if (value % 2 !== 0) return +key;
  // }
};

// console.log(singleNumber([1,1,2,2,4]));

// =============// =============
// =============// =============

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
const containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size === nums.length ? false : true;

  // const obj = {};
  // for (let i = 0; i < nums.length; i++) {
  // obj[nums[i]] ? obj[nums[i]]++ : (obj[nums[i]] = 1);
  // if (obj[nums[i]] > 1) return true;
  // }
  // return false;
};

// =============// =============
// =============// =============]

// Given an array, rotate the array to the right by k steps, where k is non-negative.

const rotate = function (nums, k) {
  const arr = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    arr[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }
  // k = k % nums.length;
  // if(k === 0) return nums;
  // const arr = nums.slice(-k);
  // nums.unshift(...arr);
  // nums.splice(-k, k);
};

// =============// =============
// =============// =============

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

// const maxProfit = function (prices) {
//   let res = 0;
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i - 1] < prices[i]) {
//       res += prices[i] - prices[i - 1];
//     }
//   }
//   return res;
// };

// =============// =============
// =============// =============

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// var removeDuplicates = function (nums) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }
//   return k;
// };

// =============// =============
// =============// =============
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

var intersect = function (nums1, nums2) {
  let obj = {};

  let arr = [];

  for (let el of nums1) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  }

  for (let k of nums2) {
    if (obj[k]) {
      arr.push(k);
      obj[k]--;
    }
  }
  return arr;

  //     let obj1 = {};
  //     let obj2 = {};
  //     let str = '';

  //     for(let el of nums1) {
  //         obj1[el] ? obj1[el]++ : obj1[el] = 1;
  //     }
  //     for(let el of nums2) {
  //         obj2[el] ? obj2[el]++ : obj2[el] = 1;
  //     }

  //    for(let k in obj1) {
  //       if(obj2[k]) {
  //           obj1[k] <= obj2[k] ? (str += (k+" ").repeat(obj1[k])) : (str += (k+" ").repeat(obj2[k]))
  //       }
  //    }
  //     return str.split(' ').slice(0,-1);
};
// =============// =============
// =============// =============

// =============// =============
// =============// =============
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

const plusOne = function (digits) {
  return digits.length < 16
    ? (+digits.join('') + 1).toString().split('')
    : (BigInt(digits.join('')) + 1n).toString().split('');
};

// =============// =============
// =============// =============
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeroes = function (nums) {
  // let j = 0;
  //  for(let i=0; i<nums.length; i++ ) {
  //      if(nums[i] !==0) {
  //         let temp = nums[j];
  //         nums[j++] = nums[i];
  //          nums[i] = temp;
  //      }
  //  }

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    }
  }
  while (j < nums.length) nums[j++] = 0;

  return nums;
};
// =============// =============
// =============// =============
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
const isValidSudoku = function (board) {
  const obj = {};
  let cell;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      cell = board[i][j];
      if (cell !== '.') {
        if (
          obj['i' + i + cell] ||
          obj['j' + j + cell] ||
          obj[
            'b' +
              Math.floor(i / 3) +
              Math.floor(j / 3) +
              cell
          ]
        )
          return false;
        obj['i' + i + cell] = 1;
        obj['j' + j + cell] = 1;
        obj[
          'b' + Math.floor(i / 3) + Math.floor(j / 3) + cell
        ] = 1;
      }
      console.log(obj);
    }
  }
  return true;
};

// =============// =============
// =============// =============
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
const reverse = function (x) {
  x =
    x > 0
      ? +String(x).split('').reverse().join('')
      : -String(Math.abs(x)).split('').reverse().join('');

  return x > 2 ** 31 - 1 || x < (-2) ** 31 ? 0 : x;
};

// =============// =============
// =============// =============
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

const firstUniqChar = function (s) {
  let obj = {};
  s.split('').forEach(el => {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });
  for (let char of s) {
    if (obj[char] === 1) return s.indexOf(char);
  }
  return -1;
};

// =============// =============
// =============// =============

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

const isPalindrome = function (s) {
  if (s === '' || s === ' ') return true;

  let arr = s.match(/[0-9A-Za-z]/g);
  if (!arr) return true;

  return (
    arr.join('').toLowerCase() ===
    arr.reverse().join('').toLowerCase()
  );
};

// =============// =============
// =============// =============

// Implement strStr().
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const strStr = function (haystack, needle) {
  // let r = new RegExp(needle);
  //   return haystack.search(r);

  // return haystack.indexOf(needle);

  for (let i = 0; i < haystack.length; i++) {
    let t = haystack.slice(i, needle.length + i);
    if (t == needle) return i;
  }
  return -1;
};

// =============// =============
// =============// =============

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// var maxProfit = function (prices) {
//   let max = 0;
//   let j = 0;

//   for (let i = 1; i < prices.length; i++) {
//     let temp = prices[i] - prices[j];

//     if (temp > 0) {
//       max = Math.max(temp, max);
//     } else {
//       j = i;
//     }
//   }

//   return max;
// };

// =============// =============
// =============// =============
// longest prefix
// var longestCommonPrefix = function (strs) {
//   let l = '';

//   for (let j = 0; j < strs[0].length; j++) {
//     l += strs[0][j];
//     for (let i = 0; i < strs.length; i++) {
//       let temp = l[j];

//       if (strs[i][j] != temp) {
//         return l.slice(0, -1);
//       }
//     }
//   }
//   return l;
// };

// =============// =============
// =============// =============
// const maxSubArray = function (nums) {
//   let maxSum = nums[0];
//   let temp = 0;

//   for (let i = 0; i < nums.length; i++) {
//     temp = Math.max(temp + nums[i], nums[i]);

//     maxSum = Math.max(maxSum, temp);
//   }
//   return maxSum;
// };
// =============// =============
// =============// =============

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

const rob = function (nums) {
  let sum = [];
  if (nums.length === 0) return 0;
  if (nums.length < 3) return Math.max(...nums);

  sum = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    sum[i] = Math.max(sum[i - 2] + nums[i], sum[i - 1]);
  }

  return sum[nums.length - 1];
};

// =============// =============
// =============// =============

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function (n) {
  //     let obj = {};
  //       if(n in obj) {
  //        return obj[n];
  //       }
  //       let res = n < 2 ? 1 : climbStairs(n-1) + climbStairs(n-2);
  //       obj[n] = res;

  let res = 0;
  let first = 0;
  let second = 1;
  let i = 0;

  while (i < n) {
    res = first + second;
    first = second;
    second = res;
    i++;
  }

  return res;
};

// =============// =============
// =============// =============

// const fizzBuzz = function(n) {
//     const resArr = [];

//     for(let i=1; i<=n; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         resArr.push('FizzBuzz');
//     } else if (i % 3 === 0) {
//         resArr.push('Fizz')
//     } else if (i % 5 === 0) {
//         resArr.push('Buzz')
//     } else {
//         resArr.push(String(i));
//     }
//     }
//         return resArr;
// };

// =============// =============
// =============// =============

const countPrimes = function (n) {
  if (n < 3) return 0;

  const arr = new Array(n).fill(true);

  for (let i = 2; i * i < n; i++) {
    if (arr[i]) {
      for (let j = i * i; j < n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.filter(el => el === true).length - 2;
};

// =============// =============
// =============// =============
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

const isPowerOfThree = function (n) {
  // if(n===1) return true;
  // if(n<3) return false;
  // return isPowerOfThree(n/3);

  while (n >= 3) {
    n /= 3;
  }
  return n === 1;
};

// =============// =============
// =============// =============
var romanToInt = function (s) {
  let res = 0;

  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i + 1]] && obj[s[i]] < obj[s[i + 1]]) {
      res -= obj[s[i]];
    } else {
      res += obj[s[i]];
    }
  }
  return res;
};
// =============// =============
// =============// =============

// var merge = function (nums1, m, nums2, n) {
//   //     nums1.splice(m, n, ...nums2)
//   //     return nums1.sort((a,b) => a-b);

//   let i = m - 1;
//   let j = n - 1;
//   let x = m + n - 1;

//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       nums1[x--] = nums1[i--];
//     } else {
//       nums1[x--] = nums2[j--];
//     }
//   }
//   while (j >= 0) {
//     nums1[x--] = nums2[j--];
//   }

//   return nums1;
// };

// =============// =============
// =============// =============

var maximumCostSubstring = function (s, chars, vals) {
  let charValueMap = [];
  // Build DefaultA Array
  for (let i = 0; i < 26; i++) charValueMap[i] = i + 1;
  // Replace Default Values
  let current;
  let toChange;
  for (let j = 0; j < chars.length; j++) {
    current = chars[j];
    toChange = current.charCodeAt(0) - 97;
    charValueMap[toChange] = vals[j];
  }
  // console.log(charValueMap);

  // Process s to find Max Substring
  return findMaxSubstring(s, charValueMap);
};

const findMaxSubstring = (str, map) => {
  let maxCost = 0;
  let currentCost = 0;

  for (let i = 0; i < str.length; i++) {
    currentValue = map[str[i].charCodeAt(0) - 97];
    currentCost = Math.max(
      currentCost + currentValue,
      currentValue
    );
    maxCost = Math.max(maxCost, currentCost);
  }
  return maxCost;
};

console.log(maximumCostSubstring('adaa', 'd', [-1000]));
console.log(
  maximumCostSubstring('abc', 'abc', [-1, -1, -1])
);

// =============// =============
// =============// =============

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};



// =============// =============
// =============// =============

var reverseList = function (head) {
  let node = head;
  let prev = null;
  let temp;

  while (node) {
    temp = node.next;
    node.next = prev;
    prev = node;
    node = temp;
  }

  return prev;
};

// =============// =============
// =============// =============

var isPalindrome = function (head) {
  let arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }
  return true;
};

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============

// =============// =============
// =============// =============
