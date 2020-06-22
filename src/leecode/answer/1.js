// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
var findNumberIn2DArray = function(matrix, target) {
  let i = matrix.length - 1; // y坐标
  let j = 0; // x 坐标
  return compare(target, matrix, i, j);
};
// 从左下开始找
// 目标值大  就往右找
// 目标值小 往上找

var compare = function(target, array, i, j) {
  if (array[i] === undefined || array[i][j] === undefined) {
    return false;
  }
  const temp = array[i][j];
  if (temp === target) {
    return true;
  } else if (target > temp) {
    // 大于目标值  向右找
    return compare(target, array, i, j + 1);
  } else if (target < temp) {
    // 小于  向上找
    return compare(target, array, i - 1, j);
  }
};
// 二分查找
function binarySearch(data, arr, start, end) {
  if (start > end) {
    return -1;
  }
  var mid = Math.floor((end + start) / 2);
  if (data == arr[mid]) {
    return mid;
  } else if (data < arr[mid]) {
    return binarySearch(data, arr, start, mid - 1);
  } else {
    return binarySearch(data, arr, mid + 1, end);
  }
}
