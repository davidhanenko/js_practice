// =====================================================
// Merge Sort

// array merge function

function merge(arr1, arr2) {
  let resultArr = [];
  let i1 = 0;
  let i2 = 0;

  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] < arr2[i2]) {
      resultArr.push(arr1[i1]);
      i1++;
    } else {
      resultArr.push(arr2[i2]);
      i2++;
    }
  }

  while (i1 < arr1.length) {
    resultArr.push(arr1[i1]);
    i1++;
  }

  while (i2 < arr2.length) {
    resultArr.push(arr2[i2]);
    i2++;
  }

  return resultArr;
}

// // merge sort function
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([2, 7, 3, 9, -3, -1, 10, 34, 1, 6, 87]));

// =====================================================