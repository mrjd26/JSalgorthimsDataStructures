// bubble sort
let array = [11, 65, 6, 78, 2, 67, 4, 23, 32, 12, 10, 4, 78, 100, 1];

const bubbleSort = arr => {

  hasSwapRun = false;

  for (j=0; j<arr.length; j++) {
    if (arr[j] > arr[j+1]) {
      swap(arr, j , j+1);
      hasSwapRun = true;
    }
  }

  if (!hasSwapRun) {
    return hasSwapRun;
  } else {
    bubbleSort(arr);
  }
}

function swap(arr, ndx1, ndx2) {
  let temp = arr[ndx1];
  arr[ndx1] = arr[ndx2];
  arr[ndx2] = temp;
}

bubbleSort(array);

console.log(array);
