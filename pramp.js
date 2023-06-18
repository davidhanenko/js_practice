function absSort(arr) {
  /**
	@param arr: integer[]
	@return: integer[]
	*/

  const swap = (a, b, arr) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] + arr[min] === 0) {
        min = arr[j] < arr[min] ? j : min;
      }
      if (Math.abs(arr[j]) < Math.abs(arr[min])) {
        min = j;
      }
    }

    swap(i, min, arr);
  }
  return arr;
}

// console.log(absSort([2, -7, -2, -2, 0]));

const iSort = arr => {
  for(let i = 1; i < arr.length; i++) {

    let temp = arr[i];
    let j = i-1;

    while(j>=0 && temp < arr[j]) {
      arr[j+1] = arr[j];
      j--;
     }
     arr[j+1] = temp;
  }
  return arr;
};

console.log(iSort([8, 10, 7, 3, 9, 34, 1, 6]));
