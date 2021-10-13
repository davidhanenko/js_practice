// --------------------------------
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false
//   }

//   let an1 = {}
//   let an2 = {}

//   for (char of str1) {
//     an1[char] ? an1[char]++ : (an1[char] = 1)
//   }
//   for (char of str2) {
//     an2[char] ? an2[char]++ : (an2[char] = 1)
//   }
//   console.log(an1)
//   console.log(an2)

//   for (let key in an1) {
//     if (!(key in an2)) {
//       return false
//     }
//     if (an1[key] !== an2[key]) {
//       return false
//     }
//   }

//  return true
// }

// console.log( isAnagram("car", "arc"))

// --------------------------------
//second solution for ANAGRAM
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false
//   }

//   let obj = {}

//   for (char of str1) {
//     obj[char] ? obj[char]++ : (obj[char] = 1)
//   }
// console.log(obj)

//   for (char of str2) {
//     if (!obj[char]) {
//       return false
//     }
//     obj[char]--
//   }
// console.log(obj)
//   return true
// }

// console.log(isAnagram("car", "arc"))

// --------------------------------
//multipointer
// let array = [1, 1, 2, 3, 3, 4, 4, 4, 5, 6]

// function countUnique(arr) {
//   if (arr.length === 0) {
//     return 0
//   }
//   let i = 0
//   for (let k = 1; k < arr.length; k++) {
//     if (arr[i] !== arr[k]) {
//       i++
//       arr[i] = arr[k]
//     }
//   }
//   return i + 1
// }
// console.log(countUnique(array))

// -------------------------
// middle element of array
// var gimme = function (inputArray) {
//   return inputArray.indexOf([...inputArray].sort((a, b) => a - b)[1])
// }
// console.log(gimme([8, 9, 14]))

// --------------------------
//  MaxSubArr - SLIDING WINDOW
// function maxSubArr(arr, num) {
//   let curSum = 0
//   let maxSum = 0
//   if (arr.length < num) return null

//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i]
//   }
//   curSum = maxSum
//   for (let i = num; i < arr.length; i++) {
//     curSum = curSum - arr[i - num] + arr[i]
//     maxSum = Math.max(curSum, maxSum)
//   }
//   return maxSum
// }

// console.log(maxSubArr([2, 20, 4, 5, 6, 70, 4, 2, 4, 6, 8, 9, 6, 3], 3))

// ------------------------
//same frequency
// function sameFrequensy(num1, num2) {
//   num1 = num1.toString()
//   num2 = num2.toString()
//   if (num1.length !== num2.length) {
//     return false
//   }

//   let obj1 = {}
//   let obj2 = {}

//   for (let num of num1) {
//     obj1[num] ? obj1[num]++ : (obj1[num] = 1)
//   }

//   for (let num of num2) {
//     obj2[num] ? obj2[num]++ : (obj2[num] = 1)
//   }

//   for (let key in obj1) {
//     if (!(key in obj2)) {
//       return false
//     }
//     if (obj1[key] !== obj2[key]) {
//       return false
//     }
//   }
//   return true
// }
// console.log(sameFrequensy(182, 281))

// ----------------------------

// ARE THERE DUPLICATES
// function areDuplicates(...arr) {
//   let obj = {}

//   for (let el of arr) {
//     obj[el] ? obj[el]++ : (obj[el] = 1)
//   }
//   for (let key in obj) {
//     if (obj[key] > 1) {
//       console.log(obj)

//       return true
//     }
//   }
//   console.log(obj)
//   return false
// }

// console.log(areDuplicates('a', 'b', 'c', 'b'))

// -------------------------
// ARE THERE DUPLICATES -- "SET"
// function areDuplicates(...arr) {
//   return new Set(arr).size !== arr.length
// }
// console.log(areDuplicates('a', 'b', 'c', 'b'))

//----------------------------
// AVERAGE OF PAIR
// function averagePair(arr, average) {
//   if (arr.length === 0) {
//     return false
//   }

//   let min = 0
//   let max = arr.length - 1

//   while (min < max) {
//     if ((arr[min] + arr[max]) / 2 === average) {
//       return true
//     } else if ((arr[min] + arr[max]) / 2 < average) {
//       min++
//     } else max--
//   }
//   return false
// }

// console.log(averagePair([1, 2, 3], 2.5))
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))

//----------------------------
// // isSubsequence
// function isSubsequence(str1, str2) {

// }

// ------------------------
// POWER (recursion)
// function power(base, exp) {
//   if(exp === 0) return 1
//   return base * power(base, exp-1)
// }

// console.log(power(2,4))

// -----------------------
// FACTORIAL
// function factorial(num) {
//   if (num <= 0) return (num = 1)
//   return num * factorial(num - 1)
// }

// console.log(factorial(0))

// -------------------
//PRODUCT OF ARRAY
// function productOfArray(arr) {
//   let prod = 1

//   function helper(helpInput) {
//     if(helpInput.length === 0) return

