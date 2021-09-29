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

// **************

// ===============================
// ===============================