//     prod *= helpInput[0]

//     helper(helpInput.slice(1))
//   }
// helper(arr)

// return prod
// }
// console.log(productOfArray([1,2,3]))
// =======================
// Second solution
// function productOfArray(arr) {
//   if (arr.length === 0) {
//     return 1
//   }
//   return arr[0] * productOfArray(arr.slice(1))
// }
// ========================

// -----------------------
// RECURSIVE RANGE
// function recursiveRange(num) {
//   if(num === 0) return 0
//   return num + recursiveRange(num - 1)
// }
//  console.log(recursiveRange(10))

// ----------------------------
// FIBONACCI
// function fib(n) {
//   if (n <= 2) return 1
//   return fib(n - 1) + fib(n - 2)
// }
// console.log(fib(4))

// function fib(n) {
//   let a = 1
//  let b = 0
// let res

//   while(n > 0) {

// res = a
// a = a + b

// b = res

// n--
//   }
//   return b
// }
// console.log(fib(5))

// function results(gymnasts, judges) {
//   let arr = gymnasts.map((g) => {
//     let resultArray = judges.reduce((total, j) => {
//       let score = Math.ceil(Math.random() * Math.floor(6))
//       return [...total, score]
//     }, [])
//     let averageScore = resultArray
//       .sort((a, b) => a - b)
//       .splice(1, resultArray.length - 2)
//       .reduce((total, s) => total + s, 0)
//     return { gymnast: g, averageScore }
//   })
//   let sortResultArray = arr.sort((a, b) => b.averageScore - a.averageScore)
//   let uniqueScore = arr.reduce(
//     (unique, s) =>
//       unique.some((u) => s.averageScore === u.averageScore)
//         ? unique
//         : [...unique, s],
//     []
//   )
//   let x = uniqueScore[2].averageScore
//   let chempions = sortResultArray.reduce(
//     (total, g) => (g.averageScore >= x ? [...total, g] : total),
//     []
//   )
//   let chempionsPlace = chempions.reduce(
//     (total, g) =>
//       g.averageScore === uniqueScore[0].averageScore
//         ? [...total, { ...g, place: 1 }]
//         : g.averageScore > x
//         ? [...total, { ...g, place: 2 }]
//         : [...total, { ...g, place: 3 }],
//     []
//   )

//   return chempionsPlace
// }

// console.log(
//   results(
//     ['Катя', 'Юля', 'Свєта', 'Женя', 'Оля', 'Галя', 'Ксюша', 'Аліса'],
//     ['Суддя Дред', 'Феміда', 'Капітан', 'Кролик']
//   )
// )

// athletes:
// let athletes = [
//   'Joahn Smith',
//   'Katy Ivanova',
//   'Mary King',
//   'Ann Fox',
//   'Sandra Trump',
//   'Amanda Miller',
// ]

// // judges:
// let judges = ['judge1', 'judge2', 'judge3', 'judge4', 'judge5']

// let athletesRes = []
// let aveScore = 0
// let arr = []

// //  create class with name of athetes and their score
// class Prises {
//   constructor(name, score) {
//     this.name = name
//     this.score = score
//   }
// }

// //  generate athletes results
// function athletesResults() {
//   for (let i = 0; i < judges.length; i++) {
//     let personalResult = Math.random() * 6

//     if (personalResult <= 6) {
//       let judgeResult = Math.random() * (6 - personalResult)
//       let totalResult = parseFloat((personalResult + judgeResult).toFixed(1))

//       athletesRes.push(totalResult)
//     }
//   }
// }

// // average score minus max and min result
// function ave() {
//   let averageScore = athletesRes.slice()
//   let max = Math.max(...averageScore)
//   let min = Math.min(...averageScore)

//   averageScore.splice(averageScore.indexOf(max), 1)
//   averageScore.splice(averageScore.indexOf(min), 1)

//   aveScore =
//     averageScore.reduce((prev, cur) => prev + cur, 0) / averageScore.length
// }

// function prisePlaces(p) {
//   let sortedArr = p.sort((a, b) => a.score - b.score)
//   sortedArr.reverse()
//   console.log(sortedArr)

//   let setResults = new Set()
//   sortedArr.forEach((el) => {
//     setResults.add(el.score)
//   })
//   console.log(setResults)

//    for(let g of sortedArr) {

//     if (g.score === [...setResults][0]) {
//       console.log(
//         `${g.name} has finished competition on 1st place with result: ${g.score}`
//       )
//     }
//     if (g.score === [...setResults][1]) {
//       console.log(
//         `${g.name} has finished competition on 2nd place with result: ${g.score}`
//       )
//     }

//     if (g.score === [...setResults][2]) {
//       console.log(
//         `${g.name} has finished competition on 3rd place with result: ${g.score}`
//       )
//     }
//   }
// }

// function showResults() {
//   //show amount of athletes
//   console.log(
//     `In this competition will take part ${athletes.length} athletes, they are: ${athletes}`
//   )

//   //names of athlete with results
//   athletes.forEach((el) => {
//     athletesRes = []
//     averageScore = []
//     athletesResults()
//     ave()
//     arr.push(new Prises(el, +aveScore.toFixed(1)))

//     console.log(
//       `${el} finish with follow results: ${athletesRes}, and average score: ${aveScore.toFixed(
//         1
//       )}`
//     )
//   })
//   //name 3 first places

//   prisePlaces(arr)
// }

// showResults()

// =======================
// function minSubarrayLen(arr, num) {
//   if ((arr.reduce((a,b) => a+b)) < num) return null

//   let i = 0
//   let sum = 0
//   let subArr = [arr[i]]

// while (sum < num) {
//   sum = (subArr.reduce((a, b) => a + b))
//   subArr.push(arr[i])
//   i++
// }
// console.log(sum)
// return subArr
// let j = subArr.length
// let minLen = subArr.length

//   if(sum <= num && j<= arr.length) {
//     subArr.splice(0,1)
//   }

// }

// console.log( minSubarrayLen([2,3,1,2,4,3], 7))

// //recursive reverse
// function reverse(str) {
//  if(str.length <= 1) return str
//  return str[str.length-1] + reverse(str.slice(0, -1))

// }

// console.log(reverse('awesome'))

// =============
// function isPalindrome(str) {
//   if(str.length <= 1) return true
//   if(str[0] === str[-1]) return true

//   if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
//   return false
// }

// console.log(isPalindrome('bob')) //true
// console.log(isPalindrome('boba')) //false
// console.log(isPalindrome('bb')) // true
// console.log(isPalindrome('')) // true

// ================

// SOME RECURSIVE
// let isOdd = (val) => val % 2 !== 0

// function someRecursive(arr, cb) {
// if(arr.length === 0) return false
// if(cb(arr[0])) return true
// return someRecursive(arr.slice(1), cb)
// }

// console.log(someRecursive([2,2,6,4], isOdd)) //false
// console.log(someRecursive([1, 2, 3, 4], isOdd)) //true

// ===============
// FLATTEN
// function flatten(arr) {
//   let newArr = []

//   for (let i=0; i<arr.length; i++) {
//     if(Array.isArray(arr[i])) {
//      newArr = newArr.concat(flatten(arr[i]))
//     }
//     else {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// console.log(flatten([1, 2, 3, [4, 5] ]) )
// console.log(flatten([1, [2, [3, 4], [[5]]]]))

// ===============
// minSubArrayLen
// function minSubArrayLen(arr, num) {
//   if (arr.reduce((a, b) => a + b) < num) return 0

//   let start = 0
//   let end = 0
//   let sum = 0
//   let minLen = arr.length //Infinity

//   while (start < arr.length) {
//     if (sum < num && end < arr.length) {
//       sum += arr[end]
//       end++
//     } else if (sum >= num) {
//       minLen = Math.min(minLen, end - start)
//       sum -= arr[start]
//       start++
//     } else {
//       break
//     }
//   }
//   return minLen
// }

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))

// solution from Udemy
// function minSubArrayLen(nums, sum) {
//   let total = 0
//   let start = 0
//   let end = 0
//   let minLen = Infinity

//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then
//     // move the window to right
//     if (total < sum && end < nums.length) {
//       total += nums[end]
//       end++
//     }
//     // if current window adds up to at least the sum given then
//     // we can shrink the window
//     else if (total >= sum) {
//       minLen = Math.min(minLen, end - start)
//       total -= nums[start]
//       start++
//     }
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//     else {
//       break
//     }
//   }

//   return minLen === Infinity ? 0 : minLen
// }

//===========================
// function capitalizeFirst(arr) {
//   if (arr.length === 1) {
//     return [arr[0][0].toUpperCase() + arr[0].substr(1)]
//   }

//   let newArr = capitalizeFirst(arr.slice(0, -1))

//   newArr.push(arr.slice(-1)[0][0].toUpperCase() + arr.slice(-1)[0].substr(1))

//   return newArr
// }

// console.log(capitalizeFirst(['car', 'taco', 'banana', 'home']))


// ====================
// ====================
// var maxSubArray = function (nums) {
//   let sum = -Infinity;
//   let curSum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     curSum = Math.max(curSum + nums[i], nums[i]);
//     sum = Math.max(sum, curSum);
//   }
//   return sum;
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// ====================
// ====================
// function subStrOccurence(s, str) {
//   let occ = 0;

//   let j = 0;

//   for(let i = 0; i<str.length; i++ ) {
    
//     if(s[j] !== str[i]) {
//       j = 0;
//     } 

//     if(j === s.length - 1) {
//       occ++
//       j = 0;
//     }

//     j++;
//   }
// return occ;
// }

// console.log(subStrOccurence('str', 'weststrtststrraastrh'));
// ====================
// ====================

z// =================
// function translit(num) {
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

// console.log(translit(11258));

// =================